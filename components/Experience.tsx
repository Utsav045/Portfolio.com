import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#050505] scroll-mt-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Professional <span className="text-brand-primary dark:text-brand-accent">Journey</span></h2>
            <div className="h-1.5 w-24 bg-brand-primary mx-auto rounded-full shadow-[0_0_10px_#003e91]"></div>
        </div>

        <div className="relative border-l-2 border-gray-300 dark:border-slate-800 ml-4 md:ml-6 space-y-16">
            {EXPERIENCES.map((exp, index) => (
                <div key={index} className="reveal relative pl-8 md:pl-12 group">
                    {/* Dot on timeline */}
                    <div className="absolute -left-[9px] top-0 w-5 h-5 bg-white dark:bg-brand-dark border-4 border-brand-primary rounded-full group-hover:border-brand-secondary dark:group-hover:border-brand-accent group-hover:scale-125 transition-all shadow-md"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                             <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors flex items-center gap-2">
                                {exp.company}
                             </h3>
                             <div className="text-lg text-brand-primary font-bold flex items-center gap-2 mt-1">
                                <i className="fa-solid fa-briefcase"></i> {exp.role}
                             </div>
                        </div>
                        <div className="mt-2 md:mt-0 px-4 py-1.5 bg-gray-100 dark:bg-brand-card-dark rounded-full text-slate-600 dark:text-slate-400 text-sm border border-gray-300 dark:border-slate-700 flex items-center gap-2 w-fit shadow-sm">
                            <i className="fa-regular fa-calendar text-brand-primary dark:text-brand-accent"></i> {exp.duration}
                        </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-brand-card-dark p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-brand-primary/50 transition-all shadow-lg hover:shadow-brand-primary/10">
                        <ul className="space-y-4">
                            {exp.points.map((point, i) => (
                                <li key={i} className="text-slate-700 dark:text-slate-300 flex items-start gap-4 text-base leading-relaxed">
                                    <span className="mt-2 w-2 h-2 bg-brand-primary dark:bg-brand-accent rounded-full flex-shrink-0"></span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;