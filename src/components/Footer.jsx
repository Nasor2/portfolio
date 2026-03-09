import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 border-t border-gray-200 pt-8">
          <p className="text-gray-600 text-xs">
            © {currentYear} Samuel Peña. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;