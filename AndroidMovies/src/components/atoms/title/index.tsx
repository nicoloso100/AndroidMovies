import * as React from 'react';
import {TitleComponent} from './style';
import {useSelector} from 'react-redux';
import {RootState} from '@reducers/index';

interface Title {
  text: string;
}

const Title: React.FC<Title> = ({text}) => {
  const selector = useSelector((state: RootState) => state.darkMode);

  return <TitleComponent darkTheme={selector.enabled}>{text}</TitleComponent>;
};

export default Title;
