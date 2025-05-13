import Divider from "@components/divs/Divider";
import styled from "styled-components";
import IconButton from "@components/buttons/IconButton";
import { common2IconUrl, iconDatas } from "@consts/iconData";

const WarningText = styled.div`
  color: #939396;
  font-size: 14px;
  line-height: 19px;
`;

export default () => {
  return (
    <>
      <Divider margin={true} />
      <WarningText>
        위 사이트의 콘텐츠는 모두가 자유롭게 편집할 수 있으며, 네이버는 이
        콘텐츠의 사실성을 보장할 수 없습니다.
        <IconButton iconData={iconDatas.question} url={common2IconUrl} />
      </WarningText>
    </>
  );
};
