import React from 'react';
import Bead from './Button';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        Hi! How are you?
      </Box>
      <Box textAlign="center" fontSize="xl">
        <Bead />
      </Box>
    </ChakraProvider>
  );
}

export default App;
