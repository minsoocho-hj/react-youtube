import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.video}>
    <img
      src={snippet.thumbnails.default.url}
      alt="thumbnail"
      className={styles.thumbnails}
    />
    <div className={styles.info}>
      <h2 className={styles.title}>{snippet.title}</h2>
      <h2 className={styles.channel}>{snippet.channelTitle}</h2>
    </div>
  </li>
);
export default VideoItem;
