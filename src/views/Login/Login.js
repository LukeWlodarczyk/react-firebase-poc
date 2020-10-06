import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {
  Heading,
  Wrapper,
  ProvidersWrapper,
  Btn,
  LoginBtn,
  Input,
  Form,
  StyledLink,
} from './style';

import * as auth from '../../actions/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const loginWithGoogle = () => dispatch(auth.loginWithGoogle(history));
  const loginWithGithub = () => dispatch(auth.loginWithGithub(history));

  const loginWithEmailAndPassword = (e) => {
    e.preventDefault();
    dispatch(auth.loginWithEmailAndPassword({ email, password }, history));
  };

  return (
    <Wrapper>
      <Heading>Sing in</Heading>
      <Form>
        <Input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <LoginBtn type="submit" onClick={loginWithEmailAndPassword}>
          Login
        </LoginBtn>
      </Form>
      <ProvidersWrapper>
        <Btn onClick={loginWithGoogle}>Log in with Google</Btn>
        <Btn onClick={loginWithGithub}>Log in with Github</Btn>
      </ProvidersWrapper>
      <StyledLink to="register">Don't have accout? Sign up!</StyledLink>
    </Wrapper>
  );
};

export default Login;
