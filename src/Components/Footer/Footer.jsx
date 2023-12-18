import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../ContentWrapper/ContentWrapper";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Introducing Movix🎬, the ultimate entertainment app designed to
          elevate your viewing experience. Movix🎬 is a comprehensive platform
          that offers a curated selection of the best movies and TV shows,
          ensuring you always have access to top-notch entertainment. The app
          boasts an intuitive interface that simplifies the search for your next
          favorite film🎞️ or series🎞️.
          <br />
          <br />
          <span>Designed By Kirttinath</span>
        </div>
        <div className="socialIcons">
          <a href="https://www.facebook.com/kirttinath.ojha.3" className="icon">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/kirtti_nath/" className="icon">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/Kojha45" className="icon">
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/kirttinath-ojha/"
            className="icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
