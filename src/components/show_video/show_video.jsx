import React from "react";
import styles from "./show_video.module.css";
import moment from "moment";

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
    <div className={styles.videoInfo}>
      <h1>{selectedVideo.snippet.title}</h1>
      <p>
        <span className={styles.publishDate}>Uploaded date </span>
        <span>{moment(selectedVideo.snippet.publishedAt).format("LL")}</span>
      </p>
      <p className={styles.channelTitle}>
        {selectedVideo.snippet.channelTitle}
      </p>
    </div>
    <hr />
    <pre className={styles.description}>
      {selectedVideo.snippet.description}
    </pre>
    <hr />
  </section>
);

export default ShowVideo;
