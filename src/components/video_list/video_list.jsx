import React from "react";
import VideoItem from "../search_header/video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videoList }) => (
  <ul className={styles.list}>
    {videoList.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
