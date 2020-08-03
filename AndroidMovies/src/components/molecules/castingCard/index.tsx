import * as React from 'react';
import {CastingCardContainer} from './styles';
import MyImage from '@components/atoms/image';
import Label from '@components/atoms/label';

interface MovieCardProps {
  /**
   * URL de la imágen de perfil de la persona de casting
   */
  imageURL: string;
  /**
   * Nombre de la persona del casting
   */
  name: string;
}

/**
 * Tarjeta de cada persona de casting
 */

const CastingCard: React.FC<MovieCardProps> = ({imageURL, name}) => {
  return (
    <CastingCardContainer>
      <MyImage URL={imageURL} height="80px" width="80px" radius="80px" />
      <Label text={name} />
    </CastingCardContainer>
  );
};

export default CastingCard;
