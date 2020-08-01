import * as React from 'react';
import {CustomLabel} from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '@reducers/index';

interface LabelProps {
  text: string;
  bold?: boolean;
}

const Label: React.FC<LabelProps> = ({text, bold}) => {
  const selector = useSelector((state: RootState) => state.darkMode);

  return (
    <CustomLabel weight={bold ? 'bold' : 'normal'} darkTheme={selector.enabled}>
      {text}
    </CustomLabel>
  );
};

export default Label;
