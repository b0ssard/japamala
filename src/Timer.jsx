import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCount(count => count + 1);
      }, 4000);
      setIntervalId(id);
    }
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    setCount(0);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
