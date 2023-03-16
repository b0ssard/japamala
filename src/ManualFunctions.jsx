import { useEffect, useCallback } from 'react';

export default function useManual({ mantra, setMantra, playBowlStruck }) {
  const countBead = useCallback(() => {
    if (mantra === 0 || mantra === 107) {
      playBowlStruck();
    }
    if (mantra < 108) {
      setMantra(mantra + 1);
    }
  }, [mantra, setMantra, playBowlStruck]);

  function resetMantra() {
    setMantra(0);
    playBowlStruck();
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Enter' || event.code === 'Space') {
        countBead();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [countBead]);

  return { mantra, countBead, resetMantra };
}
