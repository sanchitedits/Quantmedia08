import React from 'react';

export function NewWaySection() {
  return (
    <section id="process" className="bg-white py-24 px-6 w-full flex flex-col items-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tighter text-center max-w-4xl leading-[1.15] text-black">
        Stop picking a niche, creating content without a system, and not monetizing your brand
      </h2>
      <p className="text-[15px] md:text-lg text-neutral-600 mt-6 max-w-2xl text-center font-medium">
        There is a new way to make content that actually works, is sustainable and leads to turning your followers into clients
      </p>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8 w-full max-w-5xl">
        {/* The Old Way */}
        <div className="flex flex-col items-center relative">
          <div className="bg-[#eb3333] text-white px-10 py-3 rounded-xl font-bold text-lg mb-16 shadow-sm relative z-10">
            THE OLD WAY
            <div className="absolute -top-4 -right-12 bg-[#2a2a2a] text-white text-[11px] px-3 py-1.5 rounded-full whitespace-nowrap shadow-md border border-neutral-700">
              How they do it? 🤷‍♂️
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 w-full relative">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-neutral-200 -z-10"></div>
            
            <div className="bg-white px-8 py-3.5 rounded-2xl shadow-sm border border-neutral-100 font-semibold text-neutral-800 translate-x-4 relative z-10 text-center">
              Wasting time in back and forth
            </div>
            
            <div className="bg-white px-8 py-3.5 rounded-2xl shadow-sm border border-neutral-100 font-semibold text-neutral-800 -translate-x-8 relative z-10 text-center">
              Frustrated and overwhelmed
            </div>
            
            <div className="bg-white px-8 py-3.5 rounded-2xl shadow-sm border border-neutral-100 font-semibold text-neutral-800 translate-x-6 relative z-10 text-center">
              Doing everything yourself
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#eb3333] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-[#fafafa]">
                ↙
              </div>
            </div>
            
            <div className="bg-white px-8 py-3.5 rounded-2xl shadow-sm border border-neutral-100 font-semibold text-neutral-800 -translate-x-12 relative z-10 text-center">
              Saturated market
            </div>
            
            <div className="bg-white px-8 py-3.5 rounded-2xl shadow-sm border border-neutral-100 font-semibold text-neutral-800 translate-x-2 relative z-10 text-center">
              Inconsistent lead flow
            </div>
            
            <div className="bg-white px-8 py-3.5 rounded-2xl shadow-sm border border-neutral-100 font-semibold text-neutral-800 translate-x-8 relative z-10 text-center">
              <div className="absolute -top-4 -left-16 bg-[#2a2a2a] text-white text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap shadow-md border border-neutral-700">
                I feel burnt out 😫
              </div>
              No camera confidence
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#eb3333] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-[#fafafa]">
                ↘
              </div>
            </div>
            
            <div className="bg-white px-8 py-3.5 rounded-2xl shadow-sm border border-neutral-100 font-semibold text-neutral-800 -translate-x-6 relative z-10 text-center max-w-[280px]">
              <div className="absolute -top-4 -right-10 bg-[#2a2a2a] text-white text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap shadow-md border border-neutral-700">
                I give up 💀
              </div>
              Managing and qualifying leads yourself
            </div>
          </div>
        </div>

        {/* The New Way */}
        <div className="flex flex-col items-center relative mt-10 md:mt-0">
          <div className="bg-[#41b853] text-white px-10 py-3 rounded-xl font-bold text-lg mb-16 shadow-sm relative z-10">
            THE NEW WAY
            <div className="absolute -top-4 -right-10 bg-[#1e88e5] text-white text-[11px] px-3 py-1.5 rounded-full whitespace-nowrap shadow-md">
              How to do it 💎
            </div>
          </div>

          <div className="flex flex-col items-center gap-10 w-full relative">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-neutral-200 -z-10"></div>
            
            <div className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-neutral-100 font-bold text-neutral-900 translate-x-6 relative z-10 text-center max-w-[300px]">
              Everything running smoothly in backend
            </div>
            
            <div className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-neutral-100 font-bold text-neutral-900 -translate-x-4 relative z-10 text-center max-w-[300px]">
               <div className="absolute -top-5 left-4 bg-[#1e88e5] text-white text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap shadow-md">
                You are the Niche✨
              </div>
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-neutral-200 rounded-full border-2 border-[#fafafa] shadow-sm overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=a" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              Clear and simple path to follow
            </div>
            
            <div className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-neutral-100 font-bold text-neutral-900 translate-x-4 text-center relative z-10 max-w-[300px]">
              Done for you, you just shoot
              <div className="text-[11px] text-neutral-500 font-medium mt-1">(We handle the rest)</div>
            </div>
            
            <div className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-neutral-100 font-bold text-neutral-900 -translate-x-6 relative z-10 text-center max-w-[300px]">
               <div className="absolute -top-5 right-4 bg-[#1e88e5] text-white text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap shadow-md">
                Monetise from day 1 💰
              </div>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-neutral-200 rounded-full border-2 border-[#fafafa] shadow-sm overflow-hidden">
                 <img src="https://i.pravatar.cc/150?u=b" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              Stand out and dominate in your niche
            </div>
            
            <div className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-neutral-100 font-bold text-neutral-900 translate-x-2 relative z-10 text-center max-w-[300px]">
               <div className="absolute -top-5 left-0 bg-[#1e88e5] text-white text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap shadow-md">
                Easy & exciting 🤩
              </div>
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-neutral-200 rounded-full border-2 border-[#fafafa] shadow-sm overflow-hidden">
                 <img src="https://i.pravatar.cc/150?u=c" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              Scalable acquisition machine
            </div>

            <div className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-neutral-100 font-bold text-neutral-900 -translate-x-8 relative z-10 text-center max-w-[300px]">
               <div className="absolute -top-5 right-4 bg-[#1e88e5] text-white text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap shadow-md">
                Confidence 🚀
              </div>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-neutral-200 rounded-full border-2 border-[#fafafa] shadow-sm overflow-hidden">
                 <img src="https://i.pravatar.cc/150?u=d" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              Personal guide to boost confidence on camera
            </div>
            
            <div className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-neutral-100 font-bold text-neutral-900 translate-x-6 relative z-10 text-center max-w-[300px]">
               <div className="absolute -top-5 left-4 bg-[#1e88e5] text-white text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap shadow-md">
                We handle the rest 🤝
              </div>
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-neutral-200 rounded-full border-2 border-[#fafafa] shadow-sm overflow-hidden">
                 <img src="https://i.pravatar.cc/150?u=e" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              A dedicated account manager to manage and qualify leads
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
