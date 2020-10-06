import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Heading = styled.h1`
  color: #727272;
  font-weight: bold;
  font-size: 44px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-contnet: center;
  flex-direction: column;
`;

export const Btn = styled.button`
  background: #ffffff;
  border: 1px solid #727272;
  padding: 5px;
  color: #727272;
  width: 150px;
  margin: 5px 0;
  margin-top: 20px;
  &:hover {
    border-color: #ffc71d;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  height: 30px;
  width: 150px;
  margin-top: 10px;
  padding: 10px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  margin-top: 10px;
  color: #727272;
  text-align: center;
  &:hover {
    color: #ffc71d;
  }
`;
