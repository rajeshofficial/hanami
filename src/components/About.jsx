const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#F9C4C5] to-[#F2EDE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading text-[#0F0000] mb-6">
              About Hamani
            </h2>
            <p className="text-xl text-[#866061] mb-6 font-['sans-serif'] leading-relaxed">
At Hanami, we believe style is more than clothes—it’s self-expression. Our mission is to help you discover your unique aesthetic and build confidence through thoughtful, personalized styling.


            </p>
            <p className="text-lg text-[#0F0000] mb-6 font-['sans-serif'] leading-relaxed">
True style isn’t about chasing trends, it’s about creating a wardrobe that reflects you and supports how you want to feel every day.

            </p>
            <p className="text-lg text-[#0F0000] mb-8 font-['sans-serif'] leading-relaxed">
             Whether you’re refreshing your wardrobe, building a capsule collection, or transforming your look, we guide you every step of the way.

            </p>

            {/* <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-heading text-[#743438] mb-2">50+</div>
                <div className="text-[#0F0000] font-['sans-serif']">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading text-[#743438] mb-2">1+</div>
                <div className="text-[#0F0000] font-['sans-serif']">Years Experience</div>
              </div>
            </div> */}

            <a
              href="#contact"
              className="inline-block bg-[#743438] text-white px-8 py-4 text-lg font-['sans-serif'] rounded-md hover:bg-[#440000] transition-colors"
            >
              Get Started Today
            </a>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-heading text-[#0F0000] mb-4">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#743438] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-['sans-serif']">1</div>
                  <div>
                    <h4 className="font-['sans-serif'] font-semibold text-[#0F0000] mb-1">Consultation</h4>
                    <p className="text-[#866061] font-['sans-serif']">We begin by understanding your lifestyle, preferences, and goals
</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#743438] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-['sans-serif']">2</div>
                  <div>
                    <h4 className="font-['sans-serif'] font-semibold text-[#0F0000] mb-1">Analysis</h4>
                    <p className="text-[#866061] font-['sans-serif']">We assess your wardrobe and uncover ways to elevate your style.
</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#743438] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-['sans-serif']">3</div>
                  <div>
                    <h4 className="font-['sans-serif'] font-semibold text-[#0F0000] mb-1">Transformation</h4>
                    <p className="text-[#866061] font-['sans-serif']">We curate and style pieces that elevate your personal brand
</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#743438] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-['sans-serif']">4</div>
                  <div>
                    <h4 className="font-['sans-serif'] font-semibold text-[#0F0000] mb-1">Confidence</h4>
                    <p className="text-[#866061] font-['sans-serif']">You walk away feeling authentic, stylish, and self-assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
