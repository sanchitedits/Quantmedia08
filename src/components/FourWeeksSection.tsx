import React from 'react';
import { Check } from 'lucide-react';

const timelineSteps = [
  {
    step: "01",
    title: "Instant Onboarding",
    subtitle: "Get started in under 30 minutes",
    points: [
      "Frictionless onboarding process without endless back-and-forth",
      "Simply fill out a brief intake form",
      "Gain immediate access to our custom client portal"
    ]
  },
  {
    step: "02",
    title: "The 24-Hour Blueprint",
    subtitle: "Your content plan, ready the next day",
    points: [
      "We conduct deep data-driven market research",
      "We engineer your customized content plan",
      "We set up a meeting to discuss and finalize the strategy"
    ]
  },
  {
    step: "03",
    title: "The Execution Phase",
    subtitle: "We start delivering immediately",
    points: [
      "Receive retention-engineered scripts the very next day",
      "Get a dedicated account manager & camera confidence guide",
      "Weekly meetings to discuss areas of improvement (or as preferred)"
    ]
  },
  {
    step: "04",
    title: "The 30-Day Clarity Report",
    subtitle: "Complete visibility into your growth",
    points: [
      "Receive a comprehensive analytical performance report",
      "Get complete clarity on your personal brand's trajectory",
      "Review lead quality, conversions, and traffic data"
    ]
  }
];

export function FourWeeksSection() {
  return (
    <section id="timeline" className="bg-[#fafafa] py-24 md:py-32 px-6 w-full flex flex-col items-center">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-4 text-black">
          What your first 30 days will look like
        </h2>
        <p className="text-[15px] text-neutral-600 text-center mb-20 font-medium max-w-2xl">
          A complete step-by-step timeline of how we build and launch your acquisition machine.
        </p>

        <div className="relative w-full max-w-4xl flex flex-col gap-12 md:gap-16">
          {/* Vertical line */}
          <div className="absolute left-[36px] md:left-1/2 top-8 bottom-8 w-px bg-neutral-300 md:-translate-x-1/2"></div>
          
          {timelineSteps.map((step, index) => {
            const isEven = index % 2 !== 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Desktop Center marker */}
                <div className="hidden md:flex absolute left-1/2 w-16 h-16 bg-[#0a0a0a] rounded-full text-white items-center justify-center font-bold text-xl tracking-tight -translate-x-1/2 shadow-xl border-4 border-[#fafafa] z-10">
                  {step.step}
                </div>

                {/* Mobile Layout */}
                <div className="w-full flex md:hidden items-start gap-4 relative z-10 pl-2 pr-4">
                  <div className="w-14 h-14 shrink-0 bg-[#0a0a0a] rounded-full text-white flex items-center justify-center font-bold text-lg shadow-xl border-4 border-[#fafafa]">
                    {step.step}
                  </div>
                  <div className="bg-[#0a0a0a] text-white rounded-2xl p-6 flex flex-col shadow-xl flex-1 mt-2">
                    <h3 className="text-xl font-bold mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-[13px] text-neutral-400 mb-6 font-medium">
                      {step.subtitle}
                    </p>
                    
                    <div className="w-full flex flex-col gap-4">
                      {step.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start gap-3 text-left">
                          <Check className="w-4 h-4 text-[#4a9f60] shrink-0 mt-0.5" />
                          <p className="text-[13px] text-neutral-200 leading-relaxed font-medium">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Card */}
                <div className={`hidden md:flex w-1/2 ${isEven ? 'pl-16' : 'pr-16'} flex-col`}>
                  <div className="bg-[#0a0a0a] text-white rounded-2xl p-10 flex flex-col shadow-xl relative group hover:-translate-y-1 transition-transform duration-300">
                    
                    {/* Arrow pointing to center (Desktop) */}
                    <div className={`absolute top-8 w-6 h-px bg-neutral-300 ${isEven ? '-left-6' : '-right-6'}`}></div>
                    
                    <h3 className="text-2xl font-bold mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-[14px] text-neutral-400 mb-8 font-medium">
                      {step.subtitle}
                    </p>
                    
                    <div className="w-full flex flex-col gap-4 mt-auto">
                      {step.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start gap-3 text-left">
                          <Check className="w-4 h-4 text-[#4a9f60] shrink-0 mt-0.5" />
                          <p className="text-[13px] text-neutral-200 leading-relaxed font-medium">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
