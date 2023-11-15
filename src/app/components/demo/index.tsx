import React from 'react'
import { useState } from 'react';
// import './Styles/demo.css'
import UploadFile from '../uploadFile';
import TechVersionDropdown from '../techVersionDropdown';

const Demo = () => {
  const [formData, setFormData] = useState({
    names: ['', '', ''],
    emails: ['', '', ''],
    topic: '',
    description: '',
    techStack: '',
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedNames = [...formData.names];
    updatedNames[index] = e.target.value;
    setFormData({ ...formData, names: updatedNames });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedEmails = [...formData.emails];
    updatedEmails[index] = e.target.value;
    setFormData({ ...formData, emails: updatedEmails });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      {formData.names.map((name, index) => (
        <div key={index} className='inputGroup'>
          <input
            type="text"
            className='inputField'
            placeholder={`Name ${index + 1}`}
            value={name}
            onChange={(e) => handleNameChange(e, index)}
          />
          <input
            type="email"
            className="inputField"
            placeholder={`Email ${index + 1}`}
            value={formData.emails[index]}
            onChange={(e) => handleEmailChange(e, index)}
          />
        </div>
      ))}
      <textarea
        name="topic"
        className="textareaField"
        placeholder="Topic"
        value={formData.topic}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        className="textareaField"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
      />
      {/* <select
        name="techStack"
        className='selectField'
        value={formData.techStack}
        onChange={handleInputChange}
      >
        <option value="">Select Tech Stack</option>
        <option value="React">React</option>
        <option value="Node.js">Node.js</option>
        <option value="Python">Python</option>
       
          </select> */}
      <TechVersionDropdown></TechVersionDropdown>
          <label htmlFor="">File</label>
          <UploadFile></UploadFile>
      <button type="submit" className='submitButton'>Submit</button>
    </form>


  )
}

export default Demo
