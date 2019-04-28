import * as React from 'react';
import { Base } from './styles';

const TextMask = (
    { value, type, options }: 
    { 
      value?: any, 
      type?: any, 
      options?: any
    }
) => {
  return (
    <Base
      value={value}
      type={type}
      options={options}
    />
  );  
}

export default TextMask;
