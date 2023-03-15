import { Flex, Switch, Text } from '@chakra-ui/react';
import React, { useState, useRef } from 'react';

function OnOff(props) {
  const [isChecked, setIsChecked] = useState(false);
  const switchRef = useRef(null);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    props.onToggle();
    switchRef.current.blur();
  };

  return (
    <Flex direction="column" alignItems="center">
      <Switch
        ref={switchRef}
        size="lg"
        isChecked={isChecked}
        onChange={handleToggle}
      />
      <Text mt={2}>{props.text}</Text>
    </Flex>
  );
}

export default OnOff;