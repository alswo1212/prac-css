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
import SearchCard from "@components/searchs/SearchCard";

const SectionWrap = styled.div`
  display: flex;
  width: 100%;
`;

const MainSection = styled.section`
  width: 728px;
  padding: 14px 0 24px 0;
`;
const SubSection = styled.section`
  width: 432px;
  padding: 14px 0 24px 0;
`;

const Test = styled.div`
  width: 100%;
  height: 100px;
  background: blue;
  margin-bottom: 24px;
`;

export default function SearchResult() {
  const cardDatas = [
    {
      cardType: "",
      isSearchMore: false,
      contents: [
        {
          site: {
            siteName: "나무위키",
            infos: ["namu.wiki", "최민재(야구선수)"],
          },
          isMain: true,
          title: "최민재(야구선수)",
          content: `대한민국의 前 야구 선수. 2013년 KBO 신인 드래프트에서 2차 4라운드 전체
          33순위로 지명을 받고 SK 와이번스의 유니폼을 입었다.`,
          warning: true,
          isMoreView: true,
        },
        {
          title: "최민재 - 나무위키",
          content: `자세한 내용은 최민재(야구선수) 문서를 참고하십시오. 자세한 내용은
          최민재(황금의 제국) 문서를 참고하십시오.`,
        },
        {
          site: {
            siteName: "KBO",
            infos: ["koreabaseball.com", "Record"],
          },
          isMain: true,
          title: "타자 | 선수 기록",
          content: `선수명: 최민재 · 등번호: No. 생년월일: 1994년 01월 08일 · 포지션: 외야수(우투좌타) · 신장/체중: 179cm/85kg · 경력: 대전신흥초-공주중-화순고-SK · 입단 계약금: 7000만원 · 연봉: 3300만원 · 지명순위: 13 SK 4라운드 33순위 · 입단년도: 18SK`,
        },
        {
          title: "통산기록 - KBO",
          content: `선수명: 최민재 · 등번호: No. 생년월일: 1994년 01월 08일 · 포지션: 외야수(우투좌타) · 신장/체중: 179cm/85kg · 경력: 대전신흥초-공주중-화순고-SK · 입단 계약금: 7000만원 · 연봉: 3300만원 · 지명순위: 13 SK 4라운드 33순위 · 입단년도: 18SK`,
          isMoreView: true,
        },
      ],
    },
    {
      cardType: "search",
      isSearchMore: true,
      contents: [
        {
          site: {
            siteName: "위키백과 한국어",
            infos: ["ko.wikipedia.org", "최민재"],
          },
          isMain: true,
          title: "최민재 - 위키백과 한국어",
          content:
            "최민재 (崔珉宰, 1994년 1월 8일 ~ )는 전 KBO 리그 롯데 자이언츠의 외야수이다. 선수 시절 SK 와이번스 시절 2013년에 입단하였다. 2019년 5월 30일 kt 위즈와의 경기에서 데뷔 첫 경기를 치렀고, 경기에서 2타수 무안타를 기록했다. 롯데 자이언츠 시절 2020년 KBO 리그 2차 드래프트를 통해 이적하였다. 2023년 6월에 은퇴했다. 출신 학교 대전신흥초등학교 공주중학교 화순고등학교 통산 기록 외부 링크 최민재 - KBO 타자별 기록...",
          warning: true,
        },
        {
          title: "최민재 (동음이의)",
          content:
            '최민재 의 다른 뜻은 다음과 같다. 실존 인물 최민재(崔珉宰, 1994년 ~ )는 전 KBO 리그 롯데 자이언츠의 외야수이다. 가공 인물 타임즈의 등장 인물 경관의 피의 등장 인물 같이 보기 제목에 "최민재" 항목을 포함한 모든 문서',
          isMoreView: true,
        },
        {
          site: {
            siteName: "OEML",
            infos: ["www.mjchoi.net"],
          },
          isMain: true,
          title: "NEO | 최민재 교수 연구실",
          content: `(25/04) 권가연 (석사과정) 학생 "여대학원생 공학연구팀제 지원사업" 심화과정에 선정. 축하합니다! (25/03) 이정규 (박사과정) 학생 "김성원 장학" 수상자로 선정. 축하합니다! (25/02) 이정규 (박사과정), 엄주영 (석사과정), 김용찬 (석사과정) 학생이 입학했습니다. 환영합니다! (25/02) 이정규, 김정현 학생이 졸업했습니다. 축하합니다! (24/12) 석사과정 이정규 학생의 연구가 Materials Tod...`,
        },
        {
          site: {
            siteName: "Whois",
            infos: ["people.udanax.org", "최민재"],
          },
          isMain: true,
          title: "최민재 - Whois",
          content: `대한민국 출신 영화배우 최민재에 대한 인물 정보- 인물 경력 약력 정보 및 최근 뉴스. 최신 정보와 경력을 확인하세요!`,
          date: "2024.08.02.",
          imgData: {
            float: "right",
            bg: "blue",
          },
        },
      ],
    },
    // {
    //   cardType: "news",
    //   isSearchMore: true,
    //   contents: [
    //     {
    //       site: {
    //         siteName: "위키백과 한국어",
    //         infos: ["ko.wikipedia.org", "최민재"],
    //       },
    //       isMain: true,
    //       title: "최민재 - 위키백과 한국어",
    //       content: `최민재 (崔珉宰, 1994년 1월 8일 ~ )는 전 KBO 리그 롯데 자이언츠의 외야수이다. 선수 시절 SK 와이번스 시절 2013년에 입단하였다. 2019년 5월 30일 kt 위즈와의 경기에서 데뷔 첫 경기를 치렀고, 경기에서 2타수 무안타를 기록했다. 롯데 자이언츠 시절 2020년 KBO 리그 2차 드래프트를 통해 이적하였다. 2023년 6월에 은퇴했다. 출신 학교 대전신흥초등학교 공주중학교 화순고등학교 통산 기록 외부 링크 최민재 - KBO 타자별 기록...`,
    //       warning: true,
    //     },
    //     {
    //       title: "최민재 (동음이의)",
    //       content: `자세한 내용은 최민재(야구선수) 문서를 참고하십시오. 자세한 내용은
    //         최민재(황금의 제국) 문서를 참고하십시오.`,
    //     },
    //     {
    //       site: {
    //         siteName: "OEML",
    //         infos: ["www.mjchoi.net"],
    //       },
    //       title: "NEO | 최민재 교수 연구실",
    //       content: `(25/04) 권가연 (석사과정) 학생 "여대학원생 공학연구팀제 지원사업" 심화과정에 선정. 축하합니다! (25/03) 이정규 (박사과정) 학생 "김성원 장학" 수상자로 선정. 축하합니다! (25/02) 이정규 (박사과정), 엄주영 (석사과정), 김용찬 (석사과정) 학생이 입학했습니다. 환영합니다! (25/02) 이정규, 김정현 학생이 졸업했습니다. 축하합니다! (24/12) 석사과정 이정규 학생의 연구가 Materials Tod...`,
    //     },
    //     {
    //       title: "통산기록 - KBO",
    //       content: `선수명: 최민재 · 등번호: No. 생년월일: 1994년 01월 08일 · 포지션: 외야수(우투좌타) · 신장/체중: 179cm/85kg · 경력: 대전신흥초-공주중-화순고-SK · 입단 계약금: 7000만원 · 연봉: 3300만원 · 지명순위: 13 SK 4라운드 33순위 · 입단년도: 18SK`,
    //     },
    //   ],
    // },
    {
      cardType: "image",
      isSearchMore: true,
      titleVisiable: true,
      contents: [
        { bg: "red" },
        { bg: "orange" },
        { bg: "yellow" },
        { bg: "green" },
        { bg: "blue" },
        { bg: "aqua" },
        { bg: "tomato" },
        { bg: "lightgray" },
        { bg: "pink" },
        { bg: "" },
      ],
    },
  ];

  return (
    <Container>
      <SectionWrap>
        <MainSection>
          <PersonCard />
          {cardDatas.map((data) => (
            <SearchCard {...data} />
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
