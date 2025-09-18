const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      title: "Business Executive",
      text: "Hanami completely transformed my professional wardrobe. I now feel confident and put-together for every meeting. The investment in personal styling has paid dividends in my career.",
      rating: 5
    },
    {
      name: "Raghav L.",
      title: "Creative Director",
      text: "I was skeptical about personal styling, but Hanami showed me how to express my personality through fashion while maintaining a professional edge. Game-changer!",
      rating: 5
    },
    {
      name: "Arpita C .",
      title: "Marketing Manager",
      text: "The wardrobe cleanse was exactly what I needed. Hanami helped me rediscover pieces I'd forgotten about and showed me new ways to style them. Brilliant service!",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-[#0F0000] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#866061] max-w-3xl mx-auto font-['sans-serif']">
            Don't just take our word for it - hear from clients who have transformed their style and confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F2EDE7] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#743438]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#0F0000] mb-6 font-['sans-serif'] italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-['sans-serif'] font-semibold text-[#743438]">{testimonial.name}</div>
                <div className="text-[#866061] font-['sans-serif'] text-sm">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="bg-[#743438] text-white px-8 py-4 text-lg font-['sans-serif'] rounded-md hover:bg-[#440000] transition-colors"
          >
            Join Our Happy Clients
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
