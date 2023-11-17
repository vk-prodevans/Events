// import React from 'react'
// import { useState } from 'react';
// import '../../Styles/demo.css'
// import UploadFile from '../uploadFile';
// import TechVersionDropdown from '../techVersionDropdown';

// const Demo = () => {
//   const [nameError, setNameError] = React.useState("");
  
//   const [formData, setFormData] = useState({
//     names: ['', '', ''],
//     emails: ['', '', ''],
//     topic: '',
//     description: '',
//     techStack: '',
//   });

//   const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     const updatedNames = [...formData.names];
//     updatedNames[index] = e.target.value;
//     setFormData({ ...formData, names: updatedNames });
//     const newName = e.target.value;
//     setNameError(newName);
//     if (!newName) {
//       setNameError('Name is required');
//     } else {
//       setNameError('');
//     }
    
//   };
 


//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     const updatedEmails = [...formData.emails];
//     updatedEmails[index] = e.target.value;
//     setFormData({ ...formData, emails: updatedEmails });
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

  
//   const [emailError, setEmailError] = React.useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if(!formData.names || formData.names.length){
//       setNameError("Name is required");
//       return false;
//     }

//     if (!formData.emails || formData.emails.length) {
//       setEmailError("Email is required");
//       return false;
//     }
    
//     // Handle form submission here
//   };
//   //error handling
 

//   return (
//     <form className="contactForm" onSubmit={handleSubmit}>
//       {formData.names.map((name, index) => (
//         <div key={index} className='inputGroup'>
//           <input
//           //  error={nameError && nameError.length ? true : false}
//             type="text"
//             className='inputField'
//             placeholder={`Name ${index + 1}`}
//             value={name}
//             onChange={(e) => handleNameChange(e, index)}
//             // helperText={nameError}
//           />
//            {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
//           <input
//             type="email"
//             className="inputField"
//             placeholder={`Email ${index + 1}`}
//             value={formData.emails[index]}
//             onChange={(e) => handleEmailChange(e, index)}
//           />
//         </div>
//       ))}
//       <textarea
//         name="topic"
//         className="textareaField"
//         placeholder="Topic"
//         value={formData.topic}
//         onChange={handleInputChange}
//       />
//       <textarea
//         name="description"
//         className="textareaField"
//         placeholder="Description"
//         value={formData.description}
//         onChange={handleInputChange}
//       />
//       {/* <select
//         name="techStack"
//         className='selectField'
//         value={formData.techStack}
//         onChange={handleInputChange}
//       >
//         <option value="">Select Tech Stack</option>
//         <option value="React">React</option>
//         <option value="Node.js">Node.js</option>
//         <option value="Python">Python</option>
       
//           </select> */}
//       <TechVersionDropdown></TechVersionDropdown>
//           <label htmlFor="">File</label>
//           <UploadFile></UploadFile>
//       <button type="submit" className='submitButton'>Submit</button>
//     </form>


//   )
// }

// export default Demo
import React from 'react'
import { useState } from 'react';
// import './Styles/Demo.css'
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
