import { Box, Flex, Stack } from '@chakra-ui/react';
import useTimer from './TimerFunctions';
import BuddhaCard from './Card';
import CountBeadButton from './Button';
import TextBox from './Box';
import beadsImage from './images/beads.png';
import bowlImage from './images/bowl.png';
import lotusImage from './images/lotus.png';

function TimerUI(props) {
  const {
    mantra,
    timerDelay,
    handleStart,
    handlePause,
    handleReset,
    handleSpeedChange,
  } = useTimer(props);

  return (
    <Stack spacing={5} align="center">
      <BuddhaCard content={mantra} />
      <Flex>
        <CountBeadButton
          onClick={handleStart}
          icon={
            <Box
              as="img"
              src={bowlImage}
              alt="Tibetan Bowl"
              w="20px"
              h="20px"
            />
          }
          text="Começar"
        />
        <CountBeadButton
          onClick={handlePause}
          icon={<Box as="img" src={lotusImage} alt="Lotus" w="20px" h="20px" />}
          text="Pausar"
        />
        <CountBeadButton
          onClick={handleReset}
          icon={
            <Box
              as="img"
              src={bowlImage}
              alt="Tibetan Bowl"
              w="20px"
              h="20px"
              alignItems="center"
            />
          }
          text="Resetar"
        />
      </Flex>
      <Stack alignItems="center">
        <TextBox text={`Ritmo: ${timerDelay.toFixed()} segundos`} />
      </Stack>
      <Flex justifyContent="space-between">
        {[0.33, 0.5, 1, 2, 3].map(newSpeed => (
          <CountBeadButton
            key={newSpeed}
            onClick={() => handleSpeedChange(newSpeed, 4 / newSpeed)}
            icon={
              <Box as="img" src={beadsImage} alt="Beads" w="20px" h="20px" />
            }
            text={`Ritmo: ${(4 / newSpeed).toFixed()} ''`}
          />
        ))}
      </Flex>
    </Stack>
  );
}

export default TimerUI;
