const About = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">About Me</h2>
          
          <div className="prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p className="mb-4">
              I am a PhD student specializing in Cybersecurity and Innovation, focusing on developing advanced AI-driven solutions for phishing detection and digital security.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Research Focus</h3>
            <p className="mb-4">
              My research centers on developing innovative approaches to combat sophisticated phishing attacks and online scams using artificial intelligence and machine learning techniques. I work on creating robust detection systems that can adapt to evolving cyber threats.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Technical Expertise</h3>
            <p className="mb-4">
              I specialize in developing AI-powered security solutions, with a particular focus on natural language processing and computer vision for detecting deceptive content. My work combines cutting-edge machine learning techniques with practical cybersecurity applications.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Professional Journey</h3>
            <p className="mb-4">
              My background combines academic research in cybersecurity with practical experience in developing security solutions. This unique perspective allows me to bridge the gap between theoretical research and real-world applications in digital security.
            </p>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Skills</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-500">
                <li>AI & Machine Learning</li>
                <li>Cybersecurity Research</li>
                <li>Phishing Detection Systems</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>Security Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 