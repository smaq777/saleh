
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/publications', label: 'Publications' },
  ];

  return (
    <>
      <nav 
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[var(--neutral-900)]/95 backdrop-blur-md shadow-lg border-b border-neutral-700' 
            : 'bg-[var(--neutral-900)]/90 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight group"
            >
              <span className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl px-3 py-2 text-white font-bold text-sm sm:text-base group-hover:scale-105 transition-transform duration-200">
                S
              </span>
              <span className="hidden sm:block text-gray-900 font-extrabold">Saleh Alqahtani</span>
              <span className="sm:hidden text-gray-900 font-extrabold">Saleh</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-[var(--primary)] text-white shadow-md'
                      : 'text-[var(--primary)] hover:text-white hover:bg-[var(--neutral-800)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Contact Button & Mobile Menu */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="btn btn-primary btn-lg hidden sm:inline-flex"
              >
                Contact Me
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center rounded-lg bg-[var(--neutral-800)] hover:bg-[var(--neutral-700)] transition-colors duration-200"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <span 
                  className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 my-1 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay lg:hidden" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-[var(--bg-secondary)] z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--neutral-200)]">
            <span className="text-lg font-semibold text-[var(--text-primary)]">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--neutral-100)] hover:bg-[var(--neutral-200)] transition-colors duration-200"
              aria-label="Close menu"
            >
              <span className="text-xl text-[var(--text-primary)]">×</span>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 px-6 py-8">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-[var(--primary)] text-white shadow-md'
                      : 'text-[var(--primary)] hover:text-white hover:bg-[var(--primary-light)]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Contact Button */}
            <div className="mt-8 pt-6 border-t border-[var(--neutral-200)]">
              <Link
                to="/contact"
                className="btn btn-primary btn-lg w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Menu Footer */}
          <div className="p-6 border-t border-[var(--neutral-200)]">
            <p className="text-sm text-[var(--text-muted)] text-center">
              © 2024 Saleh Alqahtani
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;
