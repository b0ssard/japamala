// This code is not being used anymore, split into function and UI.

import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Bead from './Button';
import OnOff from './OnOff';
import bowl from './images/bowl.png';
import beads from './images/beads.png';
import bowlStruck from './sounds/bowl.mp3';

function Timer() {
  const intervalRef = useRef(null);
  const audioRef = useRef(new Audio(bowlStruck));
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [timerDelay, setTimerDelay] = useState(4);
  const [playSound, setPlaySound] = useState(true);

  function playBowlStruck() {
    if (playSound) {
      audioRef.current.play();
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
      <Bead
        onClick={handleStart}
        icon={<Box as="img" src={bowl} alt="Tibetan Bowl" w="20px" h="20px" />}
        text="Começar"
      />
      <Bead
        onClick={handlePause}
        icon={<Box as="img" src={bowl} alt="Tibetan Bowl" w="20px" h="20px" />}
        text="Pausar"
      />
      <Bead
        onClick={handleReset}
        icon={<Box as="img" src={bowl} alt="Tibetan Bowl" w="20px" h="20px" />}
        text="Resetar"
      />
      {[0.5, 0.33, 1, 2, 3].map(newSpeed => (
        <Bead
          key={newSpeed}
          onClick={() => handleSpeedChange(newSpeed, 4 / newSpeed)}
          icon={<Box as="img" src={beads} alt="Beads" w="20px" h="20px" />}
          text={'Ritmo: ' + newSpeed}
        />
      ))}
      <OnOff
        onToggle={() => setPlaySound(!playSound)}
        defaultChecked={playSound}
      />
    </div>
  );
}

export default Timer;
