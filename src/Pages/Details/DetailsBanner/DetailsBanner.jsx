import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../../../Components/ContentWrapper/ContentWrapper";
import useFetch from "../../../Hooks/useFetch";
import Genres from "../../../Components/Genres/Genres";
import CircleRating from "../../../Components/CircleRating/CircleRating";
import Img from "../../../Components/LazyLoadImage/Img";
import PosterFallback from "../../../assets/no-poster.png";

import "./DetailsBanner.scss";

const DetailsBanner = ({ video, crew }) => {
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };
  return ();
};

export default DetailsBanner;
