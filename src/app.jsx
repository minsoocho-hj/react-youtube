/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import "./app.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videoList, setVideoList] = useState([]);

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
      <SearchHeader />
      <VideoList videoList={videoList} />
    </>
  );
}

export default App;
