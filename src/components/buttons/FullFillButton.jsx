import BaseTextButton from "@components/buttons/BaseTextButton";
import styled from "styled-components";

const Selected = styled(BaseTextButton)`
  background: ${(props) => props.bgColor};
  color: white;
  font-weight: 600;
`;
export default function FullFillButton({ isSelected, bgColor, children }) {
  if (isSelected) {
    return <Selected bgColor={bgColor}>{children}</Selected>;
  }
  return <BaseTextButton>{children}</BaseTextButton>;
}
