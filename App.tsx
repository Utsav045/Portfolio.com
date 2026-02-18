import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    // Initial Theme Setup
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Intersection Observer for Reveal Animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px" 
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Helmet>
        <title>Utsav J. Charkhawala | Data Scientist & Full Stack Developer Portfolio</title>
        <meta name="description" content="Professional portfolio of Utsav J. Charkhawala - Expert in Data Science, Machine Learning, Full Stack Development, AI & Automation. View projects, experience, and contact me." />
        <meta name="keywords" content="Utsav Charkhawala, Data Scientist, Full Stack Developer, Portfolio, Machine Learning, AI, Web Development, JavaScript, React, Python, Data Science, Artificial Intelligence, Software Engineer, Web Applications" />
        <link rel="canonical" href="https://utsavjcharkhawala.dev/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://utsavjcharkhawala.dev/" />
        <meta property="og:title" content="Utsav J. Charkhawala | Data Scientist & Full Stack Developer Portfolio" />
        <meta property="og:description" content="Professional portfolio of Utsav J. Charkhawala - Expert in Data Science, Machine Learning, Full Stack Development, AI & Automation." />
        <meta property="og:image" content="https://utsavjcharkhawala.dev/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://utsavjcharkhawala.dev/" />
        <meta property="twitter:title" content="Utsav J. Charkhawala | Data Scientist & Full Stack Developer Portfolio" />
        <meta property="twitter:description" content="Professional portfolio of Utsav J. Charkhawala - Expert in Data Science, Machine Learning, Full Stack Development, AI & Automation." />
        <meta property="twitter:image" content="https://utsavjcharkhawala.dev/og-image.jpg" />
      </Helmet>
      
      <div className="bg-brand-light dark:bg-brand-dark min-h-screen text-slate-800 dark:text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden transition-colors duration-300">
        <Navbar />
        <main>
          {/* Sequence: Home (Hero) -> Skills -> Experience -> Projects -> Contact */}
          <Hero onOpenResume={() => setShowResume(true)} />
          <Skills />
          <Experience />
          <Projects />
          <section className="bg-gray-50 dark:bg-brand-dark py-20 border-t border-gray-200 dark:border-brand-primary/10 transition-colors duration-300">
               <div className="max-w-7xl mx-auto px-4">
                  <Education />
               </div>
          </section>
        </main>
        <Contact />
        
        {/* Resume Modal */}
        <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />

        {/* Floating Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-brand-primary text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform focus:outline-none border-2 border-white dark:border-brand-dark"
          title="Toggle Theme"
        >
          <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
        </button>
      </div>
    </>
  );
}

export default App;