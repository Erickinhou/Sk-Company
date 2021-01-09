import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai'
import CompanyLogo from '../../CompanyLogo'

export const Logo = styled(CompanyLogo)`
  height: 20%;
`;

export const Container  = styled.div`
  background-color: #fff;
  width: 50vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 40px 20px;
  text-align: center;
  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const DownArrow = styled(AiOutlineDown)`
    fill: #00A3E2;
    stroke: #00A3E2;
    stroke-width: 40px;
    width: 30px;
    height: 30px;
    margin: 5px auto 5px auto;
`


export const Details = styled.div`
text-align: left;
  & > h4{
    font-weight: 400;
  }
  h4:first-child{
    font-weight: 700;
  }
`