import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [timerDelay, setTimerDelay] = useState(4);

  const intervalRef = useRef();

  useEffect(() => {
    if (count >= 108) {
      clearInterval(intervalRef.current);
    }
  }, [count]);

  const handleStart = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount(count => count + 1);
      }, timerDelay * 1000);
    }
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = undefined;
  };

  const handleReset = () => {
    setCount(0);
    clearInterval(intervalRef.current);
    intervalRef.current = undefined;
  };

  const handleSpeedChange = (newSpeed, newDelay) => {
    setSpeed(newSpeed);
    setTimerDelay(newDelay);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCount(count => count + 1);
      }, newDelay * 1000);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Speed: {speed}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => handleSpeedChange(0.5, 4 * 2)}>0.5x Speed</button>
      <button onClick={() => handleSpeedChange(0.33, 4 * 3)}>
        0.33x Speed
      </button>
      <button onClick={() => handleSpeedChange(1, 4)}>Regular Speed</button>
      <button onClick={() => handleSpeedChange(2, 4 / 2)}>2x Speed</button>
      <button onClick={() => handleSpeedChange(3, 4 / 3)}>3x Speed</button>
    </div>
  );
}

export default Timer;