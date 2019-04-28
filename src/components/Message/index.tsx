import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

// Components
import { Title, Content } from '../../global/general';

const Message = (
  { content, icon, iconName, iconColor, iconSize, center, uppercase }:
  {
    content?: string,
    icon?: boolean,
    iconName?: any,
    iconColor?: string,
    iconSize?: number, 
    center?: boolean,
    uppercase?: boolean
  }
) => {
  return (
    <Content 
      pl="60px" 
      pr="60px" 
      pb="30px" 
      center={center}
    >
      <Title 
        center={center}
        uppercase={uppercase}
      >
        { content }
      </Title>
      { icon ? 
        <Icon 
          name={iconName}
          color={iconColor}
          size={iconSize}
          style={{ marginTop: 18 }}
        />
      : null }
    </Content>
  );
};

export default Message;
