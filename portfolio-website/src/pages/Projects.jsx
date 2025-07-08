import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pageContent from './page_content.json';

const Projects = () => {
  const projects = pageContent.Projects || [];
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get unique technologies for filter buttons
  const technologies = ['All', ...Array.from(new Set(projects.flatMap(p => p.tech)))];

  // Filter projects based on selected technology
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tech.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="w-screen full-width-section section-padding bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl sm:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
              Explore the innovative solutions and applications 
              I've developed to address real-world challenges in cybersecurity and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <motion.section 
        className="section-padding"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {technologies.map((tech) => (
              <motion.button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === tech
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                    : 'bg-white text-purple-600 border border-purple-200 hover:bg-purple-50 hover:border-purple-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover="hover"
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-purple-100"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-yellow-400/20" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category || 'Project'}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech?.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech?.length > 3 && (
                        <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-medium">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="flex-1 bg-purple-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

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
              Ready to Collaborate?
            </h2>
            <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed">
              I'm always excited to work on new projects and tackle challenging problems. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn bg-white text-purple-700 border-white hover:bg-gray-100 btn-xl font-semibold"
              >
                Get in Touch
              </a>
              <a 
                href="/research" 
                className="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-purple-700 btn-xl"
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

export default Projects;