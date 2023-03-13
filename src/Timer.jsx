import React, { useState, useRef, useEffect } from 'react';

function Timer() {
  const intervalRef = useRef();
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [timerDelay, setTimerDelay] = useState(4);

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
    handlePause();
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
      {[0.5, 0.33, 1, 2, 3].map(newSpeed => (
        <button
          key={newSpeed}
          onClick={() => handleSpeedChange(newSpeed, 4 / newSpeed)}
        >
          {newSpeed}x Speed
        </button>
      ))}
    </div>
  );
}

export default Timer;
