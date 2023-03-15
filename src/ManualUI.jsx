import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import useManual from './ManualFunctions';
import CountBeadButton from './Button';
import ToogleCounterSwitch from './OnOff';
import beadsImage from './images/beads.png';
import bowlImage from './images/bowl.png';


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
        <CountBeadButton
          onClick={countBead}
          icon={<Box as="img" src={beadsImage} alt="Beads" w="20px" h="20px" />}
          text="Contar."
        />
        <CountBeadButton
          onClick={resetMantra}
          icon={
            <Box as="img" src={bowlImage} alt="Tibetan Bowl" w="20px" h="20px" />
          }
          text="Resetar."
        />
      </Box>
      <Box textAlign="center" my={4}>
        <ToogleCounterSwitch onToggle={() => setShowCounter(!showCounter)} />
      </Box>
    </div>
  );
}

export default ManualUI;
