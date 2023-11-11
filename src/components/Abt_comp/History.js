import React from 'react'
import Line from '../../assets/line.svg'
const History = () => {
  return (
    <div className='mx-auto d-flex flex-column justify-content-center my-5 py-5'>
        {/* Text */}
        <div className='text-center mb-5'>
            <h6 className='sub-head fw-bold text-primary'>Timeline</h6>
            <h1 className='head'>Flow of Project</h1>
        </div>
        
        {/* Timeline */}
        <div className='grid-container-timeline mx-auto'>
            <div></div>
            <div className='rounded-5 bg-primary my-auto' style={{height:"20px", width:"20px"}}></div>
            <div className='d-flex flex-column text-start'>
                <h6 className='sub-head fw-bold text-primary m-0'>November 1, 2023</h6>
                <p className='body text-dark-emphasis m-0'>UI/UX Design</p>
            </div>

            <div className='bg-dark-subtle center' style={{height:'100px', width:'1px'}}></div>

            <div className='d-flex flex-column text-start'>
                <h6 className='sub-head fw-bold text-primary m-0'>November 10, 2023</h6>
                <p className='body text-dark-emphasis m-0'>Frontend</p>
            </div>
            <div className='rounded-5 bg-primary my-auto' style={{height:"20px", width:"20px"}}></div>

            <div className='bg-dark-subtle center align-self-center' style={{height:'100px', width:'1px'}}></div>

            <div></div>
            <div className='rounded-5 bg-primary my-auto' style={{height:"20px", width:"20px"}}></div>
            <div className='d-flex flex-column text-start'>
                <h6 className='sub-head fw-bold text-primary m-0'>November 13, 2023</h6>
                <p className='body text-dark-emphasis m-0'>Database Design</p>
            </div>

            <div className='bg-dark-subtle center align-self-center' style={{height:'100px', width:'1px'}}></div>

            <div className='d-flex flex-column text-start'>
                <h6 className='sub-head fw-bold text-primary m-0'>November 20, 2023</h6>
                <p className='body text-dark-emphasis m-0'>Backend</p>
            </div>
            <div className='rounded-5 bg-primary my-auto' style={{height:"20px", width:"20px"}}></div>

        </div>
    </div>
  )
}

export default History