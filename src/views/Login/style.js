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

export const ProvidersWrapper = styled.div`
  display: flex;
  justify-contnet: space-between;
  flex-direction: column;
  width: 300px;
  align-items: center;
  margin: 0 auto;
  height: 100px;
  border-top: 2px solid #ffc71d;
  padding-top: 10px;
  margin-top: 10px;
`;

export const Btn = styled.button`
  background: #ffffff;
  border: 1px solid #727272;
  padding: 5px;
  color: #727272;
  width: 150px;
  margin: 5px 0;
  &:hover {
    border-color: #ffc71d;
    cursor: pointer;
  }
`;

export const LoginBtn = styled(Btn)`
  margin-top: 20px;
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
  color: #727272;
  text-align: center;
  &:hover {
    color: #ffc71d;
  }
`;
