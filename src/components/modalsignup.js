import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css'

const MyComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Button to trigger the modal */}
      <button type="button" className="btn btn-primary" onClick={openModal}>
        Small modal
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
            
              <div className="modal-header" style={{backgroundColor:"#E2F0FF"}}>
                <h5 className="modal-title"style={{fontfamily: "Montserrat"}}>SignUp as</h5>
                <button type="button"  className="close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body d-flex flex-row justify-content-around my-3">
               
                <button className='btn  btn-primary'  >Recruiter</button>
                <button className='btn btn-primary'>Recruitee</button>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyComponent;
