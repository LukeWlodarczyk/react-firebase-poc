import React from 'react';
import { useHistory } from 'react-router-dom';

import * as auth from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';

import { Wrappper, Highlight, Heading, LogoutBtn } from './style';
const Header = () => {
  const authenticated = useSelector((state) => state.user.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => dispatch(auth.logout(history));
  return (
    <Wrappper>
      <Heading>
        <Highlight>Chat</Highlight>Guru
      </Heading>
      {authenticated ? <LogoutBtn onClick={logout}>Logout</LogoutBtn> : null}
    </Wrappper>
  );
};

export default Header;
