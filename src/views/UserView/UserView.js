import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Logger from "js-logger";
import { fetchTrendingVideo, getUserDetails } from "../../services/videoApi";

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
      .then(response => {
        setTrendingVideo(response.data);
        setLoadingVideo(false);
        return response.data;
      })
      .catch(error => {
        Logger.log(error.message);
        setLoadingVideo(false);
      });
  }, []);

  useEffect(() => {
    getUserDetails(name)
      .then(response => {
        setUserDetails(response.data);
        setLoadingUser(false);
        return response.data;
      })
      .catch(error => {
        Logger.log(error.message);
        setLoadingUser(false);
      });
  }, [name]);

  return (
    <>
      {isLoadingUser ? <Loading /> : <UserProfile key={userDetails.id} name={name} userDetails={userDetails} />}

      {isLoadingVideo ? (
        <Loading />
      ) : (
        <UserVideoList>
          {trendingVideo.map(video => (
            <UserVideoItem key={video.id} video={video} />
          ))}
        </UserVideoList>
      )}
    </>
  );
};

export default UserView;
