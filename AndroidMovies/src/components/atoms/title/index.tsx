import * as React from 'react';
import {TitleComponent} from './style';

interface Title {
  text: string;
}

const Title: React.FC<Title> = ({text}) => {
  return <TitleComponent>{text}</TitleComponent>;
};

export default Title;
