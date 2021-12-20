import PropTypes from "prop-types";
import React from "react";
import style from "./VideoListItem.module.css";

const VideoHashTag = ({ name }) => {
  return <span className={style.text}> #{name} </span>;
};

export const HashTagType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  cover: PropTypes.string,
});

VideoHashTag.propTypes = HashTagType.isRequired;

export default VideoHashTag;
