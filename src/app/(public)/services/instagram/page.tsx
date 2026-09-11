'use client';

import React, { useState } from 'react';
import {
  Camera,
  Lightbulb,
  Video,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  Play,
  RefreshCw,
  Users,
  Store,
} from 'lucide-react';

const SERVICES_CONTENT = {
  pageTitle: 'Instagram Reels That Bring You Customers',
  pageSubtitle:
    'We create scroll-stopping Instagram Reels for businesses that are designed to generate more enquiries, leads, and store walk-ins — not just views.',

  serviceTitle: 'Instagram Reels Content Creation',
  serviceDesc:
    'We plan, create, and edit short-form Instagram content around your business, your customers, and your goals. Every Reel is built to grab attention, communicate your offer quickly, and encourage people to take action.',
  serviceCap1: 'Scroll-stopping hooks and Reel concepts',
  serviceCap2: 'Business-focused content strategy',
  serviceCap3: 'Reels designed for enquiries and leads',
  serviceCap4: 'Content that can drive local store visits',

  pipelineTitle: 'See How One Reel Can Become a Customer',
  pipelineDesc1:
    'A good Reel should do more than collect views. It should take the right person from attention to action — whether that means sending a DM, making an enquiry, visiting your store, or contacting your business.',
  pipelineDesc2:
    'Click the button below to see the customer journey step-by-step.',
};

