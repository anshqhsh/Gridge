import styled from "styled-components";
import { IButtonProps } from ".";

export const STButton = styled.button<IButtonProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  background-color: ${(props) => props.bgColor};
  &:disabled {
    background-color: ${(props) => props.disableBgColor};
    color: ${(props) => props.disableColor};
    cursor: not-allowed;
  }
`;
