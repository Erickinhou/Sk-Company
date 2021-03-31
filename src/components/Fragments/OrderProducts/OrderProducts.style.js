import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => (props.isMobile ? "transparent" : "#fff")};
  padding: ${(props) => props.isMobile && "20px"};
  color: ${(props) => props.isMobile && "#fff"};
  display: flex;
  flex-direction: column;
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

export const Total = styled.div`
  font-weight: ${(props) => (props.bold ? 600 : 400)};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 20px;
  width: 100%;
`;
