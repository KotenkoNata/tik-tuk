import React from "react";
import PropTypes from "prop-types";
import { FaComment, FaHeart } from "react-icons/fa";
import nFormatter from "../../nFormatter";
import style from "./VideoListItemDetails.module.css";

const VideoListItemDetails = ({ video }) => {
  const { commentCount, diggCount } = video;

  return (
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
  );
};

const VideoType = PropTypes.shape({
  commentCount: PropTypes.number,
  diggCount: PropTypes.number,
});

VideoListItemDetails.propTypes = {
  video: VideoType.isRequired,
};

export default VideoListItemDetails;
