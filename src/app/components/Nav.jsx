"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Nav = () => {

  const[color,setColor]=useState(false)
  function changeNavColor(){
    if(window.scrollY>90){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener('scroll',changeNavColor)
  }
  

  return (
    <nav className={color?'nav-menu nav-white':"nav-menu"}>
      {/* <div className="placeholder">Placeholder</div> */}
      <div className="container nav-check ">
        <Link href='/'>
          <Image src={"/Images/laxill-logo.png"}
            className='placeholder'
            alt='logo'
            width={60}
            height={60}
          /></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Products</Link>
          <Link href="#">Works</Link>
          <Link href="#">Contacts</Link>
          <Link className="button" href="#"><button className='px-8 text-white font-semi-bold py-3 rounded-full  bg-gradient-to-br from-red-500 via-red-400 to-pink-500 hover:bg-slate-800'>Get Started</button></Link>
        </div>

      </div>
    </nav>
  )
}

export default Nav