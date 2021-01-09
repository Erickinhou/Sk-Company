import styled from 'styled-components';
import ImageWithFallback from './images/ImageWithFallback';
export const Container = styled.div`
    width: 100%;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    border-radius: 15px;
    margin-bottom: 30px;
    overflow: hidden;
`
export const ImagePayment = styled(ImageWithFallback)`
    border-radius: 28px;
    padding: 5px;
    border: ${props => props.border ? '5px solid #00a3e2': '5px solid transparent'}
  
`;

export const Footer = styled.div`
  padding-bottom: 20px;
`;