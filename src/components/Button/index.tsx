import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Btn, BtnText } from './styles';

const Button = (
  { primary, basic, disabled, action, center, icon, iconName, iconSize, iconColor, uppercase, size, bold, content }:
  { 
    primary?: boolean,
    basic?: boolean,
    disabled?: boolean,
    action?: any,
    center?: boolean,
    icon?: boolean,
    iconName?: any,
    iconSize?: number,
    iconColor?: any,
    uppercase?: boolean,
    size?: string,
    bold?: boolean,
    content?: string
  }
) => {
  return (
    <Btn 
      primary={primary}
      basic={basic}
      disabled={disabled}
      onPress={action}
      activeOpacity={1}
      center={center}
    >
      { icon ? <Icon name={iconName} size={iconSize} color={iconColor} /> : null }
      <BtnText 
        uppercase={uppercase}
        size={size}
        bold={bold}
      >
        { content }
      </BtnText>
    </Btn>
  );
};

export default Button;
