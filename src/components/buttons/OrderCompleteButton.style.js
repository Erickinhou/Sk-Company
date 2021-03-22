import styled from "styled-components";
import { Button } from "react-bootstrap";

export const OrderButton = styled(Button)`
  ${(props) =>
    props.variant === "success" &&
    "border: none; border-radius: 24px; background-color: #00A3E2; color: white; margin-top: 10px; width: 100%;"}
`;
