import React from "react";
import "./HeroBanner.scss";
const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of Movies, TV shows and people to discover. Explore now.
          </span>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
