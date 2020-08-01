import * as React from 'react';
import {CustomLabel} from './styles';

interface LabelProps {
  text: string;
  bold?: boolean;
}

const Label: React.FC<LabelProps> = ({text, bold}) => {
  return <CustomLabel weight={bold ? 'bold' : 'normal'}>{text}</CustomLabel>;
};

export default Label;
