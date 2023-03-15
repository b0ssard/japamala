import { useState } from 'react';
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import useManual from './ManualFunctions';
import BuddhaCard from './Card';
import CountBeadButton from './Button';
import IconBox from './IconBox';
import ToggleCounterSwitch from './OnOff';
import beadsImage from './images/beads.png';
import bowlImage from './images/bowl.png';
import buddhalImage from './images/buddha.png';

function ManualUI(props) {
  const [showCounter, setShowCounter] = useState(true);
  const { mantra, countBead, resetMantra } = useManual(props);

  return (
    <Stack spacing={5} align="center">
      <BuddhaCard
        content={
          showCounter ? (
            <Text fontSize="105px">{mantra}</Text>
          ) : (
            <Image src={buddhalImage} alt="Buddha" sizes="100px" />
          )
        }
      />
      <Flex>
        <CountBeadButton
          onClick={countBead}
          icon={<IconBox src={beadsImage} alt="Beads" />}
          text="Contar"
        />
        <CountBeadButton
          onClick={resetMantra}
          icon={<IconBox src={bowlImage} alt="Tibetan Bowl" />}
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
