import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 30px 30px 0 0;
    background-color: #fff;
    padding: 20px;
    color: #666;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Text = styled.div`
  font-weight: 500;
  font-size: 0.8rem;
  & > div {
    margin-bottom: 20px;
  }
`;

export const Title = styled.div`
  font-weight: 500;
`;

export const OutsideLink = styled.a`
  font-weight: 600;
  color: #666;
  font-style: italic;
  text-decoration: underline;
`;