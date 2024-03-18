import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginButton, LogoWrapper, StMockUpImg } from "./styles";
import { useRecoilState } from "recoil";
import { jwtState } from "../../recoil/login";
import MobileInDesktopLayout from "../../layout/MobileInDesktopLayout";
import { HomeMockUp, Lock, Logo, Mail } from "../../assets/imgs";
import { useForm } from "react-hook-form";
import Stack from "../../components/Stack";
import Input from "../../components/Input";

const Login = () => {
  return (
    <>
      <MobileInDesktopLayout
        leftContent={<StMockUpImg src={HomeMockUp} alt="mockup" />}
        rightContent={<LoginForm />}
      />
    </>
  );
};

export default Login;

interface LoginForm {
  id: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginForm>({ mode: "onChange" });

  const navigate = useNavigate();
  // const [name, setName] = useRecoilState(nameState);
  const [, setJwt] = useRecoilState(jwtState);

  const onSubmit = (data: LoginForm) => {
    console.log(data);
    console.log();
    // handleLogin().then();
  };

  // Input 에서 엔터키 누를 경우
  const onKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    const key = event.key || event.keyCode;
    if (key === "Enter" || key === 13) {
      handleLogin().then();
    }
  };

  // 로그인 버튼 클릭
  const handleLogin = async () => {
    try {
      // if (Object.keys(name).length === 0) {
      //   alert("이름을 입력해 주세요.");
      //   return;
      // }

      //서버통신 코드 작성

      setJwt("success login");

      navigate(`/`);
    } catch (error) {
      alert("네트워크 통신 실패. 잠시후 다시 시도해주세요.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LogoWrapper>
        <img src={Logo} alt="" />
      </LogoWrapper>
      <Stack gap={"10px"} m="0 0 20px">
        <Input
          {...register("id", {
            required: true,
          })}
          icon={<img src={Mail} width={"20px"} height={"20px"} />}
          name="id"
          placeholder="이메일을 입력해주세요."
          onKeyUp={onKeyUp}
        />
        <Input
          {...register("password", { required: true, minLength: 7 })}
          icon={<img src={Lock} width={"20px"} height={"20px"} />}
          name="password"
          placeholder="비밀번호를 입력해주세요."
          type="password"
          onKeyUp={onKeyUp}
        />
      </Stack>
      <LoginButton disabled={!isValid}>로그인</LoginButton>
    </form>
  );
};
