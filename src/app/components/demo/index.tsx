
import React from 'react'
import { useState } from 'react';
import UploadFile from '../uploadFile';
import TechVersionDropdown from '../techVersionDropdown';
import '../../styles/slotdate.css'

const Demo = ({onSubmit}) => {
   return (
     <div className="container">
                <div className="card">
                  {/* Your Demo content goes here */}
                  <div className="sub-card-one">
                    <h4>
                      <input type="date" />
                    </h4>
                    <h4>
                      <input type="date" />
                    </h4>
                  </div>
                  <div className="sub-card-three">
                    <h4>
                      <input type="date" />
                    </h4>
                    <h4>
                      <input type="date" />
                    </h4>
                  </div>
                  <div className="button-tab">
                 
                      <button onClick={onSubmit}>Submit</button>
                 
                    <form action="/">
                      <button className="back">Back</button>
                    </form>
                  </div>
                </div>
              </div>

  )
}

export default Demo
