import React from "react";
import { Link } from "react-router-dom";
import { nFormatter } from "../../nFormatter";
import style from "./VideoListItem.module.css";
import { FaComment, FaHeart } from "react-icons/fa";

const VideoListItem = ({ video, name }) => {
  const { text, hashtags } = video;

  return (
    <>
      <li>
        <div className={style["video-item"]}>
          <div className={style["avatar-container"]}>
            <div className={style["image-container"]}>
              <Link
                className={style["link"]}
                to={{ pathname: `/user/${name}` }}
              >
                <img
                  className={style["avatar"]}
                  src={video.authorMeta.avatar}
                  alt={video.authorMeta.nickname}
                />
              </Link>
            </div>
            <div className={style["text-detail-container"]}>
              <Link
                className={style["link"]}
                to={{ pathname: `/user/${name}` }}
              >
                <h1 className={style["nickname"]}>
                  {video.authorMeta.nickName}
                </h1>
              </Link>
              <div className={style["user-details"]}>
                {text.length > 0 && <p className={style["text"]}>{text}</p>}

                {hashtags.length > 0 && (
                  <p className={style["text"]}>
                    <strong>Hashtags:</strong>{" "}
                    {hashtags.map((hashtag) => (
                      <span key={hashtag.id} className={style["text"]}>
                        {" "}
                        #{hashtag.name}{" "}
                      </span>
                    ))}
                  </p>
                )}
              </div>
              <video className={style["video"]} width="400" controls>
                <source src={video.videoUrl} />
              </video>
            </div>
          </div>

          <ul className={style["additional-details"]}>
            <li className={style["details-item"]}>
              <div className={style["icon-border"]}>
                <a className={style["icon-link"]} href="#">
                  <FaComment className={style["icon"]} />
                </a>
                <span>{nFormatter(video.commentCount)}</span>
              </div>
            </li>
            <li className={style["details-item"]}>
              <div className={style["icon-border"]}>
                <a className={style["icon-link"]} href="#">
                  <FaHeart className={style["icon"]} />
                </a>
                <span>{nFormatter(video.diggCount)}</span>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default VideoListItem;
