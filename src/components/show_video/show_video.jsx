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
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h1>{selectedVideo.snippet.title}</h1>

    <p className={styles.publishDate}>{selectedVideo.snippet.publishedAt}</p>
    <p className={styles.channelTitle}>{selectedVideo.snippet.channelTitle}</p>
    <hr />
    <pre className={styles.description}>
      {selectedVideo.snippet.description}
    </pre>
    <hr />
  </section>
);

export default ShowVideo;
