import React from "react";
import PropTypes from "prop-types";
import style from "./UserVideoItem.module.css";

import formatNumber from "../../formatNumber";

const UserVideoItem = ({ video: { playCount, videoUrl } }) => {
  return (
    <li className={style.item}>
      <span className={style.likes}>{formatNumber(playCount)}</span>
      <video className={style.video} controls>
        <source src={videoUrl} />
        <track kind="captions" label="English" src="" srcLang="en" />
      </video>
    </li>
  );
};

UserVideoItem.propTypes = {
  video: PropTypes.shape({
    playCount: PropTypes.number.isRequired,
    videoUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserVideoItem;
