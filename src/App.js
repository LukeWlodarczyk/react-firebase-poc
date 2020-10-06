import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';

import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Chat from './views/Chat/Chat';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styled from 'styled-components';

import { useDispatch } from 'react-redux';

import * as auth from './actions/auth';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth.verifyAuth(history));
  }, []);

  return (
    <Wrapper>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={Chat} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      <ToastContainer />
    </Wrapper>
  );
};

export default App;
