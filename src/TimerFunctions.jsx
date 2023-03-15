import { useRef, useEffect, useState } from 'react';
import bowlStruck from './sounds/bowl.mp3';

function useTimer(props) {
  const intervalRef = useRef(null);
  const bowlStruckRef = useRef(new Audio(bowlStruck));
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [timerDelay, setTimerDelay] = useState(4);

  function playBowlStruck() {
    if (props.playSound) {
      bowlStruckRef.current.play();
    }
  }

  useEffect(() => {
    if (count === 108) {
      clearInterval(intervalRef.current);
      playBowlStruck();
    }
  });

  const handleStart = () => {
    if (!intervalRef.current) {
      if (count === 0) {
        playBowlStruck();
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
    playBowlStruck();
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