import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  margin: 0 5%;
`;

export const Main = styled.div`
  ${props => props.rounded ? 'height: max-content; border-radius: 0px 0px 30px 30px;' : 'height: 100%;'};
  background-color: #fff;
  padding: 5%;
  width: 100%;
`;
