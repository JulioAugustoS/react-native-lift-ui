import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { colors, metrics } from '../../global';

interface StyledViewProps {
  background?: string;
}

const StyledView = styled.View<StyledViewProps>`
  position: absolute;
  top: ${metrics.screenHeight >= 812 ? '44px' : '20px'};
  background-color: ${props => props.background || 'transparent'};
  width: ${metrics.screenWidth};
  height: 64px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;

const Title = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  text-align: center;
  display: flex;
  margin-top: ${Platform.OS === 'ios' ? '20px' : 0};
`;

const Left = styled.View`
  position: absolute;
  margin-top: 5px;
  left: 8px;
  z-index: 4;
`;

export {
  StyledView,
  Title,
  Left,
}


