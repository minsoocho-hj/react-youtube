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
    <header className={styles.header}>
      <img src="./images/youtube.png" alt="" className={styles.icon} />
      <h1 className={styles.title}>Youtube</h1>
      <input
        ref={inputRef}
        type="text"
        className={styles.searchInput}
        placeholder="Search"
        onKeyPress={onKeyPress}
      />
      <button className={styles.btn} onClick={onClick}>
        <img
          src="./images/searchIcon.png"
          alt=""
          className={styles.searchIcon}
        />
      </button>
    </header>
  );
};

export default SearchHeader;
