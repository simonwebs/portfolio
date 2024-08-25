import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Visionlyze - AI-Powered Image Analysis',
    description: 'Visionlyze is an innovative AI project designed to analyze images, generate descriptive text, and produce high-quality images using advanced machine learning algorithms.',
    imageUrl: 'https://simonwebs.github.io/images/visionlyze_image_generated_screenshot.png'
  },
  {
    title: 'Pulse Tech Creations - Tech Blog and Solutions',
    description: 'Pulse Tech Creations is a tech-focused blog covering software development, tech reviews, and educational content, with tools like an expenses tracker.',
    imageUrl: 'https://simonwebs.github.io/images/visionlyze_image_generated_screenshot.png'
  },
  {
    title: 'Simon Agbey - Portfolio & Full Stack Developer',
    description: 'Simon Agbey’s personal portfolio highlights his skills as a full-stack developer, showcasing his projects, technical blog posts, and development tools.',
    imageUrl: 'https://simonwebs.github.io/images/visionlyze_image_generated_screenshot.png'
  },
  {
    title: 'Simon Agbey - Portfolio & Full Stack Developer',
    description: 'Simon Agbey’s personal portfolio highlights his skills as a full-stack developer, showcasing his projects, technical blog posts, and development tools.',
    imageUrl: 'https://simonwebs.github.io/images/visionlyze_image_generated_screenshot.png'
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <div className="p-6 min-h-screen mt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
