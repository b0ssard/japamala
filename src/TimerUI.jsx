import React from 'react';
import { Box } from '@chakra-ui/react';
import Bead from './Button';
import useTimer from './TimerFunctions';
import bowl from './images/bowl.png';
import beads from './images/beads.png';

function TimerUI(props) {
  const {
    mantra,
    speed,
    handleStart,
    handlePause,
    handleReset,
    handleSpeedChange,
  } = useTimer(props);

  return (
    <div>
      <p>Count: {mantra}</p>
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
    </div>
  );
}

export default TimerUI;
