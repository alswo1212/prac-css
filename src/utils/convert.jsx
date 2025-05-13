import styled from "styled-components";

const Bold = styled.b`
  font-weight: 600;
`;

export const convertTextBold = (text, targetText) => {
  const arr = text.split(targetText);
  return arr.reduce((pre, cur, idx) => {
    pre.push(cur);
    if (idx != arr.length - 1) {
      pre.push(<Bold>{targetText}</Bold>);
    }
    return pre;
  }, []);
};
