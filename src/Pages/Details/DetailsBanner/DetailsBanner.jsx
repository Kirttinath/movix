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

const DetailsBanner = () => {
  return <div></div>;
};

export default DetailsBanner;
