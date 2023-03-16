import React, { useRef } from 'react';
import { Button } from '@chakra-ui/react';

export default function Bead(props) {
  const buttonRef = useRef(null);

  const handleClick = () => {
    props.onClick();
    buttonRef.current.blur();
  };

  return (
    <Button
      leftIcon={props.icon}
      ref={buttonRef}
      colorScheme="orange"
      size="sm"
      textAlign="center"
      variant="solid"
      onClick={handleClick}
      ml={5}
    >
      {props.text}
    </Button>
  );
}
