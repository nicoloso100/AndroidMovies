import * as React from 'react';
import {MoviesListHeaderContainer} from './styles';
import Label from '@components/atoms/label';

interface MoviesListHeaderProps {
  text: string;
}

const MoviesListHeader: React.FC<MoviesListHeaderProps> = ({text}) => {
  return (
    <MoviesListHeaderContainer>
      <Label text={text} />
    </MoviesListHeaderContainer>
  );
};

export default MoviesListHeader;
