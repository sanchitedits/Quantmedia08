import React, { useState } from 'react';
import { Check, Lock, Zap, X } from 'lucide-react';
import { TypeformSection } from './TypeformSection';

const pricingTiers = [
  {
    title: "THE CONTENT ENGINE",
    price: "$2,500",
    subtitle: "The anchor package for consistent organic growth.",
    features: [
      "Custom Client Portal for frictionless raw footage uploads.",
      "Editing Volume: 15 Short-Form & 1 Long-Form Video / month.",
      "Omni-Channel Distribution: We syndicate across all platforms.",
      "The Founder's Blueprint: Complete guide to boost camera confidence.",
      "Monthly Communication: Standard performance reports & 1 check-in call."
    ],
    buttonText: "GET STARTED",
    soldOut: false
  },
  {
    title: "AUTOPILOT INFRASTRUCTURE",
    price: "$4,500",
    subtitle: "The Grand Slam Offer: The entire lead-gen machine.",
    features: [
      "Everything in the Content Engine, PLUS:",
      "Editing Volume: 30 Short-Form & 4 Long-Form Videos / month.",
      "Free Website / Funnel: Custom-built system to capture leads.",
      "Custom Automations: Triggered DM, comment & email sequences.",
      "Leads & Ads Portal: Dedicated dashboard to track your pipeline.",
      "Dedicated Human Account Manager: Always-on support.",
      "Weekly Communication: Weekly check-ins & data-driven reports."
    ],
    buttonText: "MOST POPULAR",
    soldOut: false
  },
  {
    title: "GROWTH PARTNER",
    price: "$8,500",
    subtitle: "The ultimate luxury tier for high-net-worth founders.",
    features: [
      "Everything in the Autopilot Infrastructure, PLUS:",
      "Unlimited Video Editing: Unlimited short & long-form production for your channels.",
      "Bespoke Automations: Custom-engineered backend workflows on demand.",
      "Daily Communication: 24/7 direct Slack channel access to the core team."
    ],
    buttonText: "APPLY NOW",
    soldOut: false
  }
];

export function PricingSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="pricing" className="bg-[#fafafa] py-24 px-6 w-full flex flex-col items-center">
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
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-6 text-black">
          An Investment in Your Growth,<br />Not Just Videos
        </h2>
        
        <div className="max-w-3xl text-center mb-16 space-y-6 text-[13px] text-neutral-600 font-medium leading-relaxed">
          <p>
            You are not charging too much. High-ticket clients equate price with quality. Because our backend relies on 
            automated workflows and AI agents handling the heavy lifting, we can deliver a complete acquisition system 
            that justifies a premium investment and translates to massive profit margins for you.
          </p>
          <p>
            Choose the tier that fits your exact operational needs. Stop paying for just editing, and start paying for an 
            acquisition machine that scales effortlessly while you sleep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`bg-white rounded-3xl p-8 shadow-sm border ${index === 1 ? 'border-neutral-300 ring-4 ring-neutral-100' : 'border-neutral-200'} flex flex-col items-center relative`}>
              <h3 className="text-[13px] font-bold tracking-widest uppercase mb-4 text-neutral-800">
                {tier.title}
              </h3>
              
              <div className="text-4xl font-bold mb-4 tracking-tight">
                {tier.price}
              </div>
              
              <p className="text-[13px] text-neutral-500 mb-10 text-center font-medium">
                {tier.subtitle}
              </p>
              
              <div className="w-full flex flex-col gap-4 mb-10 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5 stroke-[3]" />
                    <p className="text-[13px] text-neutral-600 font-medium leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setShowPopup(true)}
                className={`w-full py-4 rounded-full font-bold text-sm tracking-wide transition-colors ${index === 1 ? 'bg-[#4a9f60] text-white hover:bg-[#3d834f]' : 'bg-[#0a0a0a] text-white hover:bg-[#1a1a1a]'}`}
              >
                {tier.buttonText}
              </button>

              <div className="flex items-center justify-between w-full mt-6 px-2">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-neutral-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-neutral-800">100% Safe Purchase</span>
                    <span className="text-[9px] text-neutral-500">Your data is protected</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-neutral-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-neutral-800">Instant Access</span>
                    <span className="text-[9px] text-neutral-500">To your program</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
