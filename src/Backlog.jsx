import { useState } from 'react';
import {
  Box,
  Flex,
  Stack,
  Text,
  Icon,
  Image,
  Button,
  Switch,
} from '@chakra-ui/react';
import { MdCheck, MdRestore } from 'react-icons/md';
import useManual from './ManualFunctions';

function ManualUI2(props) {
  const [showCounter, setShowCounter] = useState(true);
  const { mantra, countBead, resetMantra } = useManual(props);

  return (
    <Stack spacing={4} align="center">
      {showCounter && <Text fontSize="xl">{mantra}</Text>}

      <Flex>
        <Button
          onClick={countBead}
          leftIcon={<Icon as={MdCheck} />}
          size="sm"
          variant="solid"
        >
          Contar
        </Button>

        <Button
          onClick={resetMantra}
          leftIcon={<Icon as={MdRestore} />}
          size="sm"
          variant="solid"
          ml={2}
        >
          Resetar
        </Button>
      </Flex>

      <Box>
        <Switch
          size="lg"
          isChecked={showCounter}
          onChange={() => setShowCounter(!showCounter)}
        >
          Mostrar contador
        </Switch>
      </Box>

      <Stack spacing={2}>
        <Image src="/images/beads.png" alt="Beads" w="20px" h="20px" />
        <Image src="/images/bowl.png" alt="Tibetan Bowl" w="20px" h="20px" />
      </Stack>
    </Stack>
  );
}

export default ManualUI2;
