import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const navLinks = [
    { id: 'profile', label: 'Profile', href: '#profile' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'tools', label: 'Tools', href: '#tools' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center">
        <div className="flex gap-2 sm:gap-4 text-xs sm:text-sm flex-wrap justify-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const baseClass = 'px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 font-medium whitespace-nowrap';
            const activeClass = isActive ? 'bg-gray-900 text-white shadow-md' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100';
            
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`${baseClass} ${activeClass}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
