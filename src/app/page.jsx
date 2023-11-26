import Image from 'next/image'
import Nav from './components/Nav'
import WavyHero from './components/WavyHero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Freestyle from './components/Freestyle'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import NavMob from './components/NavMob'
import LogoGrid from './components/LogoGrid'

export default function Home() {
  return (
    <main >
      <Nav/>
      <NavMob />
      <WavyHero/>
      <AboutUs/>
      <Services/>
      <Freestyle/>
      <Testimonials/>  
      <LogoGrid/>
      <Footer/>
      
      
      
    </main>
  )
}
