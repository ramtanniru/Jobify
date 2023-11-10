import React from 'react'
import star from '../../Icon/star.svg';

const C5 = ({arr}) => {
    const stars = arr.rating;
    const starIcons = Array.from({ length: stars }, (_, index) => (
        <img key={index} src={star} alt={`Star ${index + 1}`} />
      ));
  return (
    <div className='d-flex flex-column p-3 gap-3 col-3 shadow rounded-3'>
        {/* Name */}
        <div className='d-flex flex-row align-items-center gap-3'>
            <img src={arr.img}/>
            <div className='text-start d-flex flex-column'>
                <h2 className='sub-head fw-bold text-primary m-0'>{arr.name}</h2>
                <p className='body m-0'>{arr.role}</p>
            </div>
        </div>
        {/* Rating */}
        <div className='d-flex flex-row'>{starIcons}</div>
        {/* Feedback */}
        <div className='d-flex flex-column text-start'>
            <h6 className='sub-head fw-bold'>{arr.head}</h6>
            <p className='body'>{arr.comment}</p>
        </div>
    </div>
  )
}

export default C5