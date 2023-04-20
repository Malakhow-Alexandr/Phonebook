import React, { useState, useEffect } from 'react';
import { ClockStyled } from './Clock.styled';

export const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [showDots, setShowDots] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const options = {
        hour: 'numeric',
        minute: 'numeric',
      };
      const currentTime = new Date().toLocaleTimeString(undefined, options);
      setTime(currentTime);
      setShowDots(!showDots);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [showDots]);

  return (
    <ClockStyled>
      <span style={{ width: '25px', textAlign: 'right' }}>
        {time.slice(0, 2)}
      </span>
      {showDots && (
        <span style={{ width: '10px', textAlign: 'center' }}>:</span>
      )}
      <span style={{ width: '25px', textAlign: 'left' }}>{time.slice(3)}</span>
    </ClockStyled>
  );
};
