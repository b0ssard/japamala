import React, { useState } from 'react';
import Bead from './Button';
import OnOff from './OnOff';
import Timer from './Timer';
import { Center, ChakraProvider, Box, theme } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(true);

  function countBead() {
    if (count < 108) {
      setCount(count + 1);
    }
  }

  return (
    <ChakraProvider theme={theme}>
      {showCounter && (
        <Box textAlign="center" fontSize="xl">
          {count}
        </Box>
      )}
      <Center>
        <Bead onClick={countBead} />
      </Center>
      <Center>
        <OnOff onToggle={() => setShowCounter(!showCounter)} />
      </Center>
    <Timer />
    </ChakraProvider>
  );
}

export default App;