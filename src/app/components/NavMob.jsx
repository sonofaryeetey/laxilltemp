"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'


// Add this style to your css file


const  NavMob = () => {

  const [state, setState] = useState(false)
  const navRef = useRef()

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Home", path: "/" },
      { title: "About", path: "/About-us" },
      { title: "Services", path: "javascript:void(0)" },
      { title: "Products", path: "javascript:void(0)" },
      { title: "Works", path: "javascript:void(0)" },
      { title: "Contact", path: "javascript:void(0)" }
  ]

  useEffect(() => {
      
      const body = document.body

      // Disable scrolling
      const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"]
      if (state) body.classList.add(...customBodyStyle)
      // Enable scrolling
      else body.classList.remove(...customBodyStyle)

      // Sticky strick
      const customStyle = ["sticky-nav", "fixed", "border-b"]
      window.onscroll = () => {
          if (window.scrollY > 80) navRef.current.classList.add(...customStyle)
          else navRef.current.classList.remove(...customStyle)
      }
    }, [state])
    

  return (
      <div ref={navRef} className="bg-white w-full top-0 z-20 nav-mob">
          <div className="items-center nav-mob-inner px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
              <div className="flex  items-center justify-between py-3 lg:py-4 lg:block">
                    <Link href="javascript:void(0)">
                        <Image
                            src="/Images/laxill-logo.png" 
                            width={50} 
                            height={50}
                            alt="Laxill-logo"
                        />
                    </Link>
                  <div className="lg:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${ state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'}`}>
                    <div>
                        <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row mt-10">
                            {/* <li className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                                <<Link href="javascript:void(0)" className="text-gray-600 hover:text-indigo-600">
                                    Contact
                                </Link>
                            </li> */}
                            {/* <li className="mt-4 lg:mt-0">
                                <<Link href="javascript:void(0)" className="py-3 px-4 text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0">
                                    Login
                                </Link>
                            </li>
                            <li className="mt-8 lg:mt-0">
                                <<Link href="javascript:void(0)" className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline">
                                    Sign Up
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="flex-1">
                        <ul className="  justify-center items-center bg-red space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className=" text-xl text-gray-600 hover:text-indigo-600">
                                            <Link href={item.path}>
                                                { item.title }
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
              </div>
          </div>
      </div>
  )
}


export default NavMob;