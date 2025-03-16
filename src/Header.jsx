export default function Header() {
  return (
    <div className="w-full font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-gray-100 shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/LOGO.png" className='w-14 h-14' alt="" />
              <span className="text-2xl font-bold text-blue-900">OceanSolar</span>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-[#ff9100] transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-[#ff9100] transition-colors">Solutions</a>
              <a href="#" className="text-gray-600 hover:text-[#ff9100] transition-colors">About</a>
              <a href="#" className="text-gray-600 hover:text-[#ff9100] transition-colors">Contact</a>
            </div>

            {/* CTA Button */}
            <button className="bg-[#24578a] hover:bg-[#1a4066] text-white px-6 py-2 rounded-full transition-colors shadow-lg">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#ff9100] to-[#24578a] min-h-[70vh]">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Sustainable Energy From Sea & Sun
              </h1>
              <p className="text-xl text-white mb-8 opacity-90">
                Innovating renewable energy solutions through ocean thermal and solar power integration.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-[#24578a] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl">
                  Our Technology
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-[#24578a] transition-colors">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Image/Illustration */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[400px] h-[400px] bg-white/20 rounded-full p-8 backdrop-blur-lg">
                <img
                  src="/LOGO.png"
                  alt="Wave and Solar"
                  className="animate-float"
                />
                <div className="absolute -bottom-8 right-0 w-32 h-32 bg-[#24578a] rounded-full blur-xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}