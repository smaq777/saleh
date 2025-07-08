const Research = () => {
  const researchAreas = [
    {
      title: 'Advanced Phishing Detection',
      description: 'Research on sophisticated phishing detection techniques using deep learning and natural language processing to identify and prevent evolving cyber threats.',
      tools: ['Deep Learning', 'NLP', 'Behavioral Analysis']
    },
    {
      title: 'AI in Cybersecurity',
      description: 'Exploring applications of artificial intelligence and machine learning in enhancing cybersecurity measures and threat detection.',
      tools: ['Machine Learning', 'Neural Networks', 'Anomaly Detection']
    },
    {
      title: 'Security System Design',
      description: 'Developing robust security systems that combine multiple detection methods to provide comprehensive protection against cyber threats.',
      tools: ['System Architecture', 'Security Protocols', 'Risk Assessment']
    }
  ];

  const tools = [
    {
      name: 'Machine Learning Models',
      description: 'Advanced ML models for pattern recognition and threat detection'
    },
    {
      name: 'Security Analysis Tools',
      description: 'Specialized tools for analyzing and assessing security threats'
    },
    {
      name: 'Threat Detection Systems',
      description: 'Comprehensive systems for identifying and classifying cyber threats'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Research Areas</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Exploring the intersection of artificial intelligence and cybersecurity
          </p>
        </div>

        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {researchAreas.map((area, index) => (
              <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{area.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  <p>{area.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {area.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Research Tools</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{tool.name}</p>
                  <p className="text-sm text-gray-500 truncate">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research; 