import * as React from 'react';
import { Img } from './styles';

const Image = (
  { source }: { source?: any }
) => {
  return (
    <Img 
      source={source}
    />
  );
};

export default Image;
