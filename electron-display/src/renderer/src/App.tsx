import { useEffect, useState, useRef } from 'react';
import IFrame from './IFrame';

export type Content = {
  url: string;
  time: number;
};

const App = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [currId, setCurrId] = useState(0);
  const [providedId, setProvidedId] = useState<string | null>(null);
  const [canGoThrough, setCanGoThrough] = useState(false);

  const timeoutRefs = useRef<Record<number, NodeJS.Timeout>>({});

  useEffect(() => {
    Object.values(timeoutRefs.current).forEach(clearTimeout);
    timeoutRefs.current = {};

    const loop = (index = 0) => {
      const currentItem = contents[index];
      timeoutRefs.current[index] = setTimeout(() => {
        setCurrId(index);
        loop((index + 1) % contents.length);
      }, currentItem.time * 1000);
    };

    if (contents.length > 0) loop();
  }, [contents]);

  const handleNewContent = (newContents: Content[]) => {
    setContents(newContents);
    setCurrId(0);
  };

  useEffect(() => {
    window.api.on('get-contents', handleNewContent);
    return () => {
      window.api.removeListener('get-contents', handleNewContent);
    };
  }, []);

  if (!canGoThrough) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <input
          type="text"
          placeholder="Enter your ID"
          className="p-2 rounded border border-gray-300"
          onChange={(e) => setProvidedId(e.target.value)}
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded"
          disabled={!providedId}
          onClick={() => {
            window.api.send('register-id', providedId!);
            setCanGoThrough(true);
          }}
        >
          Submit
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <IFrame url={contents[currId]?.url} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default App;
