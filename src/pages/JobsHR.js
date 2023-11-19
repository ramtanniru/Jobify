import React from 'react'
import Post from '../components/Jobs_comp/Post'
import Application_card from '../components/Jobs_comp/application'
import {applications} from './data'

const Jobs = () => {
  const filteredApplications = applications.filter(app => app.status !== 'rejected');
  return (
    <div>
      <Post/>
      {/* Search */}
      <div className='d-flex flex-row'>
        {/* Filter */}
        <div className=''></div>
        {/* Applications */}
        <div className='my-5'>
          <div className='d-flex flex-wrap col-10 mx-auto gap-5 justify-content-between'>
            {filteredApplications.map((application, index) => (
              <Application_card key={index} arr={application} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs