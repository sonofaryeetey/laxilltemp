import React from 'react'
import Image from 'next/image'

const AboutUs = ({Data}) => {
  console.log({Data})
  return (
    <div className="about-wrapper">
        <div className="home about-us">
        <div className='about-text'>
        <h2 className='font-bold'>{Data.heading}</h2>
        <div class="divider">
            <div class="one gradient"></div>
            <div class="two gradient"></div>
        </div>
        <p className=''>{`Our team of experienced data scientists, analysts, and engineers are committed to delivering innovative solutions that empower your organization. With a track record of success, we've helped numerous companies across various industries leverage their data for competitive advantage.`}
</p>
        <button className='px-11 text-white font-semi-bold py-3 rounded-full mr-4 mt-10 gradient-button '>See more</button>
        </div>

        <div className='about-image'>
            <Image src={Data.imgSrc}
            className={Data.className}
            alt='logo'
            width={700}
            height={700}/>
        </div>
    </div>
    </div>
  )
}

export default AboutUs