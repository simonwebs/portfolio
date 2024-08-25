/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './imports/**/*.{html,js,jsx,tsx,ts}', // Simplified glob pattern
    './client/**/*.html',
  ],
  darkMode: 'class', // Enables dark mode based on a class
  theme: {
    extend: {
      colors: {
        'default-dark': '#1a202c',
        'default-light': '#f7fafc',
        'blue-dark': '#2a4365',
        'blue-light': '#ebf8ff',
        'green-dark': '#2f855a',
        'green-light': '#f0fff4',
        'red-dark': '#742a2a',
        'red-light': '#fff5f5',
        primary: {
          DEFAULT: '#1D4ED8', // Primary blue
          light: '#3B82F6', // Light shade for hover states
          dark: '#1E40AF', // Darker shade for active states
        },
        secondary: {
          DEFAULT: '#10B981', // Primary green
          light: '#34D399', // Light shade for hover states
          dark: '#059669', // Darker shade for active states
        },
        danger: {
          DEFAULT: '#EF4444', // Red for danger or errors
          light: '#F87171', // Light shade for hover states
          dark: '#B91C1C', // Darker shade for active states
        },
        warning: {
          DEFAULT: '#F59E0B', // Yellow for warnings
          light: '#FBBF24', // Light shade for hover states
          dark: '#D97706', // Darker shade for active states
        },
        neutral: {
          DEFAULT: '#6B7280', // Gray for neutral elements
          light: '#D1D5DB', // Light gray for borders or backgrounds
          dark: '#4B5563', // Dark gray for text or darker elements
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://simonwebs.github.io/images/visionlyze_1.webp')",
      },
      boxShadow: {
        default: '0 4px 6px rgba(0, 0, 0, 0.1)', // Default shadow
        md: '0 10px 15px rgba(0, 0, 0, 0.1)', // Medium shadow
        lg: '0 20px 25px rgba(0, 0, 0, 0.1)', // Large shadow
        xl: '0 25px 50px rgba(0, 0, 0, 0.2)', // Extra large shadow
      },
      screens: {
        xs: '480px', // Extra small devices
        sm: '640px', // Small devices
        md: '768px', // Medium devices
        lg: '1024px', // Large devices
        xl: '1280px', // Extra large devices
        '2xl': '1536px', // 2x Extra large devices
      },
    },
  },
  plugins: [],
};
