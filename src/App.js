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
  const [mantra, setMantra] = useState(0);

  function playBowlStruck() {
    if (playSound) {
      const audio = bowlStruckRef.current;
      audio.currentTime = 0; 
      audio.play();
    }
  }

  return (
    <ChakraProvider theme={theme}>
      {/* <Navbar /> */}
      <OnOff onToggle={() => setPlaySound(!playSound)} />
      <OnOff onToggle={() => setMode(!mode)} />
      {mode ? (
        <TimerUI
          playSound={playSound}
          playBowlStruck={playBowlStruck}
          mantra={mantra}
          setMantra={setMantra}
        />
      ) : (
        <ManualUI
          playSound={playSound}
          playBowlStruck={playBowlStruck}
          mantra={mantra}
          setMantra={setMantra}
        />
      )}
    </ChakraProvider>
  );
}

export default App;
