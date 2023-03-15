import React, { useState, useRef } from 'react';
import OnOff from './OnOff';
import TimerUI from './TimerUI';
import ManualUI from './ManualUI';
// import Navbar from './Navbar';
import { ChakraProvider, theme } from '@chakra-ui/react';
import bowlStruck from './sounds/bowl.mp3';

function App() {
  const [mode, setMode] = useState(true);
  const [playSound, setPlaySound] = useState(true);
  const bowlStruckRef = useRef(new Audio(bowlStruck));

  function playBowlStruck() {
    if (playSound) {
      bowlStruckRef.current.play();
    }
  }

  return (
    <ChakraProvider theme={theme}>
      {/* <Navbar /> */}
      <OnOff onToggle={() => setPlaySound(!playSound)} />
      <OnOff onToggle={() => setMode(!mode)} />
      {mode && <TimerUI playSound={playSound} playBowlStruck={playBowlStruck} />}
      {!mode && <ManualUI playSound={playSound} playBowlStruck={playBowlStruck} />}
    </ChakraProvider>
  );
}

export default App;
