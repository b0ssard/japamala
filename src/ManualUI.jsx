import { useState } from 'react';
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import useManual from './ManualFunctions';
import BuddhaCard from './Card';
import CountBeadButton from './Button';
import ToggleCounterSwitch from './OnOff';
import beadsImage from './images/beads.png';
import bowlImage from './images/bowl.png';
import buddhalImage from './images/buddha.png';

function ManualUI(props) {
  const [showCounter, setShowCounter] = useState(true);
  const { mantra, countBead, resetMantra } = useManual(props);

  return (
    <Stack spacing={5} align="center" justify="center" direction="column">
      <BuddhaCard
        content={
          showCounter ? (
            <Text fontSize="105px">{mantra}</Text>
          ) : (
            <Image src={buddhalImage} alt="Buddha" sizes="100px" />
          )
        }
      />

      <Flex >
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

      <Flex align="center">
        <ToggleCounterSwitch
          onToggle={() => setShowCounter(!showCounter)}
          text="Esconder contador"
        />
      </Flex>
    </Stack>
  );
}

export default ManualUI;
