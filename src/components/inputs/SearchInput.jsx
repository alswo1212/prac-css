import { useRef } from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  width: 530px;
`;

export default function SearchInput() {
  const input = useRef(null);
  return (
    <Input ref={input} type="text" placeholder="검색어를 입력해 주세요." />
  );
}
