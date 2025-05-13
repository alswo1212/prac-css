import Divider from "@components/divs/Divider";
import MoreView from "@components/searchs/MoreView";
import styled from "styled-components";
import DataWarning from "./DataWarning";
import { convertTextBold } from "@utils/convert";
import SiteInfo from "@components/searchs/SiteInfo";

const SearchTitle = styled.a`
  display: block;
  font-size: 18px;
  color: #0c43b7;
  & span {
    cursor: pointer;
  }
`;
const ContentPart = styled.div`
  margin: 10px 0 15px 0;
  display: flow-root;
`;
const SearchContent = styled.a`
  display: -webkit-box;
  margin: 5px 0 15px 0;
  line-height: 24px;
  color: #222;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
  margin: 5px 0 15px 0;
  line-height: 24px;
  color: #222;
`;

const Img = styled.div`
  float: ${(props) => props.float || `none`};
  background: ${(props) => props.bg || `none`};
  width: 104px;
  height: 104px;
  border-radius: 10px;
`;

const DateSpan = styled.span`
  color: #aaa;
  margin-right: 5px;
`;

export default ({
  site,
  title,
  content,
  isMain = false,
  warning = false,
  isMoreView = false,
  searchText = "",
  imgData,
  date = "",
}) => {
  return (
    <>
      {site && <SiteInfo {...site} />}
      <ContentPart>
        {imgData && <Img {...imgData} />}
        {isMain ? (
          <>
            <SearchTitle>
              <span>{convertTextBold(title, searchText)}</span>
            </SearchTitle>
            <SearchContent>
              {date && <DateSpan>{date}</DateSpan>}
              {convertTextBold(content, searchText)}
            </SearchContent>
          </>
        ) : (
          <>
            <SubContentTitle>
              <span>{convertTextBold(title, searchText)}</span>
            </SubContentTitle>
            <SearchSubContent>
              {date && <DateSpan>{date}</DateSpan>}
              {convertTextBold(content, searchText)}
            </SearchSubContent>
          </>
        )}
        {warning && <DataWarning />}
        {isMoreView && (
          <>
            <Divider margin={true} />
            <MoreView />
          </>
        )}
      </ContentPart>
    </>
  );
};
