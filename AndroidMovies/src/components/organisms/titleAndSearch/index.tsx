import * as React from 'react';
import Title from '@components/atoms/title';
import {TitleContainer} from './styles';

const TitleAndSearch: React.FC = () => {
  return (
    <TitleContainer>
      <Title text="Hola!, ¿Qué película deseas ver?" />
    </TitleContainer>
  );
};

export default TitleAndSearch;
