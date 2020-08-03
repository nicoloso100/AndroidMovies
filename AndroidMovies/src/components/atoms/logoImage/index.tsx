import * as React from 'react';
import {DrawerIconComponent, DrawerIconContainer} from './styles';

const Icon = require('assets/images/drawerIcon.png');

/**
 * Componente de Logo de The Movie Database
 */
const DrawerLogo: React.FC = () => {
  return (
    <DrawerIconContainer>
      <DrawerIconComponent source={Icon} resizeMode="contain" />
    </DrawerIconContainer>
  );
};

export default DrawerLogo;
