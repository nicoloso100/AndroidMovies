import * as React from 'react';
import {MyText} from './styles';

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({text}) => {
  return <MyText>{text}</MyText>;
};

export default Label;
