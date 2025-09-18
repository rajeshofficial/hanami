import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_86x069o', // Your Service ID
        'template_2x88pke', // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        '-1CyQjDExQnpOqghD' // Your Public Key
      )
      .then(
        () => {
          alert("Thank you for your inquiry! We'll be in touch soon.")
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          })
        },
        (error) => {
          console.error('FAILED...', error.text)
          alert('Oops! Something went wrong. Please try again later.')
        }
      )
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#F2EDE7] to-[#F9C4C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-[#0F0000] mb-6">
            Book Your Free Consultation
          </h2>
          <p className="text-xl text-[#866061] max-w-3xl mx-auto font-['sans-serif']">
            Ready to transform your style? Let's start with a complimentary consultation to discuss your goals and how we can help you achieve them.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-heading text-[#0F0000] mb-6">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#0F0000] font-['sans-serif'] mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#866061] rounded-md focus:outline-none focus:ring-2 focus:ring-[#743438] font-['sans-serif']"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#0F0000] font-['sans-serif'] mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#866061] rounded-md focus:outline-none focus:ring-2 focus:ring-[#743438] font-['sans-serif']"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[#0F0000] font-['sans-serif'] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#866061] rounded-md focus:outline-none focus:ring-2 focus:ring-[#743438] font-['sans-serif']"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-[#0F0000] font-['sans-serif'] mb-2">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#866061] rounded-md focus:outline-none focus:ring-2 focus:ring-[#743438] font-['sans-serif']"
                  >
                    <option value="">Select a service</option>
                    <option value="the-first-bloom">The First Bloom</option>
                    <option value="true-tones">True Tones</option>
                    <option value="style-sculpt">Style Sculpt</option>
                    <option value="image-edit">Image Edit</option>
                    <option value="style-alchemy">Style Alchemy</option>
                    <option value="closet-curator">Closet Curator</option>
                    <option value="dining-etiquette">Dining Etiquette</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#0F0000] font-['sans-serif'] mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-[#866061] rounded-md focus:outline-none focus:ring-2 focus:ring-[#743438] font-['sans-serif']"
                    placeholder="Tell us about your style goals and what you'd like to achieve..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#743438] text-white py-4 text-lg font-['sans-serif'] rounded-md hover:bg-[#440000] transition-colors"
                >
                  Book Free Consultation
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-8">
            {/* Why Choose */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-heading text-[#0F0000] mb-4">Why Choose Hanami?</h3>
              <ul className="space-y-4">
                {[
                  "Styling rooted in you—your body, colouring, and lifestyle",
                  "Confidence-first approach that goes beyond trends",
                  "Practical, sustainable solutions for everyday life",
                  "Guidance that helps you look good and feel aligned"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-[#743438] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#0F0000] font-['sans-serif']">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-heading text-[#0F0000] mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#743438] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    href="mailto:hanamiimage@gmail.com"
                    className="text-[#0F0000] font-['sans-serif'] hover:underline"
                  >
                    hanamiimage@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#743438] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-[#0F0000] font-['sans-serif']">
                    <a href="tel:+919717229153" className="hover:underline">9717229153</a> / 
                    <a href="tel:+919555429636" className="hover:underline">95554 29636</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
