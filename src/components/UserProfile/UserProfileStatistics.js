import React from "react";
import PropTypes from "prop-types";

import style from "./UserProfile.module.css";
import UserProfileStatisticItem from "./UserProfileStatisticItem";

const UserProfileStatistics = ({ followingCount, followerCount, heartCount }) => {
  return (
    <ul className={style.listFollow}>
      <UserProfileStatisticItem count={followingCount} name="Following" />
      <UserProfileStatisticItem count={followerCount} name="Followers" />
      <UserProfileStatisticItem count={heartCount} name="Likes" />
    </ul>
  );
};

UserProfileStatistics.propTypes = {
  followerCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
  heartCount: PropTypes.number.isRequired,
};

export default UserProfileStatistics;
