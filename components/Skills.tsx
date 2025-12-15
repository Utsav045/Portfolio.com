
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { SKILLS, SKILL_STATS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black relative scroll-mt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Technical <span className="text-brand-primary dark:text-brand-accent">Expertise</span></h2>
            <div className="h-1.5 w-24 bg-brand-primary mx-auto rounded-full shadow-[0_0_10px_#003e91]"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                Combining Data Science, Creative Design, and Automation for comprehensive digital solutions.
            </p>
        </div>

        {/* New Layout: Grid with Chart on one side (col-span-1) and Skills Grid on other (col-span-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Chart Area - Takes 1/3 width on large screens */}
            <div className="reveal lg:col-span-1 h-[450px] bg-white dark:bg-brand-card-dark/30 rounded-3xl border border-gray-200 dark:border-brand-primary/10 flex flex-col items-center justify-center relative backdrop-blur-sm shadow-xl dark:shadow-none sticky top-24">
                 <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-20 pointer-events-none">
                    <div className="w-72 h-72 bg-brand-primary rounded-full blur-[80px]"></div>
                 </div>
                <h3 className="text-lg font-bold text-slate-700 dark:text-white mb-2 absolute top-6">Competency Map</h3>
                <div className="w-full h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={SKILL_STATS}>
                            <PolarGrid stroke="#64748b" strokeOpacity={0.3} />
                            <PolarAngleAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar
                                name="Skill Level"
                                dataKey="value"
                                stroke="#003e91"
                                strokeWidth={3}
                                fill="#38bdf8"
                                fillOpacity={0.5}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Skills List - Takes 2/3 width on large screens, displayed as a 2-column grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {SKILLS.map((category, idx) => (
                    <div 
                        key={idx} 
                        className="reveal group relative overflow-hidden bg-white dark:bg-brand-card-dark p-6 rounded-2xl border border-gray-200 dark:border-brand-primary/10 hover:border-brand-accent transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:-translate-y-1 flex flex-col h-full"
                    >
                        {/* Neon Gradient Line Animation */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-brand-primary/10 dark:bg-brand-accent/10 flex items-center justify-center text-brand-primary dark:text-brand-accent group-hover:scale-110 transition-transform duration-300">
                                {/* Dynamic icons based on category name */}
                                {category.category.includes("AI") ? <i className="fa-solid fa-robot"></i> : 
                                 category.category.includes("Design") ? <i className="fa-solid fa-pen-nib"></i> :
                                 category.category.includes("Programming") ? <i className="fa-solid fa-code"></i> :
                                 category.category.includes("Frameworks") ? <i className="fa-solid fa-layer-group"></i> :
                                 category.category.includes("Databases") ? <i className="fa-solid fa-database"></i> :
                                 category.category.includes("Visualization") ? <i className="fa-solid fa-chart-pie"></i> :
                                 <i className="fa-solid fa-star"></i>
                                }
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                                {category.category}
                            </h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {category.skills.map((skill) => (
                                <span key={skill} className="px-2.5 py-1 bg-gray-50 dark:bg-[#0a1024] text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium border border-gray-100 dark:border-slate-800 group-hover:border-brand-accent/30 hover:text-brand-primary dark:hover:text-brand-accent transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
