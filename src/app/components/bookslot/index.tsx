import React from 'react'
import '../../styles/slot.css'

const BookSlot = ({ onBookDemoSubmit}) => {
  return (
   <div className="container">
        
    <div className="card">
        
        <div className="slot-card">
            <a href="#"><h4>Slot 1</h4></a>
       
            <a href="#"><h4>Slot 2</h4></a>
        </div>
        <div className="button-tab">
            <button onClick={ onBookDemoSubmit} >Submit</button>
            <button><a href="index.html">Back</a></button>
        </div>
    </div>
</div>
  )
}

export default BookSlot