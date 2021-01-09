import styled from 'styled-components';
import CompanyLogo from '../../../CompanyLogo'

export const Container = styled.div`
  padding: 5%;
  & > h1{
    font-size: 1.5rem;
  }
  & > h3{
    font-size: 1.1rem;
    color: #666;
  }
`;

export const Logo = styled(CompanyLogo)`
  width: 10vw !important;
`;