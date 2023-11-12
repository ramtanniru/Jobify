import React from 'react'

const C2 = ({arr}) => {
  return (
    <div className='bg-white d-flex flex-column gap-2 shadow rounded-3 col-4 p-3 text-start m-5'>
        <div className='d-flex flex-row align-items-center gap-3'>
            <img src={arr.img}/>
            <h2 className='sub-head fw-bold m-0'>{arr.head}</h2>
        </div>
        <p className='body m-0'>{arr.subHead}</p>
    </div>
  )
}

export default C2