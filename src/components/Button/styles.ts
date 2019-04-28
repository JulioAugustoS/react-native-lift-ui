import styled from 'styled-components/native';
import { colors } from '../../global';

interface BtnProps {
  primary?: boolean;
  basic?: boolean;
  center?: boolean;
}

interface TextProps {
  uppercase?: boolean;
  size?: string;
  bold?: boolean;
};

const Btn = styled.TouchableOpacity<BtnProps>`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  align-items: center;
  z-index: 2;

  background-color: ${props => props.primary
    ? colors.buttons.primary
    : props.disabled 
      ? colors.buttons.disabled
    : 'transparent'
  };

  border: ${props => props.basic
    ? `2px solid ${colors.white}`
    : 0
  };
`;

const BtnText = styled.Text<TextProps>`
  font-family: 'Open Sans';
  color: ${colors.white};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  padding-left: 10px;
  padding-right: 10px;
  font-size: ${props => props.size || '14px'};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
`;  

export {
  Btn,
  BtnText
};
