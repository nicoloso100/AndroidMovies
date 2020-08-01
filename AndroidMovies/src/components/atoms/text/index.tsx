import * as React from 'react';
import {CustomText} from './styles';

interface MyTextProps {
  text: string;
}

const MyText: React.FC<MyTextProps> = ({text}) => {
  return <CustomText>{text}</CustomText>;
};

export default MyText;
