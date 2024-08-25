// src/components/Navbar.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('theme-default');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleDropdown = (menu: string) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setDropdown(null);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-gray-800/25 shadow-lg' : 'bg-transparent'
      }`}
      style={{ backgroundColor: `var(--bg-color)` }}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center w-1/3 md:w-auto">
          <Link
            to="/"
            className="text-lg font-bold"
            style={{ color: `var(--text-color)` }}
            aria-label="Home"
          >
            Simon Agbey
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          <Link
            to="/"
            className="text-lg transition-colors"
            style={{ color: `var(--text-color)` }}
            aria-label="Home"
          >
            Home
          </Link>
          <Link
            to="/skills"
            className="text-lg transition-colors"
            style={{ color: `var(--text-color)` }}
            aria-label="Skills"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-lg transition-colors"
            style={{ color: `var(--text-color)` }}
            aria-label="Projects"
          >
            Projects
          </Link>
          <button
            className="text-lg transition-colors"
            onClick={() => toggleDropdown('about')}
            style={{ color: `var(--text-color)` }}
            aria-label="Toggle About Dropdown"
            aria-haspopup="true"
            aria-expanded={dropdown === 'about' ? 'true' : 'false'}
          >
            About
          </button>
          {dropdown === 'about' && (
            <div
              className="absolute top-16 flex flex-col items-center bg-gray-700 rounded-lg shadow-lg"
              style={{ backgroundColor: `var(--bg-color)` }}
            >
              <Link
                to="/about"
                className="block px-6 py-3 transition-colors"
                style={{ color: `var(--text-color)` }}
                aria-label="About Us"
              >
                About Me
              </Link>
            </div>
          )}
        </div>

        {/* Theme Icon (right) */}
        <div className="flex items-center w-1/3 justify-end md:w-auto">
          <button
            className="p-2"
            onClick={() => toggleDropdown('theme')}
            aria-label="Toggle Theme Menu"
            aria-haspopup="true"
            aria-expanded={dropdown === 'theme' ? 'true' : 'false'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ stroke: `var(--icon-color)` }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m-9-9h1m16 0h1M4.22 4.22l.7.7m12.56 12.56l.7.7M4.22 19.78l.7-.7m12.56-12.56l.7-.7"
              />
            </svg>
          </button>
          {dropdown === 'theme' && (
            <div
              className="absolute top-12 right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg"
              style={{ backgroundColor: `var(--bg-color)` }}
            >
              <button
                onClick={() => handleThemeChange('theme-default')}
                className="block w-full text-left px-6 py-3 transition-colors"
                style={{ color: `var(--text-color)` }}
                aria-label="Default Theme"
              >
                Default
              </button>
              <button
                onClick={() => handleThemeChange('theme-dark')}
                className="block w-full text-left px-6 py-3 transition-colors"
                style={{ color: `var(--text-color)` }}
                aria-label="Dark Theme"
              >
                Dark
              </button>
              <button
                onClick={() => handleThemeChange('theme-blue')}
                className="block w-full text-left px-6 py-3 transition-colors"
                style={{ color: `var(--text-color)` }}
                aria-label="Blue Theme"
              >
                Blue
              </button>
              <button
                onClick={() => handleThemeChange('theme-green')}
                className="block w-full text-left px-6 py-3 transition-colors"
                style={{ color: `var(--text-color)` }}
                aria-label="Green Theme"
              >
                Green
              </button>
              <button
                onClick={() => handleThemeChange('theme-red')}
                className="block w-full text-left px-6 py-3 transition-colors"
                style={{ color: `var(--text-color)` }}
                aria-label="Red Theme"
              >
                Red
              </button>
            </div>
          )}
        </div>

        {/* Menu Toggle Button for Mobile */}
        <div className="w-1/3 text-right md:hidden">
          <button
            className="p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ stroke: `var(--icon-color)` }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-gray-800 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: `var(--bg-color)` }}
      >
        <div className="relative flex flex-col p-4 space-y-4">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 p-2 focus:outline-none"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ stroke: `var(--icon-color)` }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Menu Items */}
          <Link
            to="/"
            className="block text-lg transition-colors"
            style={{ color: `var(--text-color)` }}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/skills"
            className="block text-lg transition-colors"
            style={{ color: `var(--text-color)` }}
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="block text-lg transition-colors"
            style={{ color: `var(--text-color)` }}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <button
            onClick={() => toggleDropdown('about')}
            className="block text-lg transition-colors"
            style={{ color: `var(--text-color)` }}
            aria-label="Toggle About Dropdown"
            aria-haspopup="true"
            aria-expanded={dropdown === 'about' ? 'true' : 'false'}
          >
            About
          </button>
          {dropdown === 'about' && (
            <Link
              to="/about"
              className="block px-6 py-3 transition-colors"
              style={{ color: `var(--text-color)` }}
              onClick={closeMenu}
            >
              About Me
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
