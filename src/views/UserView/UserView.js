import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserDetails, fetchTrendingVideo } from "../../services/videoAPI";

import UserProfile from "../../components/UserProfile";
import UserVideoList from "../../components/UserVideoList";
import UserVideoItem from "../../components/UserVideoItem";
import Loading from "../../components/Loading";

const UserView = () => {
  const { name } = useParams();
  const [isLoadingUser, setLoadingUser] = useState(true);
  const [isLoadingVideo, setLoadingVideo] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const [trendingVideo, setTrendingVideo] = useState([]);

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

  useEffect(() => {
    getUserDetails(name)
      .then((response) => {
        setUserDetails(response.data);
        setLoadingUser(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoadingUser(false);
      });
  }, [name]);

  return (
    <>
      {isLoadingUser ? (
        <Loading />
      ) : (
        <UserProfile
          key={userDetails.id}
          name={name}
          userDetails={userDetails}
        />
      )}

      {isLoadingVideo ? (
        <Loading />
      ) : (
        <UserVideoList>
          {trendingVideo.map((video) => (
            <UserVideoItem key={video.id} video={video} />
          ))}
        </UserVideoList>
      )}
    </>
  );
};

export default UserView;
