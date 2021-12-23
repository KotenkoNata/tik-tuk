import React from "react";
import { useParams } from "react-router-dom";

import UserProfile from "../../components/UserProfile";
import UserVideoList from "../../components/UserVideoList";
import UserVideoItem from "../../components/UserVideoItem";
import Loading from "../../components/Loading";
import useUserDetails from "./useUserDetails";
import useTrendingVideos from "./useTrendingVideos";

const UserView = () => {
  const { name } = useParams();
  const [userDetails, userDetailsLoading] = useUserDetails(name);
  const [trendingVideos, trendingVideosLoading] = useTrendingVideos();

  if (userDetailsLoading && trendingVideosLoading) {
    return <Loading />;
  }

  return (
    <>
      {userDetailsLoading ? <Loading /> : <UserProfile name={name} userDetails={userDetails} />}
      {trendingVideosLoading ? (
        <Loading />
      ) : (
        <UserVideoList>
          {trendingVideos.map(video => (
            <UserVideoItem key={video.id} video={video} />
          ))}
        </UserVideoList>
      )}
    </>
  );
};

export default UserView;
