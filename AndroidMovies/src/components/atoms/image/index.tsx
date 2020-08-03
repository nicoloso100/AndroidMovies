import * as React from 'react';
import {ImageContainer} from './styles';

interface ImageProps {
  /**
   * URL de la imágen
   */
  URL: string;
  /**
   * Ancho customizado de la imágen
   */
  width?: string;
  /**
   * Ancho customizado de la imágen
   */
  height?: string;
  /**
   * Aplicar un radio a los bordes de las imágenes
   */
  radius?: string;
}

/**
 * Componente general de imágen
 */
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
