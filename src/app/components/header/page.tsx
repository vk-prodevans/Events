import React from "react";
import Image from "next/image";
import "../../Styles/Header.css";
import { useRouter } from 'next/navigation'

const Header = () => {
  return (
    <div>
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
        <h1 >Weekly Demo</h1></div>
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
    </div>
  );
};

export function HomepageHeader() {
   const router = useRouter();

  const handleClick = () => {
  
    router.push("/pages/dashboard");
  };
  return (
    <div className="navbar">
      <div className="icon">
        <Image
          src="/prodevans-logo.png"
          width={200}
          height={100}
          alt="PD Logo"
        />
      </div>
      <div className="menu">
        <ul>
          <li>
            <div>
      
      <button onClick={handleClick}> Dashboard</button>
    </div>
          </li>
          <li>
            <a href="#" className="login-btn">
              LOGIN
            </a>
          </li>
          <li>
            <a href="#" className="logout-btn">
              LOGOUT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
