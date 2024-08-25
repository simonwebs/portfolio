import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm w-full shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
