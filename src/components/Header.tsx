import React, { useState, useEffect } from 'react';

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`bg-[#fafafa]/90 backdrop-blur-md py-4 px-6 md:px-8 flex items-center justify-between sticky top-0 z-50 border-b border-neutral-200 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div 
        className="text-xl tracking-tight flex items-center gap-1 cursor-pointer" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="font-bold">Quant</span>
        <span className="font-light">Media</span>
      </div>
      
      <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold tracking-wide text-neutral-500 uppercase">
        <button onClick={() => scrollTo('team')} className="hover:text-black transition-colors">Team</button>
        <button onClick={() => scrollTo('process')} className="hover:text-black transition-colors">Process</button>
        <button onClick={() => scrollTo('features')} className="hover:text-black transition-colors">Features</button>
        <button onClick={() => scrollTo('timeline')} className="hover:text-black transition-colors">Timeline</button>
        <button onClick={() => scrollTo('solutions')} className="hover:text-black transition-colors">Solutions</button>
        <button onClick={() => scrollTo('pricing')} className="hover:text-black transition-colors">Pricing</button>
      </nav>

      <button 
        onClick={() => scrollTo('contact')} 
        className="bg-[#4a9f60] text-white px-6 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase hover:bg-[#3d834f] transition-colors shadow-sm"
      >
        Work With Us
      </button>
    </header>
  );
}
