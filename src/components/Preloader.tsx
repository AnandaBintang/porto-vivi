import { useState, useEffect } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Show the preloader for 1.8 seconds, then trigger fade out
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1800);
    
    // Complete the loading sequence after the 500ms fade transition
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#fefefa] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${fading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative flex items-center justify-center w-24 h-24 mb-8">
        <svg
          className="w-full h-full animate-[spin_4s_linear_infinite]"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Petals */}
          <g fill="#f7a1a9" className="opacity-60">
            <circle cx="50" cy="15" r="14" />
            <circle cx="50" cy="85" r="14" />
            <circle cx="15" cy="50" r="14" />
            <circle cx="85" cy="50" r="14" />
          </g>
          
          {/* Inner Petals */}
          <g fill="#bf5d93">
            <circle cx="25" cy="25" r="14" />
            <circle cx="75" cy="75" r="14" />
            <circle cx="25" cy="75" r="14" />
            <circle cx="75" cy="25" r="14" />
          </g>

          {/* Flower Center */}
          <circle cx="50" cy="50" r="18" fill="#e3b6b6" />
          <circle cx="50" cy="50" r="10" fill="#fefefa" />
        </svg>
      </div>

      <div className="flex flex-col items-center gap-2">
         <span className="font-poppins font-semibold text-primary text-sm tracking-[0.3em] uppercase animate-pulse">
           Loading
         </span>
         <div className="flex gap-1.5 mt-2">
           <div className="w-1.5 h-1.5 rounded-full bg-[#f7a1a9] animate-bounce" style={{ animationDelay: '0ms' }} />
           <div className="w-1.5 h-1.5 rounded-full bg-[#bf5d93] animate-bounce" style={{ animationDelay: '150ms' }} />
           <div className="w-1.5 h-1.5 rounded-full bg-[#e3b6b6] animate-bounce" style={{ animationDelay: '300ms' }} />
         </div>
      </div>
    </div>
  );
}
