import * as React from 'react';
import {Switch} from 'react-native-gesture-handler';

interface MySwitchProps {
  /**
   * Si el switch se encuenta ON u OFF
   */
  value: boolean;
  /**
   * Evento cuando cambia el switch
   */
  onChange: (state: boolean) => void;
}

/**
 * Componente básico de Switch
 */
const MySwitch: React.FC<MySwitchProps> = ({value, onChange}) => {
  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
      onValueChange={onChange}
      value={value}
    />
  );
};

export default MySwitch;
