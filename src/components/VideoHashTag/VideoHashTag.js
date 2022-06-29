import PropTypes from "prop-types";
import React from "react";

const VideoHashTag = ({ name }) => {
  return (
    <span>
      {"#"}
      {name}
    </span>
  );
};

export const HashTagType = PropTypes.shape({
  name: PropTypes.string,
});

VideoHashTag.propTypes = HashTagType.isRequired;

export default VideoHashTag;
