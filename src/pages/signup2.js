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
  const [degree, setDegree] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  const [position, setPosition] = useState('');
  const [workStatus, setWorkStatus] = useState('');
  const [skills, setSkills] = useState('');
  const [resume, setResume] = useState('');
  const [licenses, setLicenses] = useState('');

  const [qualificationError, setQualificationError] = useState(false);
  const [institutionNameError, setInstitutionNameError] = useState(false);
  const [degreeError, setDegreeError] = useState(false);
  const [graduationYearError, setGraduationYearError] = useState(false);
  const [registrationNumberError, setRegistrationNumberError] = useState(false);

  const [positionError, setPositionError] = useState(false);
  const [workStatusError, setWorkStatusError] = useState(false);
  const [skillsError, setSkillsError] = useState(false);
  const [resumeError, setResumeError] = useState(false);
  const [licensesError, setLicensesError] = useState(false);

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState(false);

  const handleInputChange = (e, setter, setError) => {
    const value = e.target.value;
    setter(value);
    setError(!value.trim());
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
        setDegreeError(!degree.trim());
        setGraduationYearError(!graduationYear.trim());
        setRegistrationNumberError(!registrationNumber.trim());
        if (!qualification || !institutionName || !degree || !graduationYear || !registrationNumber) {
          alert('Please fill in all fields correctly before proceeding.');
          return;
        }
        break;
      case 2:
        setPositionError(!position.trim());
        setWorkStatusError(!workStatus.trim());
        setSkillsError(!skills.trim());
        setResumeError(!resume.trim());
        setLicensesError(!licenses.trim());
        if (!position || !workStatus || !skills || !resume || !licenses) {
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

    // ... validation and submission logic for all fields

    if (
      !username.trim() || !email.trim() || !password.trim() ||
      password !== confirmPassword || !confirmPassword.trim() || !mobileNumber.trim()
    ) {
      alert('Form contains errors. Please fill in all fields correctly.');
    } else {
      alert('Form submitted successfully!');
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
            <div className="mb-3">
              <label className="form-label">Email ID</label>
              <input
                type="email"
                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                placeholder="Type Your Email ID"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail, setEmailError)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                placeholder="Type Your Password"
                value={password}
                onChange={(e) => handleInputChange(e, setPassword, setPasswordError)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`}
                placeholder="Confirm Your Password"
                value={confirmPassword}
                onChange={(e) => handleInputChange(e, setConfirmPassword, setConfirmPasswordError)}
              />
            </div>
            <div className="mb-3">
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
                  <label className="form-label">Degree/Course</label>
                  <input
                    type="text"
                    className={`form-control ${degreeError ? 'is-invalid' : ''}`}
                    placeholder="Type Your Degree"
                    value={degree}
                    onChange={(e) => handleInputChange(e, setDegree, setDegreeError)}
                  />
                </div>
                <div className="mb-3">
                    <label className="form-label">Graduation Year</label>
                    <input
                        type="text"
                        className={`form-control ${graduationYearError ? 'is-invalid' : ''}`}
                        placeholder="Type Your Graduation Year"
                        value={graduationYear}
                        onChange={(e) => handleInputChange(e, setGraduationYear, setGraduationYearError)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Registration Number</label>
                    <input
                        type="text"
                        className={`form-control ${registrationNumberError ? 'is-invalid' : ''}`}
                        placeholder="Type Your Registration Number"
                        value={registrationNumber}
                        onChange={(e) => handleInputChange(e, setRegistrationNumber, setRegistrationNumberError)}
                    />
                </div>
              </>
            );
            case 2:
                return (
                    <>
                      <div className="mb-3">
                        <label className="form-label">Position</label>
                        <input
                            type="text"
                            className={`form-control ${positionError ? 'is-invalid' : ''}`}
                            placeholder="Type Your Position"
                            value={position}
                            onChange={(e) => handleInputChange(e, setPosition, setPositionError)}
                        />
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Work Status</label>
                        <input
                            type="text"
                            className={`form-control ${workStatusError ? 'is-invalid' : ''}`}
                            placeholder="Type Your Work Status"
                            value={workStatus}
                            onChange={(e) => handleInputChange(e, setWorkStatus, setWorkStatusError)}
                        />
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Skills</label>
                        <input
                            type="text"
                            className={`form-control ${skillsError ? 'is-invalid' : ''}`}
                            placeholder="Type Your Skills"
                            value={skills}
                            onChange={(e) => handleInputChange(e, setSkills, setSkillsError)}
                        />
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Resume</label>
                        <input
                            type="text"
                            className={`form-control ${resumeError ? 'is-invalid' : ''}`}
                            placeholder="Type Your Resume"
                            value={resume}
                            onChange={(e) => handleInputChange(e, setResume, setResumeError)}
                        />
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Licenses</label>
                        <input
                            type="text"
                            className={`form-control ${licensesError ? 'is-invalid' : ''}`}
                            placeholder="Type Your Licenses"
                            value={licenses}
                            onChange={(e) => handleInputChange(e, setLicenses, setLicensesError)}
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
          <div className='d-flex flex-row justify-content-center' style={{  gap: '20px' }}>
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
          <div className='text-center mt-2'><p>Already have an account? <span style={mystyle}>Login</span></p></div>
        </div>
      </div>
    </div>
  );
}
