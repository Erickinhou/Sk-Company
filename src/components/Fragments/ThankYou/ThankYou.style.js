import styled from 'styled-components';
import {AiOutlineDown} from 'react-icons/ai'

export const Container = styled.div`
  width: 50%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1{
    font-size: 2rem;
  }
`;

export const Main = styled.div`
  width: 100%;
  padding: 5%;
  border-radius: 0 0 30px 30px;
  background-color: #fff;
  margin-bottom: auto;
  height: max-content; 
`;

export const DownArrow = styled(AiOutlineDown)`
    fill: #00A3E2;
    stroke: #00A3E2;
    stroke-width: 40px;
    width: 30px;
    height: 30px;
    margin: 10px;
`