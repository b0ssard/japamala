import React, { useState } from 'react';
import OnOff from './OnOff';
import Timer from './Timer';
import Manual from './Manual';
import { ChakraProvider, theme } from '@chakra-ui/react';

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <ChakraProvider theme={theme}>
      <OnOff onToggle={() => setShowTimer(!showTimer)} />
      {showTimer && <Timer />}
      {!showTimer && <Manual /> }
    </ChakraProvider>
  );
}

export default App;
