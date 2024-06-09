import { useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-semibold">Home page</h1>
      <p className="text-lg">{count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <Link to="/dashboard/devices" className="text-blue-500 hover:underline">
        Go to dashboard
      </Link>
    </div>
  );
};
