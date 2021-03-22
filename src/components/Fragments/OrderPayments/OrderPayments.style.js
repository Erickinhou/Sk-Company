import styled from "styled-components";
import ImageWithFallback from "../../images/ImageWithFallback";
export const Container = styled.div`
  width: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 10px 20px;
  margin-bottom: 30px;
  overflow: hidden;
  color: #666;
  font-weight: 500;
  font-size: 18px;
  .scroll-x {
    max-height: 300px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #00a3e2 transparent;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #00a3e2;
      border-radius: 20px;
      border: transparent;
    }
  }
`;
export const ImagePayment = styled(ImageWithFallback)`
  border-radius: 28px;
  padding: 5px;
  border: ${(props) =>
    props.border ? "5px solid #00a3e2" : "5px solid transparent"};
`;

export const Footer = styled.div`
  padding-bottom: 20px;
`;