export default function InstagramServicesPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const services = [
    {
      icon: <Camera className="h-10 w-10 text-pink-400" />,
      title: SERVICES_CONTENT.serviceTitle,
      description: SERVICES_CONTENT.serviceDesc,
      features: [
        SERVICES_CONTENT.serviceCap1,
        SERVICES_CONTENT.serviceCap2,
        SERVICES_CONTENT.serviceCap3,
        SERVICES_CONTENT.serviceCap4,
      ],
    },
  ];

  const demoSteps = [
    {
      id: 1,
      label: '1. We Create the Hook',
      desc: 'We build a strong opening that makes your ideal customer stop scrolling and pay attention.',
      icon: <Lightbulb className="h-8 w-8 text-yellow-400" />,
    },
    {
      id: 2,
      label: '2. Your Business Gets Seen',
      desc: 'The Reel communicates your product, service, or offer in a simple and engaging way.',
      icon: <Video className="h-8 w-8 text-pink-400" />,
    },
    {
      id: 3,
      label: '3. Customer Takes Action',
      desc: 'The content gives viewers a clear reason to DM, enquire, call, or visit your business.',
      icon: <MessageCircle className="h-8 w-8 text-blue-400" />,
    },
    {
      id: 4,
      label: '4. Attention Becomes Opportunity',
      desc: 'More relevant enquiries and local attention can turn your Instagram presence into a real business channel.',
      icon: <TrendingUp className="h-8 w-8 text-green-400" />,
    },
  ];

  const runSimulation = () => {
    if (isPlaying) return;

    setIsPlaying(true);
    let current = 1;
    setActiveStep(1);

    const interval = setInterval(() => {
      current += 1;

      if (current <= demoSteps.length) {
        setActiveStep(current);
      } else {
        clearInterval(interval);
        setIsPlaying(false);
        setActiveStep(null);
      }
    }, 2000);
  };

  return (
    <div className="relative overflow-hidden py-24 text-left bg-[#070b14] min-h-screen">
      {/* Glow overlays */}
      <div className="absolute top-[15%] left-[-10%] w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-28">

        {/* Page Hero */}
        <div className="max-w-5xl space-y-8">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border-2 border-white/10 text-slate-200 font-semibold">
            <Camera className="h-5 w-5 text-pink-400" />
            Instagram Reels Content Creation
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-tight">
            Instagram Reels That{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Bring You Customers
            </span>
          </h1>

          <p className="text-slate-200 text-2xl sm:text-3xl leading-relaxed font-medium">
            {SERVICES_CONTENT.pageSubtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-100">
              <MessageCircle className="h-5 w-5 text-blue-400" />
              More Enquiries
            </div>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-100">
              <Users className="h-5 w-5 text-purple-400" />
              More Leads
            </div>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-100">
              <Store className="h-5 w-5 text-green-400" />
              More Store Walk-ins
            </div>
          </div>
        </div>

        {/* Main Service Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-10 sm:p-12 rounded-[32px] border-2 border-white/10 flex flex-col justify-between backdrop-blur-md shadow-2xl hover:border-pink-500/40 transition-all duration-300"
            >
              <div className="space-y-8">
                <div className="p-5 bg-white/5 border-2 border-white/15 rounded-2xl w-fit">
                  {service.icon}
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-extrabold text-white">
                    {service.title}
                  </h3>

                  <p className="text-slate-200 text-xl leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t-2 border-white/10">
                <h4 className="text-lg font-black text-yellow-400 uppercase tracking-widest mb-6">
                  What you get:
                </h4>

                <div className="flex flex-col gap-4">
                  {service.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start space-x-4 text-lg sm:text-xl text-slate-100 font-medium"
                    >
                      <CheckCircle2 className="h-7 w-7 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Outcome Card */}
          <div className="bg-white/5 p-10 sm:p-12 rounded-[32px] border-2 border-white/10 backdrop-blur-md shadow-2xl">
            <div className="space-y-8">
              <div className="p-5 bg-white/5 border-2 border-white/15 rounded-2xl w-fit">
                <TrendingUp className="h-10 w-10 text-green-400" />
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-extrabold text-white">
                  Content With a Business Goal
                </h3>

                <p className="text-slate-200 text-xl leading-relaxed">
                  We don't create Reels just to make your page look busy.
                  The content is built around what you want more of from
                  Instagram.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <MessageCircle className="h-7 w-7 text-blue-400 mb-3" />
                  <p className="text-white font-bold">Enquiries</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <Users className="h-7 w-7 text-purple-400 mb-3" />
                  <p className="text-white font-bold">Leads</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <Store className="h-7 w-7 text-green-400 mb-3" />
                  <p className="text-white font-bold">Walk-ins</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Reel-to-Customer Journey */}
        <section className="bg-white/5 rounded-[40px] p-10 sm:p-16 border-2 border-white/10 relative overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Description */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                {SERVICES_CONTENT.pipelineTitle}
              </h2>

              <p className="text-slate-200 text-xl sm:text-2xl leading-relaxed">
                {SERVICES_CONTENT.pipelineDesc1}
              </p>

              <p className="text-slate-300 text-lg leading-relaxed">
                {SERVICES_CONTENT.pipelineDesc2}
              </p>

              <div className="pt-4">
                <button
                  onClick={runSimulation}
                  disabled={isPlaying}
                  className={`inline-flex items-center px-10 py-6 rounded-2xl font-bold text-xl transition-all duration-300 ${
                    isPlaying
                      ? 'bg-white/5 border-2 border-white/10 text-gray-400 cursor-not-allowed'
                      : 'bg-pink-600 hover:bg-pink-500 text-white shadow-xl shadow-pink-500/30 hover:scale-[1.03]'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <RefreshCw className="mr-3 h-6 w-6 animate-spin" />
                      Running Journey...
                    </>
                  ) : (
                    <>
                      <Play className="mr-3 h-6 w-6 fill-white text-white" />
                      See the Customer Journey
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Interactive Steps */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {demoSteps.map((step) => {
                  const isActive = activeStep === step.id;
                  const isFinished =
                    activeStep !== null && activeStep > step.id;

                  return (
                    <div
                      key={step.id}
                      className={`p-8 rounded-[28px] border-2 transition-all duration-300 text-left ${
                        isActive
                          ? 'bg-pink-600/15 border-pink-400 scale-[1.04] shadow-[0_0_25px_rgba(236,72,153,0.3)]'
                          : isFinished
                            ? 'bg-white/5 border-green-500/40'
                            : 'bg-white/5 border-white/5'
                      }`}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`p-3 rounded-xl border-2 transition-colors ${
                            isActive
                              ? 'bg-pink-500/20 border-pink-400 text-pink-400'
                              : isFinished
                                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                                : 'bg-white/5 border-white/15 text-gray-300'
                          }`}
                        >
                          {step.icon}
                        </div>

                        <h4 className="text-xl font-bold text-white">
                          {step.label}
                        </h4>
                      </div>

                      <p className="text-slate-200 text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Simple CTA */}
        <section className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Ready to Turn Instagram Into a Customer Channel?
          </h2>

          <p className="text-slate-300 text-xl leading-relaxed">
            Let's create Reels that give your business more than views.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-white text-[#070b14] font-black text-xl hover:scale-[1.03] transition-all duration-300 shadow-2xl"
          >
            Start a Conversation
          </a>
        </section>
      </div>
    </div>
  );
}