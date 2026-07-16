'use client';

import React, { useState, useEffect } from 'react';
import { api } from '../../../lib/api';
import { Bot, FileText, GitBranch, Database, ShieldCheck, Mail, CheckCircle2, Play, RefreshCw, Layers } from 'lucide-react';

const defaultServices = {
  pageTitle: 'Our AI Automation Solutions',
  pageSubtitle: 'From smart OCR processing to private LLM deployments, we develop end-to-end systems that eliminate operational drag and human errors.',
  service1Title: 'Workflow Automation',
  service1Desc: 'End-to-end robotic process automation combined with decision-making AI agents. Connect APIs, databases, legacy applications, and email clients seamlessly.',
  service1Cap1: 'API Integrations',
  service1Cap2: 'Legacy RPA Wrappers',
  service1Cap3: 'Error Recovery Triggers',
  service1Cap4: 'Multi-System Syncing',
  service2Title: 'AI Conversational Agents',
  service2Desc: 'Deploy advanced conversational agents powered by custom-tuned LLMs. Integrate with Slack, WhatsApp, email, or your web platform to provide context-rich instant replies.',
  service2Cap1: 'Context retention',
  service2Cap2: 'Multi-lingual support',
  service2Cap3: 'CRM data synchronization',
  service2Cap4: 'Automatic escalation policies',
  service3Title: 'Intelligent Document Processing (IDP)',
  service3Desc: 'Extract structured information from unstructured PDF files, images, emails, and cargo logs. Eliminate typing mistakes and cut down processing time by 90%.',
  service3Cap1: 'Invoice & Receipt Extraction',
  service3Cap2: 'Contract Analysis',
  service3Cap3: 'Multi-page classification',
  service3Cap4: 'Data cross-checking rules',
  service4Title: 'Custom AI & LLM Fine-Tuning',
  service4Desc: 'Train models on your company data or implement Retrieval-Augmented Generation (RAG) to build localized search engines that know everything about your operations.',
  service4Cap1: 'Local RAG Engines',
  service4Cap2: 'Private Host Deployments',
  service4Cap3: 'Vector database setup',
  service4Cap4: 'Model quantization & cost reduction',
  pipelineTitle: 'See How It Connects',
  pipelineDesc1: 'Our custom integrations link data extraction, verification databases, and third-party dashboards.',
  pipelineDesc2: 'Click the start button to watch a simulated Invoice Automation Pipeline run step-by-step.',
};

export default function ServicesPage() {
  const [content, setContent] = useState(defaultServices);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    async function loadContent() {
      try {
        const res = await api.getPageContent('services');
        if (res && Object.keys(res).length > 0) {
          setContent((prev) => ({ ...prev, ...res }));
        }
      } catch (err) {
        console.warn('Failed to load services content from database, using fallbacks.', err);
      }
    }
    loadContent();
  }, []);

  const services = [
    {
      icon: <GitBranch className="h-6 w-6 text-blue-500" />,
      title: content.service1Title,
      description: content.service1Desc,
      features: [content.service1Cap1, content.service1Cap2, content.service1Cap3, content.service1Cap4],
    },
    {
      icon: <Bot className="h-6 w-6 text-purple-500" />,
      title: content.service2Title,
      description: content.service2Desc,
      features: [content.service2Cap1, content.service2Cap2, content.service2Cap3, content.service2Cap4],
    },
    {
      icon: <FileText className="h-6 w-6 text-cyan-500" />,
      title: content.service3Title,
      description: content.service3Desc,
      features: [content.service3Cap1, content.service3Cap2, content.service3Cap3, content.service3Cap4],
    },
    {
      icon: <Database className="h-6 w-6 text-indigo-500" />,
      title: content.service4Title,
      description: content.service4Desc,
      features: [content.service4Cap1, content.service4Cap2, content.service4Cap3, content.service4Cap4],
    },
  ];

  // Workflow demo steps
  const demoSteps = [
    { id: 1, label: 'Email Ingestion', desc: 'Scan incoming emails for pdf invoice attachments.', icon: <Mail className="h-5 w-5" /> },
    { id: 2, label: 'AI Reading (IDP)', desc: 'Extract total, line items, and vendor name using LLMs.', icon: <FileText className="h-5 w-5" /> },
    { id: 3, label: 'Database Verification', desc: 'Query database to match invoice against purchase orders.', icon: <ShieldCheck className="h-5 w-5 text-green-500" /> },
    { id: 4, label: 'CRM / ERP Export', desc: 'Register payment ledger in SAP and notify finance in Slack.', icon: <Layers className="h-5 w-5" /> },
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
    }, 1500);
  };

  return (
    <div className="relative overflow-hidden py-16 text-left">
      {/* Glow overlays */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Page Title */}
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {content.pageTitle.split(' ').slice(1, 3).join(' ')}
            </span>{' '}
            {content.pageTitle.split(' ').slice(3).join(' ') || 'Solutions'}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            {content.pageSubtitle}
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="glass glass-hover p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl w-fit">
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Core Capabilities</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-xs text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Automation Builder Widget */}
        <section className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {content.pipelineTitle}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {content.pipelineDesc1}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {content.pipelineDesc2}
              </p>
              <div>
                <button
                  onClick={runSimulation}
                  disabled={isPlaying}
                  className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                    isPlaying
                      ? 'bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Simulating...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4 fill-white" />
                      Run Pipeline Demo
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Interactive Map */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {demoSteps.map((step) => {
                  const isActive = activeStep === step.id;
                  const isFinished = activeStep !== null && activeStep > step.id;

                  return (
                    <div
                      key={step.id}
                      className={`p-5 rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? 'bg-blue-600/10 border-blue-500 scale-[1.03] shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                          : isFinished
                          ? 'bg-white/5 border-green-500/30'
                          : 'bg-white/5 border-white/5'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div
                          className={`p-2 rounded-xl border transition-colors ${
                            isActive
                              ? 'bg-blue-500/20 border-blue-400 text-blue-400'
                              : isFinished
                              ? 'bg-green-500/10 border-green-500/20 text-green-400'
                              : 'bg-white/5 border-white/10 text-gray-400'
                          }`}
                        >
                          {step.icon}
                        </div>
                        <h4 className="text-sm font-semibold text-white">{step.label}</h4>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
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
