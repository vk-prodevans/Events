import React from 'react';
import '../../styles/AllDemo.css'

const AllDemo: React.FC = () => {
  const toggleDropdown = () => {
    const dropdown = document.querySelector('.dropdown') as HTMLElement | null;

    if (dropdown) {
      dropdown.classList.toggle('active');

      const listData = document.querySelector('.listData') as HTMLElement | null;

      if (listData) {
        listData.style.display = listData.style.display === 'none' ? 'flex' : 'none';
      }
    }
  };

  return (
    <>
      <div className="dropdown" onClick={toggleDropdown}>
        <span style={{ fontSize: '30px' }}></span>
      </div>
      <div className="listData">
        <div className="data">
          <a href="#">Date</a>
          <a href="#">Topic</a>
          <a href="#">Presented By</a>
        </div>
      </div>
    </>
  );
};

export default AllDemo;
