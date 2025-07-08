import React from "react";
import pageContent from './page_content.json';

const Research = () => {
  const { title, description } = pageContent.Research;
  // Example focus areas, steps, and collaborators
  const focusAreas = [
    { icon: '🔬', title: 'AI Security', desc: 'Focus on AI-driven security.' },
    { icon: '💡', title: 'Innovation', desc: 'Novel research methods.' },
    { icon: '🌐', title: 'Collaboration', desc: 'Work with global teams.' }
  ];
  const steps = [
    'Define Problem',
    'Develop Model',
    'Evaluate Results',
    'Publish Findings'
  ];
  const collaborators = [
    { logo: 'logo1.png', name: 'Lab 1' },
    { logo: 'logo2.png', name: 'Lab 2' }
  ];
  return (
    <>
      {/* Research Focus Areas */}
      <section className="w-screen full-width-section py-24 md:py-32" style={{ background: 'linear-gradient(to right, #F9FAFB, #FFFFFF)' }}>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-0">
          <h1 className="text-3xl font-bold mb-8">{title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, i) => (
              <div className="card flex flex-col items-center text-center" key={i}>
                <div className="mb-4 p-4 rounded-lg" style={{background: '#E0E7FF'}}>
                  <span className="text-3xl" style={{color: 'var(--primary)'}}>{area.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-base" style={{color: 'var(--text-secondary)'}}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Methodology */}
      <section className="w-screen full-width-section py-16" style={{ background: 'linear-gradient(to right, #F9FAFB, #FFFFFF)' }}>
        <div className="w-full max-w-5xl mx-auto px-4 md:px-0">
          <h2 className="text-2xl font-bold mb-8">Methodology</h2>
          <ol className="flex flex-col md:flex-row gap-8">
            {steps.map((step, i) => (
              <li className="flex-1 card text-center" key={i}>{step}<br /><span className="text-sm" style={{color: 'var(--text-secondary)'}}>Description</span></li>
            ))}
          </ol>
        </div>
      </section>
      {/* Collaborators */}
      <section className="w-screen full-width-section py-14 md:py-20" style={{ background: 'linear-gradient(to right, #4F46E5, #7C3AED)', color: '#fff' }}>
        <div className="w-full max-w-5xl mx-auto px-4 md:px-0">
          <h2 className="text-2xl font-bold mb-8">Collaborators</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
            {collaborators.map((c, i) => (
              <img src={c.logo} alt={c.name} className="h-12 object-contain grayscale" key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
