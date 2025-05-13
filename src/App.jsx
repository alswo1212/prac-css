import "./App.css";
import styled from "styled-components";
import SearchHeader from "@components/headers/SearchHeder";
import SearchNav from "@components/navs/SearchNav";
import SearchResult from "@components/searchs/SearchResult";

function App() {
  return (
    <>
      <SearchHeader />
      <SearchNav />
      <SearchResult />
      <div
        style={{
          height: `200vh`,
        }}
      ></div>
    </>
  );
}

export default App;
