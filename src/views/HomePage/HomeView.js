import React, { useEffect, useState } from "react";
import VideoList from "../../components/VideoList";
import VideoListItem from "../../components/VideoListItem";
import { fetchTrendingVideo } from "../../services/videoAPI";
import Loading from "../../components/Loading";

const HomeView = () => {
  const [trendingVideo, setTrendingVideo] = useState([]);
  const [isLoadingVideo, setLoadingVideo] = useState(true);

  useEffect(() => {
    fetchTrendingVideo()
      .then((response) => {
        setTrendingVideo(response.data);
        setLoadingVideo(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoadingVideo(false);
      });
  }, []);

  return (
    <>
      {isLoadingVideo ? (
        <Loading />
      ) : (
        <VideoList>
          {trendingVideo.map((video) => (
            <VideoListItem
              key={video.id}
              video={video}
              name={video.authorMeta.name}
            />
          ))}
        </VideoList>
      )}
    </>
  );
};

export default HomeView;
