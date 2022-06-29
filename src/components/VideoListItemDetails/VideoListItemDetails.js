import React from "react";
import { FaComment, FaHeart } from "react-icons/fa";
import formatNumber from "../../formatNumber";
import style from "./VideoListItemDetails.module.css";

const VideoListItemDetails = ({ video }) => {
  const { comment_count, digg_count } = video.statistics;

  return (
    <ul className={style.additionalDetails}>
      <li className={style.detailsItem}>
        <div className={style.iconBorder}>
          <a className={style.iconLink} href="#top">
            <FaComment className={style.icon} />
          </a>
          <span>{formatNumber(comment_count)}</span>
        </div>
      </li>
      <li className={style.detailsItem}>
        <div className={style.iconBorder}>
          <a className={style.iconLink} href="#top">
            <FaHeart className={style.icon} />
          </a>
          <span>{formatNumber(digg_count)}</span>
        </div>
      </li>
    </ul>
  );
};

export default VideoListItemDetails;
