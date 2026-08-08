import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 w-full flex flex-col items-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
          Ready to scale your personal brand?
        </h2>
        <p className="text-neutral-400 mb-10 max-w-xl text-[15px] font-medium leading-relaxed">
          Stop wasting hours editing videos and guessing what works. Let our expert team engineer your content, distribute it, and capture qualified leads while you focus on what you do best.
        </p>
        <a 
          href="https://cal.com/quantmedia/15min?overlayCalendar=true"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-bold tracking-wide text-white transition-all bg-[#1e88e5] rounded-full hover:bg-[#1565c0] shadow-[0_0_40px_rgba(30,136,229,0.4)] hover:shadow-[0_0_60px_rgba(30,136,229,0.6)] hover:-translate-y-1 overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          <span className="relative z-10 flex items-center gap-2">
            BOOK YOUR FREE STRATEGY CALL
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </a>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-neutral-900 pt-16">
        <div className="col-span-1 md:col-span-2">
          <div 
            className="text-2xl tracking-tight flex items-center gap-1 cursor-pointer mb-6" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-bold">Quant</span>
            <span className="font-light">Media</span>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-8">
            The elite content acquisition machine for founders, coaches, and consultants. You only press record, we handle the rest.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-white">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-white">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-white">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Navigation</h4>
          <div className="flex flex-col gap-4 text-[13px] text-neutral-400 font-medium">
            <button onClick={() => scrollTo('process')} className="text-left hover:text-white transition-colors w-fit">Process</button>
            <button onClick={() => scrollTo('features')} className="text-left hover:text-white transition-colors w-fit">Features</button>
            <button onClick={() => scrollTo('timeline')} className="text-left hover:text-white transition-colors w-fit">Timeline</button>
            <button onClick={() => scrollTo('pricing')} className="text-left hover:text-white transition-colors w-fit">Pricing</button>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Legal</h4>
          <div className="flex flex-col gap-4 text-[13px] text-neutral-400 font-medium">
            <a href="#" className="hover:text-white transition-colors w-fit">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors w-fit">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors w-fit">Contact</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto w-full mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
        <div>© {new Date().getFullYear()} Quant Media. All rights reserved.</div>
        <div>Built for elite founders.</div>
      </div>
    </footer>
  );
}
