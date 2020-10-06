import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #727272;
  margin: 0 auto;
  position: relative;
`;

export const SendWrapper = styled.form`
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 2px solid #727272;
  width: 100%;
  height: 40px;
  margin: 0;
  bcakground: #ffffff;
  display: flex;
`;

export const MessagesWindow = styled.div`
  height: 360px;
  overflow-y: scroll;
`;

export const Message = styled.div`
  border-top: 1px solid #ffc71d;
  padding: 10px;
`;

export const MessageHeading = styled.h5`
  margin-bottom: 20px;
`;

export const MessageText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: normal;
  word-break: break-all;
`;

export const Input = styled.input`
  height: 40px;
  width: 150px;
  padding: 10px;
  border: none;
  background: transparent;
  flex: 1;
`;

export const InputFile = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const CustomFileInput = styled.label`
  border-left: 1px solid #727272;
  padding: 0 12px;
  display: block;
  width: 40px;
  font-size: 30px;
  cursor: pointer;
  margin: 0;

  &:hover {
    color: #ffc71d;
  }

  ${(props) =>
    props.uploaded &&
    css`
      transition: 0.6s;
      background: #ffc71d;
      &:hover {
        color: #727272;
      }
    `}
`;

export const SendBtn = styled.button`
  width: 100px;
  background: #ffffff;
  border: 1px solid #727272;
  border-top: none;
  border-bottom: none;
  border-right: none;
  &:hover {
    cursor: pointer;
    color: #ffc71d;
  }
`;
