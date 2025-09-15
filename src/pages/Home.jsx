import React from 'react'
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
     <div className="min-h-screen bg-[#F2EDE7]">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home