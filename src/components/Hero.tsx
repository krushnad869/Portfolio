import React from 'react';
import { ArrowDown, Download, Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4f46e5] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-12 text-white">
          {/* Profile Image */}
          {/* Profile Image */}
          <div className="w-40 sm:w-52 md:w-64 aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
            <img
              src="/images/profile1.png"
              alt="Krushna Desai"
              className="w-full h-full object-cover"
            />
          </div>


          {/* Text Content */}
          <div className="text-center lg:text-left max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fadeInUp">
              Hi, I'm <span className="text-yellow-300">Krushna Desai</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 text-gray-200 animate-fadeInUp">
              Frontend Developer & SEO Executive
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-10 text-gray-300 leading-relaxed animate-fadeInUp">
              Dedicated professional with a Diploma in IT Engineering and 1 year of hands-on experience
              in SEO and Frontend Development. Passionate about creating user-friendly websites that
              deliver SEO-driven results and align with business goals.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8 animate-slideInLeft">
              <a href="https://www.instagram.com/k_desai_004?igsh=MTJ1Y3Q4NnVjZXd5ag==" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition">
                <Instagram size={22} />
              </a>
              <a href="https://www.facebook.com/share/1CDnCxSLFY/" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition">
                <Facebook size={22} />
              </a>
              <a href="https://www.linkedin.com/in/krushna-desai-226a10319" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition">
                <Linkedin size={22} />
              </a>
              <a href="#contact" className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition">
                <Mail size={22} />
              </a>
            </div>

            {/* Learn More Button */}
            <div className="animate-slideInRight">
              <a href="#about" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">
                <span>Learn more about me</span>
                <ArrowDown size={20} className="animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
