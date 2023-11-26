import React from 'react'
import Image from 'next/image'

const Freestyle = () => {
    return (
        // <section className="freestyle">
        //     <h2>Let us <span>Transform</span> your <span>Data</span> together</h2>
        // </section>


        <section className="free-style">
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-sm text-indigo-600 font-medium">
                        Stay Ahead with our team
                    </h1>
                    <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                        Make better decisions and get ahead of the competition with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">Our data experts</span>
                    </h2>
                    <p className="max-w-2xl mx-auto">
                        Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <a href="javascript:void(0)" className="block py-2 px-4 text-white font-medium gradient-button duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Get Started
                        </a>

                    </div>
                </div>
                <div className="mt-14">
                    <Image src={"/Images/Data-analysis2.jpg"}

                        alt='Data-analysis'
                        width={100}
                        height={100}
                        sizes='cover'
                        className="w-full shadow-lg rounded-lg border"  />
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1700906708">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" class="shape-fill"></path>
    </svg>
</div>
        </section>
    )
}

export default Freestyle