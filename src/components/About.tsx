import React from 'react';
import { Award, Calendar, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate professional dedicated to delivering exceptional results in web development and SEO optimization
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
               I began my career at PowerDrive as a Frontend Developer & SEO Executive, 
                where I gained hands-on experience in building responsive websites and optimizing them for search engines. 
                This role helped me master the fundamentals of creating user-friendly, high-performing websites that deliver real value.
                
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Currently, I'm working at Shiv Aurica as an SEO Executive, where I focus on improving 
                keyword rankings, conducting technical audits, and developing effective backlink strategies. 
                My approach combines technical expertise with creative problem-solving to deliver measurable results.
              </p>
              <p className="text-gray-600 leading-relaxed">
               I’m deeply passionate about staying updated with the latest trends in web development and SEO. 
                Constant learning and adapting to the evolving digital landscape drives me to deliver solutions that are not only innovative but also future-ready.
              </p>
            </div>
          </div>

          <div className="animate-slideInRight">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Education</h4>
                  <p className="text-gray-600">Diploma in IT Engineering</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Calendar className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Experience</h4>
                  <p className="text-gray-600">1+ Year in SEO & Frontend Development</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Current Role</h4>
                  <p className="text-gray-600">SEO Executive at Shiv Aurica</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Award className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Expertise</h4>
                  <p className="text-gray-600">Frontend Development & SEO Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
