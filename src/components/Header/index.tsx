import * as React from 'react';
import { Actions } from 'react-native-router-flux';
import { translate } from '../../locales';

// Components
import { Button } from '../';

// Styles
import { colors } from '../../global';
import { 
  StyledView,
  Title,
  Left
} from './styles';

const Header = (
  { backButton, title }:
  { 
    backButton?: boolean,
    title?: string,
  }
) => {
  const _backButtom = () => (
    <Button 
      icon
      iconName="angle-left"
      iconSize={32}
      iconColor={colors.white}
      size="16px"
      content={translate(['header', 'back'])}
      action={() => Actions.pop()}
    />
  );

  return (
    <StyledView>
      <Left>
        { backButton ? _backButtom() : null }
      </Left>
      <Title>{ title }</Title>
    </StyledView>
  );
} 

export default Header;
