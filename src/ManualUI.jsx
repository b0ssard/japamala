import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Bead from './Button';
import OnOff from './OnOff';
import beads from './images/beads.png';
import bowl from './images/bowl.png';
import useManual from './ManualFunctions';

function ManualUI(props) {
  const [showCounter, setShowCounter] = useState(true);
  const { mantra, countBead, resetMantra } = useManual(props);

  return (
    <div>
      {showCounter && (
        <Box textAlign="center" fontSize="xl">
          {mantra}
        </Box>
      )}
      <Box textAlign="center">
        <Bead
          onClick={countBead}
          icon={<Box as="img" src={beads} alt="Beads" w="20px" h="20px" />}
          text="Contar."
        />
        <Bead
          onClick={resetMantra}
          icon={
            <Box as="img" src={bowl} alt="Tibetan Bowl" w="20px" h="20px" />
          }
          text="Resetar."
        />
      </Box>
      <Box textAlign="center" my={4}>
        <OnOff onToggle={() => setShowCounter(!showCounter)} />
      </Box>
    </div>
  );
}

export default ManualUI;
