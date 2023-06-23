import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";

import YoutubeSlider from "../youtube/YoutubeSlider";
import YoutubeSearch from "../youtube/YoutubeSearch";
import YoutubeTag from "../youtube/YoutubeTag";
import YoutubeCont from "../youtube/YoutubeCont";

const YoutubePage = () => {
  const [youtubes, setYoutubes] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAi3oS-PQt8OVW6Njn4l4CEXeK8m8W-fMQ&maxResults=27&part=snippet&q=${query}&type=video`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=27&key=AIzaSyAi3oS-PQt8OVW6Njn4l4CEXeK8m8W-fMQ"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Contents>
        <ContTitle title="youtube" />
        <YoutubeSlider />
        <YoutubeSearch onSearch={search} />
        <YoutubeTag onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
      </Contents>
    </>
  );
};

export default YoutubePage;
