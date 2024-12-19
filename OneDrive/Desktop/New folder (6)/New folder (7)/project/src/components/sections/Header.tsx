import { Link } from 'react-scroll'; // Import react-scroll for smooth scrolling navigation
import { useState } from 'react'; // To manage the mobile menu state

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu toggle

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Function to toggle the menu

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg text-white z-50 w-full cursor-default">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Chelluri Shanmukha</div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-white hover:bg-gray-700 transition duration-300"
        >
          {/* Hamburger Icon */}
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['hero', 'summary', 'skills', 'experience', 'education', 'contact'].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  className="hover:text-blue-400 cursor-pointer transition-all duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Links */}
        {isMenuOpen && (
          <nav className="absolute top-16 left-0 right-0 bg-gray-900/90 backdrop-blur-lg md:hidden transition-transform duration-300 ease-in-out">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {['hero', 'summary', 'skills', 'experience', 'education', 'contact'].map((section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    className="hover:text-blue-400 cursor-pointer transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)} // Close the menu when clicking a link
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
