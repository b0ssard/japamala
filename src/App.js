import React, { useState } from 'react';
import OnOff from './OnOff';
import TimerUI from './TimerUI';
import ManualUI from './ManualUI';
import Navbar from './Navbar';
import { ChakraProvider, theme } from '@chakra-ui/react';

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <OnOff onToggle={() => setShowTimer(!showTimer)} />
      {showTimer && <TimerUI />}
      {!showTimer && <ManualUI />}
    </ChakraProvider>
  );
}

export default App;
