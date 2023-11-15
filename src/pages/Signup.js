import React from 'react'
import Stepper from '../components/Stepper'
import Carousel from '../components/Carousel'

const Signup = () => {
  return (
    <div className='d-flex flex-wrap'>
        <Carousel className='col-6'/>
        <div className='col-6 d-flex flex-column'>
            
            <Stepper/>
        </div>
    </div>
  )
}

export default Signup