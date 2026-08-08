import React from 'react';

const stats = [
  { value: "$100M+", label: "Agency Revenue" },
  { value: "120+", label: "Global Team" },
  { value: "$350M+", label: "Generated for clients" }
];

const coaches = [
  {
    name: "Shan",
    role: "Digital Products & Monetization Coach",
    image: "https://i.pravatar.cc/150?u=shan"
  },
  {
    name: "Shitika",
    role: "Instagram & Content Strategy Coach",
    image: "https://i.pravatar.cc/150?u=shitika"
  },
  {
    name: "Nellis",
    role: "Youtube Coach",
    image: "https://i.pravatar.cc/150?u=nellis"
  },
  {
    name: "Molly",
    role: "TikTok, Brand Deals & Content Coach",
    image: "https://i.pravatar.cc/150?u=molly"
  }
];

export function TeamSection() {
  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-6 mt-32 w-full flex flex-col items-center">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-4">
          Personalized support from a team of experts
        </h2>
        <p className="text-sm text-neutral-400 text-center mb-16">
          No matter your level, we will help you grow as a creator
        </p>

        <h3 className="text-2xl font-black tracking-[0.2em] uppercase mb-12">
          GENFLOW
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full max-w-4xl mb-24 relative">
          {/* Dividers for desktop */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/3 w-px h-16 bg-neutral-800"></div>
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-1/3 w-px h-16 bg-neutral-800"></div>
          
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-neutral-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-center mb-16">
          Genflow team: Your Industry Coaches
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 w-full max-w-4xl mb-16">
          {coaches.map((coach, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-2 border-neutral-800">
                <img src={coach.image} alt={coach.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-lg font-bold mb-2">{coach.name}</h4>
              <p className="text-[13px] text-neutral-400 leading-relaxed max-w-[150px]">
                {coach.role}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl text-center flex flex-col gap-6 text-[13px] text-neutral-400 leading-relaxed">
          <p>
            The Genflow team, put together by CEO & Founder Shan Hanif, have worked on the
            content and marketing strategies of some of the top creators in the world, and helped
            them generate over $350 million in revenue since 2016.
          </p>
          <p>
            This team has worked with world-known creators like James Smith, Chris Williamson,
            Leana Deeb, Lara Acosta, Grace Beverley, Meggan Grubb, Lilly Sabri, and of course
            Jun Yuh.
          </p>
        </div>
      </div>
    </section>
  );
}
