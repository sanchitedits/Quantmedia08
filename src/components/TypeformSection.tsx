import React, { useState } from 'react';
import { ArrowRight, Check, Flag, User } from 'lucide-react';

const questions = [
  {
    id: 'goal',
    title: 'What is your primary goal as a creator?',
    options: [
      'Grow my audience',
      'Monetize my brand',
      'Build a community',
      'Launch a product'
    ]
  },
  {
    id: 'platform',
    title: 'Which platform do you focus on the most?',
    options: [
      'Instagram',
      'YouTube',
      'TikTok',
      'LinkedIn'
    ]
  },
  {
    id: 'struggle',
    title: 'What is your biggest struggle right now?',
    options: [
      'Finding my niche',
      'Staying consistent',
      'Getting brand deals',
      'Creating high-quality content'
    ]
  }
];

export function TypeformSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contactMethod, setContactMethod] = useState<'email' | 'whatsapp'>('email');
  const [contactInfo, setContactInfo] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (option: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: option });
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInfo.trim()) return;
    
    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...answers,
            contactMethod,
            contactInfo,
          }),
        });
      } else {
        console.warn('VITE_FORMSPREE_ENDPOINT is not defined');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
    setIsSubmitted(true);
  };

  const totalSteps = questions.length + 1; // +1 for contact info step
  const progress = ((currentStep) / totalSteps) * 100;

  if (isSubmitted) {
    return (
      <section id="contact" className="bg-[#fafafa] py-32 px-6 w-full flex flex-col items-center border-t border-neutral-200">
        <div className="max-w-2xl mx-auto w-full flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#4a9f60] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-900/20">
            <Check className="w-8 h-8 text-white stroke-[3]" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-black mb-4">
            Application Received
          </h2>
          <p className="text-lg text-neutral-600 font-medium">
            Thanks for applying! Our team will review your application and get back to you shortly via {contactMethod}.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-[#fafafa] py-24 md:py-32 px-6 w-full flex flex-col items-center border-t border-neutral-200">
      <div className="max-w-3xl mx-auto w-full">
        {/* Gamified Progress bar */}
        <div className="relative w-full h-2 bg-neutral-200 rounded-full mb-20 shadow-inner mt-8">
          <div 
            className="absolute top-0 left-0 h-full bg-[#4a9f60] rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
          
          {/* Goal Flag */}
          <div className="absolute right-0 -top-8 text-neutral-300">
            <Flag 
              className={`w-7 h-7 transition-colors duration-500 ${progress === 100 ? 'text-[#4a9f60]' : 'text-neutral-300'}`} 
              fill={progress === 100 ? '#4a9f60' : 'none'}
            />
          </div>

          {/* Moving User/Character */}
          <div 
            className="absolute -top-4 transition-all duration-700 ease-out z-10"
            style={{ left: `calc(${progress}% - 16px)` }}
          >
            <div className="relative">
              <div className="bg-white p-1.5 rounded-full shadow-md border-2 border-[#4a9f60] flex items-center justify-center relative z-10">
                 <User className="w-4 h-4 text-[#4a9f60]" strokeWidth={2.5} />
              </div>

              {/* Chat Bubble for Final Step */}
              {currentStep === questions.length && (
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max animate-in zoom-in slide-in-from-bottom-2 duration-500 z-20">
                  <div className="bg-[#4a9f60] text-white text-[12px] font-bold px-4 py-2 rounded-2xl shadow-lg relative tracking-wide">
                    Almost there! 🏁
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-[#4a9f60] border-r-[6px] border-r-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="min-h-[400px] flex flex-col justify-center">
          {currentStep < questions.length ? (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-bold text-neutral-400">
                  {currentStep + 1} &rarr;
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black leading-tight">
                  {questions[currentStep].title}
                </h2>
              </div>
              
              <div className="flex flex-col gap-3">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full text-left px-6 py-4 rounded-xl border-2 text-lg font-medium transition-all group flex items-center justify-between ${
                      answers[questions[currentStep].id] === option 
                        ? 'border-neutral-300 bg-neutral-100 text-neutral-900'
                        : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-neutral-800'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`flex items-center justify-center w-6 h-6 rounded border text-sm font-bold ${
                        answers[questions[currentStep].id] === option 
                          ? 'border-neutral-400 text-neutral-900 bg-white'
                          : 'border-neutral-300 text-neutral-500 group-hover:border-neutral-400'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </div>
                    {answers[questions[currentStep].id] === option && (
                      <Check className="w-5 h-5 text-neutral-900" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-bold text-neutral-400">
                  {currentStep + 1} &rarr;
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black leading-tight">
                  Where should we send your results?
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex gap-4 p-1.5 bg-neutral-100 rounded-lg w-fit">
                  <button
                    type="button"
                    onClick={() => setContactMethod('email')}
                    className={`px-6 py-2.5 rounded-md text-sm font-bold transition-all ${
                      contactMethod === 'email' 
                        ? 'bg-white text-black shadow-sm'
                        : 'text-neutral-500 hover:text-neutral-700'
                    }`}
                  >
                    Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactMethod('whatsapp')}
                    className={`px-6 py-2.5 rounded-md text-sm font-bold transition-all ${
                      contactMethod === 'whatsapp' 
                        ? 'bg-white text-black shadow-sm'
                        : 'text-neutral-500 hover:text-neutral-700'
                    }`}
                  >
                    WhatsApp
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={contactMethod === 'email' ? 'email' : 'tel'}
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder={contactMethod === 'email' ? 'name@example.com' : '+1 (555) 000-0000'}
                    required
                    className="w-full text-2xl md:text-3xl border-b-2 border-neutral-200 focus:border-black pb-4 outline-none transition-colors placeholder:text-neutral-300 font-medium text-black bg-transparent"
                  />
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <button
                    type="submit"
                    disabled={!contactInfo.trim()}
                    className="bg-black text-white px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    Submit Application
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-neutral-400 font-medium">
                    press Enter ↵
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
