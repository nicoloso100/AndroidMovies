import * as React from 'react';
import {ButtonContainer, ButtonText} from './styles';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@reducers/index';

interface MyButtonProps {
  /**
   * Texto del botón
   */
  text: string;
  /**
   * Evento del botón al presionar
   */
  onPress: () => void;
}

/**
 * Componente de botón simple
 */
const MyButton: React.FC<MyButtonProps> = ({text, onPress}) => {
  const selector = useSelector((state: RootState) => state.darkMode);

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <ButtonContainer darkTheme={selector.enabled}>
        <ButtonText darkTheme={selector.enabled}>{text}</ButtonText>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default MyButton;
