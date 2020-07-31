import * as React from 'react';
import {Switch} from 'react-native-gesture-handler';

interface MySwitchProps {
  defaultValue?: boolean;
  onChange?: () => void;
}

const MySwitch: React.FC<MySwitchProps> = ({defaultValue}) => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  React.useEffect(() => {
    setIsEnabled(isEnabled);
  }, [defaultValue]);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default MySwitch;
