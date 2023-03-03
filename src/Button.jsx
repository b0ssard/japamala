import React, { useEffect } from 'react';
import { Button, Box } from '@chakra-ui/react';
import beads from './images/beads.png';

function Bead(props) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Space' || event.code === 'Enter') {
        document.getElementById('beadButton').blur();
        props.onClick();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.getElementById('beadButton').blur();
    };
  });

  return (
    <Button
      leftIcon={<Box as="img" src={beads} alt="Beads" w="20px" h="20px" />}
      id="beadButton"
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
