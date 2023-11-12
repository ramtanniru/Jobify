import React from 'react'
import img1 from '../../Icon/bulb.svg';
import img2 from '../../Icon/target.svg';
import C2 from './card2';
const H4 = () => {
    const card1 = {img:img1,head:"Our Vision",subHead:"Our vision at Jobify is to revolutionize the job search experience, empowering individuals to find and excel in their dream careers. We're committed to providing innovative tools and unwavering support on every step of the journey."};
    const card2 = {img:img2,head:"Our Mission",subHead:"Our mission at Jobify is to simplify and enhance the job search process, connecting talent with opportunities that align with their goals. We strive to provide a platform that fosters growth, learning, and career advancement for all our users."};
  return (
    <div className='py-5' style={{backgroundColor:"#ECF5FE"}}>
        <div className='d-flex flex-row justify-content-center gap-5'>
            <C2 arr={card1}/>
            <C2 arr={card2}/>
        </div>
    </div>
  )
}

export default H4