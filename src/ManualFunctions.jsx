function useManual(props) {
  function countBead() {
    if (props.mantra === 0 || props.mantra === 107) {
      props.playBowlStruck();
    }
    if (props.mantra < 108) {
      props.setMantra(props.mantra + 1);
    }
  }

  function resetMantra() {
    props.setMantra(0);
    props.playBowlStruck();
  }

  return {
    mantra: props.mantra,
    countBead,
    resetMantra,
  };
}

export default useManual;