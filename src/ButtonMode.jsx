import React, { useRef } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

export default function ModeButton(props) {
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
        colorScheme="teal"
        size="sm"
        textAlign="center"
        variant="solid"
        onClick={handleClick}
        ml={5}
      >
        <Text>{props.text}</Text>
      </Button>
    </Flex>
  );
}
