import styled from "styled-components";
import IconButton from "@components/buttons/IconButton";
import { iconDatas, searchIconUrl } from "@consts/iconData";
import SearchInput from "@components/inputs/SearchInput";

const SearchWrap = styled.div`
  display: flex;
  gap: 5px;
  width: 700px;
  height: 44px;
  padding: 12px 0 8px 20px;
  align-items: center;
`;

const SearchBoxIconsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

export default function Search() {
  return (
    <SearchWrap>
      <IconButton iconData={iconDatas.nLogo} url={searchIconUrl} />
      <SearchInput />
      <SearchBoxIconsWrap>
        <IconButton iconData={iconDatas.keyboard} url={searchIconUrl} />
        <IconButton iconData={iconDatas.searchLayer} url={searchIconUrl} />
        <IconButton iconData={iconDatas.searchIcon} url={searchIconUrl} />
      </SearchBoxIconsWrap>
    </SearchWrap>
  );
}
