import React from "react";
import styled from "styled-components";
import { supportDeviceSize } from "../components/styles";

interface IMobileInDesktopLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const MobileInDesktopLayout = (props: IMobileInDesktopLayoutProps) => {
  const { leftContent, rightContent } = props;
  /*const navigate = useNavigate()

  // 페이지 첫 로딩시 로직
  useEffect(() => {
    // 벨리데이션
    if (!user.name) {
      alert('로그인을 해주세요')
      navigate('/login')
    }
  }, [])*/

  return (
    <StContainer>
      <div className="stack-item-left">{leftContent}</div>
      <div className="stack-item-right">{rightContent}</div>
    </StContainer>
  );
};

// 1080까지는 데스크탑, 그 이하는 모바일로 처리
const StContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1080px;
  height: 100vh;
  padding-top: 96px;
  gap: 72px;
  .stack-item-left {
    width: 520px;
    @media all and (max-width: ${supportDeviceSize}px) {
      display: none;
    }
  }
  .stack-item-right {
    width: 416px;
  }
`;

export default MobileInDesktopLayout;
