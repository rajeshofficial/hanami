import React from 'react'
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import { FaWhatsapp } from "react-icons/fa"   // 👈 install react-icons if not already

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F2EDE7] relative">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919717229153"  // 👈 replace with your WhatsApp number (with country code, no + or 0)
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  )
}

export default Home
