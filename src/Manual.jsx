import React, { useState } from 'react';
import Bead from './Button';
import OnOff from './OnOff';
import beads from './images/beads.png';
import bowl from './images/bowl.png';
import bowlStruck from './sounds/bowlstruck.mp3';
import { Box } from '@chakra-ui/react';

function Manual() {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(true);
  const [playSound, setPlaySound] = useState(true);

  const audio = new Audio(bowlStruck);
  function playBowlStruck() {
    if (playSound) {
      audio.play();
    }
  }

  function countBead() {
    if (count === 0 || count === 107) {
      playBowlStruck();}
    if (count < 108) {
      setCount(count + 1);
    }
  }

  return (
    <div>
      {showCounter && (
        <Box textAlign="center" fontSize="xl">
          {count}
        </Box>
      )}
      <Box textAlign="center">
        <Bead
          onClick={countBead}
          icon={<Box as="img" src={beads} alt="Beads" w="20px" h="20px" />}
          text="Contar."
        />
        <Bead
          onClick={() => setCount(0)}
          icon={
            <Box as="img" src={bowl} alt="Tibetan Bowl" w="20px" h="20px" />
          }
          text="Resetar."
        />
      </Box>
      <Box textAlign="center" my={4}>
        <OnOff onToggle={() => setShowCounter(!showCounter)} />
      </Box>
      <OnOff
        onToggle={() => setPlaySound(!playSound)}
        defaultChecked={playSound}
      />
    </div>
  );
}

export default Manual;
