import styled from "styled-components";

const Wrap = styled.div`
  text-align: right;
  color: #555;
  font-size: 15px;
  & > a:hover {
    text-decoration-line: underline;
  }
`;
export default () => {
  return (
    <Wrap>
      <a>관련문서 더보기 </a>
      <span>{">"}</span>
    </Wrap>
  );
};
