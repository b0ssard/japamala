import { useState } from 'react';
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import useManual from './ManualFunctions';
import CountBeadButton from './Button';
import ToggleCounterSwitch from './OnOff';
import beadsImage from './images/beads.png';
import bowlImage from './images/bowl.png';
import buddhalImage from './images/buddha.png';

function ManualUI(props) {
  const [showCounter, setShowCounter] = useState(true);
  const { mantra, countBead, resetMantra } = useManual(props);

  return (
    <Stack spacing={5} align="center">
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height="200px"
        width="200px"
        alignItems="center"
      >
        <Stack spacing={5} alignItems="center" padding="25px">
          {showCounter ? (
            <Text fontSize="105px">{mantra}</Text>
          ) : (
            <Image src={buddhalImage} alt="Buddha" sizes="100px" />
          )}
        </Stack>
      </Box>

      <Flex>
        <CountBeadButton
          onClick={countBead}
          icon={<Box as="img" src={beadsImage} alt="Beads" w="20px" h="20px" />}
          text="Contar"
        />
        <CountBeadButton
          onClick={resetMantra}
          icon={
            <Box
              as="img"
              src={bowlImage}
              alt="Tibetan Bowl"
              w="20px"
              h="20px"
            />
          }
          text="Resetar"
        />
      </Flex>
      <Box textAlign="center" my={4}>
        <ToggleCounterSwitch
          onToggle={() => setShowCounter(!showCounter)}
          text="Esconder contador"
        />
      </Box>
    </Stack>
  );
}

export default ManualUI;
