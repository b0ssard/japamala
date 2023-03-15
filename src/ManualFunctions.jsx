import { useState } from 'react';

function useManual(props) {
  const [mantra, setMantra] = useState(0);

  function countBead() {
    if (mantra === 0 || mantra === 107) {
      props.playBowlStruck();
    }
    if (mantra < 108) {
      setMantra(mantra => mantra + 1);
    }
  }

  function resetMantra() {
    setMantra(0);
    props.playBowlStruck();
  }

  return {
    mantra,
    countBead,
    resetMantra,
  };
}

export default useManual;
