import * as React from 'react';
import {ImageContainer} from './styles';

interface ImageProps {
  URL: string;
  width?: string;
  height?: string;
  radius?: string;
}

const MyImage: React.FC<ImageProps> = ({URL, width, height, radius}) => {
  return (
    <ImageContainer
      source={{uri: URL}}
      resizeMode="cover"
      customwidth={width ? width : 'auto'}
      customheight={height ? height : 'auto'}
      radius={radius ? radius : '15px'}
    />
  );
};

export default MyImage;
