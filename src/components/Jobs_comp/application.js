import React from 'react'
import star from '../../Icon/star.svg'

const Application_card = ({arr}) => {
    const stars = arr.rating;
    const starIcons = Array.from({ length: stars }, (_, index) => (
        <img key={index} src={star} alt={`Star ${index + 1}`} />
    ));
  return (
    <div className='d-flex flex-column justify-content-between text-start'>
        <div className='d-flex flex-column gap-3'>
            <div className='d-flex flex-row align-items-center gap-3'>
                <img src={arr.img}/>
                <div className='d-flex flex-column gap-1'>
                    <h2 className='sub-head fw-bold text-primary'>{arr.name}</h2>
                    <div>{starIcons}</div>
                </div>
            </div>
            <div className='d-flex flex-column'>
                <h2 className='sub-head fw-bold'>{arr.title}</h2>
                <p className='body'>{arr.bio}</p>
            </div>
        </div>
        {/* Buttons */}
        <div className='d-flex flex-column gap-2'>
            <div className='d-flex flex-row align-items-center'>
                <button className='btn btn-primary'> Shortlist</button>
                <button className='btn btn-danger'>Reject</button>
            </div>
            <a className='btn btn-warning' href={`${arr.resume}`} target='_parent'>View Resume</a>
        </div>
    </div>
  )
}

export default Application_card