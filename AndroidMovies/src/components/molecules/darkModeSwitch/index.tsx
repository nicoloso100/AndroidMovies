import * as React from 'react';
import Label from '@components/atoms/label';
import {DarkModeSwitchContainer} from './styles';
import MySwitch from '@components/atoms/switch';
import {useSelector, useDispatch} from 'react-redux';

interface DarkModeSwitchProps {}

const DarkModeSwitch: React.FC<DarkModeSwitchProps> = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(selector);

  const onSwitchChanged = () => {};

  return (
    <DarkModeSwitchContainer>
      <Label text="Habilitar darkmode" />
      <MySwitch onChange={} />
    </DarkModeSwitchContainer>
  );
};

export default DarkModeSwitch;
