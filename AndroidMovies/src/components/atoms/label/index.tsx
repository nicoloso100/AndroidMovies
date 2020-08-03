import * as React from 'react';
import {CustomLabel} from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '@reducers/index';

interface LabelProps {
  /**
   * Texto a mostrar en el label
   */
  text: string;
  /**
   * Propiedad que define si llevará negrilla
   */
  bold?: boolean;
}

/**
 * Componente básico para mostrar textos
 */
const Label: React.FC<LabelProps> = ({text, bold}) => {
  const selector = useSelector((state: RootState) => state.darkMode);

  return (
    <CustomLabel weight={bold ? 'bold' : 'normal'} darkTheme={selector.enabled}>
      {text}
    </CustomLabel>
  );
};

export default Label;
