import React from "react";
import "./SwitchTabs.scss";
const SwitchTabs = ({ data, onTabChange }) => {
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span key={index} className={`tabItem`}>
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SwitchTabs;
