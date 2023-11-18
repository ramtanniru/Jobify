import {React,useState} from "react";
import profile_bg from "../assets/Profile_bg.svg";
import dp from "../assets/dp.svg";
import star from '../Icon/star.svg';
const Profile = () => {
    const [skills, setSkills] = useState(['flutter','Web dev','UI/UX']);
    const [skillsError, setSkillsError] = useState(false);
    const [newSkill, setNewSkill] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [arr, setArr] = useState({
        fname:'Ram',
        lname:'Tanniru',
        rating:5,
        applied:34,
        shortlisted:35,
        rejected:2,
        linkedIn:"https://www.linkedin.com/in/ram-tanniru-12b35b222/",
        phn:9182688796,
        email:'ramtanniru2@gmail.com',
        country:'India',
        state:'AP',
        city:'guntur',
        education:'Btech',
        gradYear:'2021-2025',
        clg:'VIT-AP',
        resume:'https://drive.google.com/file/d/10OExZUC0YP9AR_L7PlR7NfKthHFjVcKk/view?usp=sharing'
    });
    
    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    const saveChanges = () => {
        setIsEditing(false);
    };

    const changeAvatar = (event) => {
        const input = event.target;
        const img = document.getElementById('avatarImage');
    
        const file = input.files[0];
    
        if (file) {
          const reader = new FileReader();
    
          reader.onload = function (e) {
            img.src = e.target.result;
          };
    
          reader.readAsDataURL(file);
        }
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

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setArr((prevData) => ({ ...prevData, [id]: value }));
    };
  return (
    <div className="mt-5 pt-3">
      <div className="position-relative">
        <div className="bg-primary container-fluid">
          <img className="img" src={profile_bg} height={300} />
        </div>
        <div className="position-absolute translate-middle-x top-50 start-50 col-10 mx-auto d-flex flex-row justify-content-between">
          {/* Profile */}
          <div className="col-3 card rounded-3 d-flex flex-column bg-white">
            {/* Profile main */}
            <div className="d-flex flex-column align align-items-center pt-4 pb-2 gap-2">
                {/* DP */}
                <div>
                  <div className="avatar-container position-relative mx-auto my-auto"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                    }}>
                    <img
                      src={dp}
                      alt="Avatar"
                      className="avatar-img w-100"
                      id="avatarImage"
                      style={{
                        height: "150px",
                        borderRadius: "50%",
                        objectFit:'cover'
                      }}
                    />
                    <label
                      htmlFor="avatarInput"
                      className="camera-icon d-flex align-items-center justify-content-center bg-primary position-absolute"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Change Image"
                      style={{
                        bottom: "10px",
                        right: "10px",
                        borderRadius: "50%",
                        padding: "5px",
                        cursor: "pointer",
                        width: "30px",
                        height: "30px",
                        border: '2px solid #fff'
                      }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-camera-fill text-white"
                        viewBox="0 0 16 16">
                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                      </svg>
                    </label>
                    <input
                      type="file"
                      id="avatarInput"
                      className="file-input d-none"
                      accept="image/*"
                      onChange={changeAvatar}
                    />
                  </div>
                </div>
                {/* Name */}
                <h2 className="sub-head fw-bold">{arr.fname+' '+arr.lname}</h2>
                {/* Rating */}
                <div className=" d-flex flex-row gap-3 mx-auto">
                    {Array.from({ length: arr.rating}, (_, index) => (
                        <img key={index} src={star} alt={`Star ${index + 1}`} />
                    ))}
                </div>
            </div>
            <hr/>
            {/* Applications info  */}
            <div className="d-flex flex-row justify-content-between align-items-center px-4">
                <h3 className="m-0 body fw-bold ">Jobs applied</h3>
                <p className="m-0 body fw-bold text-warning">{arr.applied}</p>
            </div>
            <hr/>
            <div className="d-flex flex-row justify-content-between align-items-center px-4">
                <h3 className="m-0 body fw-bold">Jobs shortlisted</h3>
                <p className="m-0 body fw-bold text-success">{arr.shortlisted}</p>
            </div>
            <hr/>
            <div className="d-flex flex-row justify-content-between align-items-center px-4">
                <h3 className="m-0 body fw-bold">Jobs rejected</h3>
                <p className="m-0 body fw-bold text-danger">{arr.rejected}</p>
            </div>
            <hr/>
            <div className="d-flex justify-content-center align-items-center pb-3">
                <a className="btn btn-primary body" href={`${arr.linkedIn}`}>View LinkedIn Profile</a>
            </div>
          </div>
          {/* Personal details */}
          <form className="col-8 card rounded-3 bg-white">
            <fieldset disabled={!isEditing} className=" d-flex flex-column text-start">
                <div className="d-flex flex-wrap justify-content-between p-3 px-5 gap-3">
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" for='fname'>First Name</label>
                        <input className="form-control" id="fname" value={arr.fname} onChange={handleInputChange}/>
                    </div>
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" for='lname'>Last Name</label>
                        <input className="form-control" id="lname" value={arr.lname} onChange={handleInputChange}/>
                    </div>
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" for='phn'>Phone number</label>
                        <input className="form-control" id="phn" type="number" value={arr.phn} onChange={handleInputChange}/>
                    </div>
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" for='email'>Email ID</label>
                        <input className="form-control" id="email" type="email" value={arr.email} onChange={handleInputChange}/>
                    </div>
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" for='country'>Country</label>
                        <input className="form-control" id="country" value={arr.country} onChange={handleInputChange}/>
                    </div>
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" for='state'>State</label>
                        <input className="form-control" id="state" value={arr.state} onChange={handleInputChange}/>
                    </div>
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" for='city'>City</label>
                        <input className="form-control" id="city" value={arr.city} onChange={handleInputChange}/>
                    </div>
                </div>
                <hr/>
                <div className="d-flex flex-wrap justify-content-between p-3 px-5 gap-3">
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" for='education'>Education qualification</label>
                        <input className="form-control" id="education" value={arr.education} onChange={handleInputChange}/>
                    </div>
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" for='gradYear'>Graduation year</label>
                        <input className="form-control" id="gradYear" value={arr.gradYear} onChange={handleInputChange}/>
                    </div>
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" for='clg'>Institution Name</label>
                        <input className="form-control" id="clg" value={arr.clg} onChange={handleInputChange}/>
                    </div>
                </div>
                <hr/>
                <div className="d-flex flex-wrap justify-content-between p-3 px-5 gap-3">
                    <div className="d-flex flex-column">
                        <label className="form-label" for='skills'>Skills</label>
                        <div className="form-control col-12" style={{ fontSize: '1.0em' }}>
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
                                        className="badge bg-dark-subtle ms-1"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => removeSkill(skill)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                        </svg>
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
                </div>
            </fieldset>
            <div className="d-flex align-items-center p-3 px-5">
                <a className="btn btn-warning" href={`${arr.resume}`} target='_blank' >View Your Resume</a>
            </div>
            <div className="d-flex flex-row justify-content-between px-5 p-3  align-items-center">
                {isEditing ? (
                    <>
                        <button className="btn btn-success" onClick={saveChanges}>Save</button>
                        <button className="btn btn-danger" onClick={toggleEditMode}>Cancel</button>
                    </>
                    ) : (
                    <button className="btn btn-primary" onClick={toggleEditMode}>Edit Profile</button>
                )}
                <button className="btn btn-danger" onClick={''}>Log out</button>
            </div>
          </form>
        </div>
      </div>
      <div className="my-5 py-5"></div>
      <div className="my-5 py-5"></div>
      <div className="my-5 py-5"></div>
      <div className="my-5 py-5"></div>
      <div className="my-5 py-5"></div>
      <div className="my-5 py-5"></div>
    </div>
  );
};

export default Profile;
