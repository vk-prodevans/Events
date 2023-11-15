import React from 'react';
import Image from 'next/image';
import '../../Styles/Header.css'


const Header = () => {
  return (
    <div>
      <header>
        <div className="image-container">
          <Image
            src='/prodevans-logo.png' 
            alt="logo"
            width={200} 
            height={100} 
          />
        </div>
        <h1 className="heading">Weekly Demo</h1>
        <div className="search">
                <input className="srch" type="search" name="" placeholder="Type To text"/>
                <a href="#"> <button className="btn">Search</button></a>
            </div>  
     
      </header>
    </div>
  );
}

export  function HomepageHeader() {
  return (
    <div className="navbar">
      <div className="icon">
        <Image src="/prodevans-logo.png" width={200} height={100} alt="PD Logo" />
      </div>
      <div className="menu">
                <ul>
                    <li><a href="Home.html">HOME</a></li>
                    <li><a href="Dashboard.html">DASHBOARD</a></li>
                </ul>
            </div>
    </div>
  )
}


export default Header;


