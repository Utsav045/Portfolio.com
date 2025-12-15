import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-brand-dark scroll-mt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured <span className="text-brand-primary dark:text-brand-accent">Projects</span></h2>
            <div className="h-1.5 w-24 bg-brand-primary mx-auto rounded-full shadow-[0_0_10px_#003e91]"></div>
             <p className="mt-4 text-slate-600 dark:text-slate-400">
                Bridging Data Science and Full-Stack Engineering with AI-driven solutions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {PROJECTS.map((project, index) => (
                <div key={index} className="reveal group relative bg-white dark:bg-brand-card-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 hover:border-brand-primary transition-all duration-500 shadow-xl dark:shadow-none hover:shadow-[0_0_30px_rgba(0,62,145,0.2)] flex flex-col hover:-translate-y-2">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    
                    <div className="p-6 md:p-8 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className="px-3 py-1 text-xs font-bold tracking-wider text-brand-primary dark:text-brand-accent bg-blue-100 dark:bg-brand-accent/10 rounded-full uppercase border border-blue-200 dark:border-brand-accent/20">
                                {project.type}
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-brand-dark flex items-center justify-center border border-gray-300 dark:border-slate-800 group-hover:border-brand-primary dark:group-hover:border-brand-accent transition-colors flex-shrink-0">
                                <i className="fa-solid fa-layer-group text-slate-500 dark:text-slate-400 group-hover:text-brand-primary dark:group-hover:text-brand-accent"></i>
                            </div>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                            {project.title.split('–')[0]}
                        </h3>
                        
                        <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm leading-relaxed flex-grow border-l-2 border-gray-300 dark:border-slate-700 pl-4">
                            {project.description}
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs font-semibold text-slate-700 dark:text-slate-300 px-2.5 py-1 bg-gray-100 dark:bg-brand-dark rounded border border-gray-200 dark:border-slate-700 shadow-sm">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="pt-4 border-t border-gray-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                {/* Live Demo Button */}
                                {project.demoLink ? (
                                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white bg-brand-primary hover:bg-brand-secondary px-4 py-2 rounded-lg transition-all shadow-lg shadow-blue-500/30 w-full sm:w-auto justify-center">
                                        Live Demo <i className="fa-solid fa-bolt"></i>
                                    </a>
                                ) : (
                                    <button disabled className="flex items-center gap-2 text-sm font-bold text-slate-400 bg-gray-200 dark:bg-white/5 px-4 py-2 rounded-lg cursor-not-allowed opacity-70 w-full sm:w-auto justify-center">
                                        No Live Demo <i className="fa-solid fa-eye-slash"></i>
                                    </button>
                                )}

                                {/* Source Code Link */}
                                {project.link ? (
                                     <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-sm font-bold text-slate-700 dark:text-white hover:text-brand-primary dark:hover:text-brand-accent transition-all group/link w-full sm:w-auto mt-2 sm:mt-0">
                                        Code <i className="fa-brands fa-github text-lg"></i>
                                    </a>
                                ) : (
                                    <span className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-500 cursor-not-allowed w-full sm:w-auto mt-2 sm:mt-0">
                                        Private <i className="fa-solid fa-lock text-xs"></i>
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;