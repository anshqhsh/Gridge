import styled from "styled-components";
import { TextMdMedium } from "../../assets/styles/styles";

export const InputWrap = styled.input`
  ${TextMdMedium}
  border-style: none;
  width: 100%;
  &:focus {
    outline: none;
  }
  &:active {
    border-style: none;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray300}`};
  /* border: 1px solid #e0e0e0; */
  padding: 14px 13px;
`;
