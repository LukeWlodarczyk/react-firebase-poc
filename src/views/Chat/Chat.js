import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Wrapper,
  SendWrapper,
  MessagesWindow,
  Message,
  MessageHeading,
  MessageText,
  Input,
  InputFile,
  CustomFileInput,
  SendBtn,
} from './style';

import { formatDate } from './utils';

import * as chat from '../../actions/chat';

function Chat() {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const authUserId = useSelector((state) => state.user.user.id);
  const messages = useSelector((state) => state.chat.messages);

  const dispatch = useDispatch();

  const send = (e) => {
    e.preventDefault();
    dispatch(chat.sendMessage({ text: message, file, authorId: authUserId }));
    setMessage('');
    setFile(null);
  };

  const win = useRef();
  useEffect(() => {
    win.current.scrollTop = win.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    dispatch(chat.listenForMessages());
  }, []);

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Wrapper>
      <MessagesWindow ref={win}>
        {messages
          .slice()
          .reverse()
          .map((message) => {
            console.log(message);
            if (message.type === 'img') {
              return (
                <Message key={message.id}>
                  <MessageHeading>
                    {message.author.email} -{' '}
                    <span>{formatDate(message.created.toDate())}</span>
                  </MessageHeading>

                  <img src={message.value} width="auto" height="150px" />
                </Message>
              );
            }
            if (message.type === 'text') {
              return (
                <Message key={message.id}>
                  <MessageHeading>
                    {message.author.email} -{' '}
                    <span>{formatDate(message.created.toDate())}</span>
                  </MessageHeading>

                  <MessageText>{message.value}</MessageText>
                </Message>
              );
            }
          })}
      </MessagesWindow>
      <SendWrapper>
        <Input
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <CustomFileInput uploaded={Boolean(file)} htmlFor="upload-file">
          +
        </CustomFileInput>
        <InputFile
          type="file"
          id="upload-file"
          onChange={handleChangeFile}
          accept="image/*"
        />
        <SendBtn type="submit" onClick={send}>
          Send
        </SendBtn>
      </SendWrapper>
    </Wrapper>
  );
}

export default Chat;
