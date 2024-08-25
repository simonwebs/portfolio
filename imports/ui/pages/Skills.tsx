import React from 'react';
import SkillCard from '../components/SkillsCard'; // Ensure this path is correct
import { useTheme } from '../contexts/ThemeContext'; // Ensure the path is correct

const Skills: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`mt-16 p-4 md:p-8 ${theme} min-h-screen`}>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">My Skills</h1>

      <div className="max-w-4xl mx-auto">
        {/* Frontend Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Frontend Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="HTML" description="Crafting semantic and accessible HTML." />
            <SkillCard title="CSS" description="Designing responsive and modern styles." />
            <SkillCard title="Sass" description="Utilizing Sass for scalable and maintainable styles." />
            <SkillCard title="JavaScript" description="Building dynamic and interactive web applications." />
            <SkillCard title="React" description="Creating efficient and reusable UI components." />
            <SkillCard title="Tailwind CSS" description="Using utility-first CSS for fast UI development." />
            <SkillCard title="Bootstrap" description="Implementing responsive design with Bootstrap framework." />
            <SkillCard title="Chakra UI" description="Building accessible and customizable components with Chakra UI." />
            <SkillCard title="Blaze" description="Developing applications with Meteor's Blaze templating." />
          </div>
        </section>

        {/* Backend Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Backend Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Node.js" description="Building scalable server-side applications with Node.js." />
            <SkillCard title="Meteor" description="Creating real-time web applications with Meteor." />
            <SkillCard title="PHP" description="Developing server-side logic and dynamic content with PHP." />
          </div>
        </section>

        {/* Currently Learning */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Currently Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard title="Python" description="Exploring Python for various applications and data analysis." />
            <SkillCard title="TypeScript" description="Enhancing JavaScript with TypeScript for better development experience." />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
