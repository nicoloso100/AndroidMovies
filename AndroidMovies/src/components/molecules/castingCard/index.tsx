import * as React from 'react';
import {CastingCardContainer} from './styles';
import MyImage from '@components/atoms/image';
import Label from '@components/atoms/label';

interface MovieCardProps {
  imageURL: string;
  name: string;
}

const CastingCard: React.FC<MovieCardProps> = ({imageURL, name}) => {
  return (
    <CastingCardContainer>
      <MyImage URL={imageURL} height="80px" width="80px" radius="80px" />
      <Label text={name} />
    </CastingCardContainer>
  );
};

export default CastingCard;
