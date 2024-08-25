// src/Footer.tsx

import React from 'react';
import { FaYoutube, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://youtube.com/@agbeysimon?si=Jw1Yzb0YzsT2d0Mr"
              target="_blank"
              rel="noopener noreferrer"
              className="ransition-colors"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/SimonAgbey3?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/simonwebs"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            &copy; {currentYear} Simon Agbey. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
