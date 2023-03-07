import { Switch } from '@chakra-ui/react';
import React, { useState } from 'react';

function OnOff(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    props.onToggle();
    document.getElementById('onOff').blur();
  };

  return (
    <Switch
      id="onOff"
      size="lg"
      isChecked={isChecked}
      onChange={handleToggle}
    />
  );
}

export default OnOff;
