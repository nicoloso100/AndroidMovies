import * as React from 'react';
import {CustomText} from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '@reducers/index';

interface MyTextProps {
  /**
   * Texto para mostrar
   */
  text: string;
}

/**
 * Componente básico para mostrar textos
 */
const MyText: React.FC<MyTextProps> = ({text}) => {
  const selector = useSelector((state: RootState) => state.darkMode);

  return <CustomText darkTheme={selector.enabled}>{text}</CustomText>;
};

export default MyText;
