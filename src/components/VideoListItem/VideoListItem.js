import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaComment, FaHeart } from "react-icons/fa";
import nFormatter from "../../nFormatter";
import style from "./VideoListItem.module.css";
import VideoHashTag, { HashTagType } from "./VideoHashTag";

const VideoListItem = ({ video, name }) => {
  const {
    text: videoText,
    hashtags,
    authorMeta: { avatar, nickName },
    commentCount,
    videoUrl,
    diggCount,
  } = video;

  const hashtagsEl = hashtags.length > 0 && (
    <p className={style.text}>
      <strong>Hashtags:</strong>{" "}
      {hashtags.map(hashtag => (
        <VideoHashTag key={Math.random()} name={hashtag.name} />
      ))}
    </p>
  );

  return (
    <li>
      <div className={style["video-item"]}>
        <div className={style["avatar-container"]}>
          <div className={style["image-container"]}>
            <Link className={style.link} to={{ pathname: `/user/${name}` }}>
              <img className={style.avatar} src={avatar} alt={nickName} />
            </Link>
          </div>
          <div className={style["text-detail-container"]}>
            <Link className={style.link} to={{ pathname: `/user/${name}` }}>
              <h1 className={style.nickname}>{nickName}</h1>
            </Link>
            <div className={style["user-details"]}>
              {videoText.length > 0 && <p className={style.text}>{videoText}</p>}

              {hashtagsEl}
            </div>
            <video className={style.video} width="400" controls>
              <source src={videoUrl} />
              <track src="" kind="subtitles" srcLang="en" label="English" />
            </video>
          </div>
        </div>

        <ul className={style["additional-details"]}>
          <li className={style["details-item"]}>
            <div className={style["icon-border"]}>
              <a className={style["icon-link"]} href="#top">
                <FaComment className={style.icon} />
              </a>
              <span>{nFormatter(commentCount)}</span>
            </div>
          </li>
          <li className={style["details-item"]}>
            <div className={style["icon-border"]}>
              <a href="#top" className={style["icon-link"]}>
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
