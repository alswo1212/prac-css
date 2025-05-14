import MainArticle from "@components/articles/MainArticle";
import Divider from "@components/divs/Divider";
import styled from "styled-components";
import SearchContent from "@components/searchs/SearchContent";

const Frame = styled.div`
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #eee;
  padding: 20px 0 0 0;
`;
const PaddingFrame = styled.div`
  padding: 0 20px;
`;
const CartTile = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  & > h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;

const ImageReport = styled.span`
  color: #aaa;
  font-size: 13px;
`;
const typeThan = {
  news: {
    name: "뉴스",
    side: <></>,
  },
  search: {
    name: "검색결과",
    side: <></>,
  },
  image: {
    name: "이미지",
    side: <ImageReport>이미지 신고하기기</ImageReport>,
  },
};
const MoreSearch = styled.div`
  text-align: center;
  padding: 20px 0;
  &:hover {
    background: #eee;
    cursor: pointer;
  }
`;
const ImgWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Img = styled.div`
  background: ${(props) => props.bg || `black`};
  width: 20%;
  aspect-ratio: 1 / 1;
`;
export default ({ cardType, isSearchMore, contents, titleVisiable }) => {
  return (
    <MainArticle>
      <Frame>
        <PaddingFrame>
          {titleVisiable && typeThan[cardType] && (
            <CartTile>
              <h1>{typeThan[cardType].name}</h1>
              <div>{typeThan[cardType].side}</div>
            </CartTile>
          )}
          {cardType !== "image" &&
            contents.map((data, idx) => (
              <>
                <SearchContent {...data} searchText={"최민재"} />
                {idx != contents.length - 1 && <Divider margin={true} />}
              </>
            ))}
        </PaddingFrame>
        {cardType === "image" && (
          <ImgWrap>
            {contents.map((data) => (
              <Img {...data} />
            ))}
          </ImgWrap>
        )}
        {isSearchMore && typeThan[cardType] && (
          <>
            <Divider />
            <MoreSearch>{typeThan[cardType].name} 더보기 →</MoreSearch>
          </>
        )}
      </Frame>
    </MainArticle>
  );
};
