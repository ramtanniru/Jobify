import React, { useState } from 'react';
import Carousel from "../components/Carousel";
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import "../Style.css";

const steps = ['', '', ''];

export default function Signup() {
    const mystyle={
        color:"#2ba4e4",
        fontFamily: "Montserrat",
        fontSize: "18px"
    }
  const [activeStep, setActiveStep] = useState(0);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const [qualification, setQualification] = useState('');
  const [institutionName, setInstitutionName] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const[fieldName,setFieldName]=useState('');


  const [workStatus, setWorkStatus] = useState('');
  const [skills, setSkills] = useState([]);
  const [resume, setResume] = useState('');

  const [newSkill, setNewSkill] = useState('');



  const [qualificationError, setQualificationError] = useState(false);
  const [institutionNameError, setInstitutionNameError] = useState(false);

  const [graduationYearError, setGraduationYearError] = useState(false);
  const [FieldNameError,setFieldNameError]=useState(false);

  const [workStatusError, setWorkStatusError] = useState(false);
  const [skillsError, setSkillsError] = useState(false);
  const [resumeError,setResumeError]=useState(false);


  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const [linkedinProfile, setLinkedinProfile] = useState('');
    const [linkedinProfileError, setLinkedinProfileError] = useState(false);

  const handleInputChange = (e, setter, setError) => {
    const value = e.target.value;
    setter(value);
    setError(!value.trim());
  };
  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills((prevSkills) => [...prevSkills, newSkill.trim()]);
      setNewSkill('');
      setSkillsError(false);
    } else {
      if (skills.length === 0) {
        setSkillsError(true);
      } else {
        setSkillsError(false);
      }
    }
  };
  
