import styled from "styled-components";
import MainArticle from "@components/articles/MainArticle";
import Frame from "@components/divs/Frame";
import DotDotDot from "@components/buttons/DotDotDot";
import Dot from "@components/divs/Dot";
import FullFillButton from "@components/buttons/FullFillButton";
import Divider from "@components/divs/Divider";
import IconButton from "@components/buttons/IconButton";
import { iconDatas, keypageIconUrl } from "@consts/iconData";

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const SubTitle = styled.span`
  font-size: 14px;
  color: #836b56;
`;

const PersonDataWrap = styled.div`
  border-left: 2px solid #f4f2ef;
  padding-left: 15px;
`;

const PropWrap = styled.div`
  position: reative;
`;
const PersonProp = styled.span`
  color: #939396;
  position: absolute;
`;
const Value = styled.div`
  margin: 5px 0 0 60px;
`;
const PersonData = ({ prop, val }) => {
  return (
    <PropWrap>
      <PersonProp>{prop}</PersonProp>
      {val.map((text) => (
        <Value>{text}</Value>
      ))}
    </PropWrap>
  );
};

const TempImg = styled.div`
  background: blue;
  width: 88px;
  height: 108px;
  float: right;
  border-radius: 12px;
`;

const InfoWrap = styled.div`
  color: #939396;
  font-size: 14px;
  & p {
    margin-top: 5px;
  }
  & a {
    color: #939396;
  }
`;

const IconButton2 = styled.span`
  display: inline-block;
  background: url(${(props) => props.url}) 0 0 no-repeat;
  background-size: ${(props) => props.bgSize || "280px 266px"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-position: ${(props) => props.bgPosition};
`;

export default () => {
  const subTitles = ["Min Jae Choi", "야구선수"];
  const anchors = ["전체", "프로필", "수상"];
  const personData = [
    { prop: "출생", val: ["1994.01.08. 대전광역시"] },
    { prop: "신체", val: ["178.2cm, 85kg"] },
    { prop: "학력", val: ["화순고등학교"] },
    { prop: "데뷔", val: ["2013 SK 와이번스 입단"] },
    {
      prop: "경력",
      val: [
        "2017 제28회 아시아선수권대회 야구 국가대표",
        "2011.12. 한국 일본 대만 고교야구대회 국가대표",
      ],
    },
    { prop: "사이트", val: ["인스타그램"] },
  ];
  return (
    <MainArticle>
      <Frame>
        <DotDotDot />
        <Title>최민재</Title>
        {subTitles.map((text, idx) => (
          <>
            <SubTitle>{text}</SubTitle>
            {idx === subTitles.length - 1 || <Dot />}
          </>
        ))}
        <div>
          {anchors.map((a, idx) => (
            <FullFillButton isSelected={idx === 0} bgColor={"#ad8e71"}>
              {a}
            </FullFillButton>
          ))}
        </div>
        <Divider margin={true} />
        <PersonDataWrap>
          <TempImg />
          {personData.map((data) => (
            <PersonData {...data} />
          ))}
        </PersonDataWrap>
        <Divider margin={true} />
        <InfoWrap>
          <p>본인 또는 대리인이 직접 관리하는 정보입니다.</p>
          <p>
            본인참여 2024.07.09.
            <IconButton2 {...iconDatas.info} url={keypageIconUrl} />
          </p>
          <p>
            <a href="">인물정보 본인참여</a>
            <Dot />
            <a href="">직업별 등재기준</a>
          </p>
        </InfoWrap>
      </Frame>
    </MainArticle>
  );
};
