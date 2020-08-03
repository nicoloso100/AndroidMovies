import * as React from 'react';
import {
  MovieFooterInfoContainer,
  MovieFooterInfoItem,
  MovieFooterInfoTitle,
  MovieFooterInfoText,
} from './styles';
import Label from '@components/atoms/label';

interface MovieFooterInfoProps {
  /**
   * Lista de estudios vinculados con la película
   */
  studios: string[];
  /**
   * Género de la película
   */
  genre: string[];
  /**
   * Fecha de lanzamiento de la película
   */
  release: Date;
}

/**
 * Componente que muestra los estudios, géneros y la fecha de lanzamiento de la película
 */

const MovieFooterInfo: React.FC<MovieFooterInfoProps> = ({
  studios,
  genre,
  release,
}) => {
  return (
    <MovieFooterInfoContainer>
      <MovieFooterInfoItem>
        <MovieFooterInfoTitle>
          <Label text="Estudio" bold />
        </MovieFooterInfoTitle>
        <MovieFooterInfoText>
          <Label text={studios.join(', ')} />
        </MovieFooterInfoText>
      </MovieFooterInfoItem>
      <MovieFooterInfoItem>
        <MovieFooterInfoTitle>
          <Label text="Género" bold />
        </MovieFooterInfoTitle>
        <MovieFooterInfoText>
          <Label text={genre.join(', ')} />
        </MovieFooterInfoText>
      </MovieFooterInfoItem>
      <MovieFooterInfoItem>
        <MovieFooterInfoTitle>
          <Label text="Lanzamiento" bold />
        </MovieFooterInfoTitle>
        <MovieFooterInfoText>
          <Label text={release.toString()} />
        </MovieFooterInfoText>
      </MovieFooterInfoItem>
    </MovieFooterInfoContainer>
  );
};

export default MovieFooterInfo;
