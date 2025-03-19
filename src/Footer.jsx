import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <a href="/">
            <img
              src="https://res.cloudinary.com/dd6vjyu3c/image/upload/v1742364473/oceansolar_slzklr.png"
              alt="Hem Shipping Logo"
              className="w-32 mb-4 mx-auto md:mx-0"
            />
          </a>
          <p className="text-sm opacity-80">
            Your trusted partner for solar energy & electrical solutions.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-right mt-6 md:mt-0"
        >
          <h3 className="text-orange-500 font-semibold text-lg mb-2">
            Contact Us
          </h3>
          {/* <p className="text-sm opacity-80">📍 Kandla & Mundra Ports</p> */}
          {/* <p className="text-sm opacity-80">📧 info@hemshipping.com<    /p> */}
          <p className="text-sm opacity-80">📞 91 6351 870 376</p>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm opacity-70 mt-8 border-t border-white/20 pt-4">
        © 2025 Ocean Solar. All rights reserved.
      </div>
    </footer>
  );
}
