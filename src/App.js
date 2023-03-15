import React, { useState } from 'react';
import OnOff from './OnOff';
import TimerUI from './TimerUI';
import ManualUI from './ManualUI';
import Navbar from './Navbar';
import { ChakraProvider, theme } from '@chakra-ui/react';

function App() {
  const [mode, setMode] = useState(true);
  const [playSound, setPlaySound] = useState(true);

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <OnOff onToggle={() => setPlaySound(!playSound)} />
      <OnOff onToggle={() => setMode(!mode)} />
      {mode && <TimerUI playSound={playSound} />}
      {!mode && <ManualUI playSound={playSound} />}
    </ChakraProvider>
  );
}

export default App;
