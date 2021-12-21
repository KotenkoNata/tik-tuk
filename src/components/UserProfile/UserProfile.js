import React from "react";
import PropTypes from "prop-types";
import style from "./UserProfile.module.css";
import ButtonUser from "../Button";
import nFormatter from "../../nFormatter";

const UserProfile = ({ name, userDetails }) => {
  const {
    user: { avatarMedium, nickname, signature },
    stats: { followerCount, followingCount, heartCount },
  } = userDetails;

  return (
    <div className={style["main-container"]}>
      <div className={style["user-container"]}>
        <div>
          <img alt={nickname} className={style.avatar} src={avatarMedium} />
        </div>
        <div className={style["name-container"]}>
          <h1 className={style["user-name"]}>{name}</h1>
          <h2 className={style["user-nickname"]}>{nickname}</h2>
          <ButtonUser>Follow</ButtonUser>
        </div>
      </div>
      <ul className={style["list-follow"]}>
        <li>
          <p>
            <span className={style["list-follow-number"]}>{nFormatter(followingCount)}</span>
            {" Following"}
          </p>
        </li>
        <li>
          <p>
            <span className={style["list-follow-number"]}>{nFormatter(followerCount)}</span>
            {" Followers"}
          </p>
        </li>
        <li>
          <p>
            <span className={style["list-follow-number"]}>{nFormatter(heartCount)}</span>
            {" Likes"}
          </p>
        </li>
      </ul>
      <p className={style["user-signature"]}>{signature}</p>
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
