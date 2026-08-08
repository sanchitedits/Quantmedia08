import React from 'react';

const notForYou = [
  "You're looking for a cheap, fast editor just to chop up videos without any overarching strategy.",
  "You prioritize vanity metrics and viral views over actually converting viewers into paying clients.",
  "You run a faceless channel or meme page and aren't willing to be the face of your brand.",
  "You want to micromanage every single detail and aren't willing to trust an elite team to execute.",
  "You don't have a proven, high-ticket offer and aren't ready to handle an influx of qualified leads."
];

const forYou = [
  "You're a founder, coach, or consultant ready to scale your revenue and become the undeniable authority in your space.",
  "You want a complete, done-for-you acquisition machine where your only job is to press record.",
  "You value your time and want to buy back 20+ hours a week by offloading strategy, editing, and lead generation.",
  "You want a predictable system that consistently turns passive viewers into highly qualified, ready-to-buy leads.",
  "You are fully committed to building a long-term, scalable personal brand that drives real business growth."
];

export function ForYouSection() {
  return (
    <section id="for-you" className="bg-white py-24 px-6 w-full flex flex-col items-center">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Not for you */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight text-black mb-10">
            This is not for you if...
          </h2>
          <div className="flex flex-col gap-8">
            {notForYou.map((text, index) => (
              <div key={index} className="flex flex-col">
                <p className="text-[14.5px] text-neutral-800 font-medium leading-relaxed mb-3">
                  {text}
                </p>
                <div className="h-0.5 w-10 bg-[#eb3333]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* For you */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight text-black mb-10">
            This is for you if...
          </h2>
          <div className="flex flex-col gap-8">
            {forYou.map((text, index) => (
              <div key={index} className="flex flex-col">
                <p className="text-[14.5px] text-neutral-800 font-medium leading-relaxed mb-3">
                  {text}
                </p>
                <div className="h-0.5 w-10 bg-[#41b853]"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
