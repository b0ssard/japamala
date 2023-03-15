import { Box } from '@chakra-ui/react';
import useTimer from './TimerFunctions';
import CountBeadButton from './Button';
import bowlImage from './images/bowl.png';
import beadsImage from './images/beads.png';

function TimerUI(props) {
  const {
    mantra,
    speed,
    handleStart,
    handlePause,
    handleReset,
    handleSpeedChange,
  } = useTimer(props);

  return (
    <div>
      <p>Count: {mantra}</p>
      <p>Speed: {speed}</p>
      <CountBeadButton
        onClick={handleStart}
        icon={<Box as="img" src={bowlImage} alt="Tibetan Bowl" w="20px" h="20px" />}
        text="Começar"
      />
      <CountBeadButton
        onClick={handlePause}
        icon={<Box as="img" src={bowlImage} alt="Tibetan Bowl" w="20px" h="20px" />}
        text="Pausar"
      />
      <CountBeadButton
        onClick={handleReset}
        icon={<Box as="img" src={bowlImage} alt="Tibetan Bowl" w="20px" h="20px" />}
        text="Resetar"
      />
      {[0.5, 0.33, 1, 2, 3].map(newSpeed => (
        <CountBeadButton
          key={newSpeed}
          onClick={() => handleSpeedChange(newSpeed, 4 / newSpeed)}
          icon={<Box as="img" src={beadsImage} alt="Beads" w="20px" h="20px" />}
          text={'Ritmo: ' + newSpeed}
        />
      ))}
    </div>
  );
}

export default TimerUI;
