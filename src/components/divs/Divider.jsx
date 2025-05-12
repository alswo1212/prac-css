import styled from "styled-components";

export default styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  ${(props) => props.padding && `padding:${props.padding};`}
  ${(props) => props.margin && `margin: 15px 0;`}
`;
