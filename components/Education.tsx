
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 reveal">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-lg bg-white dark:bg-brand-card-dark border border-gray-200 dark:border-brand-primary/30 flex items-center justify-center shadow-lg">
                <i className="fa-solid fa-graduation-cap text-brand-primary dark:text-brand-accent text-xl"></i>
            </div>
            Education
        </h3>
        <div className="space-y-10">
            {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-6 md:items-start justify-between border-b border-gray-200 dark:border-slate-800 pb-10 last:border-0 hover:bg-gray-100 dark:hover:bg-brand-card-dark p-4 rounded-xl transition-colors">
                    <div className="flex-1">
                        <h4 className="text-2xl font-bold text-slate-800 dark:text-white">{edu.institution}</h4>
                        <p className="text-brand-primary dark:text-brand-accent text-lg font-medium mt-1">{edu.degree}</p>
                        <ul className="mt-4 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            {edu.details.map((d, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <i className="fa-solid fa-caret-right text-brand-primary"></i> {d}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-left md:text-right text-slate-500 text-sm font-mono whitespace-nowrap bg-gray-50 dark:bg-brand-dark p-3 rounded-lg border border-gray-200 dark:border-slate-800">
                        <div className="block flex items-center gap-2 md:justify-end mb-1 text-slate-700 dark:text-slate-500">
                            <i className="fa-solid fa-map-marker-alt"></i> {edu.location}
                        </div>
                        <div className="block font-bold text-slate-900 dark:text-slate-300 flex items-center gap-2 md:justify-end">
                            <i className="fa-regular fa-clock"></i> {edu.year}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Education;
