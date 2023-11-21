import React, { useState, useEffect } from "react";
import "../../styles/AllDemo.css";

const AllDemo: React.FC =  () => {
  const [alldemo, setAlldemo] = useState([]);
  const [isDropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(!isDropdownActive);
  };

 async  function getDetails() {
    const dataFetch = async () => {
      const resp = await fetch(
        "http://192.168.0.195:8181/api/event/getAllEvent",
        {
          method: "GET",
        }
      );
      const data = await resp.json();
      console.log(data);
      return data;
    };
    setAlldemo(await dataFetch());
  }
  useEffect(()=>{
    getDetails();
  },[])
  console.log(alldemo)
  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <div className="dropdown-button" onClick={toggleDropdown}>
          <span style={{ fontSize: "30px" }}>
            {isDropdownActive ? "-" : "+"}
          </span>
        </div>
        <div className={`listData ${isDropdownActive ? "active" : ""}`}>
          <ul className="item">
            <li>Date</li>
            <li>Topic</li>
            <li>Presented By</li>
            <li>Action</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllDemo;