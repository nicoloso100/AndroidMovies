import * as React from 'react';
import {MoviesListHeaderContainer} from './styles';
import Label from '@components/atoms/label';

interface MoviesListHeaderProps {
  /**
   * Subtítulo de las listas de películas
   */
  text: string;
}

/**
 * Componente que muestra el subtítulo de lñas listas de películas, ejemplo: MÁS VOTADAS o POPULARES
 */

const MoviesListHeader: React.FC<MoviesListHeaderProps> = ({text}) => {
  return (
    <MoviesListHeaderContainer>
      <Label text={text} />
    </MoviesListHeaderContainer>
  );
};

export default MoviesListHeader;
