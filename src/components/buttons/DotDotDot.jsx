import styled from "styled-components";
import Dot from "@components/divs/Dot";

const DotDotDotWrap = styled.div`
  width: 25px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  float: right;
  cursor: pointer;
`;
export default function DotDotDot() {
  return (
    <DotDotDotWrap>
      <Dot />
      <Dot />
      <Dot />
    </DotDotDotWrap>
  );
}
