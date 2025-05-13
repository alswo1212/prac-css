import Container from "@components/divs/Container";
import Divider from "@components/divs/Divider";
import styled from "styled-components";
import IconButton from "@components/buttons/IconButton";
import { iconDatas, searchIconUrl } from "@consts/iconData";

const RootNav = styled.nav`
  position: relative;
`;

const Wrap = styled.div`
  display: flex;
  gap: 30px;
`;
const ListWrap = styled.div`
  padding-left: 15px;
  width: 633px;
  overflow: hidden;
  overflow-x: auto;
  scrollbar-width: none;
`;

const ListUl = styled.ul`
  display: flex;
  gap: 10px;
`;

const ListLi = styled.li`
  padding: 10px;
  border-radius: 30px;
  background: #f7f7f9;
  flex: 0 0 auto;
  font-size: 15px;
`;

const OptionIconWrap = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
  }
`;

const ShareWrap = styled.div`
  display: flex;
  gap: 4px;
  position: absolute;
  top: 22px;
  right: 22px;
  padding: 8px;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 30px;
  }
`;

const SharText = styled.a`
  font-size: 14px;
  color: #999;
`;

export default function SearchNav() {
  const navTexts = [
    "이미지",
    "블로그",
    "카페",
    "지식iN",
    "인플루언서",
    "동영상",
    "쇼핑",
    "뉴스",
    "숏텐츠",
    "어학사전",
    "지도",
    "도서",
    "지식백과",
    "학술정보",
  ];
  return (
    <RootNav>
      <Container>
        <Wrap>
          <ListWrap>
            <ListUl>
              {navTexts.map((text) => (
                <ListLi>{text}</ListLi>
              ))}
            </ListUl>
          </ListWrap>
          <OptionIconWrap>
            <IconButton iconData={iconDatas.searchOption} url={searchIconUrl} />
          </OptionIconWrap>
        </Wrap>
      </Container>
      <ShareWrap>
        <IconButton iconData={iconDatas.share} url={searchIconUrl} />
        <SharText>공유</SharText>
      </ShareWrap>
      <Divider />
    </RootNav>
  );
}
