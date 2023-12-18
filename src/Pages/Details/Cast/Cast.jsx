import React from "react";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../Components/ContentWrapper/ContentWrapper";
import Img from "../../../Components/LazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";
import "./Cast.scss";
const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return <div></div>;
};

export default Cast;
