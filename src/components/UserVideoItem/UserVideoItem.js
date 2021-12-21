import React from "react";
import PropTypes from "prop-types";
import style from "./UserVideoItem.module.css";

import nFormatter from "../../nFormatter";

const UserVideoItem = ({ video: { playCount, videoUrl } }) => {
  return (
    <li className={style.item}>
      <span className={style.likes}>{nFormatter(playCount)}</span>
      <video className={style.video} controls>
        <source src={videoUrl} />
        <track src="" kind="captions" srcLang="en" label="English" />
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
