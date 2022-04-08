import React, { useRef } from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, video: { snippet }, selectVideo, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  const listRef = useRef();

  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <li
      ref={listRef}
      className={`${styles.container} ${displayType}`}
      onClick={() => {
        selectVideo(video);
        handleBackClick();
      }}
    >
      <div className={styles.video}>
        <img
          src={snippet.thumbnails.default.url}
          alt="thumbnail"
          className={styles.thumbnails}
        />
        <div className={styles.info}>
          <h2 className={styles.title}>{snippet.title}</h2>
          <h2 className={styles.channel}>{snippet.channelTitle}</h2>
        </div>
      </div>
    </li>
  );
};
export default VideoItem;
