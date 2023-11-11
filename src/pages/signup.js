import React, { useState } from 'react';
import Carousel from "../components/Carousel";
import {Link} from 'react-router-dom';

export default function Signup(){
    const mystyle={
        color:"#2ba4e4",
        fontFamily: "Montserrat",
        fontSize: "18px"
    }
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [companyError, setCompanyError] = useState(false);

  const handleInputChange = (e, setter, setError) => {
    const value = e.target.value;
    setter(value);
    setError(!value.trim()); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsernameError(!username.trim());
    setPasswordError(!password.trim());
    setEmailError(!email.trim());
    setPhoneError(!phone.trim());
    setCompanyError(!company.trim());

    // Check if any field is empty
    if (!username.trim() || !password.trim() || !email.trim() || !phone.trim() || !company.trim()) {
      alert('Form contains errors. Please fill in all fields.');
    } else {
      // Your form submission logic here
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="register">
      {/* <div className="row"> */}
        
         <Carousel/>

       
        <div className="col-1 col-md-6 container">
          <div id='form' className='flex flex-col'>
            <h2>Recruiter Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 position-relative">
                <label >Username</label>
                <input
                  type="text"
                  className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                  placeholder="Type Your Name"
                  style={{ backgroundColor: '#ECF2F7' }}
                  value={username}
                  onChange={(e) => handleInputChange(e, setUsername, setUsernameError)}
                />
                
              </div>

              <div className="mb-3 position-relative">
                <label >Password</label>
                <input
                    type="password"
                    className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                    placeholder="Type Your Password"
                    style={{ backgroundColor: '#ECF2F7' }}
                    value={password}
                    onChange={(e) => handleInputChange(e, setPassword, setPasswordError)}
                    />

                
              </div>

              <div className="mb-3 position-relative">
                <label>Email ID</label>
                <input
                  type="email"
                  className={`form-control ${emailError ? 'is-invalid' : ''}`}
                  placeholder="Type Your Email ID"
                  style={{ backgroundColor: '#ECF2F7' }}
                  value={email}
                  onChange={(e) => handleInputChange(e, setEmail, setEmailError)}
                />
                
              </div>

              <div className="mb-3 position-relative">
                <label >Phone Number</label>
                <input
                  type="tel"
                  className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                  placeholder="Type Your Phone Number"
                  style={{ backgroundColor: '#ECF2F7' }}
                  value={phone}
                  onChange={(e) => handleInputChange(e, setPhone, setPhoneError)}
                />
                
              </div>

              <div className="mb-3 position-relative">
                <label>Company Name</label>
                <input
                  type="text"
                  className={`form-control ${companyError ? 'is-invalid' : ''}`}
                  placeholder="Type Your Company Name"
                  style={{ backgroundColor: '#ECF2F7' }}
                  value={company}
                  onChange={(e) => handleInputChange(e, setCompany, setCompanyError)}
                />
               
              </div>
              <p>Do you want to signUp as Recruitee?<span style={mystyle}>Click Here</span> </p>  
              <div className="signup-button-container text-center py-2">
                <button className="btn btn-primary btns" type="submit">
                  Sign Up
                </button>
              </div>
              <div className='text-center'><p>Already have an Account?<Link to="/login"><span style={mystyle}>Login</span></Link></p></div>
              
            </form>
          </div>
        </div>
      </div>
    // </div>
  );
}

