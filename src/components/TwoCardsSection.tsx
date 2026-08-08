import React from 'react';
import { Instagram, Youtube, Music2 } from 'lucide-react';

export function TwoCardsSection() {
  return (
    <section id="team" className="bg-[#fafafa] py-24 px-6 w-full">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-[#0a0a0a] text-white rounded-xl p-10 md:p-12 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          <img src="https://res.cloudinary.com/dyjqyuzmu/image/upload/v1769733339/IMG_20260130_060431_044_pkvmnr.jpg" alt="Sanchit Patel" className="w-20 h-20 rounded-full mb-8 object-cover border-2 border-neutral-800" />
          <h3 className="text-[22px] font-bold mb-6 tracking-tight">Sanchit Patel, CEO & Content Strategist</h3>
          <p className="text-[15px] text-neutral-300 mb-6 leading-relaxed">
            Over the last 4 years, I have tested and scaled content across 10+ niches and 5 major social platforms.
          </p>
          <p className="text-[15px] text-neutral-300 mb-10 leading-relaxed">
            I combine critical thinking, storytelling, and sales psychology to engineer content strategies that capture attention and drive real business growth.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0a0a0a] text-white rounded-xl p-10 md:p-12 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          <img src="https://res.cloudinary.com/dyjqyuzmu/image/upload/v1770402094/picofme_zppske.png" alt="Subham Biswas" className="w-20 h-20 rounded-full mb-8 object-cover border-2 border-neutral-800" />
          <h3 className="text-[22px] font-bold mb-6 tracking-tight">Subham Biswas, Lead Editor</h3>
          <p className="text-[15px] text-neutral-300 mb-6 leading-relaxed">
            With over a decade of experience and a portfolio of 1,000+ edited videos, I oversee the entire post-production workflow.
          </p>
          <p className="text-[15px] text-neutral-300 mb-10 leading-relaxed">
            I manage the content pipeline to ensure every piece of media we produce meets the highest standard of visual output.
          </p>
        </div>
      </div>
    </section>
  );
}
