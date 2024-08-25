// src/pages/NotFound.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">Page Not Found</p>
      <Link 
        to="/" 
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
