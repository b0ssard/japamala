import React, { useState, useRef } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import ManualUI from './ManualUI';
import TimerUI from './TimerUI';
import Footer from './Footer';
import Navbar from './Navbar';
import OnOff from './OnOff';
import bowlStruck from './sounds/bowl.mp3';

export default function App() {
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
      <Navbar />
      <OnOff onToggle={() => setPlaySound(!playSound)} text="Não tocar sinos" />
      <OnOff onToggle={() => setMode(!mode)} text="Modo manual" />
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
      <Footer />
    </ChakraProvider>
  );
}
