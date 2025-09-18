const Footer = () => {
  return (
    <footer className="bg-[#0F0000] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/img1.png"
                alt="Hanami"
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 font-['sans-serif'] mb-6 max-w-md">
              Transform your style with expert personal styling and image consulting. At Hanami, we help you discover your signature look and build lasting confidence through thoughtful, personalised guidance
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-300 hover:text-[#F9C4C5] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a> */}
              <a href="https://www.pinterest.com/" className="text-gray-300 hover:text-[#F9C4C5] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.939 1.404-5.939s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.222.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/hanami_image?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-300 hover:text-[#F9C4C5] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/" className="text-gray-300 hover:text-[#F9C4C5] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

 <div>
  <h3 className="text-lg font-heading text-white mb-2">Services</h3>
  <ul className="space-y-1">
    <li><a href="#basic" className="text-gray-300 hover:text-[#F9C4C5] transition-colors font-['sans-serif']">Basic</a></li>
    <li><a href="#intermediate" className="text-gray-300 hover:text-[#F9C4C5] transition-colors font-['sans-serif']">Intermediate</a></li>
    <li><a href="#advanced" className="text-gray-300 hover:text-[#F9C4C5] transition-colors font-['sans-serif']">Advanced</a></li>
  </ul>
</div>


          <div>
            <h3 className="text-lg font-heading text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-[#F9C4C5] transition-colors font-['sans-serif']">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-[#F9C4C5] transition-colors font-['sans-serif']">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#F9C4C5] transition-colors font-['sans-serif']">Contact</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#F9C4C5] transition-colors font-['sans-serif']">Book Consultation</a></li>
            </ul>
          </div>
        </div>

     <div className="border-t border-gray-700 mt-8 pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center">
    {/* Left side: copyright */}
    <p className="text-gray-300 font-['sans-serif'] text-sm">
      © {new Date().getFullYear()} Hanami. All rights reserved.
    </p>

    {/* Right side: Made by link */}
    <a 
      href="https://www.indiantechsolutions.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-[#F9C4C5] transition-colors font-['sans-serif'] text-sm mt-2 md:mt-0"
    >
      Made by Indian Tech Solutions
    </a>

    {/* 
    <div className="flex space-x-6 mt-4 md:mt-0">
      <a href="#" className="text-gray-300 hover:text-[#F9C4C5] transition-colors font-['sans-serif'] text-sm">Privacy Policy</a>
      <a href="" className="text-gray-300 hover:text-[#F9C4C5] transition-colors font-['sans-serif'] text-sm">Terms of Service</a>
      <a href="#" className="text-gray-300 hover:text-[#F9C4C5] transition-colors font-['sans-serif'] text-sm">Cookie Policy</a>
    </div> 
    */}
  </div>
</div>

      </div>
    </footer>
  )
}

export default Footer
