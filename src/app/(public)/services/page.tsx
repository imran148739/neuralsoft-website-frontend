'use client';

import React, { useState } from 'react';
import { Bot, GitBranch, Database, ShieldCheck, Mail, CheckCircle2, Play, RefreshCw, Layers, Monitor } from 'lucide-react';

const SERVICES_CONTENT = {
  pageTitle: 'Our Simple Business Robots',
  pageSubtitle: 'NeuralSoft Technologies builds simple, smart business robots that do all your computer work for you! We make sure you never miss a client, never lose an email, and can talk to everyone instantly without any stress.',

  // Module 1: High-Converting Web Architecture
  service1Title: '1. Your Smart Website',
  service1Desc: 'A beautiful online home for your business that looks fantastic on phones. When people visit and type in their details, our smart forms catch them instantly so you never lose a potential customer.',
  service1Cap1: 'Looks beautiful on phones & tablets',
  service1Cap2: 'Saves visitor information instantly',
  service1Cap3: 'Designed unique to your business',
  service1Cap4: 'Super fast and always online',

  // Module 2: Centralized Operations CRM
  service2Title: '2. Your Easy Dashboard',
  service2Desc: 'Think of this as a super-easy command center! You can see all your clients on one clean screen, read all your chat histories, and send mass group updates with just one tap.',
  service2Cap1: 'See all clients on one neat screen',
  service2Cap2: 'Read all chats in one simple spot',
  service2Cap3: 'Organize clients like simple cards',
  service2Cap4: 'Send quick updates to everyone',

  // Module 3: Autonomous Messaging & Engagement Bots
  service3Title: '3. 24/7 Friendly Chat Robots',
  service3Desc: 'Polite, helpful robots that talk to your customers on WhatsApp. They instantly answer common questions, send friendly reminders, and help people day or night so you can sleep easy.',
  service3Cap1: 'Answers questions instantly 24/7',
  service3Cap2: 'Sends helpful automatic alerts',
  service3Cap3: 'Polite, friendly client reminders',
  service3Cap4: 'Easily hands complex chats to humans',

  // Cross-Platform Orchestration Layer
  service4Title: '4. Super Connections',
  service4Desc: 'We glue all your favorite apps and systems together behind the scenes. When something happens in one app, everything updates automatically! No typing twice.',
  service4Cap1: 'Connects your website to your tools',
  service4Cap2: 'Zero manual copying or pasting',
  service4Cap3: 'Keeps all your data 100% accurate',
  service4Cap4: 'Fixes itself automatically if stuck',

  pipelineTitle: 'Watch the Robot Magic!',
  pipelineDesc1: 'See how our friendly robots handle a customer from start to finish without you lifting a single finger. It captures their info, saves it, and responds immediately.',
  pipelineDesc2: 'Click the big bright play button below to watch the sequence run step-by-step!',
};

