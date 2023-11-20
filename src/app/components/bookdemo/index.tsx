import React from 'react'
import { useState } from 'react';
// import './Styles/Demo.css'
import UploadFile from '../uploadFile';
import TechVersionDropdown from '../techVersionDropdown';
import '../../styles/Demo.css'

const BookDemo = () => {
  const [formCounter, setFormCounter] = useState(1);
  const [inputValue, setInputValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);
   const [formData, setFormData] = useState({
    names: ['', '', ''],
    emails: ['', '', ''],
    topic: '',
    description: '',
    techStack: '',
   });
   const addFormGroup = () => {
    setFormCounter(formCounter + 1);
  };
  const removeFormGroup = (index:number) => {
    
    const updatedFormGroups = [...Array(formCounter)].filter((_, i) => i !== index);
    setFormCounter(updatedFormGroups.length);
  };

  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  //   const updatedNames = [...formData.names];
  //   updatedNames[index] = e.target.value;
  //   setFormData({ ...formData, names: updatedNames });
  // };

  

 const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
     setInputValue(newValue);
  

    const isValidInput: boolean = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue);
    setIsValid(isValidInput);
  };
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    setInputValue(newValue);
    const isValidInput: boolean = /^[a-zA-Z\s]+$/.test(newValue);
    setIsValid(isValidInput);
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
       {[...Array(formCounter)].map((_, index) => (
          <div className="form-group" key={`group${index + 1}`}>
            <label htmlFor={`name${index + 1}`}>Name</label>
           <input type="text" id={`name${index + 1}`} pattern="^[a-zA-Z\s]+$" onChange={handleInput} placeholder="Enter name" />
            {!isValid && <p style={{ color: 'red' }}>Please Enter Vlid name</p>}
            <label htmlFor={`email${index + 1}`}>Email</label>
           <input type="text" id={`email${index + 1}`} placeholder="Enter email" onChange={handleEmailChange} />
            {!isValid && <p style={{ color: 'red' }}>Please Enter Vlid email</p>}
            <button type="button" className='add-btn' onClick={addFormGroup}>+</button>
            {formCounter > 1 && <button type="button" className='remove-btn' onClick={() => removeFormGroup(index)}>-</button>}
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

export default BookDemo