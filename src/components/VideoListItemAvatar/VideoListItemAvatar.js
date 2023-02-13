import React from "react";
import { NavLink } from "react-router-dom";
import style from "./VideoListItemAvatar.module.css";
import VideoHashTag from "../VideoHashTag/VideoHashTag";

const VideoListItemAvatar = ({ video, name }) => {
  const {
    author: { nickname, avatar_thumb },
    text_extra,
    desc,
    video: { play_addr },
  } = video;

  const videoUrl = play_addr.url_list[1];

  const hashtagsElements = text_extra.length > 0 && (
    <p>
      <strong>{"Hashtags: "}</strong>
      {text_extra.map(hashtag => {
        const { hashtag_name } = hashtag;
        return <VideoHashTag key={Math.random()} name={hashtag_name} />;
      })}
    </p>
  );

  return (
    <div className={style.avatarContainer}>
      <div className={style.imageContainer}>
        <NavLink className={style.link} to={{ pathname: `/user/${name}` }}>
          <img alt={nickname} className={style.avatar} src={avatar_thumb.url_list[1]} />
        </NavLink>
      </div>
      <div className={style.textDetailContainer}>
        <NavLink className={style.link} to={{ pathname: `/user/${name}` }}>
          <h1 className={style.nickname}>{nickname}</h1>
        </NavLink>
        <div className={style.userDetails}>
          {desc.length > 0 && <p>{desc}</p>}
          {hashtagsElements}
        </div>
        <video className={style.video} controls width="400">
          <source src={videoUrl} />
          <track kind="captions" label="English" src="" srcLang="en" />
        </video>
      </div>
    </div>
  );
};

export default VideoListItemAvatar;
