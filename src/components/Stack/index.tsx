import React from "react";
import { StStack } from "./styles";
import { FlattenSimpleInterpolation } from "styled-components";

export interface IStackProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal";
  gap?: string;
  p?: string;
  m?: string;
  additionalStyles?: FlattenSimpleInterpolation;
}

/**
 * @property {("vertical"|"horizontal")} [direction="vertical"]
 * @property {string} [gap="0"]
 * @property {string} p - padding
 * @property {string} m - margin
 * @property {FlattenSimpleInterpolation} [additionalStyles] - additional styles
 */
const Stack: React.FC<IStackProps> = ({
  direction = "vertical",
  gap = "0",
  p = "0",
  m = "0",
  additionalStyles,
  children,
}) => {
  return (
    <StStack
      direction={direction}
      gap={gap}
      p={p}
      m={m}
      additionalStyles={additionalStyles}
    >
      {children}
    </StStack>
  );
};

export default Stack;
