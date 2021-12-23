import React from "react";
import PropTypes from "prop-types";
import style from "./UserProfile.module.css";
import UserProfileStatisticItem from "./UserProfileStatisticItem";

const UserProfileStatistics = ({ followingCount, followerCount, heartCount }) => {
  const names = {
    following: "Following",
    followers: "Followers",
    likes: "Likes",
  };
  return (
    <ul className={style.listFollow}>
      <UserProfileStatisticItem count={followingCount} name={names.following} />
      <UserProfileStatisticItem count={followerCount} name={names.followers} />
      <UserProfileStatisticItem count={heartCount} name={names.likes} />
    </ul>
  );
};

UserProfileStatistics.propTypes = {
  followerCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
  heartCount: PropTypes.number.isRequired,
};

export default UserProfileStatistics;
