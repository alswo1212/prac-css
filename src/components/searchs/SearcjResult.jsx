import Container from "@components/divs/Container";
import Divider from "@components/divs/Divider";
import styled from "styled-components";
import FullFillButton from "@components/buttons/FullFillButton";
import Dot from "@components/divs/Dot";
import DotDotDot from "@components/buttons/DotDotDot";
import MainArticle from "@components/articles/MainArticle";
import Frame from "@components/divs/Frame";
import PersonCard from "@components/searchs/PersonCard";
import IconButton from "../buttons/IconButton";
import { common2IconUrl, iconDatas } from "../../consts/iconData";
import MoreView from "./MoreView";
import SearchContent from "./SearchContent";

const SectionWrap = styled.div`
  display: flex;
  width: 100%;
`;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 728px;
  padding: 14px 0 24px 0;
`;
const SubSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 432px;
  padding: 14px 0 24px 0;
`;

const Test = styled.div`
  width: 100%;
  height: 100px;
  background: blue;
`;

export default function SearchResult() {
  const cardDatas = [
    [
      {
        siteName: "나무위키",
        domain: ["namu.wiki", "최민재(야구선수)"],
        mainTitle: "최민재(야구선수)",
        mainContent: `대한민국의 前 야구 선수. 2013년 KBO 신인 드래프트에서 2차 4라운드 전체
          33순위로 지명을 받고 SK 와이번스의 유니폼을 입었다.`,
        warning: true,
        subTitle: "최민재 - 나무위키",
        subContent: `자세한 내용은 최민재(야구선수) 문서를 참고하십시오. 자세한 내용은
          최민재(황금의 제국) 문서를 참고하십시오.`,
      },
      {
        siteName: "KBO",
        domain: ["koreabaseball.com", "Record"],
        mainTitle: "타자 | 선수 기록",
        mainContent: `선수명: 최민재 · 등번호: No. 생년월일: 1994년 01월 08일 · 포지션: 외야수(우투좌타) · 신장/체중: 179cm/85kg · 경력: 대전신흥초-공주중-화순고-SK · 입단 계약금: 7000만원 · 연봉: 3300만원 · 지명순위: 13 SK 4라운드 33순위 · 입단년도: 18SK`,
        subTitle: "통산기록 - KBO",
        subContent: `선수명: 최민재 · 등번호: No. 생년월일: 1994년 01월 08일 · 포지션: 외야수(우투좌타) · 신장/체중: 179cm/85kg · 경력: 대전신흥초-공주중-화순고-SK · 입단 계약금: 7000만원 · 연봉: 3300만원 · 지명순위: 13 SK 4라운드 33순위 · 입단년도: 18SK`,
      },
    ],
  ];
  return (
    <Container>
      <SectionWrap>
        <MainSection>
          <PersonCard />
          {cardDatas.map((bundle) => (
            <MainArticle>
              <Frame>
                {bundle.map((data, idx) => (
                  <>
                    <SearchContent {...data} />
                    {idx != bundle.length - 1 && <Divider margin={true} />}
                  </>
                ))}
              </Frame>
            </MainArticle>
          ))}
          <Test />
          <Test />
          <Test />
          <Test />
        </MainSection>
        <SubSection>
          <Test />
          <Test />
          <Test />
          <Test />
        </SubSection>
      </SectionWrap>
    </Container>
  );
}
