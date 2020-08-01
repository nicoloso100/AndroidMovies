import * as React from 'react';
import {ButtonContainer, ButtonText} from './styles';
import {TouchableOpacity} from 'react-native';

interface MyButtonProps {
  text: string;
  onPress: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <ButtonContainer>
        <ButtonText>{text}</ButtonText>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default MyButton;
