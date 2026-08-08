import React from 'react';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-16 md:pt-24 px-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-center max-w-5xl leading-[1.1] text-black">
        Build your cult like following - More views, more fans, more leads and more sales. 99% done for you
      </h1>
      <p className="text-lg md:text-xl text-neutral-500 mt-6 max-w-2xl text-center font-medium">
        We engineer retention, distribute your content across all channels, and qualify leads. You get a complete acquisition machine that saves you 20+ hours every single week. That's 43 days a year !!
      </p>
      
      <div className="mt-14 w-full max-w-[800px] aspect-video bg-black rounded-xl shadow-2xl overflow-hidden border border-neutral-200 relative">
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dyjqyuzmu&public_id=lv_0_20260309233147_azv3nj&autoplay=false"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allow="fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          title="Video Player"
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>

      <a 
        href="https://cal.com/quantmedia/15min?overlayCalendar=true"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 group relative inline-flex items-center justify-center px-10 py-5 text-base font-bold tracking-wide text-white transition-all bg-[#1e88e5] rounded-full hover:bg-[#1565c0] shadow-[0_0_40px_rgba(30,136,229,0.4)] hover:shadow-[0_0_60px_rgba(30,136,229,0.6)] hover:-translate-y-1 overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
        <span className="relative z-10 flex items-center gap-2">
          BOOK YOUR FREE STRATEGY CALL
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </a>
    </section>
  );
}
