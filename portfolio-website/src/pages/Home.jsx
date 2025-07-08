import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import pageContent from './page_content.json';
import RotatingText from './RotatingText';
import AnimatedContent from './AnimatedContent';
import ShinyText from './ShinyText';

const Home = () => {
  const { title, intro, cta } = pageContent.Home;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Example featured projects and publications (replace with real data)
  const featuredProjects = [
    { 
      title: 'AI Phishing Detection System', 
      tags: ['AI', 'Security', 'ML'], 
      desc: 'Advanced machine learning model for detecting sophisticated phishing attacks with 98% accuracy.',
      icon: '🛡️'
    },
    { 
      title: 'Scam Alert Platform', 
      tags: ['Web', 'React', 'Firebase'], 
      desc: 'Real-time community platform connecting users with cybersecurity experts for scam verification.',
      icon: '🚨'
    },
    { 
      title: 'Digital Security Dashboard', 
      tags: ['Analytics', 'Vue.js', 'Python'], 
      desc: 'Comprehensive admin dashboard for monitoring and analyzing digital security threats.',
      icon: '📊'
    },
  ];

  

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-screen full-width-section min-h-[90vh] flex items-center justify-center gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[var(--primary)]/5" />

        <div className={`relative z-10 container-custom py-20 sm:py-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                <span className="block text-[var(--text-primary)] mb-2">Hi, I'm</span>
                <span className="block text-gradient">Saleh Alqahtani</span>
              </h1>

              <div className="mb-6">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] mb-4">
                  I work as a
                </p>
                <RotatingText
                  texts={['PhD Researcher', 'Cybersecurity Expert', 'AI/ML Engineer', 'Full-Stack Developer']}
                  mainClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-2xl inline-block px-6 py-3 min-w-[300px] sm:min-w-[400px] text-center shadow-lg"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl mb-10 text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              {intro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/projects"
                className="btn btn-primary btn-xl group"
              >
                <span className="mr-2">🚀</span>
                View My Work
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
              <Link 
                to="/contact"
                className="btn btn-secondary btn-xl"
              >
                <ShinyText text={cta} className="text-[var(--primary)]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[var(--primary)] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[var(--primary)] rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-screen full-width-section section-padding bg-[var(--bg-primary)]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Innovative solutions at the intersection of AI and cybersecurity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, idx) => (
              <div 
                key={idx}
                className="card card-hover group cursor-pointer animate-fade-in-scale"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="px-3 py-1 bg-[var(--neutral-100)] text-[var(--primary)] rounded-full text-sm font-medium hover:bg-[var(--primary)] hover:text-white transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="btn btn-secondary btn-lg"
            >
              View All Projects
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Highlight Section */}
      <section className="w-screen full-width-section section-padding bg-[var(--bg-secondary)]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Research Impact
            </h2>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-12 leading-relaxed">
              Contributing to the future of cybersecurity through innovative research and practical applications
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card text-center">
                <div className="text-3xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">AI-Driven Detection</h3>
                <p className="text-[var(--text-secondary)]">
                  Developing next-generation machine learning models for real-time threat detection
                </p>
              </div>
              <div className="card text-center">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">Academic Publications</h3>
                <p className="text-[var(--text-secondary)]">
                  Published research contributing to global cybersecurity knowledge base
                </p>
              </div>
            </div>

            <Link
              to="/publications"
              className="btn btn-accent btn-lg"
            >
              View Publications
              <span className="ml-2">📚</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-screen full-width-section py-20 sm:py-24 gradient-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg sm:text-xl mb-10 text-white opacity-90 leading-relaxed">
              Whether you're looking to collaborate on research, need cybersecurity expertise, or want to discuss innovative tech solutions – I'd love to connect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="btn bg-white text-[var(--primary)] border-white hover:bg-[var(--neutral-100)] btn-xl"
              >
                Get In Touch
                <span className="ml-2">💬</span>
              </Link>
              <Link
                to="/about"
                className="btn border-white text-white bg-transparent hover:bg-white hover:text-[var(--primary)] btn-xl"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;