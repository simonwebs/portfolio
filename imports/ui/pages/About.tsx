// src/pages/About.tsx

import React from 'react';

const About: React.FC = () => {
  return (
    <div className="mt-16 p-6 min-h-screen flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://simonwebs.github.io/images/simon-agbey.jpeg" // Replace with your image URL
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-lg"
          />
        </div>
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6">
          About Me
        </h1>

        {/* Description */}
        <p className="text-lg mb-6">
          I am a dedicated Full-Stack Developer with over four years of experience, starting my journey in 2020. My career has been defined by a commitment to mastering both frontend and backend technologies. On the frontend, I utilize HTML, CSS, and JavaScript to build interactive and visually appealing user interfaces. My proficiency with React and Tailwind CSS enables me to create dynamic, responsive designs that enhance user experience.
        </p>
        
        <p className="text-lg mb-6">
          On the backend, I leverage Node.js and Meteor to develop scalable, high-performance applications. Additionally, my experience with PHP allows me to handle server-side logic efficiently. This combination of frontend and backend skills equips me to build full-featured applications from start to finish.
        </p>

        <p className="text-lg mb-6">
          My passion for technology drives me to continuously expand my skill set. I am currently delving into Python to explore its capabilities for data analysis and machine learning, and TypeScript to enhance my JavaScript development with type safety and robustness. These skills are pivotal as I look to incorporate modern technologies and methodologies into my projects.
        </p>

        <p className="text-lg mb-6">
          Throughout my career, I have worked on numerous projects that showcase my ability to deliver high-quality, responsive web applications. While I have not yet contributed to public projects, I am actively working towards that goal. I have also created my own AI tool, leveraging OpenAI's API, Meteor, and TypeScript to assist in coding tasks. This project, Visionlyze.com, exemplifies my dedication to applying advanced technologies to practical solutions.
        </p>

        <p className="text-lg mb-6">
          Beyond my technical skills, I am committed to continuous learning and improvement. I actively engage with the development community, participate in forums, and stay updated with industry trends. This commitment ensures that I remain at the forefront of technology and can offer innovative solutions to the challenges of modern development.
        </p>

        <p className="text-lg mb-6">
          Looking forward, I am excited about the opportunities to apply my growing skill set to new and challenging projects. My goal is to continue developing my expertise in both established and emerging technologies, ultimately contributing to impactful projects that make a difference in the world.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://x.com/SimonAgbey3?s=09" // Replace with your Twitter URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23 3a10.9 10.9 0 01-3.13 1.05A5.56 5.56 0 0022.4 2a10.91 10.91 0 01-3.46 1.32A5.5 5.5 0 0016.7 1a5.56 5.56 0 00-5.56 5.56c0 .44.05.87.12 1.28A15.7 15.7 0 013.29 2.8a5.54 5.54 0 001.71 7.38A5.48 5.48 0 011 9v.07a5.56 5.56 0 004.44 5.43 5.5 5.5 0 01-2.5.09 5.56 5.56 0 005.19 3.85A11.1 11.1 0 010 19.29a15.68 15.68 0 008.49 2.5c10.18 0 15.74-8.45 15.74-15.74 0-.24-.01-.47-.02-.7A11.14 11.14 0 0023 3z"/>
            </svg>
          </a>
          <a
            href="https://github.com/simonwebs" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.308 3.438 9.8 8.207 11.38.6.111.82-.261.82-.578v-2.059c-3.338.723-4.043-1.616-4.043-1.616-.546-1.387-1.333-1.756-1.333-1.756-1.089-.743.083-.727.083-.727 1.205.085 1.838 1.258 1.838 1.258 1.071 1.835 2.809 1.303 3.493.996.107-.775.42-1.303.764-1.603-2.664-.305-5.467-1.332-5.467-5.927 0-1.31.469-2.381 1.238-3.223-.124-.305-.536-1.527.118-3.175 0 0 1.007-.323 3.295 1.231.959-.267 1.988-.399 3.005-.404 1.017.005 2.046.137 3.008.404 2.282-1.554 3.286-1.231 3.286-1.231.655 1.648.242 2.87.118 3.175.768.842 1.238 1.913 1.238 3.223 0 4.606-2.81 5.621-5.48 5.922.433.372.826 1.104.826 2.225v3.29c0 .319.221.692.828.577C20.562 21.8 24 17.309 24 12 24 5.37 18.63 0 12 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
