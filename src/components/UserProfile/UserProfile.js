import React from "react";
import PropTypes from "prop-types";
import style from "./UserProfile.module.css";
import ButtonUser from "../Button";
import UserProfileStatistics from "./UserProfileStatistics";

const UserProfile = ({ name, userDetails }) => {
  if (Object.keys(userDetails).length === 0) {
    return (
      <div>
        <h1>User Details are empty because API returns status 200 and empty object!</h1>
      </div>
    );
  }

  const {
    user: { avatarMedium, nickname, signature },
    stats: { followerCount, followingCount, heartCount },
  } = userDetails;

  return (
    <div className={style.mainContainer}>
      <div className={style.userContainer}>
        <div>
          <img alt={nickname} className={style.avatar} src={avatarMedium} />
        </div>
        <div className={style.nameContainer}>
          <h1 className={style.userName}>{name}</h1>
          <h2 className={style.userNickname}>{nickname}</h2>
          <ButtonUser>Follow</ButtonUser>
        </div>
      </div>
      <UserProfileStatistics followerCount={followerCount} followingCount={followingCount} heartCount={heartCount} />
      <p className={style.userSignature}>{signature}</p>
    </div>
  );
};

const User = PropTypes.shape({
  avatarMedium: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  signature: PropTypes.string.isRequired,
});

const Stats = PropTypes.shape({
  followerCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
  heartCount: PropTypes.number.isRequired,
});

const UserDetails = PropTypes.shape({
  stats: Stats.isRequired,
  user: User.isRequired,
});

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  userDetails: UserDetails.isRequired,
};

export default UserProfile;
