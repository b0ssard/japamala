import React, { useState } from 'react';
import Bead from './Button';
import OnOff from './OnOff';
import Timer from './Timer';
import beads from './images/beads.png';
import { Center, ChakraProvider, Box, theme } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(true);
  const [showTimer, setShowTimer] = useState(true);

  function countBead() {
    if (count < 108) {
      setCount(count + 1);
    }
  }

  function countReset() {
    setCount(0);
  }

  return (
    <ChakraProvider theme={theme}>
      <OnOff onToggle={() => setShowTimer(!showTimer)} />
      {showTimer && (
        <Center>
          <Timer />
        </Center>
      )}
      {!showTimer && (
        <>
          {showCounter && (
            <Box textAlign="center" fontSize="xl">
              {count}
            </Box>
          )}
          <Center>
            <Bead
              onClick={countBead}
              icon={<Box as="img" src={beads} alt="Beads" w="20px" h="20px" />}
              text="Contar."
            />
            <Bead onClick={countReset} text="Resetar." />
          </Center>
          <Center>
            <OnOff onToggle={() => setShowCounter(!showCounter)} />
          </Center>
        </>
      )}
    </ChakraProvider>
  );
}

export default App;
