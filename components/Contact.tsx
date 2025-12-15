
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import Logo from './Logo';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // WhatsApp Handler
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
        alert("Please enter your Name and Message to send via WhatsApp.");
        return;
    }

    // Format the message for WhatsApp
    const phoneNumber = "919714407181"; // Utsav's number from constants
    const text = `*New Portfolio Contact*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email || "Not provided")}%0A*Message:*%0A${encodeURIComponent(formData.message)}`;
    
    // Open WhatsApp Web/App
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="bg-white dark:bg-[#020c26] pt-20 border-t border-gray-200 dark:border-brand-primary/20 scroll-mt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Changed grid breakpoint to lg:grid-cols-2 to stack on tablets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Info */}
            <div className="reveal">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Let's <span className="text-brand-primary dark:text-brand-accent">Connect</span></h2>
                <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
                    I am currently open to hybrid roles in Data Science and Full Stack Development. 
                    Feel free to reach out for collaborations or just a friendly chat about tech!
                </p>

                <div className="space-y-6">
                    <a href={PERSONAL_INFO.gmailUrl} target="_blank" rel="noreferrer" className="flex items-center gap-5 text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white group transition-all p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-brand-card-dark border border-transparent hover:border-gray-300 dark:hover:border-slate-800">
                        <div className="w-14 h-14 bg-gray-100 dark:bg-brand-card-dark rounded-xl flex items-center justify-center border border-gray-300 dark:border-slate-800 group-hover:border-brand-primary dark:group-hover:border-brand-accent group-hover:bg-brand-primary/10 dark:group-hover:bg-brand-accent/10 transition-all shadow-lg flex-shrink-0">
                            <i className="fa-solid fa-envelope text-xl text-brand-primary dark:text-brand-accent"></i>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Email Me</p>
                            <p className="font-semibold text-lg break-all">{PERSONAL_INFO.email}</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-5 text-slate-700 dark:text-slate-300 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-brand-card-dark border border-transparent hover:border-gray-300 dark:hover:border-slate-800 transition-colors group">
                        <div className="w-14 h-14 bg-gray-100 dark:bg-brand-card-dark rounded-xl flex items-center justify-center border border-gray-300 dark:border-slate-800 group-hover:border-brand-primary dark:group-hover:border-brand-accent group-hover:bg-brand-primary/10 dark:group-hover:bg-brand-accent/10 transition-all shadow-lg flex-shrink-0">
                            <i className="fa-solid fa-phone text-xl text-brand-primary dark:text-brand-accent"></i>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Call Me</p>
                            <p className="font-semibold text-lg">{PERSONAL_INFO.phone}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 text-slate-700 dark:text-slate-300 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-brand-card-dark border border-transparent hover:border-gray-300 dark:hover:border-slate-800 transition-colors group">
                        <div className="w-14 h-14 bg-gray-100 dark:bg-brand-card-dark rounded-xl flex items-center justify-center border border-gray-300 dark:border-slate-800 group-hover:border-brand-primary dark:group-hover:border-brand-accent group-hover:bg-brand-primary/10 dark:group-hover:bg-brand-accent/10 transition-all shadow-lg flex-shrink-0">
                            <i className="fa-solid fa-map-location-dot text-xl text-brand-primary dark:text-brand-accent"></i>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Location</p>
                            <p className="font-semibold text-lg">{PERSONAL_INFO.location}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="reveal bg-white dark:bg-brand-card-dark p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-slate-800 shadow-2xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-slate-600 dark:text-slate-400">Name</label>
                            <div className="relative">
                                <i className="fa-solid fa-user absolute left-4 top-4 text-slate-500 text-sm"></i>
                                <input 
                                  type="text" 
                                  id="name"
                                  name="name" 
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  disabled={status === 'submitting'}
                                  className="w-full bg-gray-50 dark:bg-brand-dark border border-gray-300 dark:border-slate-700 rounded-xl pl-10 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary dark:focus:border-brand-accent transition-colors shadow-inner disabled:opacity-50" 
                                  placeholder="Enter your name" 
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-slate-600 dark:text-slate-400">Email</label>
                            <div className="relative">
                                <i className="fa-solid fa-at absolute left-4 top-4 text-slate-500 text-sm"></i>
                                <input 
                                  type="email" 
                                  id="email"
                                  name="email" 
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  disabled={status === 'submitting'}
                                  className="w-full bg-gray-50 dark:bg-brand-dark border border-gray-300 dark:border-slate-700 rounded-xl pl-10 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary dark:focus:border-brand-accent transition-colors shadow-inner disabled:opacity-50" 
                                  placeholder="Enter your email" 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-slate-600 dark:text-slate-400">Message</label>
                        <textarea 
                          id="message"
                          name="message" 
                          rows={4} 
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={status === 'submitting'}
                          className="w-full bg-gray-50 dark:bg-brand-dark border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary dark:focus:border-brand-accent transition-colors resize-none shadow-inner disabled:opacity-50" 
                          placeholder="Enter your message"
                        ></textarea>
                    </div>
                    
                    {status === 'success' && (
                      <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl text-center font-medium animate-pulse">
                        <i className="fa-solid fa-check-circle mr-2"></i> Message sent successfully!
                      </div>
                    )}

                    {status === 'error' && (
                      <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl text-center font-medium">
                        <i className="fa-solid fa-circle-exclamation mr-2"></i> Failed to send email. Try the WhatsApp button below!
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-4">
                        {/* Primary Submit Button */}
                        <button 
                          type="submit" 
                          disabled={status === 'submitting'}
                          className="w-full bg-gradient-to-r from-brand-primary to-blue-600 hover:to-brand-secondary dark:hover:to-brand-accent text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-900/40 flex items-center justify-center gap-2 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? (
                              <>Sending <i className="fa-solid fa-circle-notch fa-spin"></i></>
                            ) : (
                              <>Send Message <i className="fa-solid fa-paper-plane"></i></>
                            )}
                        </button>
                        
                        {/* WhatsApp Button */}
                        <div className="relative flex items-center py-2">
                            <div className="flex-grow border-t border-gray-300 dark:border-slate-700"></div>
                            <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">OR</span>
                            <div className="flex-grow border-t border-gray-300 dark:border-slate-700"></div>
                        </div>

                        <button 
                          type="button"
                          onClick={handleWhatsApp}
                          className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-900/20 flex items-center justify-center gap-2 hover:scale-[1.02]"
                        >
                           Send via WhatsApp <i className="fa-brands fa-whatsapp text-xl"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo className="scale-75 origin-left" />
            <p className="text-slate-600 dark:text-slate-600 text-sm font-medium">© {new Date().getFullYear()} Utsav Charkhawala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
