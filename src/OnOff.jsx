import { Switch } from '@chakra-ui/react';
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
    <Switch
      ref={switchRef}
      size="lg"
      isChecked={isChecked}
      onChange={handleToggle}
    />
  );
}

export default OnOff;