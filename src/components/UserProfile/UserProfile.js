import React from "react";
import style from "./UserProfile.module.css";
import ButtonUser from "../Button";
import { nFormatter } from "../../nFormatter";

const UserProfile = ({ name, userDetails }) => {
  const { user } = userDetails;
  return (
    <>
      <div className={style["main-container"]}>
        <div className={style["user-container"]}>
          <div>
            <img
              className={style["avatar"]}
              src={user.avatarMedium}
              alt={userDetails.user.nickname}
            />
          </div>
          <div className={style["name-container"]}>
            <h1 className={style["user-name"]}>{name}</h1>
            <h2 className={style["user-nickname"]}>
              {userDetails.user.nickname}
            </h2>
            <ButtonUser>Follow</ButtonUser>
          </div>
        </div>

        <ul className={style["list-follow"]}>
          <li>
            <p>
              <span className={style["list-follow-number"]}>
                {nFormatter(userDetails.stats.followingCount)}
              </span>{" "}
              Following
            </p>
          </li>
          <li>
            <p>
              <span className={style["list-follow-number"]}>
                {nFormatter(userDetails.stats.followerCount)}
              </span>{" "}
              Followers
            </p>
          </li>
          <li>
            <p>
              <span className={style["list-follow-number"]}>
                {nFormatter(userDetails.stats.heartCount)}
              </span>{" "}
              Likes
            </p>
          </li>
        </ul>

        <p className={style["user-signature"]}>{userDetails.user.signature}</p>
      </div>
    </>
  );
};

export default UserProfile;
