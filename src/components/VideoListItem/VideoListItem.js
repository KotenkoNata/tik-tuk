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
      <strong>Hashtags:</strong>{" "}
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
              <img className={style.avatar} src={avatar} alt={nickName} />
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
            <video className={style.video} width="400" controls>
              <source src={videoUrl} />
              <track src="" kind="captions" srcLang="en" label="English" />
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
              <a href="#top" className={style.iconLink}>
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
  text: PropTypes.string,
  hashtags: PropTypes.arrayOf(HashTagType),
  authorMeta: AuthorMetaType,
  videoUrl: PropTypes.string.isRequired,
  commentCount: PropTypes.number,
  diggCount: PropTypes.number,
});

VideoListItem.propTypes = {
  name: PropTypes.string.isRequired,
  video: VideoType.isRequired,
};

export default VideoListItem;
