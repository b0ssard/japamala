import { useState, useRef } from 'react';
import bowlStruck from './sounds/bowl.mp3';

function useManual(props) {
  const [mantra, setMantra] = useState(0);
  const bowlStruckRef = useRef(new Audio(bowlStruck));

  function playBowlStruck() {
    if (props.playSound) {
      bowlStruckRef.current.play();
    }
  }

  function countBead() {
    if (mantra === 0 || mantra === 107) {
      playBowlStruck();
    }
    if (mantra < 108) {
      setMantra(mantra + 1);
    }
  }

  function resetMantra() {
    setMantra(0);
    playBowlStruck();
  }

  return {
    mantra,
    countBead,
    resetMantra,
  };
}

export default useManual;
