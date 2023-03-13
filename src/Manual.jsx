import React, { useState } from 'react';
import Bead from './Button';
import OnOff from './OnOff';
import beads from './images/beads.png';
import { Box } from '@chakra-ui/react';

function Manual() {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(true);
  
  function countBead() {
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
        <Bead onClick={() => setCount(0)} text="Resetar." />
      </Box>
      <Box textAlign="center" my={4}>
        <OnOff onToggle={() => setShowCounter(!showCounter)} />
      </Box>
    </div>
  );
}

export default Manual;
