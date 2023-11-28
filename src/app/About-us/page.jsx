import React from 'react'
import Nav from '../components/Nav'
import NavMob from '../components/NavMob'
import WavyAboutUs from '../components/WavyAboutUs'
import  AboutUs from '../components/AboutUs'

const Data={
  heading:"LaxiLL",
  className:"floating",
  imgSrc:"/Images/AboutLaxill.png"
}

const AboutUS = () => {


  return (
    <div>
        <Nav/>
      <NavMob />
      <WavyAboutUs/>
      <AboutUs Data={Data}/>
    </div>
  )
}

export default AboutUS