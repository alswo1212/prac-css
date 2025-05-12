import Divider from "@components/divs/Divider";
import Dot from "@components/divs/Dot";
import DotDotDot from "@components/buttons/DotDotDot";
import IconButton from "@components/buttons/IconButton";
import { common2IconUrl, iconDatas } from "@consts/iconData";
import MoreView from "@components/searchs/MoreView";
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
const SearchTitle = styled.a`
  display: block;
  font-size: 18px;
  color: #0c43b7;
  & span {
    cursor: pointer;
  }
`;
const ContentPart = styled.div`
  margin-top: 10px;
`;
const Bold = styled.b`
  font-weight: 600;
`;
const SearchContent = styled.a`
  display: block;
  margin-top: 5px;
  line-height: 24px;
  color: #222;
`;
const WarningText = styled.div`
  color: #939396;
  font-size: 14px;
  line-height: 19px;
`;
const SubContentTitle = styled.a`
  display: block;
  font-size: 15px;
  color: #0c43b7;
  & span {
    cursor: pointer;
  }
`;
const SearchSubContent = styled.a`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 5px;
  line-height: 24px;
  color: #222;
`;
export default ({
  siteName = "",
  domain = [],
  mainTitle = "",
  mainContent = "",
  warning = false,
  subTitle = "",
  subContent = "",
  searchText = "",
}) => {
  const convertTextBold = (str = "") => {
    const startWith = str.startsWith(searchText);
    return str.split(searchText).reduce(
      (pre, cur) => {
        pre.push(<Bold>{searchText}</Bold>);
        pre.push(cur);
        return pre;
      },
      startWith ? [<Bold>{searchText}</Bold>] : []
    );
  };
  return (
    <>
      <DotDotDot />
      <TopPart>
        <SiteFavicon />
        <SiteName>{siteName}</SiteName>
        <Dot />
        {domain.map((text, idx) => (
          <>
            <span>{text}</span>
            {idx !== domain.length - 1 && <span>{">"}</span>}
          </>
        ))}
      </TopPart>
      <ContentPart>
        <SearchTitle>
          <span>{convertTextBold(mainTitle)}</span>
        </SearchTitle>
        <SearchContent>{convertTextBold(mainContent)}</SearchContent>
        {warning && (
          <>
            <Divider margin={true} />
            <WarningText>
              위 사이트의 콘텐츠는 모두가 자유롭게 편집할 수 있으며, 네이버는 이
              콘텐츠의 사실성을 보장할 수 없습니다.
              <IconButton iconData={iconDatas.question} url={common2IconUrl} />
            </WarningText>
          </>
        )}
        <Divider margin={true} />
        <SubContentTitle>
          <span>{convertTextBold(subTitle)}</span>
        </SubContentTitle>
        <SearchSubContent>{convertTextBold(subContent)}</SearchSubContent>
        <Divider margin={true} />
        <MoreView />
      </ContentPart>
    </>
  );
};
