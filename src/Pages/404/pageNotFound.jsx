import React from "react";

import "./pageNotFound.scss";

import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

const pageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWrapper>
    </div>
  );
};

export default pageNotFound;
