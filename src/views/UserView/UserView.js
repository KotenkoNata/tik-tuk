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
  const [userDetails, setUserDetails] = useState({
    data: {},
    error: "",
    loading: true,
  });
  const [trendingVideos, setTrendingVideos] = useState({
    data: [],
    error: "",
    loading: true,
  });

  useEffect(() => {
    async function innerFunction() {
      try {
        const response = await fetchTrendingVideo();
        setTrendingVideos(() => ({
          data: response.data,
          error: "",
          loading: false,
        }));
      } catch (error) {
        setTrendingVideos(() => ({
          data: [],
          error: error.message,
          loading: false,
        }));
      }
    }

    Logger.trace(innerFunction());
  }, []);

  useEffect(() => {
    async function innerFunction() {
      try {
        const response = await getUserDetails(name);
        setUserDetails(() => ({
          data: response.data,
          error: "",
          loading: false,
        }));
      } catch (error) {
        setUserDetails(() => ({
          data: {},
          error: error.message,
          loading: false,
        }));
      }
    }

    Logger.trace(innerFunction());
  }, [name]);

  if (userDetails.loading && trendingVideos.loading) {
    return <Loading />;
  }

  return (
    <>
      {userDetails.loading ? (
        <Loading />
      ) : (
        <UserProfile key={userDetails.data.id} name={name} userDetails={userDetails.data} />
      )}
      {trendingVideos.loading ? (
        <Loading />
      ) : (
        <UserVideoList>
          {trendingVideos.data.map(video => (
            <UserVideoItem key={video.id} video={video} />
          ))}
        </UserVideoList>
      )}
    </>
  );
};

export default UserView;
