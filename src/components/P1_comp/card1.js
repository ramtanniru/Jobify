import React from 'react'

const C1 = ({arr}) => {
  return (
    <div className='d-flex flex-row align-items-center justify-content-between shadow rounded-3 p-2 px-3 gap-3'>
        <img src={arr.img}/>
        <div className='d-flex flex-column text-start'>
            <h2 className='sub-head fw-bold'>
                {arr.head}
            </h2>
            <p className='body m-0'>
                {arr.subHead}
            </p>
        </div>
    </div>
  )
}

export default C1