import * as React from 'react';
import {Switch} from 'react-native-gesture-handler';

interface MySwitchProps {
  value: boolean;
  onChange: (state: boolean) => void;
  darkTheme?: boolean;
}

const MySwitch: React.FC<MySwitchProps> = ({value, darkTheme, onChange}) => {
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
