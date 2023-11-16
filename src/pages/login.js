import React, { useState, useEffect } from 'react';
import image from '../assets/hi.svg';
import '../Style.css';
import Carousel from '../components/Carousel';

export default function Form() {
  const mystyle = {
    color: '#2ba4e4',
    fontFamily: 'Montserrat',
    fontSize: '18px',
  };

  const imgstyle = {
    height: '35px',
    width: '35px',
  };

  const initialValues = { username: '', email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    if (Object.keys(formErrors).length === 0) {
      setIsSubmit(true);
      setShowSuccessMessage(true);
      resetForm();

    }
  };

  const resetForm = () => {
    setFormValues(initialValues);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length > 0 && isSubmit) {
      setShowErrorMessage(true);

      const timeoutId = setTimeout(() => {
        setShowErrorMessage(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [formErrors, isSubmit]);

  useEffect(() => {
    if (showSuccessMessage) {
      const timeoutId = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showSuccessMessage]);

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Username is required!';
       
    }
    if (!values.password) {
      errors.password = 'Password is required!';
       
    }

    return errors;
  };

  return (
    <section>
      <div className="register">
        <div className="col-md-6">
          <Carousel />
        </div>
        <div className="col-1 col-md-6">
          <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
            <img src={image} style={imgstyle} alt="Hello!!" />
            <h2>Welcome back!</h2>
            <span>Please login to access your account.</span>
            <>
              {Object.keys(formErrors).length === 0 && isSubmit && (
                <div className="ui message text-success">
                  <b>Signed in successfully</b>
                </div>
              )}
            </>
            <div className="info d-flex flex-row justify-content-between">
              <label htmlFor="username">Username</label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-info-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </div>
            {/* {showErrorMessage && (
              <div className="ui message text-danger text-left">
                <b>Fill the value</b>
              </div>
            )} */}
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              placeholder="Type your username"
            />
            <p className="error">{formErrors.username}</p>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Type your password"
            />
            <p className="error">{formErrors.password}</p>

            <span style={mystyle}>Forgot Password?</span>
            <span style={mystyle}>Login as</span>
            <div className="d-flex flex-row justify-content-between">
              <button className="btn btn-primary btns">Recruiter</button>
              <button className="btn btn-primary btns">Recruitee</button>
            </div>
            <p>
              Don't have an account?<span style={mystyle}>SignUp</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
