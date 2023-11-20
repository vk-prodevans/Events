import React from 'react';
import '../../styles/AllDemo.css'
import { useState } from 'react';

const AllDemo: React.FC = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleVisibility = () => {
    setExpanded(!isExpanded);
  };

  return (
  <div>
      <div className="actions">
        <a href="#" className="toggleButton" onClick={toggleVisibility}>
          {isExpanded ? '-' : '+'}
        </a>
        {isExpanded && (
          <div className='toggleData'>
          <table className="data">
            <tbody>
              <tr>
                <td>
                 Date
                </td>
                <td>
                 Topic
                </td>
                <td>
                  Presented By
                  </td>
                  <td>
                <a href="#" className="button">
         Actions
            </a>
                  </td>
              </tr>
            </tbody>
          </table>
          
          </div>
          
        )}
        
     </div>
    </div>
  );
};

export default AllDemo
