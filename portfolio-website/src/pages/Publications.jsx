
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pageContent from './page_content.json';

const Publications = () => {
  const publications = pageContent.Publications || [];
  const [selectedPub, setSelectedPub] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Count publications by type
  const pubCounts = publications.reduce((acc, pub) => {
    acc.total = (acc.total || 0) + 1;
    if (pub.status === 'pending') {
      acc.pending = (acc.pending || 0) + 1;
    } else {
      acc[pub.type] = (acc[pub.type] || 0) + 1;
    }
    return acc;
  }, {});

  const filteredPubs = publications.filter(pub => {
    const matchesFilter = filter === 'all' || 
      (filter === 'pending' && pub.status === 'pending') ||
      (filter !== 'pending' && pub.type === filter && pub.status !== 'pending');
    
    const matchesSearch = !searchTerm || 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  const getStatusBadgeClass = (type, status) => {
    if (status === 'pending') {
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
    switch (type) {
      case 'journal':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'book_chapter':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'conference':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (type, status) => {
    if (status === 'pending') return 'Under Review';
    switch (type) {
      case 'journal':
        return 'Journal Article';
      case 'book_chapter':
        return 'Book Chapter';
      case 'conference':
        return 'Conference Paper';
      default:
        return type;
    }
  };

  const getStatusIcon = (type, status) => {
    if (status === 'pending') return '⏳';
    switch (type) {
      case 'journal':
        return '📄';
      case 'book_chapter':
        return '📚';
      case 'conference':
        return '🎤';
      default:
        return '📝';
    }
  };

  const generateCitation = (pub) => {
    const cleanTitle = pub.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(' ').slice(0, 3).join('_');
    const year = pub.conference.match(/\d{4}/)?.[0] || '2024';
    
    if (pub.type === 'book_chapter') {
      return `@incollection{${cleanTitle},
  title={${pub.title}},
  author={${pub.authors}},
  booktitle={${pub.conference.split(',')[0]}},
  year={${year}},
  ${pub.link ? `doi={${pub.link.split('doi.org/')[1] || pub.link}}` : ''}
}`;
    } else if (pub.type === 'journal') {
      return `@article{${cleanTitle},
  title={${pub.title}},
  author={${pub.authors}},
  journal={${pub.conference.split(',')[0]}},
  year={${year}},
  ${pub.link ? `doi={${pub.link.split('doi.org/')[1] || pub.link}}` : ''}
}`;
    } else {
      return `@inproceedings{${cleanTitle},
  title={${pub.title}},
  author={${pub.authors}},
  booktitle={${pub.conference.split(',')[0]}},
  year={${year}},
  ${pub.link ? `doi={${pub.link.split('doi.org/')[1] || pub.link}}` : ''}
}`;
    }
  };

  const filterOptions = [
    { key: 'all', label: 'All Publications', count: pubCounts.total },
    { key: 'book_chapter', label: 'Book Chapters', count: pubCounts.book_chapter || 0 },
    { key: 'conference', label: 'Conference Papers', count: pubCounts.conference || 0 },
    { key: 'journal', label: 'Journal Articles', count: pubCounts.journal || 0 },
    { key: 'pending', label: 'Under Review', count: pubCounts.pending || 0 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50">
      {/* Header Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research Publications
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              My research focuses on cybersecurity, particularly in phishing detection, user behavior analysis, 
              and educational approaches to security awareness. Here's a collection of my published work and ongoing research.
            </p>
          </motion.div>
          
          {/* Publication Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { number: publications.length, label: 'Total Publications', colorClass: 'text-indigo-600' },
              { number: pubCounts.book_chapter || 0, label: 'Book Chapters', colorClass: 'text-emerald-600' },
              { number: pubCounts.conference || 0, label: 'Conference Papers', colorClass: 'text-blue-600' },
              { number: pubCounts.pending || 0, label: 'Under Review', colorClass: 'text-yellow-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className={`text-3xl font-bold ${stat.colorClass} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="space-y-6">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative max-w-md mx-auto"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              />
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {filterOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setFilter(option.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filter === option.key
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {option.label} ({option.count})
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence>
            {filteredPubs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 text-6xl mb-4">📚</div>
                <p className="text-xl text-gray-600">No publications found matching your criteria.</p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {filteredPubs.map((pub, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`bg-white rounded-xl shadow-sm border ${
                      pub.status === 'pending' ? 'border-yellow-200' : 'border-gray-200'
                    } p-6 hover:shadow-md transition-all duration-300 group`}
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        {/* Status Badge */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeClass(pub.type, pub.status)}`}>
                            <span className="mr-1">{getStatusIcon(pub.type, pub.status)}</span>
                            {getStatusText(pub.type, pub.status)}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                          {pub.title}
                        </h3>
                        
                        {/* Authors */}
                        <p className="text-gray-600 mb-3 font-medium">{pub.authors}</p>
                        
                        {/* Conference/Journal */}
                        <p className="text-gray-500 mb-4 italic">{pub.conference}</p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {pub.tags.map((tag, tagIdx) => (
                            <span 
                              key={tagIdx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-row lg:flex-col gap-3 lg:min-w-[140px]">
                        {pub.link && (
                          <motion.a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors duration-200 group"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Publication
                          </motion.a>
                        )}
                        {!pub.status && (
                          <motion.button
                            onClick={() => setSelectedPub(pub)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Cite
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Citation Modal */}
      <AnimatePresence>
        {selectedPub && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedPub(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white rounded-xl max-w-3xl w-full p-6 max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Citation</h3>
                <button
                  onClick={() => setSelectedPub(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono overflow-x-auto">
                  {generateCitation(selectedPub)}
                </pre>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedPub(null)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Close
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    navigator.clipboard.writeText(generateCitation(selectedPub));
                    setSelectedPub(null);
                  }}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors duration-200"
                >
                  Copy Citation
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Publications;
