import firebase from '../services/firebase';
import { toast } from 'react-toastify';

import { SEND_MESSAGE, REAL_TIME_MESSAGES } from './types';

const sendMessageSuccess = (message) => ({
  type: SEND_MESSAGE,
  payload: message,
});

const setMessages = (messages) => ({
  type: REAL_TIME_MESSAGES,
  payload: messages,
});

export const sendMessage = (message) => async (dispatch) => {
  try {
    await firebase.firestore.createMessage(message);
  } catch (error) {
    toast.error(`Coludn't send message. Error message: ${error.message}`);
  }
};

export const getAllMessages = () => async (dispatch) => {
  try {
    const data = await firebase.firestore.getAllMessages();
    console.group(data);
  } catch (error) {
    toast.error(`Coludn't get messages. Error message: ${error.message}`);
  }
};

export const listenForMessages = () => async (dispatch) => {
  try {
    await firebase.firestore.listenForMessages((newMessages) => {
      dispatch(setMessages(newMessages));
    });
  } catch (error) {
    toast.error(`Coludn't get messages. Error message: ${error.message}`);
  }
};
