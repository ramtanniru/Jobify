import React from 'react'

const C6 = ({arr}) => {
  return (
    <div className='d-flex flex-column p-3 shadow col-5 text-start gap-2 rounded-4'>
        <img className='img-fluid' src={arr.img}/>
        <p className='body m-0'>{arr.date}</p>
        <h6 className='sub-head fw-bold m-0'>{arr.head}</h6>
        <p className='body m-0'>{arr.body}</p>
    </div>
  )
}

export default C6