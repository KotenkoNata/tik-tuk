import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaComment, FaHeart } from "react-icons/fa";
import nFormatter from "../../nFormatter";
import style from "./VideoListItem.module.css";
import VideoHashTag, { HashTagType } from "../VideoHashTag/VideoHashTag";

const VideoListItem = ({ video, name }) => {
  const {
    text: videoText,
    hashtags,
    authorMeta: { avatar, nickName },
    commentCount,
    videoUrl,
    diggCount,
  } = video;

  const hashtagsElements = hashtags.length > 0 && (
    <p>
      <strong>{"Hashtags: "}</strong>
      {hashtags.map(hashtag => (
        <VideoHashTag key={Math.random()} name={hashtag.name} />
      ))}
    </p>
  );

  return (
    <li>
      <div className={style.item}>
        <div className={style.avatarContainer}>
          <div className={style.imageContainer}>
            <Link className={style.link} to={{ pathname: `/user/${name}` }}>
              <img alt={nickName} className={style.avatar} src={avatar} />
            </Link>
          </div>
          <div className={style.textDetailContainer}>
            <Link className={style.link} to={{ pathname: `/user/${name}` }}>
              <h1 className={style.nickname}>{nickName}</h1>
            </Link>
            <div className={style.userDetails}>
              {videoText.length > 0 && <p>{videoText}</p>}
              {hashtagsElements}
            </div>
            <video className={style.video} controls width="400">
              <source src={videoUrl} />
              <track kind="captions" label="English" src="" srcLang="en" />
            </video>
          </div>
        </div>
        <ul className={style.additionalDetails}>
          <li className={style.detailsItem}>
            <div className={style.iconBorder}>
              <a className={style.iconLink} href="#top">
                <FaComment className={style.icon} />
              </a>
              <span>{nFormatter(commentCount)}</span>
            </div>
          </li>
          <li className={style.detailsItem}>
            <div className={style.iconBorder}>
              <a className={style.iconLink} href="#top">
                <FaHeart className={style.icon} />
              </a>
              <span>{nFormatter(diggCount)}</span>
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
};

const AuthorMetaType = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
});

const VideoType = PropTypes.shape({
  authorMeta: AuthorMetaType,
  commentCount: PropTypes.number,
  diggCount: PropTypes.number,
  hashtags: PropTypes.arrayOf(HashTagType),
  text: PropTypes.string,
  videoUrl: PropTypes.string.isRequired,
});

VideoListItem.propTypes = {
  name: PropTypes.string.isRequired,
  video: VideoType.isRequired,
};

export default VideoListItem;
