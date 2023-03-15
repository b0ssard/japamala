import { Flex, Stack } from '@chakra-ui/react';
import useTimer from './TimerFunctions';
import BuddhaCard from './Card';
import CountBeadButton from './Button';
import IconBox from './IconBox';
import beadsImage from './images/beads.png';
import bowlImage from './images/bowl.png';

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
    <Stack spacing={5} align="center">
      <BuddhaCard content={mantra} />
      <p>Speed: {speed}</p>
      <Flex>
        <CountBeadButton
          onClick={handleStart}
          icon={<IconBox src={bowlImage} alt="Tibetan Bowl" />}
          text="Começar"
        />
        <CountBeadButton
          onClick={handlePause}
          icon={<IconBox src={bowlImage} alt="Tibetan Bowl" />}
          text="Pausar"
        />
        <CountBeadButton
          onClick={handleReset}
          icon={<IconBox src={bowlImage} alt="Tibetan Bowl" />}
          text="Resetar"
        />
      </Flex>
      <Flex justifyContent="space-between">
        {[0.5, 0.33, 1, 2, 3].map(newSpeed => (
          <CountBeadButton
            key={newSpeed}
            onClick={() => handleSpeedChange(newSpeed, 4 / newSpeed)}
            icon={<IconBox src={beadsImage} alt="Beads" />}
            text={'Ritmo: ' + newSpeed}
          />
        ))}
      </Flex>
    </Stack>
  );
}

export default TimerUI;
