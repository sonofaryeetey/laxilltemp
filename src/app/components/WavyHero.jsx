
"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import WavesSvg from "./WavesSvg"
import HeroBg from "../../../public/Images/pexels-ketut-subiyanto-4559589.jpg";


const WavyHero = () => {
  return (
    <section className=" hero " style={{backgroundImage:`url(${HeroBg.src})`}}>
      <div className="shape"></div>
      <div className="container">
      <div className="content">
        <h2 className='text-6xl font-extrabold '><span className='text-transparent bg-clip-text bg-gradient-to-r  from-red-500 via yellow-500 to-pink-500'>LAXIL </span><br></br>

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              ' For Data Analysis',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Data Engineering',
              1000,
              'Web Development',
              1000,

            ]}
            wrapper="span"
            speed={50}

            repeat={Infinity}
          />
        </h2>
        <p>Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non</p>
        <button className='px-11 text-white font-semi-bold py-4 rounded-full mr-4 mt-10 bg-gradient-to-br from-red-500 via-red-400 to-pink-500 hover:bg-slate-800'>Get Started</button>
      </div>
      </div>
      <div className="waves">
        <WavesSvg />
      </div>
    </section>
  )
}

export default WavyHero