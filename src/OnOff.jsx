import { Flex, Stack, Switch, Text } from '@chakra-ui/react';
import { useState, useRef } from 'react';

export default function OnOff(props) {
  const [isChecked, setIsChecked] = useState(false);
  const switchRef = useRef(null);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    props.onToggle();
    switchRef.current.blur();
  };

  return (
    <Stack
      alignItems="center"
      textAlign="center"
      my={4}
      justifyContent="space-between"
    >
      <Flex my={4} justifyContent="space-between">
        <Switch
          ref={switchRef}
          size="lg"
          isChecked={isChecked}
          onChange={handleToggle}
        />
        <Text ml={2}>{props.text}</Text>
      </Flex>
    </Stack>
  );
}