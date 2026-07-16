'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { api } from '../../lib/api';
import { ArrowRight, Bot, Shield, Zap, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

const defaultContent = {
  heroTitle: 'Automate Your Operations with Agentic Intelligence',
  heroSubtitle: 'NeuralSoft Technologies designs, builds, and deploys custom AI workflows and autonomous agents that free your team from tedious operations.',
  heroCtaText: 'Schedule Free Audit',
  heroCtaLink: '/contact',
  feature1Title: 'Hyper-Speed Execution',
  feature1Desc: 'Run background operations 10x faster than manual data transcription and verification.',
  feature2Title: 'Agentic Workflows',
  feature2Desc: 'Deploy AI agents that collaborate and solve multi-step problems autonomously.',
  feature3Title: '99.9% Extraction Accuracy',
  feature3Desc: 'Combine advanced LLM understanding with programmatic data validators to eliminate human error.',
  ctaTitle: 'Ready to eliminate your administrative bottlenecks?',
  ctaSubtitle: 'Get in touch with NeuralSoft Technologies today. Our specialists will design a tailor-made automation roadmap for your company.',
  ctaButtonText: 'Start Automating Now',
};

export default function HomePage() {
  // Homepage Dynamic Content
  const [content, setContent] = useState(defaultContent);

  // ROI Calculator State
  const [tasksCount, setTasksCount] = useState(50);
  const [taskHours, setTaskHours] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(40);

  // Calculations
  const manualHoursPerYear = tasksCount * taskHours * 52;
  const manualCostPerYear = manualHoursPerYear * hourlyRate;
  
  // Automation saves 85% of time
  const hoursSavedPerYear = Math.round(manualHoursPerYear * 0.85);
  const moneySavedPerYear = Math.round(manualCostPerYear * 0.85);

  useEffect(() => {
    async function loadContent() {
      try {
        const res = await api.getPageContent('home');
        if (res && Object.keys(res).length > 0) {
          setContent((prev) => ({ ...prev, ...res }));
        }
      } catch (err) {
        console.warn('Could not load dynamic homepage content, using fallbacks.', err);
      }
    }
    loadContent();
  }, []);

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: content.feature1Title,
      description: content.feature1Desc,
    },
    {
      icon: <Bot className="h-6 w-6 text-purple-500" />,
      title: content.feature2Title,
      description: content.feature2Desc,
    },
    {
      icon: <Shield className="h-6 w-6 text-cyan-500" />,
      title: content.feature3Title,
      description: content.feature3Desc,
    },
  ];

  const workflowSteps = [
    { id: '1', title: 'Data Ingestion', desc: 'Scan, Email, API' },
    { id: '2', title: 'AI Extraction', desc: 'Context-aware LLM' },
    { id: '3', title: 'Validation Rules', desc: 'Automated Checks' },
    { id: '4', title: 'Database Sync', desc: 'ERP / SAP / CRMs' },
  ];

  return (
    <div className="relative overflow-hidden pb-16">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="h-3.5 w-3.5 animate-spin" />
              <span>Next-Gen AI Automation</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {content.heroTitle}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed">
              {content.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={content.heroCtaLink}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all group"
              >
                {content.heroCtaText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-xl text-gray-300 hover:text-white glass hover:bg-white/10 transition-all border border-white/5 hover:border-white/10"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          {/* Hero Right - Interactive Flow Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="glass rounded-3xl p-6 relative z-10 border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-gray-500 font-mono">neuralsoft-flow-v2.1</span>
              </div>
              
              <div className="space-y-4">
                {workflowSteps.map((step, idx) => (
                  <React.Fragment key={step.id}>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between hover:border-blue-500/30 transition-all">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400">
                          {step.id}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                          <p className="text-xs text-gray-500">{step.desc}</p>
                        </div>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-blue-500" />
                    </div>
                    {idx < workflowSteps.length - 1 && (
                      <div className="flex justify-center my-1">
                        <div className="w-[2px] h-6 bg-gradient-to-b from-blue-500/50 to-transparent" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="glass glass-hover p-8 rounded-3xl border border-white/5 text-left">
              <div className="p-3 bg-white/5 border border-white/10 rounded-2xl w-fit mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive ROI Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass rounded-3xl p-8 lg:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Calculator Inputs */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">
                  Calculate Your Automation ROI
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  Drag the sliders below to estimate the time and cost savings by automating repetitive workflows with NeuralSoft.
                </p>
              </div>

              <div className="space-y-6">
                {/* Input 1 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label className="text-gray-300 font-medium">Repetitive Tasks per Week</label>
                    <span className="text-blue-400 font-bold">{tasksCount} tasks</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    value={tasksCount}
                    onChange={(e) => setTasksCount(Number(e.target.value))}
                    className="w-full h-2 bg-white/5 border border-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                {/* Input 2 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label className="text-gray-300 font-medium">Hours Spent per Task (Manual)</label>
                    <span className="text-blue-400 font-bold">{taskHours} hours</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.5"
                    value={taskHours}
                    onChange={(e) => setTaskHours(Number(e.target.value))}
                    className="w-full h-2 bg-white/5 border border-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                {/* Input 3 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label className="text-gray-300 font-medium">Average Operational Cost (Hourly)</label>
                    <span className="text-blue-400 font-bold">${hourlyRate}/hr</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="150"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-white/5 border border-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Calculator Results */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-6 text-left">
                <h3 className="text-lg font-bold text-white border-b border-white/5 pb-3">Estimated Annual Savings</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Hours Saved / Year</p>
                    <p className="text-3xl font-extrabold text-white mt-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {hoursSavedPerYear.toLocaleString('en-US')} hrs
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Equivalent Financial Saving</p>
                    <p className="text-4xl font-extrabold text-blue-500 mt-1">
                      ${moneySavedPerYear.toLocaleString('en-US')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-500 shadow-lg hover:shadow-blue-500/20 transition-all group"
                >
                  Request a Custom Demo
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="relative glass rounded-3xl p-12 overflow-hidden border border-white/5">
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{content.ctaTitle}</h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              {content.ctaSubtitle}
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all group"
              >
                {content.ctaButtonText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
