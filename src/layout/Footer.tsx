const Footer = () => {
  return (
    <footer className="bg-[#072E33] text-white py-12 px-4">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Logo</h2>
          </div>
          {/* Logo and Contact Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Ready to Level Up?</h3>
              <p className="text-gray-300 mb-4">
                Connect with us, Monday to Friday, 9 a.m. to 6 p.m.
              </p>
            </div>
            <div className="space-y-2 text-gray-300">
              <p>+91</p>
              <p>XXXXXXXXXX</p>
              <p>your-email@example.com</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Business
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Merchants
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Partners
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Media Links */}
          <div>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Facebook
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Twitter
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Instagram
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section with Copyright and Back to Top */}
        <div className="mt-12 pt-8 border-t border-teal-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 w-full text-center">
            © 2020 LM Media. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
