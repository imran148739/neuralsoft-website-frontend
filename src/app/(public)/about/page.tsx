'use client';

import React, { useState, useEffect } from 'react';
import { api } from '../../../lib/api';
import { Target, Eye, ShieldCheck, Heart, Award } from 'lucide-react';

const defaultAbout = {
  pageTitle: 'Pioneering the Era of Autonomous Business',
  pageSubtitle1: 'Founded in 2023, NeuralSoft Technologies was born from a simple thesis: human intelligence is too valuable to spend copying fields across spreadsheet columns.',
  pageSubtitle2: 'We engineer intelligent networks of AI agents that integrate with your existing APIs, emails, and legacy systems to get work done with absolute precision.',
  stat1Value: '20M+',
  stat1Label: 'Fields Parsed',
  stat2Value: '45k+',
  stat2Label: 'Hours Saved',
  stat3Value: '99.9%',
  stat3Label: 'Accuracy',
  stat4Value: '24/7',
  stat4Label: 'Autopilot Uptime',
  principlesTitle: 'Our Core Principles',
  principlesSubtitle: 'The values that dictate how we write code, structure database interactions, and handle client security.',
  principle1Title: 'Precision First',
  principle1Desc: 'We believe automation is useless without extreme accuracy. We build verification checks into every AI loop.',
  principle2Title: 'Radical Transparency',
  principle2Desc: 'We model exactly how our agents make decisions. No black boxes. Log files, metrics, and audits are front and center.',
  principle3Title: 'Secure & Compliant',
  principle3Desc: 'We prioritize data hygiene. Whether deploying locally or on-premise, your core enterprise files remain yours alone.',
  principle4Title: 'Human-in-the-Loop',
  principle4Desc: 'Our automations assist humans, not replace them. We design triggers that route edge cases to human specialists.',
  team1Name: 'Dr. Evelyn Carter',
  team1Role: 'CEO & Founder',
  team1Bio: 'Former AI Research Lead with 12+ years of experience in enterprise systems and neural language parsing.',
  team2Name: 'Marcus Vance',
  team2Role: 'Chief AI Architect',
  team2Bio: 'Expert in local RAG architectures, model fine-tuning, and setting up high-performance semantic search structures.',
  team3Name: 'Sarah Chen',
  team3Role: 'Lead Workflow Automation Engineer',
  team3Bio: 'Specialist in bridging modern LLMs with legacy ERP databases and building zero-downtime RPA agents.',
  milestonesTitle: 'Milestone Journey',
  milestonesSubtitle: 'Our growth and expansion over the years as we push the envelope in intelligent automation.',
  milestone1Year: '2023',
  milestone1Title: 'NeuralSoft Founded',
  milestone1Desc: 'Started with a core team of three researchers in Boston, building advanced OCR pipelines.',
  milestone2Year: '2024',
  milestone2Title: 'v1.0 Agent Launch',
  milestone2Desc: 'Released our proprietary agentic orchestration platform, executing multi-system tasks.',
  milestone3Year: '2025',
  milestone3Title: 'Enterprise RAG Tuning',
  milestone3Desc: 'Successfully deployed locally-hosted, private LLMs for Fortune 500 financial clients.',
};

export default function AboutPage() {
  const [content, setContent] = useState(defaultAbout);

  useEffect(() => {
    async function loadContent() {
      try {
        const res = await api.getPageContent('about');
        if (res && Object.keys(res).length > 0) {
          setContent((prev) => ({ ...prev, ...res }));
        }
      } catch (err) {
        console.warn('Failed to load about page content from database, using fallbacks.', err);
      }
    }
    loadContent();
  }, []);

  const values = [
    {
      icon: <Target className="h-6 w-6 text-blue-500" />,
      title: content.principle1Title,
      description: content.principle1Desc,
    },
    {
      icon: <Eye className="h-6 w-6 text-purple-500" />,
      title: content.principle2Title,
      description: content.principle2Desc,
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-cyan-500" />,
      title: content.principle3Title,
      description: content.principle3Desc,
    },
    {
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      title: content.principle4Title,
      description: content.principle4Desc,
    },
  ];

  const team = [
    {
      name: content.team1Name,
      role: content.team1Role,
      bio: content.team1Bio,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: content.team2Name,
      role: content.team2Role,
      bio: content.team2Bio,
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: content.team3Name,
      role: content.team3Role,
      bio: content.team3Bio,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    },
  ];

  const milestones = [
    { year: content.milestone1Year, title: content.milestone1Title, desc: content.milestone1Desc },
    { year: content.milestone2Year, title: content.milestone2Title, desc: content.milestone2Desc },
    { year: content.milestone3Year, title: content.milestone3Title, desc: content.milestone3Desc },
  ];

  return (
    <div className="relative overflow-hidden py-16 text-left">
      {/* Background gradients */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase">
              <Award className="h-3.5 w-3.5" />
              <span>Our Mission</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Pioneering the Era of{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Autonomous Business
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              {content.pageSubtitle1}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              {content.pageSubtitle2}
            </p>
          </div>
          
          {/* Visual stat box */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="glass p-6 rounded-2xl border border-white/5 text-center">
              <h3 className="text-4xl font-extrabold text-blue-500">{content.stat1Value}</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-bold">{content.stat1Label}</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 text-center">
              <h3 className="text-4xl font-extrabold text-purple-500">{content.stat2Value}</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-bold">{content.stat2Label}</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 text-center">
              <h3 className="text-4xl font-extrabold text-cyan-500">{content.stat3Value}</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-bold">{content.stat3Label}</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 text-center">
              <h3 className="text-4xl font-extrabold text-pink-500">{content.stat4Value}</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-bold">{content.stat4Label}</p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <section className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl font-bold text-white">{content.principlesTitle}</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {content.principlesSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-blue-500/20 transition-all duration-300">
                <div>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl w-fit mb-5">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Grid */}
        <section className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl font-bold text-white">Leadership Team</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Meet the specialists leading our R&D, enterprise deployments, and operations departments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="glass glass-hover overflow-hidden rounded-3xl border border-white/5 flex flex-col">
                <div className="h-64 relative bg-gray-900 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-xs text-blue-400 font-semibold">{member.role}</p>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl font-bold text-white">{content.milestonesTitle}</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {content.milestonesSubtitle}
            </p>
          </div>
          <div className="relative border-l border-white/5 pl-8 space-y-12 max-w-3xl">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-bg-dark border-2 border-blue-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <span className="text-sm font-bold text-blue-500">{m.year}</span>
                <h3 className="text-lg font-bold text-white mt-1">{m.title}</h3>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
