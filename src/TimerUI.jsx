import {
  Box,
  Flex,
  Grid,
  GridItem,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
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

  const buttonSize = useBreakpointValue({ base: '16px', md: '20px' });
  const textFontSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <Stack spacing={5} align="center">
      <BuddhaCard content={mantra} />
      <Flex flexWrap="wrap" justifyContent="center">
        <CountBeadButton
          onClick={handleStart}
          icon={
            <Box
              as="img"
              src={bowlImage}
              alt="Tibetan Bowl"
              w={buttonSize}
              h={buttonSize}
            />
          }
          text="Começar"
        />
        <CountBeadButton
          onClick={handlePause}
          icon={
            <Box
              as="img"
              src={lotusImage}
              alt="Lotus"
              w={buttonSize}
              h={buttonSize}
            />
          }
          text="Pausar"
        />
        <CountBeadButton
          onClick={handleReset}
          icon={
            <Box
              as="img"
              src={bowlImage}
              alt="Tibetan Bowl"
              w={buttonSize}
              h={buttonSize}
            />
          }
          text="Resetar"
        />
      </Flex>
      <Stack alignItems="center">
        <TextBox
          text={`Ritmo: ${timerDelay.toFixed()} segundos`}
          fontSize={textFontSize}
        />
      </Stack>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }}
        gap={4}
      >
        {[0.33, 0.5, 1, 2, 3].map(newSpeed => (
          <GridItem key={newSpeed} colSpan={1}>
            <CountBeadButton
              onClick={() => handleSpeedChange(newSpeed, 4 / newSpeed)}
              icon={
                <Box
                  as="img"
                  src={beadsImage}
                  alt="Beads"
                  w={buttonSize}
                  h={buttonSize}
                />
              }
              text={`Ritmo: ${(4 / newSpeed).toFixed()} ''`}
            />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}

export default TimerUI;
