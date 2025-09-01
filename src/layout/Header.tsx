import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contact' }
  ];

  // Sync activeItem with current route
  useEffect(() => {
    const currentItem = menuItems.find(item => item.href === location.pathname);
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, [location.pathname]);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-[30px] sm:text-[50px] font-[400] text-[#072E33] hover:text-blue-600 transition-colors duration-200"
            >
              Logo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-[18px] transition-colors duration-200 font-[500] ${
                  activeItem === item.name
                    ? 'text-[#072E33]'
                    : 'test-[#072E33CC] hover:text-[#072E33]'
                }`}
              >
                {item.name}
                {activeItem === item.name && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#072E33] transform transition-all duration-300"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 cursor-pointer" />
              ) : (
                <Menu className="h-6 w-6 cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeItem === item.name
                      ? 'text-[#072E33] bg-blue-50'
                      : 'text-gray-700 hover:text-[#072E33] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {activeItem === item.name && (
                    <span className="absolute left-0 top-0 w-1 h-full bg-[#072E33]"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
