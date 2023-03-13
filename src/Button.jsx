import React, { useEffect } from 'react';
import { Button} from '@chakra-ui/react';

function Bead(props) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Enter') {
        props.onClick();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    };
  });

  return (
    <Button
      leftIcon={props.icon}
      id="beadButton"
      colorScheme="orange"
      size="xs"
      textAlign="center"
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}

export default Bead;
