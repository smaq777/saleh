
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/saleh-alqahtani', 
      icon: '💼'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/saleh-alqahtani', 
      icon: '🐱'
    },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Publications', path: '/publications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="w-screen full-width-section bg-[var(--neutral-900)] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold mb-4 group">
              <span className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl px-3 py-2 text-white font-bold group-hover:scale-105 transition-transform duration-200">
                S
              </span>
              Saleh Alqahtani
            </Link>
            <p className="text-[var(--neutral-300)] leading-relaxed mb-6">
              PhD researcher specializing in AI-driven cybersecurity solutions and digital innovation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[var(--neutral-800)] rounded-lg flex items-center justify-center hover:bg-[var(--primary)] transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 3).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[var(--neutral-300)] hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">More</h3>
            <ul className="space-y-2">
              {quickLinks.slice(3).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[var(--neutral-300)] hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--neutral-800)] mt-12 pt-8">
          <div className="flex justify-center items-center text-[var(--neutral-400)]">
            <p className="text-sm text-center">
              © {currentYear} Saleh Alqahtani. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
