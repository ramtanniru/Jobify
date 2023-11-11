import React,{useState,useEffect} from 'react';
import image from '../assets/hello.svg';
import {Link} from 'react-router-dom';

import Carousel from './carousel';

export default function Form() {
    const mystyle={
        color:"#2ba4e4",
        fontFamily: "Montserrat",
        fontSize: "18px"
    }
    const imgstyle={
        height:"35px",
        width:"35px",
    }
    
    const initialValues={username:"",email:"",password:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        if (Object.keys(formErrors).length === 0) {
            setIsSubmit(true);
            // setFormValues(initialValues);
            
            // resetForm();
          }
          
      };
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        var lowerCase = /[a-z]/g;
      var upperCase = /[A-Z]/g;
      var numbers = /[0-9]/g;
       
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
          } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
          } else if (!values.password.match(lowerCase)) {
            errors.password = "Password should contains lowercase letters!";
          }
          else if (!values.password.match(upperCase)) {
            errors.password = "Password should contains uppercase letters!";
          }
          else if (!values.password.match(numbers)) {
            errors.password = "Password should include numbers!";
          }
          
          return errors;
        };
        const [showErrorMessage, setShowErrorMessage] = useState(false);

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
  return (
    
    <section>
        
        <div className="register">
            <Carousel/>
            <div className="col-1  col-sm-7 col-md-6">
                <form id='form' className='flex flex-col' onSubmit={handleSubmit} >
                
                    <img src={image} style={imgstyle} alt="Hello!!" />
                    <h2>Welcome back!</h2>
                    <span>Please login to access your account.</span>
                    <>
                       

                        {Object.keys(formErrors).length === 0 && isSubmit && (
                            <div className="ui message success"><b>Signed in successfully</b></div>
                        )}
                        </>
                    <div className='info'>
                    <label htmlFor="username">Username</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                    </div>
                    {showErrorMessage && (
                            <div className="ui message error"><b></b>Fill the value</div>
                        )}
                    <input type="text" name='username' value={formValues.username} onChange={handleChange} placeholder='Type your username' />
                    
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name='password' value={formValues.password}
                    onChange={handleChange} placeholder='Type your password' />
                    <p className='error'>{formErrors.password}</p>
                    
                    <span style={mystyle}>Forgot Password?</span>
                    <span style={mystyle}>Login as</span>
                    <div  className='button'>
                        <button className='btn btn-primary btns'>Recruiter</button>
                        <button className='btn btn-primary btns'>Recruitee</button>
                    </div>
                    <p>Don't have an account?<Link to="/sign-up"><span style={mystyle}>SignUp</span></Link> </p>  
                </form>
            </div>
                
            </div>  
        {/* </div> */}
        
    </section>
  )
}