const removeSkill = (skillToRemove) => {
  const updatedSkills = skills.filter((skill) => skill !== skillToRemove);
  setSkills(updatedSkills);
};

  const handleNext = () => {
    switch (activeStep) {
      case 0:
        setUsernameError(!username.trim());
        setEmailError(!email.trim());
        setPasswordError(!password.trim());
        setConfirmPasswordError(password !== confirmPassword || !confirmPassword.trim());
        setMobileNumberError(!mobileNumber.trim());
        if (!username || !email || !password || !confirmPassword || !mobileNumber || password !== confirmPassword) {
          alert('Please fill in all fields correctly before proceeding.');
          return;
        }
        break;
      case 1:
        setQualificationError(!qualification.trim());
        setInstitutionNameError(!institutionName.trim()); 
        setGraduationYearError(!graduationYear.trim());
        setFieldNameError(!fieldName.trim());
        if (!qualification || !institutionName  || !graduationYear || !fieldName ) {
          alert('Please fill in all fields correctly before proceeding.');
          return;
        }
        break;
      case 2:
        setWorkStatusError(!workStatus.trim());
        setSkillsError(!skills.trim());
        setResumeError(!resume.trim());
        setLinkedinProfileError(!linkedinProfile.trim());
        if ( !workStatus || !skills || !resume || !linkedinProfile) {
          alert('Please fill in all fields correctly before proceeding.');
          return;
        }
        break;
      default:
        break;
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    let hasError = false;
  
    switch (activeStep) {
      case 0:
        setUsernameError(!username.trim());
        setEmailError(!email.trim());
        setPasswordError(!password.trim());
        setConfirmPasswordError(password !== confirmPassword || !confirmPassword.trim());
        setMobileNumberError(!mobileNumber.trim());
        if (!username || !email || !password || password !== confirmPassword || !confirmPassword || !mobileNumber) {
          hasError = true;
        }
        break;
      case 1:
        setQualificationError(!qualification.trim());
        setInstitutionNameError(!institutionName.trim());
        setGraduationYearError(!graduationYear.trim());
        setFieldNameError(!fieldName.trim());
        if (!qualification || !institutionName || !graduationYear || !fieldName) {
          hasError = true;
        }
        break;
      case 2:
        setWorkStatusError(!workStatus.trim());
        setSkillsError(skills.length === 0);
        setResumeError(!resume);
        setLinkedinProfileError(!linkedinProfile.trim());
        if (!workStatus || skills.length === 0 || !resume || !linkedinProfile) {
          hasError = true;
        }
        break;
      default:
        break;
    }
  
    if (hasError) {
      alert('Please fill in all fields correctly before proceeding.');
    } else {
      alert('Form submitted successfully!');
    }
  };
  
  const years = [];
    for (let year = 1999; year <= 2027; year++) {
        years.push(year);
    }
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
  
      if (selectedFile) {
        setResume(selectedFile);
        setResumeError(false);
      } else {
        setResume(null);
        setResumeError(true);
      }
    };
   


  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                placeholder="Type Your Name"
                value={username}
                onChange={(e) => handleInputChange(e, setUsername, setUsernameError)}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Email ID</label>
              <input
                type="email"
                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                placeholder="Type Your Email ID"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail, setEmailError)}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                placeholder="Type Your Password"
                value={password}
                onChange={(e) => handleInputChange(e, setPassword, setPasswordError)}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`}
                placeholder="Confirm Your Password"
                value={confirmPassword}
                onChange={(e) => handleInputChange(e, setConfirmPassword, setConfirmPasswordError)}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Mobile Number</label>
              <input
                type="tel"
                className={`form-control ${mobileNumberError ? 'is-invalid' : ''}`}
                placeholder="Type Your Mobile Number"
                value={mobileNumber}
                onChange={(e) => handleInputChange(e, setMobileNumber, setMobileNumberError)}
              />
            </div>
          </>
        );
        case 1:
            return (
              <>
              <div className='my-3'>
                <div className="mb-3">
                  <label className="form-label">Educational Qualification</label>
                  <input
                    type="text"
                    className={`form-control ${qualificationError ? 'is-invalid' : ''}`}
                    placeholder="Type Your Qualification"
                    value={qualification}
                    onChange={(e) => handleInputChange(e, setQualification, setQualificationError)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Institution Name</label>
                  <input
                    type="text"
                    className={`form-control ${institutionNameError ? 'is-invalid' : ''}`}
                    placeholder="Type Your Institution Name"
                    value={institutionName}
                    onChange={(e) => handleInputChange(e, setInstitutionName, setInstitutionNameError)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Field of Study</label>
                  <input
                    type="text"
                    className={`form-control ${FieldNameError ? 'is-invalid' : ''}`}
                    placeholder="Type Your Field of study"
                    value={fieldName}
                    onChange={(e) => handleInputChange(e, setFieldName, setFieldNameError)}
                  />
                </div>
               
                <div className="mb-3" style={{fontFamily:"Montserrat",color:"rgb(75, 73, 73)"}}>
                  <label className="form-label">Graduation Year</label>
                  <select
                      className={`form-control ${graduationYearError ? 'is-invalid' : ''}`}
                      value={graduationYear}
                      onChange={(e) => handleInputChange(e, setGraduationYear, setGraduationYearError)}
                      style={{fontFamily:"Montserrat",color:"rgb(75, 73, 73)"}}
                  >
                      <option value="">Select Graduation Year</option>
                      {years.map((year) => (
                          <option key={year} value={year}>
                              {year}
                          </option>
                      ))}
                  </select>
              </div>
              </div>
              </>
            );
            case 2:
                return (
                    <>
                     

                     <div className="mb-3 my-3" style={{fontFamily:"Montserrat",color:"#9E9E9E "}}>
                          <label className="form-label">Work Status</label>
                          <select style={{fontFamily:"Montserrat",color:"rgb(75, 73, 73)"}}
                              className={`form-control ${workStatusError ? 'is-invalid' : ''}`}
                              value={workStatus}
                              onChange={(e) =>
                                  handleInputChange(e, setWorkStatus, setWorkStatusError)
                              }
                          >
                              <option value="">Select Your Work Status</option>
                              <option value="Employed">Employed</option>
                              <option value="Unemployed">Unemployed</option>
                              <option value="Self-Employed">Self-Employed</option>
                             
                          </select>
                        
                      </div>

                      <div className="mb-3">
                            <label className="form-label">Skills</label>
                            <div className="form-control" style={{ fontSize: '1.0em' }}>
                                {skills.map((skill, index) => (
                                    <div key={index} className="badge bg-light text-dark bordered m-1"  style={{
                                      fontSize: 'inherit',
                                      border: '1px solid #ccc',
                                      padding: '5px',
                                      borderRadius: '5px',
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                  }}>
                                        {skill}
                                        <span
                                            className="badge bg-danger ms-1"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => removeSkill(skill)}
                                        >
                                            &times;
                                        </span>
                                    </div>
                                ))}
                                <input
                                    type="text"
                                    className={`form-control ${skillsError ? 'is-invalid' : ''}`}
                                    placeholder="Type Your Skills"
                                    value={newSkill}
                                    onChange={(e) => setNewSkill(e.target.value)}
                                    onBlur={addSkill}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') addSkill();
                                    }}
                                />
                            </div>
                            
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Resume</label>
                          <input
                            type="file"
                            className={`form-control ${resumeError ? 'is-invalid' : ''}`}
                            onChange={handleFileChange}
                          />
                          {resumeError && <p style={{ color: 'red' }}>Please upload a valid resume</p>}
                          {resume && <p>Selected file: {resume.name}</p>}
                        </div>
                        <div className="mb-3">
                          <label className="form-label">LinkedIn Profile</label>
                          <input
                              type="text"
                              className={`form-control ${linkedinProfileError ? 'is-invalid' : ''}`}
                              placeholder="Enter Your LinkedIn Profile URL"
                              value={linkedinProfile}
                              onChange={(e) =>
                                  handleInputChange(e, setLinkedinProfile, setLinkedinProfileError)
                              }
                          />
                      </div>
                    </>
                  );

            default:
        return null;
    }
  };

  return (
    <div className="register">
      <div className='col-md-6'><Carousel /></div>
      <div className="col-1 col-md-6 container">
        <div id='form' className='flex2 flex-col'>
          <h2>Recruitee Sign Up</h2>
          <div className="mb-3">
            {getStepContent(activeStep)}
          </div>
         
          <div className="stepper-container">
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <div className='d-flex flex-row justify-content-center my-1' style={{  gap: '20px' }}>
            <Button disabled={activeStep === 0} variant="contained" onClick={handleBack}>
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button variant="contained" onClick={handleSubmit}>
                Sign Up
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            )}
          </div>
          <div className='text-center'>
  <p style={{ marginBottom: '3px' }}>Already have an account? <span style={mystyle}>Login</span></p>
  <p style={{ marginTop: '3px' }}>Do you want to sign up as a Recruiter? <span style={mystyle}>Click Here</span></p>
</div>

        </div>
      </div>
    </div>
  );
}
