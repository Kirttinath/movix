import React from "react";
import "./Home.scss";
import HeroBanner from "./heroBanner/heroBanner";
import Trending from "./Trending/Trending";
import Popular from "./Popular/Popular";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
