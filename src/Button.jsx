import React, { useRef } from 'react';
import { Button, Flex } from '@chakra-ui/react';

export default function Bead(props) {
  const buttonRef = useRef(null);

  const handleClick = () => {
    props.onClick();
    buttonRef.current.blur();
  };

  return (
    <Flex direction="column" alignItems="center">
      <Button
        leftIcon={props.icon}
        ref={buttonRef}
        backgroundColor="#990000"
        color="#FC8621"
        _hover={{ bg: '#AC0D0D' }}
        size="sm"
        textAlign="center"
        variant="solid"
        onClick={handleClick}
        ml={5}
      >
        {props.text}
      </Button>
    </Flex>
  );
}
