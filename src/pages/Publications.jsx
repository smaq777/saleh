import PublicationCard from '../components/PublicationCard';

const Publications = () => {
  const publications = [
    {
      title: 'Advanced Phishing Detection Using Deep Learning',
      venue: 'International Journal of Information Security',
      year: '2024',
      summary: 'Novel approach to detecting sophisticated phishing attempts using deep learning and natural language processing techniques.',
      link: '#',
      thumbnail: '/assets/deep-learning.jpg'
    },
    {
      title: 'AI-Driven Security Systems: A Comprehensive Review',
      venue: 'Cybersecurity Journal',
      year: '2023',
      summary: 'Comprehensive analysis of artificial intelligence applications in modern cybersecurity systems and threat detection.',
      link: '#',
      thumbnail: '/assets/ai-security.jpg'
    },
    {
      title: 'Machine Learning in Cyber Threat Detection',
      venue: 'Journal of Computer Security',
      year: '2023',
      summary: 'Survey of machine learning applications in cybersecurity, with focus on threat detection and prevention.',
      link: '#',
      thumbnail: '/assets/ml-cyber.jpg'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Publications</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Academic papers and research publications in cybersecurity and artificial intelligence
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {publications.map((publication, index) => (
            <PublicationCard key={index} {...publication} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Conference Presentations</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="font-medium text-gray-900">Cybersecurity Conference 2024</h4>
              <p className="text-sm text-gray-500 mt-2">
                Presented research on advanced phishing detection techniques
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="font-medium text-gray-900">AI Security Summit</h4>
              <p className="text-sm text-gray-500 mt-2">
                Keynote speaker on AI applications in cybersecurity
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="font-medium text-gray-900">Security Research Workshop</h4>
              <p className="text-sm text-gray-500 mt-2">
                Workshop leader on implementing ML in security systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications; 