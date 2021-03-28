import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  justify-content: center;
  border-bottom: 1px solid ${(props) => (props.isMobile ? " #fff" : "#666")};
`;

export const Middle = styled.div`
  flex-grow: 1;
  & > div {
    display: flex;
    align-items: ${({ alignment }) => alignment};
    justify-content: ${({ alignment }) => alignment};
  }
`;
export const End = styled.div`
  margin-left: auto;
  width: 10%;
  text-align: right;
`;

export const Start = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 10%;
  & > div {
    margin: 0 5px;
  }
`;

export const SvgWrapper = styled.div`
  display: relative;
  width: 30px;
  height: auto;
`;
