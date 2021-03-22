import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
export const ArrowDown = styled(AiOutlineDown)`
  fill: #00a3e2;
  stroke: #00a3e2;
  stroke-width: 40px;
  width: 30px;
  height: 30px;
  margin: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h2 {
    color: #282828;
  }
`;
