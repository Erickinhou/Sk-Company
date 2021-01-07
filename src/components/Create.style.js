import styled from 'styled-components'
import {AiOutlineDown} from 'react-icons/ai'

export const Container = styled.div`
    background-color: #fff;
    margin: 0 5%;
    padding: 2.5% 2.5% 0 2.5%;
    & > h1{
        font-size: 48px;
    }
    & > h2{
        color: #666;
        font-size: 24px;
    }
`

export const DownArrow = styled(AiOutlineDown)`
    fill: #00A3E2;
    stroke: #00A3E2;
    stroke-width: 40px;
    width: 30px;
    height: 30px;
    margin: 10px;
`

export const Footer = styled.div`
  padding-bottom: 20px;
`;