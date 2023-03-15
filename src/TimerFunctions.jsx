import { useRef, useEffect, useState } from 'react';

function useTimer(props) {
  const intervalRef = useRef(null);
  const [speed, setSpeed] = useState(1);
  const [timerDelay, setTimerDelay] = useState(4);

    useEffect(() => {
    if (props.mantra === 108) {
      clearInterval(intervalRef.current);
      props.playBowlStruck();
    }
  });

  const handleStart = () => {
    if (!intervalRef.current) {
      if (props.mantra === 0) {
        props.playBowlStruck();
      }
      intervalRef.current = setInterval(() => {
        props.setMantra(props.mantra + 1);
      }, timerDelay * 1000);
    }
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    props.setMantra(0);
    handlePause();
    props.playBowlStruck();
  };

const handleSpeedChange = (newSpeed, newDelay) => {
  setSpeed(newSpeed);
  setTimerDelay(newDelay);
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      props.setMantra(prevMantra => prevMantra + 1);
    }, newDelay * 1000);
  }
};


  return {
    mantra: props.mantra,
    speed,
    handleStart,
    handlePause,
    handleReset,
    handleSpeedChange,
  };
}

export default useTimer;