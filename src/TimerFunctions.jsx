import { useRef, useEffect, useState } from 'react';

function useTimer(props) {
  const intervalRef = useRef(null);
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [timerDelay, setTimerDelay] = useState(4);

    useEffect(() => {
    if (count === 108) {
      clearInterval(intervalRef.current);
      props.playBowlStruck();
    }
  });

  const handleStart = () => {
    if (!intervalRef.current) {
      if (count === 0) {
        props.playBowlStruck();
      }
      intervalRef.current = setInterval(() => {
        setCount(count => count + 1);
      }, timerDelay * 1000);
    }
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    setCount(0);
    handlePause();
    props.playBowlStruck();
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

  return {
    count,
    speed,
    handleStart,
    handlePause,
    handleReset,
    handleSpeedChange,
  };
}

export default useTimer;