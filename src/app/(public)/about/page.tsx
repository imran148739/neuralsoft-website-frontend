'use client';

import React from 'react';
import { Target, Eye, ShieldCheck, Heart, Award, Mail, Bot, RefreshCw, Sparkles, CheckCircle } from 'lucide-react';

const ABOUT_CONTENT = {
  // Page Title & Introduction 
  pageTitle: 'Who is NeuralSoft Technologies?',
  pageSubtitle1: 'We started our company in 2026 because we believe humans are way too smart to spend their time doing boring, repetitive computer chores. We exist to build smart helper systems that turn your creative business ideas into automated systems.',
  pageSubtitle2: 'We build friendly, high-power systems that do the hard work for you. By combining custom websites , super-smart business control screens (CRMs) , and automatic WhatsApp chat assistants , we make your business run on autopilot day and night, without ever dropping a single customer.',

  // High-Contrast Clear Stat Boxes (Module 1, 2, and 3 outcomes)
  stat1Value: '50k+',
  stat1Label: 'New Leads Captured 📝',
  stat2Value: '12k+',
  stat2Label: 'Hours of Chores Saved ⏰',
  stat3Value: '24/7',
  stat3Label: 'Autopilot Active 🤖',
  stat4Value: '0%',
  stat4Label: 'Dropped Customers 💖',

  // Generalized Operating Principles 
  principlesTitle: 'Our Easy Golden Rules',
  principlesSubtitle: 'These are the happy rules we follow to connect your apps, build friendly robots, and help your business grow without any extra effort.',

  // Principle 1: Cost & Growth 
  principle1Title: '1. Growing Your Business',
  principle1Desc: 'Our smart systems are built to help you find new customers easily and keep your costs super low, making your business grow faster every day.',

  // Principle 2: Friendly AI Bots 
  principle2Title: '2. Robots with a Heart',
  principle2Desc: 'No cold, robotic templates here! Our automated WhatsApp chat assistants are super polite, helpful, and speak just like nice, real humans.',

  // Principle 3: Syncing systems 
  principle3Title: '3. Connecting All Your Apps',
  principle3Desc: 'We glue all your favorite apps and files together. When a customer types their info on your website, it magically shows up on your computer screen instantly.',

  // Principle 4: Scaling
  principle4Title: '4. Ready to Grow Big with You',
  principle4Desc: 'Whether you have 5 customers or 5,000, our systems adapt automatically so your business runs perfectly without you needing to do manual clicking.',

  // Team Profiles - Simplified and highly readable
  team1Name: 'Alex Mercer',
  team1Role: 'Founder & Chief System Builder',
  team1Bio: 'A friendly designer who loves finding creative ways to make computer work easy. He builds custom websites and smart lead generators for all businesses.',

  team2Name: 'Elena Rostova',
  team2Role: 'Master of Gluing Apps Together',
  team2Bio: 'A puzzle wizard who connects websites and workspaces so information flows instantly and perfectly between all your computers.',

  team3Name: 'Devon Wright',
  team3Role: 'Robot Chat Assistant Teacher',
  team3Bio: 'He teaches our computer chat assistants how to talk politely on WhatsApp, answer customer questions, and send helpful reminders 24/7.',

  // Milestone Timeline (Strictly starting 2026)
  milestonesTitle: 'Our Fun Journey',
  milestonesSubtitle: 'See how we have grown since 2026 to help businesses around the world run automatically.',

  milestone1Year: '2026',
  milestone1Title: 'NeuralSoft Technologies is Born!',
  milestone1Desc: 'We opened our doors to help businesses stop doing manual computer chores and switch to easy, automated workflows.',

  milestone2Year: '2026',
  milestone2Title: 'The Automatic Leads Machine',
  milestone2Desc: 'We created a way to capture new customers through websites and follow up with them immediately using smart robot engines.',

  milestone3Year: '2026',
  milestone3Title: 'The 24/7 Assistant Fleet',
  milestone3Desc: 'Friendly chat assistants that talk to customers and manage profiles automatically all day and night.',
};

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-10 w-10 text-blue-400" />,
      title: ABOUT_CONTENT.principle1Title,
      description: ABOUT_CONTENT.principle1Desc,
    },
    {
      icon: <Eye className="h-10 w-10 text-purple-400" />,
      title: ABOUT_CONTENT.principle2Title,
      description: ABOUT_CONTENT.principle2Desc,
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-cyan-400" />,
      title: ABOUT_CONTENT.principle3Title,
      description: ABOUT_CONTENT.principle3Desc,
    },
    {
      icon: <Heart className="h-10 w-10 text-pink-400" />,
      title: ABOUT_CONTENT.principle4Title,
      description: ABOUT_CONTENT.principle4Desc,
    },
  ];

  const team = [
    {
      name: ABOUT_CONTENT.team1Name,
      role: ABOUT_CONTENT.team1Role,
      bio: ABOUT_CONTENT.team1Bio,
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: ABOUT_CONTENT.team2Name,
      role: ABOUT_CONTENT.team2Role,
      bio: ABOUT_CONTENT.team2Bio,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: ABOUT_CONTENT.team3Name,
      role: ABOUT_CONTENT.team3Role,
      bio: ABOUT_CONTENT.team3Bio,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    },
  ];

  const milestones = [
    { year: ABOUT_CONTENT.milestone1Year, title: ABOUT_CONTENT.milestone1Title, desc: ABOUT_CONTENT.milestone1Desc },
    { year: ABOUT_CONTENT.milestone2Year, title: ABOUT_CONTENT.milestone2Title, desc: ABOUT_CONTENT.milestone2Desc },
    { year: ABOUT_CONTENT.milestone3Year, title: ABOUT_CONTENT.milestone3Title, desc: ABOUT_CONTENT.milestone3Desc },
  ];

  return (
    <div className="relative overflow-hidden py-24 text-left bg-[#070b14] min-h-screen">
      {/* Background gradients */}
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-28">

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full border-2 border-blue-500/30 bg-blue-500/10 text-blue-300 text-lg font-bold uppercase tracking-wider">
              <Award className="h-6 w-6 text-blue-400 animate-bounce" />
              <span>Our Big Mission</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-tight">
              NeuralSoft Technologies:{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Super Business Robots
              </span>
            </h1>

            <p className="text-slate-200 text-2xl leading-relaxed font-medium">
              {ABOUT_CONTENT.pageSubtitle1}
            </p>
            <p className="text-slate-300 text-xl leading-relaxed">
              {ABOUT_CONTENT.pageSubtitle2}
            </p>
          </div>

          {/* Visual Automation Engine Simulation - Highly Graphic Flow */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-[36px] bg-white/5 border-2 border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden min-h-[500px]">
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-blue-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-purple-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

            <div className="text-center mb-6">
              <span className="inline-flex items-center justify-center text-xs sm:text-sm font-black text-yellow-400 uppercase tracking-widest bg-yellow-400/10 px-5 py-2 rounded-full border-2 border-yellow-400/20 whitespace-nowrap">
                ⭐ How Our Robot Works Step-by-Step
              </span>
            </div>

            {/* Visual Pipeline Stack */}
            <div className="space-y-6 relative z-10">

              {/* Step 1: Web Capture (Module 1) */}
              <div className="flex items-center space-x-5 p-5 rounded-2xl bg-white/5 border-2 border-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 flex items-center justify-center shrink-0 bg-blue-500/20 border-2 border-blue-500/30 text-blue-400 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <span className="block text-sm font-black text-blue-400 uppercase tracking-wider mb-1">Step 1. Customer Arrives! 📝</span>
                  <h4 className="text-lg font-bold text-white">A customer types their name on your webpage.</h4>
                </div>
              </div>

              {/* Connecting Line 1 */}
              <div className="flex justify-start ml-[50px] my-1">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 opacity-80 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full animate-ping" />
                </div>
              </div>

              {/* Step 2: CRM Record (Module 2) */}
              <div className="flex items-center space-x-5 p-5 rounded-2xl bg-gradient-to-r from-blue-950/50 to-purple-950/50 border-2 border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.25)] relative group">
                <div className="w-16 h-16 flex items-center justify-center shrink-0 bg-purple-500/20 border-2 border-purple-500/30 text-purple-400 rounded-2xl animate-spin [animation-duration:10s]">
                  <RefreshCw className="h-8 w-8" />
                </div>
                <div>
                  <span className="block text-sm font-black text-purple-400 uppercase tracking-wider mb-1">Step 2. Robots Do the Work! ⚙️</span>
                  <h4 className="text-lg font-bold text-white">Our system automatically saves their information.</h4>
                </div>
              </div>

              {/* Connecting Line 2 */}
              <div className="flex justify-start ml-[50px] my-1">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-green-500 opacity-80 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full animate-ping" />
                </div>
              </div>

              {/* Step 3: Bot Response (Module 3) */}
              <div className="flex items-center space-x-5 p-5 rounded-2xl bg-white/5 border-2 border-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 flex items-center justify-center shrink-0 bg-green-500/20 border-2 border-green-500/30 text-green-400 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Bot className="h-8 w-8" />
                </div>
                <div>
                  <span className="block text-sm font-black text-green-400 uppercase tracking-wider mb-1">Step 3. Friendly Reply! 💬</span>
                  <h4 className="text-lg font-bold text-white">The robot sends them an instant greeting message.</h4>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t-2 border-white/10 text-center">
              <p className="text-base text-slate-300 italic font-medium">
                No human waiting. No manual mistakes. Running perfectly on autopilot!
              </p>
            </div>
          </div>

        </div>

        {/* Visual Stat Boxes */}
        {/* <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 p-8 rounded-3xl border-2 border-white/10 text-center shadow-2xl backdrop-blur-md">
            <h3 className="text-5xl sm:text-6xl font-black text-blue-400">{ABOUT_CONTENT.stat1Value}</h3>
            <p className="text-sm text-slate-300 uppercase tracking-widest mt-3 font-bold">{ABOUT_CONTENT.stat1Label}</p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border-2 border-white/10 text-center shadow-2xl backdrop-blur-md">
            <h3 className="text-5xl sm:text-6xl font-black text-purple-400">{ABOUT_CONTENT.stat2Value}</h3>
            <p className="text-sm text-slate-300 uppercase tracking-widest mt-3 font-bold">{ABOUT_CONTENT.stat2Label}</p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border-2 border-white/10 text-center shadow-2xl backdrop-blur-md">
            <h3 className="text-5xl sm:text-6xl font-black text-cyan-400">{ABOUT_CONTENT.stat3Value}</h3>
            <p className="text-sm text-slate-300 uppercase tracking-widest mt-3 font-bold">{ABOUT_CONTENT.stat3Label}</p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border-2 border-white/10 text-center shadow-2xl backdrop-blur-md">
            <h3 className="text-5xl sm:text-6xl font-black text-pink-400">{ABOUT_CONTENT.stat4Value}</h3>
            <p className="text-sm text-slate-300 uppercase tracking-widest mt-3 font-bold">{ABOUT_CONTENT.stat4Label}</p>
          </div>
        </section> */}

        {/* Core Values / Operating Principles */}
        <section className="space-y-16">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-4xl sm:text-5xl font-black text-white">{ABOUT_CONTENT.principlesTitle}</h2>
            <p className="text-slate-200 text-xl sm:text-2xl font-normal leading-relaxed">
              {ABOUT_CONTENT.principlesSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-[28px] border-2 border-white/10 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 backdrop-blur-md">
                <div className="space-y-6">
                  <div className="p-4 bg-white/5 border-2 border-white/10 rounded-2xl w-fit">
                    {val.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">{val.title}</h3>
                  <p className="text-slate-200 text-lg leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Grid */}
        {/* <section className="space-y-16">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-4xl sm:text-5xl font-black text-white">Our Friendly Robot Builders</h2>
            <p className="text-slate-200 text-xl sm:text-2xl font-normal leading-relaxed">
              Meet the kind, hardworking humans who build, test, and teach our custom computer helpers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white/5 overflow-hidden rounded-[36px] border-2 border-white/10 flex flex-col hover:border-blue-500/40 transition-all duration-300 backdrop-blur-md">
                <div className="h-80 relative bg-gray-900 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
                </div>
                <div className="p-8 space-y-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-white">{member.name}</h3>
                    <p className="text-lg text-blue-400 font-bold">{member.role}</p>
                  </div>
                  <p className="text-slate-200 text-lg leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Timeline */}
        <section className="space-y-16">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-4xl sm:text-5xl font-black text-white">{ABOUT_CONTENT.milestonesTitle}</h2>
            <p className="text-slate-200 text-xl sm:text-2xl font-normal leading-relaxed">
              {ABOUT_CONTENT.milestonesSubtitle}
            </p>
          </div>
          <div className="relative border-l-4 border-white/10 pl-10 space-y-16 max-w-4xl">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[54px] top-1.5 w-8 h-8 rounded-full bg-[#070b14] border-4 border-blue-500 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                </div>
                <span className="text-xl font-black text-blue-400">{m.year}</span>
                <h3 className="text-2xl font-extrabold text-white mt-2">{m.title}</h3>
                <p className="text-lg text-slate-200 mt-2 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}