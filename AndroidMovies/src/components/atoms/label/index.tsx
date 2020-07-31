import * as React from 'react';
import {Text} from 'react-native';

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({text}) => {
  return <Text>{text}</Text>;
};

export default Label;
