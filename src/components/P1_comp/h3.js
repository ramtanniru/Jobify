import React from 'react';
import img from '../../assets/abtImg.svg';

const H3 = () => {
  return (
    <div className='d-flex flex-column gap-5 my-5 py-5'>
        <div className='d-flex flex-column col-8 mx-auto mb-5'>
            <h6 className='sub-head fw-bold text-primary'>About Us</h6>
            <h1 className='head'>Start Your <span className='grad'>Jobify</span> journey Today</h1>
            <p className='body m-0'>Embark on a journey towards your dream career. Begin your job search today with Jobify and open doors to 
                endless opportunities. The first step towards your ideal job starts here. Dive into a world of possibilities and kickstart 
                your job search journey with Jobify.
            </p>
        </div>
        <div>
            <img src={img}/>
        </div>
    </div>
  )
}

export default H3