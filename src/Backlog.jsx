import { Box, Flex, Text } from '@chakra-ui/react';
import useTimer from './TimerFunctions';
import CountBeadButton from './Button';
import beadsImage from './images/beads.png';
import bowlImage from './images/bowl.png';

function TimerUI2(props) {
  const {
    mantra,
    speed,
    handleStart,
    handlePause,
    handleReset,
    handleSpeedChange,
  } = useTimer(props);

  return (
    <Flex direction="column" align="center" justify="center">
      <Text fontSize="xl" mb={2}>
        Count: {mantra}
      </Text>
      <Text fontSize="xl" mb={4}>
        Speed: {speed}
      </Text>
      <CountBeadButton
        onClick={handleStart}
        icon={
          <Box as="img" src={bowlImage} alt="Tibetan Bowl" w="20px" h="20px" />
        }
        text="Começar"
        colorScheme="teal"
        mb={2}
      />
      <CountBeadButton
        onClick={handlePause}
        icon={
          <Box as="img" src={bowlImage} alt="Tibetan Bowl" w="20px" h="20px" />
        }
        text="Pausar"
        colorScheme="teal"
        mb={2}
      />
      <CountBeadButton
        onClick={handleReset}
        icon={
          <Box as="img" src={bowlImage} alt="Tibetan Bowl" w="20px" h="20px" />
        }
        text="Resetar"
        colorScheme="teal"
        mb={4}
      />
      <Flex wrap="wrap" justify="center">
        {[0.5, 0.33, 1, 2, 3].map(newSpeed => (
          <CountBeadButton
            key={newSpeed}
            onClick={() => handleSpeedChange(newSpeed, 4 / newSpeed)}
            icon={
              <Box as="img" src={beadsImage} alt="Beads" w="20px" h="20px" />
            }
            text={'Ritmo: ' + newSpeed}
            colorScheme="teal"
            mr={2}
            mb={2}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default TimerUI2;
