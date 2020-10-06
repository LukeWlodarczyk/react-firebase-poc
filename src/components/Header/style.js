import styled from 'styled-components';

export const Wrappper = styled.div`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Highlight = styled.span`
  color: #ffc71d;
  font-weight: bold;
`;

export const Heading = styled.p`
  color: #727272;
  font-size: 24px;
`;

export const LogoutBtn = styled.button`
  background: #ffffff;
  border: 1px solid #727272;
  padding: 5px;
  width: 101px;
  &:hover {
    border-color: #ffc71d;
    cursor: pointer;
  }
`;
