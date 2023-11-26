import React from 'react'
import Card from './Card'



const services = [{
    title: "Data Analysis",
    info: "We provide comprehensive data analysis services that allow you to explore, visualize, and interpret your data. Whether you&#39;re dealing with structured or unstructured data, we have the expertise to uncover valuable patterns and trends that drive your business forward.",
    img: "/Images/Data-analysis.png"
}, {
    title: "Predictive Analytics",
    info: "Predictive analytics is at the heart of what we do. Our experts build models that help you anticipate future trends and make data-driven decisions. From demand forecasting to customer behavior prediction, we've got you covered.",
    img: "/Images/Predictive.png"
}, {
    title: "Data Visualization",
    info: "Transforming data into meaningful visuals is a powerful way to communicate insights. Our data visualization services make complex data understandable and actionable, enabling your team to act on valuable information quickly.",
    img: "/Images/clouds.png"
}]

const Services = () => {
    console.log("hello")
    return (
        <section className='services'>
            <div className="custom-shape-divider-top-1700757682">
                <div className="custom-shape-divider-top-1700758053">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                    </svg>

                </div>
            </div>
            <div className='svg-spacer'></div>

            <div className="services-text  mt-30">
                <h2 className='text-3xl font-extrabold mt-20'><span className='text-transparent bg-clip-text bg-gradient-to-r  from-red-500 via yellow-500 to-pink-500'> Our Services </span></h2>
                <h1 className='text-4xl font-bold'>Let us take your ideas to the next level !!</h1>
                <div className="card-wrapper">

                    {services.map((service, index) => (
                        <Card services={service} key={index} />
                    )

                    )}

                </div>
            </div>
            <div className="custom-shape-divider-bottom-1700813710">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    )
}

export default Services