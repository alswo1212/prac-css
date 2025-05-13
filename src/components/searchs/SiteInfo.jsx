import Dot from "@components/divs/Dot";
import DotDotDot from "@components/buttons/DotDotDot";
import styled from "styled-components";

const SiteFavicon = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: lightgray;
`;
const TopPart = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: #77777a;
  font-size: 15px;
`;
const SiteName = styled.span`
  color: #222;
`;
export default ({ siteName, infos }) => {
  return (
    <>
      <DotDotDot />
      <TopPart>
        <SiteFavicon />
        <SiteName>{siteName}</SiteName>
        <Dot />
        {infos.map((text, idx) => (
          <>
            <span>{text}</span>
            {idx !== infos.length - 1 && <span>{">"}</span>}
          </>
        ))}
      </TopPart>
    </>
  );
};
