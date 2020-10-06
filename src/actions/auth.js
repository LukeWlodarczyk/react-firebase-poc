import firebase from '../services/firebase';
import { toast } from 'react-toastify';

import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './types';

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const verifyAuth = (history) => async (dispatch) => {
  try {
    await firebase.auth.verifyAuth((user) => {
      if (user) {
        dispatch(
          loginSuccess({
            email: user.email,
            id: user.uid,
            isVerified: user.emailVerified,
          })
        );
        history.push('/');
      } else {
        dispatch(logoutSuccess());
      }
    });
  } catch (error) {
    dispatch(logoutSuccess());
  }
};

export const loginWithGoogle = (history) => async (dispatch) => {
  try {
    const user = await firebase.auth.signInWithGoogle();
    await firebase.firestore.createUserIfNotExist(user);
    console.log(user);
    dispatch(loginSuccess(user));
    toast.success('Login succesfull');
    history.push('/');
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
};

export const loginWithGithub = (history) => async (dispatch) => {
  try {
    const user = await firebase.auth.signInWithGithub();
    await firebase.firestore.createUserIfNotExist(user);
    console.log(user);
    dispatch(loginSuccess(user));
    toast.success('Login succesfull');
    history.push('/');
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await firebase.auth.signOut();
    dispatch(logoutSuccess());
    toast.success('Logout succesfull');
  } catch (error) {
    toast.error(error.message);
  }
};

export const register = ({ email, password }, history) => async (dispatch) => {
  try {
    const user = await firebase.auth.signUpWithEmailAndPassowrd({
      email,
      password,
    });

    await firebase.firestore.createUser(user);

    toast.success('Register succesfull');
    history.push('/login');
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
};

export const loginWithEmailAndPassword = (
  { email, password },
  history
) => async (dispatch) => {
  try {
    const result = await firebase.auth.signInWithEmailAndPassowrd({
      email,
      password,
    });
    dispatch(loginSuccess(result));
    toast.success('Login succesfull');
    history.push('/');
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
};
