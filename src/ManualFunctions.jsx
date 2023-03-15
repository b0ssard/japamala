import { useState, useRef } from 'react';
import bowlStruck from './sounds/bowl.mp3';

function useManual() {
  const [mantra, setMantra] = useState(0);
  const [playSound, setPlaySound] = useState(true);
  const bowlStruckRef = useRef(new Audio(bowlStruck));

  function playSoundEffect() {
    if (playSound) {
      bowlStruckRef.current.play();
    }
  }

  function countBead() {
    if (mantra === 0 || mantra === 107) {
      playSoundEffect();
    }
    if (mantra < 108) {
      setMantra(mantra => mantra + 1);
    }
  }

  function resetMantra() {
    setMantra(0);
  }

  function toggleSound() {
    setPlaySound(playSound => !playSound);
  }

  return {
    mantra,
    playSound,
    countBead,
    resetMantra,
    toggleSound,
  };
}

export default useManual;
