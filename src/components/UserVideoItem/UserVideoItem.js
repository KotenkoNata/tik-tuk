import React from "react";
import style from "./UserVideoItem.module.css";

import { nFormatter } from "../../nFormatter";

const UserVideoItem = ({ video }) => {
  return (
    <li className={style["item"]}>
      <span className={style["likes"]}>{nFormatter(video.playCount)}</span>
      <video className={style["video"]} controls>
        <source src={video.videoUrl} />
      </video>
    </li>
  );
};

export default UserVideoItem;
