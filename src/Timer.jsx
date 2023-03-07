import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [speed, setSpeed] = useState(1);
  const [timerDelay, setTimerDelay] = useState(4000);

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
      const id = setInterval(() => {
        setCount(count => count + 1);
      }, timerDelay);
      setIntervalId(id);
    }
  }, [timerDelay]);

  useEffect(() => {
    if (count >= 108) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [count]);

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCount(count => count + 1);
      }, timerDelay);
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

   const regularSpeed = () => {
     setSpeed(1);
     setTimerDelay(4000);
   };

  const doubleSpeed = () => {
    setSpeed(2);
    setTimerDelay(4000 / 2 / speed);
  };

  const tripleSpeed = () => {
    setSpeed(3);
    setTimerDelay(4000 / 3 / speed);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Speed: {speed} </p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={regularSpeed}>Regular Speed</button>
      <button onClick={doubleSpeed}>2x Speed</button>
      <button onClick={tripleSpeed}>3x Speed</button>
    </div>
  );
}

export default Timer;