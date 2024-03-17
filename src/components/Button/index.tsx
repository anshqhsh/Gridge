import React from "react";
import { STButton } from "./styles";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDisable?: boolean;
  width?: string;
  children?: React.ReactNode;
  bgColor?: string;
  color?: string;
  disableBgColor?: string;
  disableColor?: string;
}

const Button = ({ isDisable, width, children, color }: IButtonProps) => {
  return (
    <STButton disabled={isDisable} width={width} color={color}>
      {children}
    </STButton>
  );
};

export default Button;
