import { Switch } from '@chakra-ui/react';
import React from 'react';

function OnOff(props) {
  return (
    <Switch
      id="onOff"
      size="lg"
      onChange={props.onToogle}
      onClick={document.getElementById('onOff').blur()}
    />
  );
}

export default OnOff;
