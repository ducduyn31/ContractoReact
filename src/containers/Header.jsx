import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListIcon from '@material-ui/icons/List';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import {
  AppBar,
  Avatar,
  Badge,
  ButtonBase,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import theme from '../modules/theme';

import Logo from '../components/Logo';
import SearchField from '../components/SearchField';

import { logOut } from '../actions';

const HeaderToolbar = styled(Toolbar)`
  background-color: ${theme.palette.foreground};
  height: 10vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FlexContainer = props => {
  const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    > * {
      margin-right: 20px;
    }
  `;

  // eslint-disable-next-line react/prop-types,react/destructuring-assignment
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default class Header extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  handleClickLogout = () => {
    const { dispatch } = this.props;

    dispatch(logOut());
  };

  render() {
    return (
      <>
        <AppBar position="fixed">
          <HeaderToolbar>
            <FlexContainer>
              <IconButton>
                <ListIcon style={{ fontSize: 40 }} />
              </IconButton>
              <SearchField />
            </FlexContainer>
            <Logo type="logo" />
            <FlexContainer>
              <IconButton>
                <Badge badgeContent="4" color="primary">
                  <NotificationsActiveIcon style={{ fontSize: 30 }} />
                </Badge>
              </IconButton>
              <Typography color="textPrimary" variant="h4">
                John Wick
              </Typography>
              <ButtonBase focusRipple centerRipple style={{ marginLeft: 20 }}>
                <Avatar>JW</Avatar>
              </ButtonBase>
            </FlexContainer>
          </HeaderToolbar>
        </AppBar>
      </>
    );
  }
}
