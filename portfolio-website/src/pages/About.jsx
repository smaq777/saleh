
import React from "react";
import { motion } from "framer-motion";
import pageContent from './page_content.json';
import profileImg from "../assets/profile.jpg";

const About = () => {
  const { title, bio, currentFocus, skills } = pageContent.About;
  
  const education = [
    { 
      degree: "Doctor of Philosophy - PhD Information Technology", 
      place: "University of Technology Sydney", 
      year: "2022 - 2025",
      status: "In Progress",
      icon: "🎓"
    },
    { 
      degree: "Master's degree Information Technology", 
      place: "Towson University", 
      year: "2016 - 2017",
      gpa: "3.85/4.0",
      specialization: "Specialized in DBMS",
      icon: "📚"
    },
    { 
      degree: "Bachelor's degree Information Technology", 
      place: "Federation University Australia", 
      year: "2011 - 2014", 
      activities: "President of Saudi Students. Volunteer for student affairs.",
      icon: "🎯"
    },
    { 
      degree: "International Foundation Program Information Technology", 
      place: "University of Newcastle", 
      year: "2010 - 2011",
      icon: "🌟"
    }
  ];

  const certifications = [
    { 
      name: "Learn Ethical Hacking From Scratch", 
      issuer: "Udemy", 
      date: "Aug 2022", 
      credential: "UC-3450b7e2-051d-423e-8fc4-beaac6d23bba",
      icon: "🔒"
    }
  ];

  const achievements = [
    { title: "University Instructor", description: "Teaching programming and information systems at SEU University", icon: "👨‍🏫" },
    { title: "Startup Founder", description: "Led design and launch of service provider platform", icon: "🚀" },
    { title: "Research Focus", description: "PhD research in AI-driven phishing detection", icon: "🔬" },
    { title: "Multilingual AI", description: "Developing ML models for Arabic and English datasets", icon: "🌍" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">
      {/* Hero Section */}
      <section className="w-screen full-width-section section-padding bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--secondary)]">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image & Social Links */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-center lg:items-start gap-8"
              >
                <div className="relative">
                  <img 
                    src={profileImg} 
                    alt="Saleh Alqahtani" 
                    className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-full border-4 border-white shadow-2xl"
                  />
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🎓</span>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <a 
                    href="https://www.linkedin.com/in/saleh-alqahtani" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/smaq777" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <i className="fab fa-github text-xl"></i>
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </div>
              </motion.div>

              {/* About Content */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  About Me
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                  {bio}
                </p>
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white">
                  <span className="text-2xl">🎯</span>
                  <span className="font-semibold">Current Focus: PhD Research</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Research Focus */}
      <section className="w-screen full-width-section section-padding bg-[var(--bg-primary)]">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">
              Current Research Focus
            </h2>
            <div className="card p-8 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 border border-[var(--primary)]/20">
              <div className="text-4xl mb-4">🔬</div>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                {currentFocus}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="w-screen full-width-section section-padding bg-[var(--bg-secondary)]">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-12 text-center">
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl mb-4">{achievement.icon}</div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="w-screen full-width-section section-padding bg-[var(--bg-primary)]">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-12 text-center">
              Education Journey
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]"></div>
              
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold z-10">
                      {edu.icon}
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="card p-6 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-[var(--text-primary)]">
                            {edu.degree}
                          </h3>
                          {edu.status && (
                            <span className="px-3 py-1 bg-[var(--primary)] text-white text-xs rounded-full">
                              {edu.status}
                            </span>
                          )}
                        </div>
                        <p className="text-[var(--text-secondary)] font-semibold mb-1">
                          {edu.place}
                        </p>
                        <p className="text-[var(--text-secondary)] text-sm mb-2">
                          {edu.year}
                        </p>
                        {edu.gpa && (
                          <p className="text-[var(--primary)] font-semibold text-sm mb-2">
                            GPA: {edu.gpa}
                          </p>
                        )}
                        {edu.specialization && (
                          <p className="text-[var(--text-secondary)] text-sm mb-2">
                            {edu.specialization}
                          </p>
                        )}
                        {edu.activities && (
                          <p className="text-[var(--text-secondary)] text-sm">
                            {edu.activities}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="w-screen full-width-section section-padding bg-[var(--bg-secondary)]">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-12 text-center">
              Licenses & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-[var(--text-secondary)] font-semibold mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-[var(--text-secondary)] text-sm mb-2">
                        Issued {cert.date}
                      </p>
                      <p className="text-[var(--text-secondary)] text-xs">
                        Credential ID: {cert.credential}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-screen full-width-section section-padding bg-[var(--bg-primary)]">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-12">
              Technical Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-screen full-width-section section-padding bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let's Connect & Collaborate
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              I'm always interested in discussing research opportunities, collaborating on projects, 
              or sharing insights about cybersecurity and web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn bg-yellow-400 text-purple-900 border-yellow-400 hover:bg-yellow-300 btn-xl"
              >
                Get in Touch
              </a>
              <a 
                href="/research" 
                className="btn bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 btn-xl"
              >
                View My Research
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
