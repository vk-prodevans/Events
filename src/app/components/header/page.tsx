import React from 'react';
import Image from 'next/image';
// import './Styles/header.css'


const Header = () => {
  return (
    <div>
      <header>
        <div className="image-container">
          <Image
            src="/prodev.png" 
            alt="logo"
            width={100} 
            height={50} 
          />
        </div> 
       
        
        <h1 className="heading">Demo</h1>
       
         <div className="search-bar">
          <input type="text" className="search-input" placeholder="Search" />
          <img src='/search-icon.png' alt="Search" className="search-icon" />
        </div>
      </header>
    </div>
  );
}

export default Header;


