import React, { useEffect, useState } from "react";
import Logger from "js-logger";
import VideoList from "../../components/VideoList";
import VideoListItem from "../../components/VideoListItem";
import { fetchTrendingVideo } from "../../services/videoApi";
import Loading from "../../components/Loading";

const HomeView = () => {
  const [data, setData] = useState({
    error: "",
    videos: [],
    loading: true,
  });

  useEffect(() => {
    async function innerFunction() {
      try {
        const response = await fetchTrendingVideo();
        if (!response.data || response.data.length === 0) {
          setData(() => ({
            error: "response data is empty",
            videos: [],
            loading: false,
          }));
          return;
        }
        setData(() => ({
          error: "",
          videos: response.data,
          loading: false,
        }));
      } catch (error) {
        setData(() => ({
          error: error.message,
          videos: [],
          loading: false,
        }));
      }
    }

    Logger.trace(innerFunction());
  }, []);

  if (data.loading) {
    return <Loading />;
  }

  if (data.error) {
    return <h1>{`ERROR: ${data.error}`}</h1>;
  }

  return (
    <div>
      <VideoList>
        {data.videos.map(video => (
          <VideoListItem key={video.id} name={video.authorMeta.name} video={video} />
        ))}
      </VideoList>
    </div>
  );
};

export default HomeView;
