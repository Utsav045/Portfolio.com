
import React from 'react';
import { PERSONAL_INFO } from '../constants';

// Filtered to Main Skills only
const SKILL_ICONS = [
  { icon: "fa-brands fa-python", color: "text-[#3776AB]", bg: "bg-[#3776AB]/10", label: "Python" },
  { icon: "fa-solid fa-robot", color: "text-purple-500", bg: "bg-purple-500/10", label: "AI Agents" },
  { icon: "fa-brands fa-react", color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10", label: "React" },
  { text: "Dj", color: "text-[#092E20]", bg: "bg-[#092E20]/10", label: "Django" },
  { icon: "fa-solid fa-database", color: "text-slate-500", bg: "bg-slate-500/10", label: "SQL" },
  { icon: "fa-solid fa-pen-nib", color: "text-pink-500", bg: "bg-pink-500/10", label: "Design" },
  { icon: "fa-solid fa-chart-simple", color: "text-[#F2C811]", bg: "bg-[#F2C811]/10", label: "Power BI" },
  { text: "Pd", color: "text-[#150458]", bg: "bg-[#150458]/10", label: "Pandas" },
];

const DATA_PARTICLES = Array.from({ length: 20 }).map((_, i) => ({
  size: Math.random() * 4 + 2,
  radius: 150 + Math.random() * 150,
  angle: Math.random() * 360,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 4
}));

interface HeroProps {
  onOpenResume: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-28 pb-10 lg:pt-20 overflow-hidden scroll-mt-20">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 dark:bg-brand-primary/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-900/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Changed layout breakpoint to lg:flex-row to stack on tablets */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="reveal inline-block px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-secondary/10 dark:bg-brand-secondary/30 text-brand-primary dark:text-brand-accent text-sm font-medium mb-6 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              Open to Hybrid Roles
            </div>
            
            <h1 className="reveal text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-500 dark:from-brand-accent dark:to-blue-600 drop-shadow-lg leading-tight">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            <p className="reveal text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-6">
              {PERSONAL_INFO.role} based in <span className="text-slate-900 dark:text-white font-medium inline-flex items-center gap-2"><i className="fa-solid fa-location-dot text-brand-primary dark:text-brand-accent text-lg"></i> Pune, India</span>
            </p>
            
            <p className="reveal text-slate-700 dark:text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
               Mastering <span className="text-brand-primary dark:text-brand-accent font-semibold">Python, SQL, & Django</span>. 
               Expanding into <span className="text-brand-primary dark:text-brand-accent font-semibold">AI Agents & Automation</span> while crafting stunning visuals with <span className="text-brand-primary dark:text-brand-accent font-semibold">Graphic Design & Media</span>.
            </p>

            <div className="reveal flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-primary hover:bg-brand-secondary dark:hover:bg-brand-accent text-white rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-[0_0_25px_rgba(0,62,145,0.6)] transform hover:-translate-y-1"
              >
                View My Work <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full sm:w-auto px-8 py-3.5 border border-slate-400 dark:border-slate-600 hover:border-brand-primary dark:hover:border-brand-accent text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-accent rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons with Tooltips */}
            <div className="reveal flex items-center gap-6 justify-center lg:justify-start">
              <div className="group relative">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-all transform hover:scale-110 block">
                    <i className="fa-brands fa-github text-3xl"></i>
                  </a>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">GitHub</span>
              </div>

              <div className="group relative">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110 block">
                    <i className="fa-brands fa-linkedin text-3xl"></i>
                  </a>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">LinkedIn</span>
              </div>

              <div className="group relative">
                  <a href={PERSONAL_INFO.gmailUrl} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-all transform hover:scale-110 block">
                    <i className="fa-solid fa-envelope text-3xl"></i>
                  </a>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Email</span>
              </div>

              {/* Resume Icon - Triggers Modal */}
              <div className="group relative">
                  <button 
                    onClick={onOpenResume}
                    className="text-slate-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-brand-accent transition-all transform hover:scale-110 block focus:outline-none"
                  >
                    <i className="fa-solid fa-file-lines text-3xl"></i>
                  </button>
                   <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Resume</span>
              </div>
            </div>
          </div>

          {/* New Mascot Section with Random Floating Skills - Hidden on small mobile, visible on larger */}
          <div className="reveal flex-1 relative hidden md:block h-[500px] lg:h-[600px] w-full max-w-[600px]">
              <div className="absolute inset-0 flex items-center justify-center">
                  
                  {/* Orbit Rings Background - Faint reference lines */}
                  <div className="absolute w-[350px] lg:w-[450px] h-[350px] lg:h-[450px] border border-brand-primary/5 rounded-full animate-spin-slow"></div>
                  <div className="absolute w-[250px] lg:w-[350px] h-[250px] lg:h-[350px] border border-brand-accent/5 rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>

                  {/* Data Particles Filling the Space */}
                  {DATA_PARTICLES.map((p, i) => {
                     const angleRad = (p.angle * Math.PI) / 180;
                     const x = Math.cos(angleRad) * p.radius;
                     const y = Math.sin(angleRad) * p.radius;
                     return (
                        <div 
                          key={`p-${i}`}
                          className="absolute top-1/2 left-1/2 rounded-full bg-brand-accent/40 animate-pulse"
                          style={{
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            marginLeft: `${x}px`,
                            marginTop: `${y}px`,
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${p.duration}s`
                          }}
                        />
                     )
                  })}

                  {/* Floating Skill Icons */}
                  <div className="absolute inset-0 pointer-events-none">
                    {SKILL_ICONS.map((skill, index) => {
                      const total = SKILL_ICONS.length;
                      const angle = (index / total) * 360; 
                      // Vary radius to create a 'cloud' depth effect
                      const radius = (200 + (index % 3) * 30); // 220, 250, 280
                      
                      const angleRad = (angle * Math.PI) / 180;
                      const x = Math.cos(angleRad) * radius;
                      const y = Math.sin(angleRad) * radius;
                      
                      return (
                        <div 
                          key={index}
                          className="absolute top-1/2 left-1/2 pointer-events-auto"
                          style={{
                            marginLeft: `${x}px`,
                            marginTop: `${y}px`,
                          }}
                        >
                          <div 
                             className="w-12 h-12 lg:w-14 lg:h-14 -ml-6 -mt-6 lg:-ml-7 lg:-mt-7 animate-float"
                             style={{
                                animationDelay: `${index * 0.2}s`,
                                animationDuration: `${3 + (index % 5)}s`
                             }}
                          >
                             <div className={`w-full h-full rounded-2xl ${skill.bg} backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:scale-125 hover:rotate-6 transition-all duration-300 group cursor-default relative z-20`}>
                                {skill.icon ? (
                                  <i className={`${skill.icon} ${skill.color} text-xl lg:text-2xl drop-shadow-sm`}></i>
                                ) : (
                                  <span className={`${skill.color} font-black text-xs lg:text-sm tracking-tighter`}>{skill.text}</span>
                                )}
                                
                                {/* Tooltip */}
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/90 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 z-30">
                                  {skill.label}
                                </span>
                             </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* The Robot Mascot */}
                  <div className="relative z-10 animate-float flex flex-col items-center scale-75 lg:scale-100">
                      
                      {/* Head */}
                      <div className="w-44 h-36 bg-white dark:bg-slate-900 rounded-3xl border-4 border-white dark:border-slate-800 shadow-2xl relative flex items-center justify-center p-2 z-20">
                          {/* Glow behind head */}
                          <div className="absolute inset-0 bg-brand-primary/30 blur-xl -z-10 rounded-full"></div>
                          
                          {/* Antenna */}
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                              <div className="w-4 h-4 bg-brand-accent rounded-full shadow-[0_0_15px_#38bdf8] animate-pulse"></div>
                              <div className="w-1 h-6 bg-slate-400"></div>
                          </div>

                          {/* Face Screen */}
                          <div className="w-full h-full bg-[#0a0a0a] rounded-2xl border-2 border-slate-800 relative overflow-hidden flex flex-col items-center justify-center group">
                              {/* Eyes */}
                              <div className="flex gap-8 group-hover:gap-6 transition-all duration-300">
                                  <div className="w-8 h-8 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-blink relative">
                                       <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-50"></div>
                                  </div>
                                  <div className="w-8 h-8 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-blink delay-75 relative">
                                      <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-50"></div>
                                  </div>
                              </div>
                              {/* Mouth */}
                              <div className="mt-4 w-12 h-1.5 bg-cyan-500/30 rounded-full overflow-hidden">
                                   <div className="w-full h-full bg-cyan-400 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                              </div>
                              
                              {/* Screen Reflection */}
                              <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 pointer-events-none"></div>
                          </div>
                      </div>

                      {/* Body */}
                      <div className="w-24 h-20 bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 -mt-4 rounded-b-3xl border-x-4 border-b-4 border-white dark:border-slate-800 relative z-10 flex flex-col items-center pt-5 shadow-xl">
                           <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center border border-brand-primary/20">
                               <i className="fa-solid fa-microchip text-brand-primary dark:text-brand-accent text-xl animate-[spin_5s_linear_infinite]"></i>
                           </div>
                           
                           {/* Mechanical Hands attached to body */}
                           <div className="absolute top-1/2 -left-16 w-14 h-4 bg-slate-400 rounded-full -rotate-12 origin-right flex items-center justify-start relative z-[-1]">
                               <div className="absolute -left-2 w-8 h-8 rounded-full border-4 border-slate-300 dark:border-slate-600 border-r-transparent -rotate-45 bg-slate-200 dark:bg-slate-700"></div>
                           </div>
                           <div className="absolute top-1/2 -right-16 w-14 h-4 bg-slate-400 rounded-full rotate-12 origin-left flex items-center justify-end relative z-[-1]">
                                <div className="absolute -right-2 w-8 h-8 rounded-full border-4 border-slate-300 dark:border-slate-600 border-l-transparent rotate-45 bg-slate-200 dark:bg-slate-700"></div>
                           </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
