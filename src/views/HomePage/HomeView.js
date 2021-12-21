import React, { useEffect, useState } from "react";
import Logger from "js-logger";
import VideoList from "../../components/VideoList";
import VideoListItem from "../../components/VideoListItem";
import { fetchTrendingVideo } from "../../services/videoApi";
import Loading from "../../components/Loading";

const HomeView = () => {
  const [trendingVideo, setTrendingVideo] = useState([]);
  const [isLoadingVideo, setLoadingVideo] = useState(true);

  useEffect(() => {
    async function innerFunction() {
      try {
        const { data } = await fetchTrendingVideo();
        setTrendingVideo(data);
      } catch (error) {
        Logger.error(error.message);
      } finally {
        setLoadingVideo(false);
      }
    }

    Logger.trace(innerFunction());
  }, []);

  return (
    <div>
      {isLoadingVideo ? (
        <Loading />
      ) : (
        <VideoList>
          {trendingVideo.map(video => (
            <VideoListItem key={video.id} video={video} name={video.authorMeta.name} />
          ))}
        </VideoList>
      )}
    </div>
  );
};

export default HomeView;
