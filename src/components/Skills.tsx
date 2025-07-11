import React from 'react';
import { Code, Search, BarChart, Globe, Smartphone, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      title: 'SEO & Analytics',
      icon: Search,
      color: 'green',
      skills: [
        { name: 'Google Search Console', level: 90 },
        { name: 'Google Analytics', level: 85 },
        { name: 'On-page SEO', level: 95 },
        { name: 'Off-page SEO', level: 85 },
        { name: 'Technical SEO', level: 90 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Globe,
      color: 'purple',
      skills: [
        { name: 'WordPress', level: 85 },
        { name: 'SEO Audits', level: 90 },
        { name: 'Backlink Strategy', level: 80 },
        { name: 'Keyword Research', level: 85 },
        { name: 'Content Optimization', level: 90 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        progress: 'bg-blue-600',
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        progress: 'bg-green-600',
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        progress: 'bg-purple-600',
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning frontend development, SEO optimization, and digital marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);
            
            return (
              <div key={index} className="skill-card bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className={`${colors.bg} p-3 rounded-lg mr-4`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${colors.progress} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm committed to continuous learning and staying updated with the latest trends in web development 
              and SEO. My goal is to deliver cutting-edge solutions that drive real business results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;