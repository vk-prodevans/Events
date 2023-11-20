import React from 'react'
import'../../styles/slotdate.css'

function index() {
  return (
    <div className="container">
        
        <div className="card">
            <div className="sub-card-one">
                <h4><input type="date"/></h4>
            
                <h4><input type="date"/></h4>
            </div>
            <div className="sub-card-three">
                <h4><input type="date"/></h4>
           
                <h4><input type="date"/></h4>
            </div>
            <div className="button-tab">
                <form action="/"><button>Submit</button></form>
                
                <form action="/"><button className="back">Back</button></form>
            </div>
        </div>
    </div>
  )
}

export default index
