import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;

`;

export const Total = styled.div`
  font-weight: ${props => props.bold ? 600: 400};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 30px;
  margin: 10px;
  width: 100%;
  & > div{
    margin: 0 10px;
  }
`