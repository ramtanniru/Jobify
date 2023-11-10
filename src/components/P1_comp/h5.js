import React from 'react'
import C3 from './card3'
import img1 from '../../assets/f1.svg';
import img2 from '../../assets/f2.svg';
import img3 from '../../assets/f3.svg';
import img4 from '../../assets/f4.svg';

const H5 = () => {
    const card1 = {img:img1,head:'Job Recommendation',body:'Discover personalized job suggestions curated to match your skills, goals with our Job Recommendation feature.'};
    const card2 = {img:img2,head:'Skills',body:'Evaluate and showcase your strengths with our Skills feature, allowing you to stand out in the competitive job market.'};
    const card3 = {img:img3,head:'AI Chatbot',body:'Efficient, Instant, and Always Available - Our AI Chatbot is here to elevate your job search experience.'};
    const card4 = {img:img4,head:'Ratings',body:'Highlight your strengths with our Skill Ratings feature, assessment of your abilities to potential employers.'};
  return (
    <div className='my-5 py-3'>
        <div className='d-flex mt-5 flex-column text-start col-10 mx-auto'>
            <h6 className='sub-head fw-bold text-primary m-0'>What we offer</h6>
            <h1 className='head'>
            Trust Our <span className='text-primary'>Expertise</span>
            </h1>
            <p className='body m-0'>
            At Jobify, we offer more than just job listings. Discover a comprehensive suite of tools and resources tailored to your job search needs. From 
            personalized job recommendations to expert career advice, we're dedicated to helping you succeed.
            </p>
        </div>
        <div className='d-flex flex-wrap gap-5 justify-content-center mb-5'>
            <C3 arr={card1}/>
            <C3 arr={card2}/>
            <C3 arr={card3}/>
            <C3 arr={card4}/>
        </div>
    </div>
  )
}

export default H5