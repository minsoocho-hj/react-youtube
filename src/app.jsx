/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import ShowVideo from "./components/show_video/show_video";

function App({ youtube }) {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const searchVideo = (query) => {
    youtube
      .search(query) //
      .then((video) => {
        setVideoList(video);
        setSelectedVideo(null);
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideoList(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader searchVideo={searchVideo} />
      <div className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <ShowVideo selectedVideo={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videoList={videoList}
            selectVideo={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
