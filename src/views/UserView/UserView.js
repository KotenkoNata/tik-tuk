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

  useEffect(() => {
    async function innerFunction() {
      try {
        const { data } = await getUserDetails(name);
        setUserDetails(data);
      } catch (error) {
        Logger.error(error.message);
      } finally {
        setLoadingUser(false);
      }
    }

    Logger.trace(innerFunction());
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
