import React, { useState } from "react";
import { GiAbstract031 } from "react-icons/gi";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () =>
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  return (
    <>
      <div className="header-container">
        <div className="logo">
          D<GiAbstract031 className="logo-icon" />
          NTOKEN
        </div>
        <div className="menu">
          <div className="menu-links">
            <a href="/">App</a>
            <a href="/">Products</a>
            <a href="/">Build</a>
            <a href="/">Careers</a>
            <a href="/">About</a>
          </div>
        </div>
        <div className="wallet-btn">
          <button className="primary enter-button" onClick={toggleExpanded}>
            Enter App
          </button>
        </div>
        {isExpanded ? (
          <div className="menu-overlay">
            <div className="menu-links">
              <a href="/">App</a>
              <a href="/">Products</a>
              <a href="/">Build</a>
              <a href="/">Careers</a>
              <a href="/">About</a>
            </div>
          </div>
        ) : (
          <button className="hamburger" onClick={toggleExpanded}></button>
        )}
      </div>
    </>
  );
};

export default Header;
