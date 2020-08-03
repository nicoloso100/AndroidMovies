import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MarginIconContainer} from './styled';

interface StarIconProps {
  /**
   * Define si la estrella está rellena o vacía
   */
  filled: boolean;
}

/**
 * Componente de estrella para el rating de la película
 */
const StarIcon: React.FC<StarIconProps> = ({filled}) => {
  return (
    <MarginIconContainer>
      <Icon name="star" size={15} color={filled ? '#F0D021' : '#B1AE81'} />
    </MarginIconContainer>
  );
};

export default StarIcon;
