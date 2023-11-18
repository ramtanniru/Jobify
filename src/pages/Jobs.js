import React from 'react'
import Post from '../components/Jobs_comp/Post'
import Application_card from '../components/Jobs_comp/application'
import { applications } from './data'

const Jobs = () => {
  return (
    <div>
      <Post/>
      {/* Search */}
      <div className='d-flex flex-row'>
        {/* Filter */}
        <div className=''></div>
        {/* Applications */}
        <div className=''>
          <div className='d-flex flex-wrap'>
            <Application_card arr={applications}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs