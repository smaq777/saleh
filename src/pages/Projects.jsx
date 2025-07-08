import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Phishing Detection System',
      description: 'Advanced phishing detection system using machine learning and natural language processing to identify sophisticated phishing attempts in real-time.',
      techStack: ['Python', 'TensorFlow', 'BERT', 'FastAPI', 'React', 'Docker'],
      role: 'Lead Developer & ML Engineer',
      image: '/assets/phishing-detection.jpg'
    },
    {
      title: 'Cybersecurity Training Platform',
      description: 'Interactive platform for cybersecurity awareness training, featuring simulated phishing scenarios and real-time feedback.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Docker'],
      role: 'Full Stack Developer',
      image: '/assets/cyber-training.jpg'
    },
    {
      title: 'Security Analysis Dashboard',
      description: 'Comprehensive dashboard for security analysts to monitor and analyze potential threats, featuring ML-powered anomaly detection.',
      techStack: ['React', 'Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
      role: 'Lead Developer',
      image: '/assets/security-dashboard.jpg'
    },
    {
      title: 'Automated Threat Detection System',
      description: 'System for automatically detecting and classifying cyber threats using advanced machine learning algorithms.',
      techStack: ['Python', 'Scikit-learn', 'PyTorch', 'FastAPI', 'Redis'],
      role: 'ML Engineer',
      image: '/assets/threat-detection.jpg'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A collection of my technical projects in cybersecurity, AI, and machine learning.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 