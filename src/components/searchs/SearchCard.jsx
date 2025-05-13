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
  & > h1 {
    font-size: 18px;
    font-weight: 600;
  }
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
    side: <></>,
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
          {contents.map((data, idx) => (
            <>
              <SearchContent {...data} searchText={"최민재"} />
              {idx != contents.length - 1 && <Divider margin={true} />}
            </>
          ))}
        </PaddingFrame>
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
