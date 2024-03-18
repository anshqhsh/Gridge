import { forwardRef, useState } from "react";
import { PassWordToggle } from "../../pages/login/styles";
import { InputWrap, InputWrapper } from "./styles";
import React from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  type?: "text" | "password";
}
const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { icon, type = "text", value, onChange, onKeyUp, ...rest } = props;
  const [inputType, setInputType] = useState(type);
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <InputWrapper>
      {icon && icon}
      <InputWrap
        type={inputType}
        ref={ref}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        {...rest}
      />
      {type === "password" && (
        <PassWordToggle
          onClick={() => {
            setInputType(inputType === "text" ? "password" : "text");
            setIsShowPassword((isShowPassword) => !isShowPassword);
          }}
        >
          {isShowPassword ? "숨기기" : "비밀번호 표시"}
        </PassWordToggle>
      )}
    </InputWrapper>
  );
});

export default Input;
