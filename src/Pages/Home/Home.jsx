import React from "react";
import "./Home.scss";
import HeroBanner from "./heroBanner/heroBanner";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
