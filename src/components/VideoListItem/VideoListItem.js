import React from "react";
import VideoListItemAvatar from "../VideoListItemAvatar";
import VideoListItemDetails from "../VideoListItemDetails";
import style from "./VideoListItem.module.css";

const VideoListItem = ({ video, name }) => {
  return (
    <li className={style.videoItem}>
      <div className={style.item}>
        <VideoListItemAvatar name={name} video={video} />
        <VideoListItemDetails video={video} />
      </div>
    </li>
  );
};

export default VideoListItem;
