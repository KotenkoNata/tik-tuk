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
  const [userVideos, userVideosLoading] = useTrendingVideos(name);
  if (userDetailsLoading && userVideosLoading) {
    return <Loading />;
  }

  return (
    <>
      {userDetailsLoading ? <Loading /> : <UserProfile name={name} userDetails={userDetails} />}
      {userVideosLoading ? (
        <Loading />
      ) : (
        <UserVideoList>
          {userVideos.map(video => (
            <UserVideoItem key={video.aweme_id} video={video} />
          ))}
        </UserVideoList>
      )}
    </>
  );
};

export default UserView;
