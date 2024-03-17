import styled from "styled-components";
import { IStackProps } from ".";

export const StStack = styled.div<IStackProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "vertical" ? "column" : "row"};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  ${(props) => props.additionalStyles}
`;
