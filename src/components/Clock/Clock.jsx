import React, { useState, useEffect } from 'react';

export const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Digital Clock</h1>
      <p>Current Time: {time}</p>
    </div>
  );
};
