
"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import WavesSvg from "./WavesSvg"
// import HeroBg from "../../../public/Images/Servicesbg2.jpg";
import Image from 'next/image';


const WavyHero = () => {
  return (
    <section className=" hero " style={{ backgroundImage: `url(${""})` }}>
      <div className="heroShade"></div>
      <div className="container z-index-5 ">
        <div className=' content-wrapper'>
          <div className="content-services ">
            <div>
              <h2 className='text-4xl font-extrabold mx-auto md:text-6xl '><span className='text-white'>Services</span><br></br>

                {/* <TypeAnimation
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
/> */}
              </h2>
            </div>
            <p className="text-2xl text-white  font-extrabold mx-auto md:text-3xl">
              &quot;<span className=" span text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]"> Explore </span> what we have to offer &quot;
            </p>
            <button className='px-11 text-white font-semi-bold py-4 rounded-full mr-4 mt-10 bg-gradient-to-br from-red-500 via-red-400 to-pink-500 hover:bg-slate-800'>Get Started</button>

          </div>
          <div className="img-contain">
            <Image
              src={`/Images/floatingman.png`}
              width={500}
              height={500}
              alt="floatingman"
              className='floating-longer'
            />
          </div>
        </div>
      </div>
      <div className="waves">
        <WavesSvg />
      </div>
    </section>
  )
}

export default WavyHero