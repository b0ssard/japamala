import React, { useState, useRef } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import ManualUI from './ManualUI';
import TimerUI from './TimerUI';
import Footer from './Footer';
import Bead from './Button';
import Navbar from './Navbar';
import OnOff from './OnOff';
import TextBox from './Box';
import bowlStruck from './sounds/bowl.mp3';

export default function App() {
  const [mode, setMode] = useState(true);
  const [playSound, setPlaySound] = useState(true);
  const [mantra, setMantra] = useState(0);
  const bowlStruckRef = useRef(new Audio(bowlStruck));

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
      <TextBox
        text={
          <OnOff
            onToggle={() => setPlaySound(!playSound)}
            text="Não tocar sinos"
          />
        }
      />
      <Bead
        fontSize="15px"
        onClick={() => setMode(!mode)}
        text={mode ? 'Ir para modo manual' : 'Ir para modo automático'}
      />
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
