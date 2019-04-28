import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Base, InputBase, BaseIcon } from './styles';
import { colors } from '../../global';

const InputMask = (
    { onChange, value, placeholder, capitalize, correct, returnKey, keyboardType, maskType, options, valid, rawValue }: 
    { 
      onChange?: any, 
      value?: any, 
      placeholder?: string, 
      capitalize?: any, 
      correct?: boolean, 
      returnKey?: boolean, 
      keyboardType?: any, 
      maskType?: any, 
      options?: any,
      valid?: boolean,
      rawValue?: any
    }
) => {

  const _checkValidation = () => (
    <BaseIcon>
      <Icon name="check" size={20} color={colors.green} />
    </BaseIcon>
  );

  return (
    <Base>
      <InputBase 
        type={maskType}
        options={options}
        autoCapitalize={capitalize}
        autoCorrect={correct}
        value={value}
        keyboardType={keyboardType}
        includeRawValueInChangeText={rawValue}
        enablesReturnKeyAutomatically={returnKey}
        onChangeText={onChange}
        placeholder={placeholder}
      />
      { valid ? _checkValidation() : null }
    </Base>
  );
};

export default InputMask;
