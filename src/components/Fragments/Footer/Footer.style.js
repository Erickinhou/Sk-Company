import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 5%;
    background-color: #fff;
    border-radius: 30px 30px 0 0;
    color: #666666;
`;

export const Title = styled.h2`
  font-weight: 600;
`;

export const Text = styled.div`
    font-weight: 400;
    & > b{
      font-weight: 700;
    }
`;

export const Flex = styled.div`
  display: flex;
  margin-top: 10px;
  div, h4{
    width: 45%;
  }
  & > div:first-child, h4:first-child{
    margin-right: auto;
  }
`;

export const LogoWrapper = styled.div`
  align-self: center;
`;

export const OutsideLink = styled.a`
  font-weight: 600;
  color: #666;
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
`;