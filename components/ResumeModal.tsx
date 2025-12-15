
import React, { useEffect } from 'react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, EDUCATION, SKILLS, CERTIFICATIONS, ADDITIONAL_DETAILS } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  // Lock body scroll when modal is open to prevent double scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    // Outer container: Full screen, scrollable (overlay scroll pattern)
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 backdrop-blur-sm print:bg-white print:overflow-visible">
      {/* Scrollable Wrapper */}
      <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 print:p-0">
        
        {/* Click outside listener layer */}
        <div className="absolute inset-0 transition-opacity" onClick={onClose} aria-hidden="true"></div>

        {/* Modal Card */}
        <div 
          className="relative w-full max-w-4xl bg-brand-light dark:bg-brand-card-dark rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10 print:shadow-none print:ring-0 print:max-w-none print:w-full print:bg-white my-4 sm:my-8"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Modal Header (Sticky) */}
          <div className="sticky top-0 z-50 flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-brand-dark shadow-sm print:hidden">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <i className="fa-solid fa-file-invoice text-brand-primary"></i> Resume Preview
            </h2>
            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrint}
                className="px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2 shadow-lg hover:shadow-brand-primary/20"
              >
                <i className="fa-solid fa-download"></i> Download / Print
              </button>
              <button 
                onClick={onClose}
                className="p-2 text-slate-500 hover:text-red-500 transition-colors bg-gray-100 dark:bg-white/5 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
          </div>

          {/* Resume Content Area */}
          {/* Increased bottom padding (pb-24) to ensure clear spacing at the end */}
          <div className="w-full bg-gray-200/50 dark:bg-[#050505] p-4 sm:p-8 pb-24 flex justify-center print:p-0 print:bg-white print:pb-0">
            
            {/* The Resume Paper */}
            <div 
              id="resume-content"
              className="w-full max-w-[210mm] bg-white text-black p-[15mm] shadow-2xl print:shadow-none print:w-full print:max-w-none print:p-0 font-sans mx-auto h-auto min-h-[297mm]"
              style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5', fontSize: '11pt' }}
            >
              {/* Header */}
              <div className="text-center mb-8 border-b-2 border-brand-primary pb-6">
                <h1 className="text-4xl font-extrabold uppercase tracking-tight mb-2 text-brand-primary">{PERSONAL_INFO.name}</h1>
                <p className="text-lg font-bold text-slate-700 mb-3 tracking-wide">{PERSONAL_INFO.role}</p>
                <div className="text-sm text-gray-800 flex flex-wrap justify-center gap-x-4 gap-y-2 font-medium">
                   <span className="flex items-center gap-1"><i className="fa-solid fa-phone text-brand-primary text-xs"></i> {PERSONAL_INFO.phone}</span>
                   <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 text-black no-underline hover:text-brand-primary transition-colors"><i className="fa-solid fa-envelope text-brand-primary text-xs"></i> {PERSONAL_INFO.email}</a>
                   <span className="flex items-center gap-1"><i className="fa-solid fa-location-dot text-brand-primary text-xs"></i> {PERSONAL_INFO.location}</span>
                </div>
                <div className="text-sm text-gray-800 flex flex-wrap justify-center gap-x-4 gap-y-2 font-medium mt-2">
                   <a href={PERSONAL_INFO.github} className="text-brand-primary hover:underline font-bold">GitHub</a>
                   <span className="text-gray-400">|</span>
                   <a href={PERSONAL_INFO.linkedin} className="text-brand-primary hover:underline font-bold">LinkedIn</a>
                </div>
              </div>

              {/* Profile */}
               <div className="mb-6">
                 <h2 className="text-sm font-bold uppercase bg-brand-primary/10 text-brand-primary px-3 py-1 mb-3 rounded-sm border-l-4 border-brand-primary tracking-wider">Profile</h2>
                 <p className="text-justify text-gray-800 leading-relaxed px-1">
                   {PERSONAL_INFO.bio}
                 </p>
               </div>

               {/* Skills */}
               <div className="mb-6">
                  <h2 className="text-sm font-bold uppercase bg-brand-primary/10 text-brand-primary px-3 py-1 mb-3 rounded-sm border-l-4 border-brand-primary tracking-wider">Technical Skills</h2>
                  <div className="grid grid-cols-1 gap-2 px-1">
                    {SKILLS.map((cat, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-baseline break-inside-avoid border-b border-gray-100 last:border-0 pb-1.5 last:pb-0">
                        <span className="font-bold w-48 flex-shrink-0 text-slate-900 text-sm">{cat.category}</span>
                        <span className="text-gray-800 text-sm flex-1">{cat.skills.join(', ')}</span>
                      </div>
                    ))}
                  </div>
               </div>

               {/* Experience */}
               <div className="mb-6">
                  <h2 className="text-sm font-bold uppercase bg-brand-primary/10 text-brand-primary px-3 py-1 mb-3 rounded-sm border-l-4 border-brand-primary tracking-wider">Experience</h2>
                  {EXPERIENCES.map((exp, i) => (
                    <div key={i} className="mb-5 break-inside-avoid px-1">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                           <h3 className="font-bold text-slate-900 text-base">{exp.company}</h3>
                           <div className="text-brand-primary font-semibold text-sm italic">{exp.role}</div>
                        </div>
                        <span className="font-bold text-slate-700 bg-gray-100 px-2 py-0.5 rounded text-xs whitespace-nowrap border border-gray-200">{exp.duration}</span>
                      </div>
                      <ul className="list-disc list-outside ml-5 space-y-1 text-gray-800 text-sm marker:text-brand-primary">
                        {exp.points.map((pt, j) => (
                          <li key={j} className="text-justify pl-1">{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
               </div>

               {/* Projects */}
               <div className="mb-6">
                  <h2 className="text-sm font-bold uppercase bg-brand-primary/10 text-brand-primary px-3 py-1 mb-3 rounded-sm border-l-4 border-brand-primary tracking-wider">Projects</h2>
                  {PROJECTS.map((proj, i) => (
                    <div key={i} className="mb-4 break-inside-avoid px-1">
                       <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-slate-900 text-base">
                          {proj.title} 
                        </h3>
                        <span className="font-medium text-slate-600 text-xs whitespace-nowrap mt-1">{proj.duration}</span>
                      </div>
                      <div className="text-gray-800 text-sm mb-1.5">
                        {proj.tech.length > 0 && (
                          <span className="font-semibold text-brand-primary text-xs uppercase tracking-wide mr-2">[{proj.tech.join(', ')}]</span>
                        )}
                        <span className="text-justify leading-snug">{proj.description}</span>
                      </div>
                    </div>
                  ))}
               </div>

               {/* Education */}
               <div className="mb-6">
                  <h2 className="text-sm font-bold uppercase bg-brand-primary/10 text-brand-primary px-3 py-1 mb-3 rounded-sm border-l-4 border-brand-primary tracking-wider">Education</h2>
                  {EDUCATION.map((edu, i) => (
                     <div key={i} className="mb-3 break-inside-avoid px-1">
                        <div className="flex justify-between items-baseline flex-wrap">
                          <h3 className="font-bold text-slate-900 text-base">{edu.institution} <span className="font-medium text-gray-600 text-xs ml-1">{edu.location}</span></h3>
                          <span className="font-bold text-slate-700 text-sm">{edu.year}</span>
                        </div>
                        <div className="font-semibold text-brand-primary text-sm italic">{edu.degree}</div>
                        {edu.details && edu.details.length > 0 && (
                          <ul className="list-disc list-outside ml-5 text-gray-800 text-sm mt-1 marker:text-brand-primary">
                            {edu.details.map((d, j) => <li key={j}>{d}</li>)}
                          </ul>
                        )}
                     </div>
                  ))}
               </div>

               {/* Certifications & Additional */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="mb-0">
                      <h2 className="text-sm font-bold uppercase bg-brand-primary/10 text-brand-primary px-3 py-1 mb-3 rounded-sm border-l-4 border-brand-primary tracking-wider">Certifications</h2>
                      <ul className="list-disc list-outside ml-5 space-y-1 text-gray-800 text-sm marker:text-brand-primary">
                        {CERTIFICATIONS.map((cert, i) => (
                          <li key={i} className="break-inside-avoid"><span className="font-semibold">{cert.name}</span> <span className="text-gray-500 text-xs">- {cert.issuer}</span></li>
                        ))}
                      </ul>
                   </div>

                   <div className="mb-0">
                      <h2 className="text-sm font-bold uppercase bg-brand-primary/10 text-brand-primary px-3 py-1 mb-3 rounded-sm border-l-4 border-brand-primary tracking-wider">Details</h2>
                      <ul className="list-none space-y-1.5 text-gray-800 text-sm">
                        <li className="break-inside-avoid">
                          <span className="font-bold text-slate-900">Languages:</span> {ADDITIONAL_DETAILS.languages.join(', ')}
                        </li>
                        <li className="break-inside-avoid font-medium text-brand-primary flex items-start gap-2">
                           <i className="fa-solid fa-check mt-1"></i>
                           {ADDITIONAL_DETAILS.availability}
                        </li>
                      </ul>
                   </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
