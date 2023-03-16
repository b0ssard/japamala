import React, { useState, useRef } from 'react';
import BeadButton from './Button';
import OnOff from './OnOff';
import TimerUI from './TimerUI';
import ManualUI from './ManualUI';
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
    <OnOff onToggle={() => setPlaySound(!playSound)} text="Não tocar sinos" />
    <BeadButton
      onClick={() => setMode(!mode)}
      text={mode ? 'Ir para modo manual ➜' : 'Ir para modo automático ➜'}
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
  </ChakraProvider>
);
}

export default App;
