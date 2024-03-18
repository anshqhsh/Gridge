import styled from "styled-components";
import { TextMdMedium, TextMdSemibold } from "../../assets/styles/styles";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  padding: 48px 70px 40px;
`;
export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 57px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled.button`
  ${TextMdSemibold}
  height: 44px;
  width: 100%;
  padding: 10px 0;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.blue500};
  border: none;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  text-align: center;
  cursor: pointer;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.blue200};
  }
`;

export const PassWordToggle = styled.span`
  ${TextMdSemibold}
  position: absolute;
  right: 20px;
  color: ${({ theme }) => theme.colors.gray900};
  cursor: pointer;
`;

export const StMockUpImg = styled.img`
  width: 100%;
`;
