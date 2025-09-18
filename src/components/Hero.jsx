import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#F2EDE7] via-[#F9C4C5] to-[#F2EDE7] py-20 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-['serif'] text-[#0F0000] mb-6"
          >
           HANAMI
          </motion.h1>

          {/* Subtitle */}
<motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
  className="text-xl md:text-2xl text-[#743438] font-['sans-serif'] italic mb-1 max-w-3xl mx-auto"
>
  Personal Styling & Image Consulting
</motion.p>

{/* Subtitle */}
<motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
  className="text-base md:text-lg text-[#743438] font-['sans-serif'] italic mt-0 mb-8 max-w-3xl mx-auto leading-snug"
>
  Rooted in grace. Blooming with purpose
</motion.p>


          {/* Secondary Heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="text-2xl md:text-3xl font-['system-ui'] text-[#0F0000] mb-8 max-w-4xl mx-auto leading-tight"
          >
            Discover styling and image solutions tailored for your body, personal colouring, and lifestyle so you feel confident, authentic, and effortless every day.

          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
            className="text-lg md:text-xl text-[#866061] mb-12 max-w-2xl mx-auto font-['sans-serif']"
          >
          Wardrobe edits | Personal shopping | Style makeovers

          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#contact"
              className="bg-[#743438] text-white px-8 py-4 text-lg font-['sans-serif'] rounded-md hover:bg-[#440000] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Your Free Consultation
            </a>
            <a
              href="#services"
              className="border-2 border-[#743438] text-[#743438] px-8 py-4 text-lg font-['sans-serif'] rounded-md hover:bg-[#743438] hover:text-white transition-all duration-300"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 bg-[#F9C4C5] rounded-full opacity-20"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-16 h-16 bg-[#743438] rounded-full opacity-10"
      ></motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-20 w-12 h-12 bg-[#866061] rounded-full opacity-15"
      ></motion.div>
    </section>
  )
}

export default Hero
