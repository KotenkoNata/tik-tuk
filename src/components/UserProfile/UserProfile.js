import React from "react";

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

  const { avatar_medium, nickname, signature, follower_count, total_favorited, aweme_count } = userDetails;

  return (
    <div className={style.mainContainer}>
      <div className={style.userContainer}>
        <div>
          <img alt={nickname} className={style.avatar} src={avatar_medium.url_list[0]} />
        </div>
        <div className={style.nameContainer}>
          <h1 className={style.userName}>{name}</h1>
          <h2 className={style.userNickname}>{nickname}</h2>
          <ButtonUser>Follow</ButtonUser>
        </div>
      </div>
      <UserProfileStatistics followerCount={follower_count} followingCount={total_favorited} heartCount={aweme_count} />
      <p className={style.userSignature}>{signature}</p>
    </div>
  );
};

export default UserProfile;
