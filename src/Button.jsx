import React from 'react';
import { Button, Box } from '@chakra-ui/react';
import beads from './images/beads.png';

function Bead(props) {
  return (
    <Button
      leftIcon={<Box as="img" src={beads} alt="Beads" w="20px" h="20px" />}
      colorScheme="orange"
      size="xs"
      textAlign="center"
      onClick={props.onClick}
    >
      Contar.
    </Button>
  );
}

export default Bead;
