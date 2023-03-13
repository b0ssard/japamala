import React, { useEffect, useRef } from 'react';
import { Button } from '@chakra-ui/react';

function Bead(props) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Enter' || event.code === 'Space') {
        props.onClick();
        buttonRef.current.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleClick = () => {
    props.onClick();
    buttonRef.current.blur();
  };

  return (
    <Button
      leftIcon={props.icon}
      ref={buttonRef}
      colorScheme="orange"
      size="xs"
      textAlign="center"
      onClick={handleClick}
    >
      {props.text}
    </Button>
  );
}

export default Bead;