export default function ServicesPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const services = [
    {
      icon: <Monitor className="h-10 w-10 text-blue-400" />,
      title: SERVICES_CONTENT.service1Title,
      description: SERVICES_CONTENT.service1Desc,
      features: [SERVICES_CONTENT.service1Cap1, SERVICES_CONTENT.service1Cap2, SERVICES_CONTENT.service1Cap3, SERVICES_CONTENT.service1Cap4],
    },
    {
      icon: <Layers className="h-10 w-10 text-purple-400" />,
      title: SERVICES_CONTENT.service2Title,
      description: SERVICES_CONTENT.service2Desc,
      features: [SERVICES_CONTENT.service2Cap1, SERVICES_CONTENT.service2Cap2, SERVICES_CONTENT.service2Cap3, SERVICES_CONTENT.service2Cap4],
    },
    {
      icon: <Bot className="h-10 w-10 text-cyan-400" />,
      title: SERVICES_CONTENT.service3Title,
      description: SERVICES_CONTENT.service3Desc,
      features: [SERVICES_CONTENT.service3Cap1, SERVICES_CONTENT.service3Cap2, SERVICES_CONTENT.service3Cap3, SERVICES_CONTENT.service3Cap4],
    },
    {
      icon: <GitBranch className="h-10 w-10 text-indigo-400" />,
      title: SERVICES_CONTENT.service4Title,
      description: SERVICES_CONTENT.service4Desc,
      features: [SERVICES_CONTENT.service4Cap1, SERVICES_CONTENT.service4Cap2, SERVICES_CONTENT.service4Cap3, SERVICES_CONTENT.service4Cap4],
    },
  ];

  const demoSteps = [
    { id: 1, label: '1. Visitor Says Hello!', desc: 'A visitor types their name and details on your website form.', icon: <Mail className="h-8 w-8 text-blue-400" /> },
    { id: 2, label: '2. Saved to Your Dashboard!', desc: 'The robot flies the info straight into your neat system, saving it safely.', icon: <Layers className="h-8 w-8 text-purple-400" /> },
    { id: 3, label: '3. Robot Thinks & Decides!', desc: 'The smart robot instantly understands exactly what the customer needs.', icon: <Database className="h-8 w-8 text-indigo-400" /> },
    { id: 4, label: '4. Instant Friendly Reply!', desc: 'The robot sends a helpful text back immediately. Your customer is happy!', icon: <ShieldCheck className="h-8 w-8 text-green-400" /> },
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
    }, 2000); // Slower speed to help with comfortable reading
  };

  return (
    <div className="relative overflow-hidden py-24 text-left bg-[#070b14] min-h-screen">
      {/* Glow overlays */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-28">
        
        {/* Large & Highly Readable Page Title */}
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Easy Business Robots
            </span>{' '}
            and Tools
          </h1>
          <p className="text-slate-200 text-2xl sm:text-3xl leading-relaxed font-medium">
            {SERVICES_CONTENT.pageSubtitle}
          </p>
        </div>

        {/* Detailed Services Grid (Large Cards with Big Text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white/5 p-10 sm:p-12 rounded-[32px] border-2 border-white/10 flex flex-col justify-between backdrop-blur-md shadow-2xl hover:border-blue-500/40 transition-all duration-300">
              <div className="space-y-8">
                <div className="p-5 bg-white/5 border-2 border-white/15 rounded-2xl w-fit">
                  {service.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-extrabold text-white">{service.title}</h3>
                  <p className="text-slate-200 text-xl leading-relaxed font-normal">{service.description}</p>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t-2 border-white/10">
                <h4 className="text-lg font-black text-yellow-400 uppercase tracking-widest mb-6">What it does for you:</h4>
                <div className="flex flex-col gap-4">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-4 text-lg sm:text-xl text-slate-100 font-medium">
                      <CheckCircle2 className="h-7 w-7 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Automation Builder Widget */}
        <section className="bg-white/5 rounded-[40px] p-10 sm:p-16 border-2 border-white/10 relative overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Description (Very clean and highly legible) */}
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
                  className={`inline-flex items-center px-10 py-6 rounded-2xl font-bold text-xl transition-all duration-300 ${isPlaying
                      ? 'bg-white/5 border-2 border-white/10 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/30 hover:scale-[1.03]'
                    }`}
                >
                  {isPlaying ? (
                    <>
                      <RefreshCw className="mr-3 h-6 w-6 animate-spin" />
                      Running Simulation...
                    </>
                  ) : (
                    <>
                      <Play className="mr-3 h-6 w-6 fill-white text-white" />
                      Click to Run Robot Demo
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Interactive Map (Huge, spacious boxes for easy viewing) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {demoSteps.map((step) => {
                  const isActive = activeStep === step.id;
                  const isFinished = activeStep !== null && activeStep > step.id;

                  return (
                    <div
                      key={step.id}
                      className={`p-8 rounded-[28px] border-2 transition-all duration-300 text-left ${isActive
                          ? 'bg-blue-600/15 border-blue-400 scale-[1.04] shadow-[0_0_25px_rgba(59,130,246,0.3)]'
                          : isFinished
                            ? 'bg-white/5 border-green-500/40'
                            : 'bg-white/5 border-white/5'
                        }`}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`p-3 rounded-xl border-2 transition-colors ${isActive
                              ? 'bg-blue-500/20 border-blue-400 text-blue-400'
                              : isFinished
                                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                                : 'bg-white/5 border-white/15 text-gray-300'
                            }`}
                        >
                          {step.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white">{step.label}</h4>
                      </div>
                      <p className="text-slate-200 text-base leading-relaxed">{step.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}