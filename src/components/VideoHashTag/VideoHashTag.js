import PropTypes from "prop-types";
import React from "react";

const VideoHashTag = ({ name }) => {
  return <span> #{name} </span>;
};

export const HashTagType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  cover: PropTypes.string,
});

VideoHashTag.propTypes = HashTagType.isRequired;

export default VideoHashTag;
