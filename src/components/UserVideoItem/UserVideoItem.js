import React from "react";
import PropTypes from "prop-types";

import style from "./UserVideoItem.module.css";

import formatNumber from "../../formatNumber";

const UserVideoItem = ({ video: { statistics, video } }) => {
  return (
    <li className={style.item}>
      <span className={style.likes}>{formatNumber(statistics.play_count)}</span>
      <video className={style.video} controls>
        <source src={video.play_addr.url_list[0]} />
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
