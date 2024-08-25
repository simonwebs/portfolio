import React from 'react';
import { useTheme } from '../contexts/ThemeContext'; // Ensure the path is correct

interface SkillCardProps {
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description }) => {
  const { theme } = useTheme();

  return (
    <div className={`p-4 rounded-lg shadow-lg flex flex-col items-center text-center ${theme}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default SkillCard;
