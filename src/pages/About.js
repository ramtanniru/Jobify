import React from 'react'
import Header from '../components/nav'
import Footer from '../components/footer'

import Header from '../components/nav'
import Footer from '../components/footer'
import Contact from '../components/Abt_comp/Contact'
import History from '../components/Abt_comp/History'


const About = () => {
  return (
    <div>
        <Header/>

        <History/>

        <Contact/>
        <Footer/>
    </div>
  )
}

export default About