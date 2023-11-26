import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className="about-wrapper">
        <div className="home about-us">
        <div className='about-text'>
        <h2 className='font-bold'>What we do</h2>
        <div class="divider">
            <div class="one gradient"></div>
            <div class="two gradient"></div>
        </div>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto animi eligendi iste magnam deleniti possimus unde id adipisci, soluta alias ad voluptate quam. Hic atque voluptates cupiditate non! Ab, perspiciatis?
        Laboriosam, minus quasi, labore maiores excepturi eligendi quo, sed exercitationem nemo nihil nostrum. Ea veritatis nulla temporibus ut nemo, labore quibusdam doloremque dolorum veniam dolores. Doloribus libero voluptas debitis ea!</p>
        <button className='px-11 text-white font-semi-bold py-3 rounded-full mr-4 mt-10 gradient-button '>See more</button>
        </div>

        <div className='about-image'>
            <Image src={"/Images/laxill-rep.png"}
            className='floating'
            alt='logo'
            width={700}
            height={700}/>
        </div>
    </div>
    </div>
  )
}

export default AboutUs