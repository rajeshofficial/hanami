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
        'template_2x88pke', // Replace with your Template ID from EmailJS
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        '-1CyQjDExQnpOqghD' // Replace with your Public Key from EmailJS
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-[#0F0000] mb-6">
            Book Your Free Consultation
          </h2>
          <p className="text-xl text-[#866061] max-w-3xl mx-auto font-['sans-serif']">
            Ready to transform your style? Let's start with a complimentary consultation to discuss your goals and how we can help you achieve them.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
          {/* Right Column stays same */}
        </div>
      </div>
    </section>
  )
}

export default Contact
