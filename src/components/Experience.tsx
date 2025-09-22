import React from 'react';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'SEO Executive',
      company: 'Shiv Aurica',
      period: 'Current Position',
      location: 'Present',
      type: 'Full-time',
      description: 'Driving end-to-end SEO initiatives to boost organic visibility, keyword rankings, and website performance. Skilled in managing the complete SEO lifecycle — from technical audits and on-page optimization to off-page strategies and backlink building — delivering measurable improvements in search engine rankings and traffic growth.',
      achievements: [
🔹 On-Page SEO

Optimized meta tags, titles, descriptions, headers (H1–H6), and website content for multiple client websites.

Enhanced page speed, mobile responsiveness, and Core Web Vitals for better search performance.

Implemented schema markup, structured data, and internal linking strategies for improved indexing and SERP appearance.

Regularly performed content gap analysis and optimized landing pages for target keywords.

🔹 Off-Page SEO & Backlink Strategies

Designed and executed high-quality backlink strategies, improving domain authority and referral traffic.

Built niche-relevant backlinks through guest posting, blogger outreach, and digital PR campaigns.

Analyzed competitors’ link profiles and developed link-building campaigns to bridge gaps.

"Maintained a natural, diversified backlink profile while avoiding toxic links."

"🔹 Technical SEO"

'Conducted comprehensive SEO audits to identify and resolve crawl errors, broken links, and indexing issues.'

'Optimized XML sitemaps, robots.txt, canonical tags, and site architecture.'

'Improved website crawlability and indexability for both large-scale and small business websites.'

'🔹 Full SEO Workflow"

"Performed keyword research & mapping to align with business goals."

"Implemented on-page + off-page SEO campaigns with measurable KPIs."

'Monitored performance using Google Analytics, Google Search Console, and SEO tools (Ahrefs, SEMrush, Screaming Frog)."

"Prepared detailed monthly SEO reports highlighting growth, insights, and next steps.'
      ],
      technologies: ['Google Search Console', 'Google Analytics', 'SEO Tools', 'Technical SEO''On-Page SEO''Off-Page SEO'],
    },
    {
      title: 'Frontend Developer & SEO Executive',
      company: 'PowerDrive',
      period: 'First Professional Role',
      location: 'Previous',
      type: 'Full-time',
      description: 'Started my professional journey working on responsive web design and website optimization. Gained hands-on experience in frontend development while learning the fundamentals of SEO and digital marketing.',
      achievements: [
        'Developed responsive web designs',
        'Optimized websites for better performance',
        'Learned fundamental SEO principles',
        'Worked on user-friendly website interfaces',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'SEO Basics'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through the world of web development and SEO optimization
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full hidden lg:block"></div>
                
                <div className={`experience-card bg-white rounded-2xl p-8 shadow-lg ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Building className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-500 mb-1">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              I'm excited to contribute my skills to impactful projects and grow further with innovative teams. 
              Let's create something amazing together!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Get In Touch
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
