import React, {useState} from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
// import ImageSlider from '../components/Carousal/Slider'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import Team from '../components/Team'
import Top from '../components/top'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle =()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle = {toggle} />
          <HeroSection />
          <About />
          <Services />
          <Portfolio />
          <Team />
          <Contact />
          <Footer />
          <Top />
        </>
    )
}

export default Home
