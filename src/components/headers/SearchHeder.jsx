import styled from "styled-components";
import HeaderLoginButton from "@components/buttons/HeaderLoginButton";
import { iconDatas, commonIconUrl } from "@consts/iconData";
import IconButton from "@components/buttons/IconButton";
import Search from "@components/searchs/Search";
import CheckButton from "@components/buttons/CheckButton";

const Header = styled.header`
  min-width: 1160px;
  background: white;
  border-bottom: 1px solid #03c75a;
  height: 65px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderSection = styled.div`
  width: 1160px;
  margin: 0 auto;
`;

const HeaerBtnWrap = styled.div`
  position: absolute;
  display: flex;
  gap: 15px;
  top: 20px;
  right: 30px;
  align-items: center;
`;

export default function SearchHeader() {
  return (
    <Header>
      <HeaderSection>
        <Search />
      </HeaderSection>
      <HeaerBtnWrap>
        <CheckButton>색 바뀌는 버튼</CheckButton>
        <HeaderLoginButton />
        <IconButton iconData={iconDatas.allService} url={commonIconUrl} />
      </HeaerBtnWrap>
    </Header>
  );
}
