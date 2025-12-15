
import React, { useState } from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`flex flex-col justify-center ${className}`}>
      {!imgError ? (
        <img 
          src="/logo.png" 
          alt="Utsav Charkhawala" 
          className="h-10 md:h-12 w-auto object-contain cursor-pointer" 
          onError={() => setImgError(true)} 
        />
      ) : (
        <h1 className="text-lg md:text-2xl font-black tracking-tight text-slate-900 dark:text-white group cursor-pointer whitespace-nowrap">
          <span className="text-slate-900 dark:text-white">Utsav J.</span>
          <span className="text-brand-primary dark:text-brand-accent ml-1.5 dark:text-neon">Charkhawala</span>
        </h1>
      )}
    </div>
  );
};

export default Logo;
