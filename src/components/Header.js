import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <a href="/dashboard">
          <div className="logo">
            <img src="/images/favicon-32x32.png" alt="logo-img" />
            <span className="logo-title">GeekFixx</span>
          </div>
        </a>
      </header>
    </div>
  );
};

export default Header;
