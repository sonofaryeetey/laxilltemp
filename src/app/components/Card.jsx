import React from 'react'
import Image from 'next/image'
import HeroBg from "../../../public/Images/pexels-ketut-subiyanto-4559589.jpg";
const Card = ({ services }) => {
  // style={{ backgroundImage: `url(${HeroBg.src})`, backgroundSize: 'cover' }}


  return (
    <div className='card-show' >
      <div className="img-gradient"></div>
      <Image
        src={services.img}
        layout='fill'
        objectFit="cover"

      />

      <div className="text-wrapper">
        <h1>{services.title}</h1>

        <p>{`${services.info.slice(0,203)} ......`}</p>
        <button>Learn More</button>
      </div>

    </div>
  )
}

export default Card