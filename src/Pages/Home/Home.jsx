import React from "react";
import "./Home.scss";
import HeroBanner from "./heroBanner/heroBanner";
import Trending from "./Trending/Trending";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
