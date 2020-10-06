import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as auth from '../../actions/auth';

import { Heading, Wrapper, Btn, Input, Form, StyledLink } from './style';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();
    dispatch(auth.register({ email, password }, history));
  };

  return (
    <Wrapper>
      <Heading>Sign up</Heading>
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
        <Btn type="submit" onClick={register}>
          Register
        </Btn>
      </Form>
      <StyledLink to="login">Already have account? Sign in!</StyledLink>
    </Wrapper>
  );
};

export default Register;
