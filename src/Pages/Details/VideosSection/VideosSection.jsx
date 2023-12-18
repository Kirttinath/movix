import React, { useState } from "react";
import ContentWrapper from "../../../Components/ContentWrapper/ContentWrapper";
import { PlayIcon } from "../PlayIcon";
import VideoPopup from "../../../Components/VideoPopup/VideoPopup";
import Img from "../../../Components/LazyLoadImage/Img";
import "./Videossection.scss";
const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return <div></div>;
};

export default VideosSection;
