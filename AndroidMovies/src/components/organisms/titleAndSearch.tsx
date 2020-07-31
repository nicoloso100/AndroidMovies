import * as React from 'react';
import {View} from 'react-native';
import Title from '@components/atoms/title';

const TitleAndSearch: React.FC = () => {
  return (
    <View>
      <Title text="Hola!, ¿Qué película deseas ver?" />
    </View>
  );
};

export default TitleAndSearch;
