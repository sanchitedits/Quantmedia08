import React from 'react';
import { Users, Zap, Filter, BarChart3 } from 'lucide-react';

const solutions = [
  {
    icon: Users,
    title: "CRM Systems",
    description: "Keep every customer relationship organized, trackable, and ready to convert."
  },
  {
    icon: Zap,
    title: "Lead Automation Software",
    description: "Capture, qualify, and follow up with leads automatically — no manual chasing."
  },
  {
    icon: Filter,
    title: "Sales Funnel Dashboards",
    description: "See exactly where every prospect stands, in one clear, real-time view."
  },
  {
    icon: BarChart3,
    title: "Marketing Automation Tools",
    description: "Custom workflows that run your campaigns and reporting while you focus on growth."
  }
];

export function SaasSolutionsSection() {
  return (
    <section id="solutions" className="bg-white py-24 md:py-32 px-6 w-full flex flex-col items-center border-t border-neutral-100">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-6">
          Beyond Marketing
        </span>
        
        <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tighter mb-8 leading-tight text-black">
          SAAS SOLUTIONS
        </h2>
        
        <p className="text-[15px] md:text-base text-neutral-600 max-w-2xl mb-20 leading-relaxed font-medium">
          We don't just market — we build the tools that scale your business. Custom software that gives you a competitive edge in local and global markets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="bg-[#fafafa] border border-neutral-200 rounded-3xl p-10 flex flex-col items-center text-center hover:bg-neutral-50 transition-colors shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center mb-8">
                  <Icon className="w-8 h-8 text-black stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-bold mb-4 tracking-tight text-black">{solution.title}</h3>
                <p className="text-[14px] text-neutral-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
