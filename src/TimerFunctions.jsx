import { useRef, useEffect, useState } from 'react';

function useTimer(props) {
  const intervalRef = useRef(null);
  const [mantra, setMantra] = useState(0);
  const [timerDelay, setTimerDelay] = useState(4);

  useEffect(() => {
    if (mantra === 108) {
      clearInterval(intervalRef.current);
      props.playBowlStruck();
    }
  });

  const handleStart = () => {
    if (!intervalRef.current) {
      if (mantra === 0) {
        props.playBowlStruck();
      }
      intervalRef.current = setInterval(() => {
        setMantra(mantra => mantra + 1);
      }, timerDelay * 1000);
    }
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    setMantra(0);
    handlePause();
    props.playBowlStruck();
  };

  const handleSpeedChange = (newSpeed, newDelay) => {
    setTimerDelay(newDelay);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setMantra(mantra => mantra + 1);
      }, newDelay * 1000);
    }
  };

  return {
    mantra,
    timerDelay,
    handleStart,
    handlePause,
    handleReset,
    handleSpeedChange,
  };
}

export default useTimer;