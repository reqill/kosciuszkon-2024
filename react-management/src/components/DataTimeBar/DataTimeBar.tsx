import React, { useState, useEffect } from "react";

// First widget printing out date and time
export const DateTimeBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getCurrentDate = () => {
    const currentTime = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const dateStr = currentTime.toLocaleDateString("pl-PL", options);

    return dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
  };

  return (
    <div className="flex gap-1 pl-2.5 text-black bg-blue-400 rounded-xl shadow-md">
      <div className="grow my-auto text-sm">{getCurrentDate()}</div>
      <div className="justify-center px-2.5 py-3 text-lg whitespace-nowrap bg-amber-100 rounded-xl">
        {currentTime.toLocaleTimeString("pl-PL")}
      </div>
    </div>
  );
};
