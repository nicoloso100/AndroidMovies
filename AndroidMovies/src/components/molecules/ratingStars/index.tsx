import * as React from 'react';
import {RatingStarsContainer} from './styles';
import StarIcon from '@components/atoms/icons/star';

interface RatingStartsProps {
  /**
   * Puntuación de la película del 1 al 10
   */
  rating: number;
}
/**
 * Componente que muestra la cantidad de estrellas del 1 al 5 según el rating de la película
 */
const RatingStarts: React.FC<RatingStartsProps> = ({rating}) => {
  const getStars = React.useMemo(() => {
    let stars: React.ReactNode[] = [];
    let realRating = Math.ceil(rating / 2);
    for (var i = 1; i <= 5; i++) {
      stars.push(<StarIcon key={i} filled={realRating >= i} />);
    }
    return stars;
  }, []);

  return <RatingStarsContainer>{getStars}</RatingStarsContainer>;
};

export default RatingStarts;
