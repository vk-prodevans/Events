import React, { useState } from 'react'

import '../../styles/Profile.css'

const Profile = () => {
  const [userData,setUserData]=useState({username:"Supriya",email:"nune.supriya@prodevans.com"})
  return (
    // <div className="profile-details">
    //   <div className="logo">
    //         <img src="/profile.png" alt="Logo"/>
    //     </div>
    //   <p>Username: {userData?.username}</p>
    //   <p>Email: {userData?.email}</p>
    
    //   <button className="profile-button">Logout</button>
    // </div>


    <div className="card-container">

		<div className="upper-container">
			<div className="profile-container">
				<img src="../profile-logo.jpg" />
			</div>
		</div>

		<div className="lower-container">
			<div>
      <p> {userData?.username}</p>
      <p> {userData?.email}</p>
			</div>
		
			<div>
      <button className="profile-button">Logout</button>
			</div>
		</div>

	</div>
  )
}

export default Profile
