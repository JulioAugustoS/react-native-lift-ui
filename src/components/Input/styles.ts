import styled from 'styled-components/native';
import { colors } from '../../global';

const Base = styled.View`
  width: 100%;
  height: 75px;
  padding: 18px;
  background-color: ${colors.white};
`;

const InputBase = styled.TextInput` 
  width: 100%;
  height: auto;
  padding: 10px;
  border-width: 1px;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${colors.inputs.primary};
  color: ${colors.inputs.primary};
`;

const BaseIcon = styled.View`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  margin-top: -25px;
`;

export {
  Base,
  InputBase,
  BaseIcon
};
