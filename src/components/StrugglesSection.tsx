import React from 'react';

const struggles = [
  {
    quote: "“Creating content takes up too much of my time.”",
    problem: "You know you need to be posting, but scripting, filming, and managing editors eats up hours of your week. It feels like a second full-time job.",
    solutionTitle: "With Quant Media:",
    solution: "You just show up and shoot. We handle the entire backend—from strategy to editing to distribution—saving you 20+ hours every single week."
  },
  {
    quote: "“I’m getting views, but they aren't turning into sales.”",
    problem: "Your videos might be getting attention, but your calendar is still empty. You're struggling to convert passive viewers into qualified leads.",
    solutionTitle: "With Quant Media:",
    solution: "We build a complete acquisition machine. We engineer your content specifically to build trust, nurture your audience, and drive qualified leads straight to your pipeline."
  },
  {
    quote: "“I feel overwhelmed managing freelancers and editors.”",
    problem: "You're constantly going back and forth on revisions, hunting down assets, and trying to keep your posting schedule on track. It's chaotic.",
    solutionTitle: "With Quant Media:",
    solution: "Everything runs smoothly in the backend. You get a dedicated team of elite editors, strategists, and account managers handling the entire process seamlessly."
  },
  {
    quote: "“I don’t know what to say to actually stand out.”",
    problem: "The market feels saturated. You're guessing what works, following trends, but struggling to establish real authority and differentiate yourself.",
    solutionTitle: "With Quant Media:",
    solution: "We clarify your positioning and write data-backed scripts tailored to your unique voice. You'll stand out as an undeniable authority in your niche."
  },
  {
    quote: "“I’m not confident on camera and hate recording.”",
    problem: "You freeze up when the camera rolls, or you overthink every word. It feels unnatural, and that holds you back from being consistent.",
    solutionTitle: "With Quant Media:",
    solution: "We provide personal guidance and direct feedback to boost your camera presence. We make the recording process fast, structured, and completely stress-free."
  },
  {
    quote: "“I’m wasting hours qualifying bad leads.”",
    problem: "When you do get inquiries, they aren't the right fit. You're burning time on calls with people who can't afford you or don't understand your value.",
    solutionTitle: "With Quant Media:",
    solution: "We implement custom AI automations and backend systems to filter and qualify every lead. You'll only spend time speaking with highly qualified, ready-to-buy prospects."
  }
];

export function StrugglesSection() {
  return (
    <section id="struggles" className="bg-[#fafafa] py-24 px-6 w-full flex flex-col items-center">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center max-w-3xl leading-[1.15] text-black">
        Building an audience can feel like shouting into the void
      </h2>
      <p className="text-[13px] md:text-sm text-neutral-600 mt-6 max-w-2xl text-center font-medium leading-relaxed">
        But there is a reason why top founders scale effortlessly, dominate their niche, and never burn out. It's all about having the right systems and the right team.
      </p>
      <h3 className="text-xl md:text-2xl font-bold text-black mt-10 mb-12">
        We know what's holding you back...
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {struggles.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-neutral-200 flex flex-col h-full">
            <h4 className="font-bold text-lg text-neutral-900 mb-4">{item.quote}</h4>
            <p className="text-[15px] text-neutral-600 mb-8 leading-relaxed">
              {item.problem}
            </p>
            <div className="mt-auto">
              <p className="font-bold text-[15px] text-neutral-900 mb-2">{item.solutionTitle}</p>
              <p className="text-[15px] text-neutral-600 leading-relaxed">
                {item.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
