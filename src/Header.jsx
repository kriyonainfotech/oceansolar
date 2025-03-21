// import { useState, useEffect } from "react";

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50); // Change color after scrolling 50px
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="w-full font-sans">
//       {/* Header */}
//       <header
//         className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-all duration-300 shadow-md ${
//           isScrolled
//             ? "bg-[#ff9100] text-white"
//             : "bg-white text-gray-800 hover:text-orange-400 bg-opacity-90"
//         }`}
//       >
//         <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-3">
//             <span className="text-3xl font-extrabold">OceanSolar</span>
//           </div>

//           {/* Navigation */}
//           <div className="hidden md:flex space-x-6 text-lg font-medium">
//             <a href="/" className="font-semibold">
//               Home
//             </a>

//             <a href="#footer" className="font-semibold">
//               Contact
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button className="text-gray-700 focus:outline-none">
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* Hero Banner */}
//       <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-[#24578a] to-[#ff9100]">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0 bg-[url('/man.jpg')] bg-cover bg-center opacity-20"></div>

//         <div className="container mx-auto px-6 py-16 relative z-10">
//           <div className="grid md:grid-cols-2 items-center gap-12">
//             {/* Text Content */}
//             <div className="text-center md:text-left">
//               <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
//                 Sustainable Energy <br /> From Sea & Sun
//               </h1>
//               <p className="text-lg text-white mt-6 opacity-90">
//                 Innovating renewable energy solutions through ocean thermal and
//                 solar power integration.
//               </p>
//               <div className="mt-8 flex justify-center md:justify-start space-x-4">
//                 <a
//                   href="#footer"
//                   className="border-2 border-white text-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-[#24578a] transition"
//                 >
//                   Contact Us
//                 </a>
//               </div>
//             </div>

//             {/* Image/Illustration */}
//             <div class="flex-container">
//               <div class="logo-wrapper">
//                 <img
//                   src="https://res.cloudinary.com/dd6vjyu3c/image/upload/v1742364473/oceansolar_slzklr.png"
//                   alt="Wave and Solar"
//                   class="logo"
//                 />
//                 <div class="shadow-effect"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";

export default function HeaderHero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full font-sans">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-all duration-300 shadow-md ${
          isScrolled
            ? "bg-[#ff9100] text-white"
            : "bg-white text-gray-800 hover:text-orange-400 bg-opacity-90"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <span className="text-3xl font-extrabold">OceanSolar</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex space-x-6 text-lg font-medium">
            <a href="/" className="font-semibold">
              Home
            </a>
            <a href="#footer" className="font-semibold">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg flex flex-col items-center text-gray-800 space-y-4 py-4">
            <a
              href="/"
              className="text-lg font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#footer"
              className="text-lg font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Banner */}
      <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-[#24578a] to-[#ff9100] pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('/man.jpg')] bg-cover bg-center opacity-20"></div>

        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid md:grid-cols-2 items-center gap-12">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-20 lg:mt-0">
                Sustainable Energy <br /> From Sea & Sun
              </h1>
              <p className="text-lg text-white mt-6 opacity-90">
                Innovating renewable energy solutions through ocean thermal and
                solar power integration.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <a
                  href="#footer"
                  className="border-2 border-white text-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-[#24578a] transition"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div class="flex-container">
              <div class="logo-wrapper">
                <img
                  src="https://res.cloudinary.com/dd6vjyu3c/image/upload/v1742364473/oceansolar_slzklr.png"
                  alt="Wave and Solar"
                  class="logo"
                />
                <div class="shadow-effect"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
