import React, { useState } from 'react';
import UploadFile from '../uploadFile';
import TechVersionDropdown from '../techVersionDropdown';
import '../../styles/Demo.css';

const BookDemo = () => {
  
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

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add form submission logic here

    // Check for errors before submitting
    const hasErrors = nameErrors.some((error) => error !== '');
    if (hasErrors) {
      // Handle errors, e.g., display a message or prevent form submission
      console.log('Form has errors. Please correct them before submitting.');
    } else {
      // Form submission logic
      console.log('Form submitted successfully:', formData);
    }
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
      <TechVersionDropdown />
      <label htmlFor="">File</label>
      <UploadFile />
      <button type="submit" className='submitButton'>Submit</button>
    </form>
  );
};

export default BookDemo;