import React, { useState }  from 'react';
import Bead from './Button';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';


function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    if (count < 108) {
      setCount(count + 1);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        Hi! How are you?
      </Box>
      <p>Count: {count}</p>
      <Box textAlign="center" fontSize="xl">
        <Bead onClick={handleClick} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
