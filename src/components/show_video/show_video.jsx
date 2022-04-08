import React from "react";
import styles from "./show_video.module.css";

const ShowVideo = ({ selectedVideo }) => (
  <section className={styles.section}>
    <iframe
      id="ytplayer"
      type="text/html"
      width="100%"
      height="405"
      src={`https://www.youtube.com/embed/${selectedVideo.id}`}
      frameborder="0"
      allowfullscreen
    ></iframe>
    <h1>{selectedVideo.snippet.title}</h1>
    <p className={styles.channelTitle}>{selectedVideo.snippet.channelTitle}</p>
    <p className={styles.publishDate}>{selectedVideo.snippet.publishedAt}</p>
    <pre className={styles.description}>
      {selectedVideo.snippet.description}
    </pre>
  </section>
);

export default ShowVideo;
