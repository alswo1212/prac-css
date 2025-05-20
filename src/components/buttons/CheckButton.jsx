import { useRef } from "react";
import styled from "styled-components";

const ButtonRoot = styled.label`
  display: flex;
  align-items: center;
`;

const Background = styled.div`
  display: inline-block;
  width: 40px;
  height: 20px;
  background: lightgray;
  border-radius: 15px;
  transition: all 0.3s 0.1s;
  padding: 1px;
  box-sizing: border-box;
  &:has(input[type="checkbox"]:checked) {
    background: #00cb00;
  }
`;

const Ball = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: white;
  border: 1px solid #eee;
  border-radius: 50%;
  transition: all 0.4s;
  float: left;
  &:has(input[type="checkbox"]:checked) {
    transform: translateX(20px);
  }
`;

export default ({ children, onCheck, unCheck }) => {
  return (
    <ButtonRoot>
      {children}
      <Background>
        <Ball>
          <input
            type="checkbox"
            hidden
            onChange={(e) => {
              e.target.checked
                ? onCheck instanceof Function && onCheck()
                : unCheck instanceof Function && unCheck();
            }}
          />
        </Ball>
      </Background>
    </ButtonRoot>
  );
};
