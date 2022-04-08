import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ searchVideo }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    let keyword = inputRef.current.value;
    searchVideo(keyword);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <header className="header">
      <img src="../public/images/youtube.png" alt="" />
      <h1 className="title">Youtube</h1>
      <input
        ref={inputRef}
        type="text"
        className="searchInput"
        placeholder="Search"
        onKeyPress={onKeyPress}
      />
      <button className="btn" onClick={onClick}>
        Search
      </button>
    </header>
  );
};

export default SearchHeader;
