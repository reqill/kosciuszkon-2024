import { useEffect, useState, useRef } from 'react';
import IFrame from './IFrame';

export type Content = {
  url: string;
  time: number;
};

const App = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [currId, setCurrId] = useState(0);

  const timeoutRefs = useRef<Record<number, NodeJS.Timeout>>({});

  useEffect(() => {
    console.log(contents);
    // Clear existing timeouts
    Object.values(timeoutRefs.current).forEach(clearTimeout);
    timeoutRefs.current = {};

    // Start new loop with updated data
    const loop = (index = 0) => {
      const currentItem = contents[index];
      timeoutRefs.current[index] = setTimeout(() => {
        // Process or display currentItem.content
        setCurrId(index);
        loop((index + 1) % contents.length);
      }, currentItem.time * 1000);
    };

    if (contents.length > 0) loop(); // Start if data is available
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

  return (
    <div className="h-screen w-screen relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <IFrame url={contents[currId]?.url} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default App;
