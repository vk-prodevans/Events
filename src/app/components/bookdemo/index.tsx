import React, { useState } from "react";
import UploadFile from "../uploadFile";
import TechVersionDropdown from "../techVersionDropdown";
import "../../styles/demo.css";

const BookDemo = () => {
  const [formCounter, setFormCounter] = useState(1);
  const [formData, setFormData] = useState({
    names: [""],
    emails: [""],
    topic: "",
    description: "",
    techStack: "",
  });

  const [nameErrors, setNameErrors] = useState([""]);

  const addFormGroup = () => {
    setFormCounter(formCounter + 1);
    setFormData({
      ...formData,
      names: [...formData.names, ""],
      emails: [...formData.emails, ""],
    });
    setNameErrors([...nameErrors, ""]);
    document.querySelector(".contactForm")?.classList.add("expanded");
  };

  const removeFormGroup = (index: number) => {
    if (formCounter > 1) {
      const updatedNames = [...formData.names];
      const updatedEmails = [...formData.emails];
      const updatedNameErrors = [...nameErrors];

      updatedNames.splice(index, 1);
      updatedEmails.splice(index, 1);
      updatedNameErrors.splice(index, 1);

      setFormCounter(updatedNames.length);
      setFormData({ ...formData, names: updatedNames, emails: updatedEmails });
      setNameErrors(updatedNameErrors);
    }
  };

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedNames = [...formData.names];
    const inputValue = e.target.value;

    // Validate that the input contains only letters
    if (/^[A-Za-z\s]+$/.test(inputValue) || inputValue === "") {
      updatedNames[index] = inputValue;
      setFormData({ ...formData, names: updatedNames });
      // Clear the error if validation passes
      setNameErrors((prevErrors) => {
        const errors = [...prevErrors];
        errors[index] = "";
        return errors;
      });
    } else {
      // Set the error if validation fails
      setNameErrors((prevErrors) => {
        const errors = [...prevErrors];
        errors[index] = "Please enter only letters";
        return errors;
      });
    }
  };

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedEmails = [...formData.emails];
    updatedEmails[index] = e.target.value;
    setFormData({ ...formData, emails: updatedEmails });
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Check for errors before submitting
    const hasErrors = nameErrors.some((error) => error !== "");
    if (hasErrors) {
      // Handle errors, e.g., display a message or prevent form submission
      console.log("Form has errors. Please correct them before submitting.");
    } else {
      // Form submission logic
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      {formData.names.map((name, index) => (
        <div key={index} className="inputGroup">
          <input
            type="text"
            className={`inputField ${nameErrors[index] ? "error" : ""}`}
            placeholder={`Name ${index + 1}`}
            value={name}
            onChange={(e) => handleNameChange(e, index)}
          />
          <span className="errorText">{nameErrors[index]}</span>
          <input
            type="email"
            className="inputField"
            placeholder={`Email ${index + 1}`}
            value={formData.emails[index]}
            onChange={(e) => handleEmailChange(e, index)}
          />
          {index === formCounter - 1 && (
            <button type="button" className="add-btn" onClick={addFormGroup}>
              +
            </button>
          )}
          {formCounter > 1 && (
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeFormGroup(index)}
            >
              -
            </button>
          )}
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
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
};

export default BookDemo;
