import styled from "styled-components";

const LoginButton = styled.button`
  background: white;
  border: 1px solid lightgray;
  font-weight: 100;
  font-size: 13px;
`;

export default function HeaderLoginButton() {
  const login = () => {};
  return <LoginButton onClick={login}>로그인</LoginButton>;
}
