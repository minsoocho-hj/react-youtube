/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import ShowVideo from "./components/show_video/show_video";

function App() {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const display = () => {};
  const searchVideo = (query) => {
    setSelectedVideo(null);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}r&key=AIzaSyDoifx4fcdLl7xMHxIhje4Z5t0QwAE77Zk`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideoList(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDoifx4fcdLl7xMHxIhje4Z5t0QwAE77Zk",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideoList(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
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
    </>
  );
}

export default App;
