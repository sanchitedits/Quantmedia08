import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { TypeformSection } from './TypeformSection';

const features = [
  "You'll finally clarify your positioning and become an undeniable authority in your specific niche.",
  "You'll get a dedicated team of elite editors, strategists, and account managers handling the entire process seamlessly.",
  "We'll build a repeatable acquisition system so lead generation stops feeling random and starts feeling predictable.",
  "You'll receive data-backed scripts and ongoing feedback from our strategists who tell you exactly what works and why.",
  "We implement custom AI automations and backend systems to filter and qualify every lead effortlessly.",
  "From content creation to sales pipeline, we engineer a complete machine that saves you 20+ hours a week."
];

export function WhatsInsideSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="features" className="bg-white py-24 px-6 w-full flex flex-col items-center">
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors"
            >
              <X className="w-5 h-5 text-neutral-600" />
            </button>
            <div className="scale-y-100 origin-top">
              <TypeformSection />
            </div>
          </div>
        </div>
      )}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
      <div className="bg-[#111] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-10 tracking-wide uppercase">
        The Quant Media Ecosystem
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-6 text-black">
        What's inside the Acquisition Machine?
      </h2>
      
      <p className="text-[15px] text-neutral-600 max-w-2xl text-center font-medium leading-relaxed mb-16">
        You partner directly with our elite team of strategists, editors, and growth experts
        who will work with you to engineer your content, distribute it across all channels,
        and build a system that turns passive viewers into highly qualified leads.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full mb-20">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <MessageCircle className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5 stroke-[1.5]" />
            <p className="text-[15px] text-neutral-800 font-medium leading-relaxed">
              {feature}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-3xl bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 flex flex-col items-center">
        {/* Placeholder for the graphic image */}
        <div className="border-2 border-black rounded-full px-8 py-3 mb-10">
          <h3 className="text-2xl font-bold tracking-tight">The Acquisition Engine</h3>
        </div>
        
        <div className="w-full bg-neutral-50 rounded-2xl border border-neutral-200 p-8 md:p-12 flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
          
          <div className="relative z-10 flex flex-wrap justify-center gap-3 max-w-2xl">
            <div className="bg-white border border-neutral-200 shadow-sm px-5 py-2.5 rounded-full text-sm font-bold text-neutral-800">Data-Driven Market Research</div>
            <div className="bg-white border border-neutral-200 shadow-sm px-5 py-2.5 rounded-full text-sm font-bold text-neutral-800">Retention-Engineered Scripts</div>
            <div className="bg-[#0a0a0a] border border-black shadow-md px-5 py-2.5 rounded-full text-sm font-bold text-white">Elite-Level Editing</div>
            <div className="bg-white border border-neutral-200 shadow-sm px-5 py-2.5 rounded-full text-sm font-bold text-neutral-800">Omni-Channel Distribution</div>
            <div className="bg-[#4a9f60] border border-[#3d834f] shadow-md px-5 py-2.5 rounded-full text-sm font-bold text-white">Custom Conversion Funnel</div>
            <div className="bg-white border border-neutral-200 shadow-sm px-5 py-2.5 rounded-full text-sm font-bold text-neutral-800">Trigger-Based Automations</div>
            <div className="bg-white border border-neutral-200 shadow-sm px-5 py-2.5 rounded-full text-sm font-bold text-neutral-800">Dedicated Account Manager</div>
            <div className="bg-[#1e88e5] border border-[#1976d2] shadow-md px-5 py-2.5 rounded-full text-sm font-bold text-white">Expert Lead Qualification</div>
            <div className="bg-white border border-neutral-200 shadow-sm px-5 py-2.5 rounded-full text-sm font-bold text-neutral-800">Weekly Performance Briefings</div>
            <div className="bg-white border border-neutral-200 shadow-sm px-5 py-2.5 rounded-full text-sm font-bold text-neutral-800">Frictionless Client Portal</div>
            <div className="bg-white border border-neutral-200 shadow-sm px-5 py-2.5 rounded-full text-sm font-bold text-neutral-800">On-Camera Mastery Guide</div>
          </div>

          <div className="relative z-10 mt-12 text-center flex flex-col items-center">
            <div 
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-neutral-200 mb-6 relative cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setShowPopup(true)}
            >
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
              <span className="text-xl">⚡</span>
            </div>
            <h4 className="text-2xl font-bold text-black mb-3">You Only Press Record</h4>
            <p className="text-[15px] text-neutral-600 font-medium max-w-sm">
              We engineer the retention, distribute the content, and capture the leads. You buy back 20+ hours a week.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
