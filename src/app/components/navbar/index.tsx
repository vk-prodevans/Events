"use client"
import React from 'react'
import Link from 'next/link';
import '../../styles/Navbar.css'

const Navbar = ({ handleContentChange }) => {
  return (
    <div className='sidebar'>
     <nav >
      <ul>
      
        <li>
          <a onClick={() => handleContentChange("profile")}>Profile</a>
          </li>
          <li>
          <a onClick={() => handleContentChange("demo")}>Demo</a>
        </li>
        <li>
          <a onClick={() => handleContentChange("all-demo")}>AllDemo</a>
        </li>
        
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
