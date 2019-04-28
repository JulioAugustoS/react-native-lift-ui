import * as React from 'react';
import { Base, Img } from './styles';

const Logo = (
  { source }: 
  { source: any }  
) => {
  return (
    <Base>
      <Img
        source={source}
      />
    </Base>
  );
};

export default Logo;
