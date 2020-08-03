import * as React from 'react';
import Title from '@components/atoms/title';
import {TitleContainer} from './styles';

/**
 * Componente que muestra el título de la pantalla principal
 */
const MainTitle: React.FC = () => {
  return (
    <TitleContainer>
      <Title text="Hola!, ¿Qué película deseas ver?" />
    </TitleContainer>
  );
};

export default MainTitle;
