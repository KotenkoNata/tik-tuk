import React from "react";
import PropTypes from "prop-types";

import style from "./UserProfile.module.css";
import formatNumber from "../../formatNumber";

const UserProfileStatisticItem = ({ name, count }) => {
  const nameWithPrefix = ` ${name}`;
  return (
    <li>
      <p>
        <span className={style.listFollowNumber}>{formatNumber(count)}</span>
        {nameWithPrefix}
      </p>
    </li>
  );
};

UserProfileStatisticItem.propTypes = {
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserProfileStatisticItem;
