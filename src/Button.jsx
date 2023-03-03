import React from 'react';
import { Button, Box } from '@chakra-ui/react';
import beads from './images/beads.png';

function Bead() {
  return (
    <Button
      leftIcon={<Box as="img" src={beads} alt="Beads" w="20px" h="20px" />}
      colorScheme="orange"
      size="xs"
      textAlign="center"
    >
      Contar.
    </Button>
  );
}

export default Bead;
