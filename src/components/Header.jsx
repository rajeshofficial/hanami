import { useState } from 'react'
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { title: "The First Bloom", slug: "the-first-bloom" },
    { title: "True Tones", slug: "true-tones" },
    { title: "Style Sculpt", slug: "style-sculpt" },
    { title: "Image Edit", slug: "image-edit" },
    { title: "Style Alchemy", slug: "style-alchemy" },
    { title: "Closet Curator", slug: "closet-curator" },
    { title: "Dining Etiquette", slug: "dining-etiquette" },
  ]

  // Framer Motion variants for staggered fade-in
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo3.png" alt="Hamani" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-[#0F0000] hover:text-[#743438] transition-colors text-xl font-['sans-serif']">
              Home
            </a>
            <div className="relative group">
              <a
                href="/#services"
                className="text-[#0F0000] hover:text-[#743438] transition-colors text-xl font-['sans-serif']"
              >
                Services
              </a>

              {/* Desktop Services Dropdown */}
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    to={`/services/${service.slug}`}
                    className="block px-4 py-2 text-sm text-[#0F0000] hover:bg-[#F2EDE7]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <a href="/#about" className="text-[#0F0000] hover:text-[#743438]  text-xl transition-colors font-['sans-serif']">
              About
            </a>
            <a href="/#testimonials" className="text-[#0F0000] hover:text-[#743438]  text-xl transition-colors font-['sans-serif']">
              Testimonials
            </a>
            <a href="/#contact" className="text-[#0F0000] hover:text-[#743438] text-xl transition-colors font-['sans-serif']">
              Contact
            </a>
            <a
              href="/#contact"
              className="bg-[#743438]  text-white px-6 py-2 rounded-md hover:bg-[#440000] transition-colors font-['sans-serif']"
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <a href="/" className="block px-3 py-2 text-[#0F0000] hover:text-[#743438] font-['sans-serif']">Home</a>

                {/* Mobile Services Toggle */}
                <button
                  className="w-full text-left px-3 py-2 text-[#0F0000] hover:text-[#743438] font-['sans-serif'] flex justify-between items-center"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <span>{isServicesOpen ? "▲" : "▼"}</span>
                </button>

                {/* Animated Services Submenu */}
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      variants={container}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="pl-4"
                    >
                      {services.map((service, idx) => (
                        <motion.div key={idx} variants={item}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="block px-3 py-2 text-[#0F0000] hover:bg-[#F2EDE7] rounded-md font-['sans-serif']"
                            onClick={() => setIsMenuOpen(false)} // close menu on click
                          >
                            {service.title}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <a href="/#about" className="block px-3 py-2 text-[#0F0000] hover:text-[#743438] font-['sans-serif']">About</a>
                <a href="/#testimonials" className="block px-3 py-2 text-[#0F0000] hover:text-[#743438] font-['sans-serif']">Testimonials</a>
                <a href="/#contact" className="block px-3 py-2 text-[#0F0000] hover:text-[#743438] font-['sans-serif']">Contact</a>
                <a href="/#contact" className="block px-3 py-2 bg-[#743438] text-white rounded-md font-['sans-serif']">Book Consultation</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
