import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Base, InputBase, BaseIcon } from './styles';
import { colors } from '../../global';

const Input = (
  { onChange, value, placeholder, capitalize, correct, returnKey, keyboardType, valid }: 
  { 
    onChange?: any, 
    value?: any, 
    placeholder?: string, 
    capitalize?: any, 
    correct?: boolean, 
    returnKey?: boolean, 
    keyboardType?: any,
    valid?: boolean,
}) => {

  const _checkValidation = () => (
    <BaseIcon>
      <Icon name="check" size={20} color={colors.green} />
    </BaseIcon>
  );

  return (
    <Base>
      <InputBase 
        autoCapitalize={capitalize}
        autoCorrect={correct}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        enablesReturnKeyAutomatically={returnKey}
      />
      { valid ? _checkValidation() : null }
    </Base>
  );
};

export default Input;
