import { useState } from "react";
import styled from "styled-components";

const Icon = styled.span`
  display: inline-block;
  background: url(${(props) => props.url}) 0 0 no-repeat;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-position: ${(props) => props.bgPosition};
  background-size: ${(props) => props.bgSize || "202px 176px"};
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    ${(props) =>
      props.content &&
      `
      ::after {
        content: "${props.content}";
        display: block;
        position: absolute;
        font-size: 12px;
        color: white;
        background: #555;
        padding: 6px;
        transform: translate(-30%, 17px);
        border-radius: 5px;
      }
      `}
  }
`;

export default function IconButton({ iconData, onclink, url }) {
  const [isOpen, setIsOpen] = useState(false);
  const { content, ...data } = iconData;
  return (
    <>
      {content ? (
        <IconWrap content={content}>
          <Icon {...data} url={url} />
        </IconWrap>
      ) : (
        <Icon {...data} url={url} />
      )}
    </>
  );
}
