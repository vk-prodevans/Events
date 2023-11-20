import React from "react";
import Image from "next/image";
import "../../Styles/Header.css";

const Header = () => {
  return (
      <header>
        <div >
          <Image
            className="image-container"
            src="/prodevans-logo.png"
            alt="logo"
            width={200}
            height={100}
            
          />
        </div>
        <div className="heading">
        <h3>Weekly Demo</h3></div>
        <div className="search">
          <input
            className="srch"
            type="search"
            name=""
            placeholder="Type To text"
          />
          <a href="#">
            {" "}
            <button className="btn">Search</button>
          </a>
        </div>
      </header>
  );
};

export function HomepageHeader() {
  return (
    <div className="navbar">
      <div className="icon">
        <Image
          src="/prodevans-logo.png"
          alt="PD Logo"
          width={200}
          height={100}
        />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">DASHBOARD</a>
          </li>
          <li>
            <a href="#" className="login-btn">
              LOGIN
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
