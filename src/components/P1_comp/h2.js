import React from 'react';
import C1 from './card1';
import img1 from '../../Icon/addAcc.svg';
import img2 from '../../Icon/form.svg';
import img3 from '../../Icon/mail.svg';

const H2 = () => {
    const card1 = {img:img1,head:"Create An Account",subHead:"Become a part of the Jobify community and gain access to a vast array of job opportunities."};
    const card2 = {img:img2,head:"Complete Your Profile",subHead:"Completing your profile is a crucial part of the process, enabling us to connect you with the right opportunities."};
    const card3 = {img:img3,head:"Hunting Jobs",subHead:"Embark on your job search journey with Jobify. Explore a wide range of opportunities tailored to your skills."};
  return (
    <div className='py-5' style={{backgroundColor:"#FAFAFA"}}>
        <div className='d-flex flex-row py-5 col-11 mx-auto justify-content-around align-items-center'>
            <div className='text-start col-4'>
                <h6 className='sub-head text-primary fw-bold'>How it Works</h6>
                <h1 className='head'>Quick Steps in Getting a Job</h1>
                <p className='body'>
                Ready to take the first step towards your 
                dream job? These quick steps will guide you 
                through the process of getting started with 
                Jobify.
                </p>
            </div>
            <div className='col-6 d-flex flex-row align-items-center'>
                <div className='col-1'>
                    <p className='body fw-bold m-2' style={{color:"#55C2F8"}}>01</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="151" viewBox="0 0 16 151" fill="none">
                            <path d="M7.64645 150.354C7.84171 150.549 8.15829 150.549 8.35355 150.354L11.5355 147.172C11.7308 146.976 11.7308 146.66 11.5355 146.464C11.3403 146.269 11.0237 146.269 10.8284 146.464L8 149.293L5.17157 146.464C4.97631 146.269 4.65973 146.269 4.46447 146.464C4.2692 146.66 4.2692 146.976 4.46447 147.172L7.64645 150.354ZM7.5 0L7.5 4.6875H8.5L8.5 0L7.5 0ZM7.5 14.0625L7.5 23.4375H8.5L8.5 14.0625H7.5ZM7.5 32.8125L7.5 42.1875H8.5L8.5 32.8125H7.5ZM7.5 51.5625L7.5 60.9375H8.5L8.5 51.5625H7.5ZM7.5 70.3125L7.5 79.6875H8.5L8.5 70.3125H7.5ZM7.5 89.0625L7.5 98.4375H8.5L8.5 89.0625H7.5ZM7.5 107.812L7.5 117.188H8.5L8.5 107.812H7.5ZM7.5 126.562L7.5 135.938H8.5L8.5 126.562H7.5ZM7.5 145.312L7.5 150H8.5L8.5 145.312H7.5ZM7.29289 150.707C7.68342 151.098 8.31658 151.098 8.70711 150.707L15.0711 144.343C15.4616 143.953 15.4616 143.319 15.0711 142.929C14.6805 142.538 14.0474 142.538 13.6569 142.929L8 148.586L2.34315 142.929C1.95262 142.538 1.31946 142.538 0.928932 142.929C0.538408 143.319 0.538408 143.953 0.928932 144.343L7.29289 150.707ZM7 0L7 4.6875H9L9 0L7 0ZM7 14.0625L7 23.4375H9L9 14.0625H7ZM7 32.8125L7 42.1875H9L9 32.8125H7ZM7 51.5625L7 60.9375H9L9 51.5625H7ZM7 70.3125L7 79.6875H9L9 70.3125H7ZM7 89.0625L7 98.4375H9L9 89.0625H7ZM7 107.812L7 117.188H9L9 107.812H7ZM7 126.562L7 135.938H9L9 126.562H7ZM7 145.312L7 150H9L9 145.312H7Z" fill="#55C2F8"/>
                        </svg>
                    </div>
                    <p className='body fw-bold m-2' style={{color:"#55C2F8"}}>02</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="151" viewBox="0 0 16 151" fill="none">
                            <path d="M7.64645 150.354C7.84171 150.549 8.15829 150.549 8.35355 150.354L11.5355 147.172C11.7308 146.976 11.7308 146.66 11.5355 146.464C11.3403 146.269 11.0237 146.269 10.8284 146.464L8 149.293L5.17157 146.464C4.97631 146.269 4.65973 146.269 4.46447 146.464C4.2692 146.66 4.2692 146.976 4.46447 147.172L7.64645 150.354ZM7.5 0L7.5 4.6875H8.5L8.5 0L7.5 0ZM7.5 14.0625L7.5 23.4375H8.5L8.5 14.0625H7.5ZM7.5 32.8125L7.5 42.1875H8.5L8.5 32.8125H7.5ZM7.5 51.5625L7.5 60.9375H8.5L8.5 51.5625H7.5ZM7.5 70.3125L7.5 79.6875H8.5L8.5 70.3125H7.5ZM7.5 89.0625L7.5 98.4375H8.5L8.5 89.0625H7.5ZM7.5 107.812L7.5 117.188H8.5L8.5 107.812H7.5ZM7.5 126.562L7.5 135.938H8.5L8.5 126.562H7.5ZM7.5 145.312L7.5 150H8.5L8.5 145.312H7.5ZM7.29289 150.707C7.68342 151.098 8.31658 151.098 8.70711 150.707L15.0711 144.343C15.4616 143.953 15.4616 143.319 15.0711 142.929C14.6805 142.538 14.0474 142.538 13.6569 142.929L8 148.586L2.34315 142.929C1.95262 142.538 1.31946 142.538 0.928932 142.929C0.538408 143.319 0.538408 143.953 0.928932 144.343L7.29289 150.707ZM7 0L7 4.6875H9L9 0L7 0ZM7 14.0625L7 23.4375H9L9 14.0625H7ZM7 32.8125L7 42.1875H9L9 32.8125H7ZM7 51.5625L7 60.9375H9L9 51.5625H7ZM7 70.3125L7 79.6875H9L9 70.3125H7ZM7 89.0625L7 98.4375H9L9 89.0625H7ZM7 107.812L7 117.188H9L9 107.812H7ZM7 126.562L7 135.938H9L9 126.562H7ZM7 145.312L7 150H9L9 145.312H7Z" fill="#55C2F8"/>
                        </svg>
                    </div>
                    <p className='body fw-bold m-2' style={{color:"#55C2F8"}}>03</p>
                </div>
                <div className='col-11 d-flex flex-column gap-5'>
                    <C1 arr={card1}/>
                    <C1 arr={card2}/>
                    <C1 arr={card3}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default H2