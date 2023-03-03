import React, { useState}  from 'react';
import Bead from './Button';
import {
  Center,
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';


function App() {
  const [count, setCount] = useState(0);

  function countBead() {
    if (count < 108) {
      setCount(count + 1);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        Count: {count}
      </Box>
      <Center>
        <Bead onClick={countBead} />
      </Center>
    </ChakraProvider>
  );
}

export default App;
