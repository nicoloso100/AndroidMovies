import * as React from 'react';
import Label from '@components/atoms/label';
import {DarkModeSwitchContainer} from './styles';
import MySwitch from '@components/atoms/switch';
import {useSelector, useDispatch} from 'react-redux';
import {SET_DARKMODE_ENABLED, SET_DARKMODE_DISABLED} from '@utils/constants';
import {RootState} from '@reducers/index';

interface DarkModeSwitchProps {}

/**
 * Componente de Switch para habilitar o deshabilitar el DarkMode
 */

const DarkModeSwitch: React.FC<DarkModeSwitchProps> = () => {
  const selector = useSelector((state: RootState) => state.darkMode);
  const dispatch = useDispatch();

  /**
   * Método que almacena en Redux el estado del Darkmode
   */
  const onSwitchChanged = (checked: boolean) => {
    if (checked) {
      dispatch({type: SET_DARKMODE_ENABLED});
    } else {
      dispatch({type: SET_DARKMODE_DISABLED});
    }
  };

  return (
    <DarkModeSwitchContainer darkMode={selector.enabled}>
      <Label text="Habilitar darkmode" />
      <MySwitch value={selector.enabled} onChange={onSwitchChanged} />
    </DarkModeSwitchContainer>
  );
};

export default DarkModeSwitch;
