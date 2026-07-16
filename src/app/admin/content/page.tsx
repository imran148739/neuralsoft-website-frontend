'use client';

import React, { useState, useEffect } from 'react';
import { api } from '../../../lib/api';
import { Save, Loader2, CheckCircle, AlertCircle, Home, LayoutGrid, Info, BookOpen, Phone } from 'lucide-react';

const defaultHome = {
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

const defaultContact = {
  pageTitle: "Let's Build Something Smart",
  pageSubtitle: 'Ready to streamline your operational processes? Get in touch with our engineers. We respond to all inquiries within 24 business hours.',
  address: '100 AI Boulevard, Suite 500\nInnovation District, Boston, MA',
  phone: '+1 (800) 555-0199',
  email: 'hello@neuralsoft.ai',
  faqSectionTitle: 'Frequently Asked Questions',
  faq1Q: 'How long does a typical automation project take to implement?',
  faq1A: 'A simple IDP or chatbot project can be deployed in 2 to 4 weeks. Complex multi-agent workflow automations that sync with legacy databases typically take 6 to 12 weeks, including rigorous validation testing.',
  faq2Q: 'Do you deploy solutions on-premise or in the cloud?',
  faq2A: 'We support both configurations. For finance, healthcare, or government operations with strict compliance, we can deploy open-source models (like LLaMA or Mistral) on your private on-premise GPU servers.',
  faq3Q: 'What legacy software systems are you able to integrate with?',
  faq3A: 'We can automate workflows with SAP, Salesforce, Microsoft Dynamics, HubSpot, as well as legacy desktop apps using customized RPA scripting that interacts directly with user interfaces if API endpoints are not available.',
  faq4Q: 'What is your billing model?',
  faq4A: 'We charge an initial design and setup fee for creating your custom workflows, followed by a monthly support fee which covers model maintenance, monitoring pipelines, and adapting to target UI changes.',
};

const defaultBlog = {
  pageTitle: 'Insights & Case Studies',
  pageSubtitle: 'Read about our latest research in agentic AI, implementation guides for document processing, and real-world efficiency success stories.',
  ctaHeading: 'Want similar efficiencies for your business?',
  ctaSubtext: 'Let us deploy these custom IDP pipelines and agent networks directly into your operations.',
  ctaButtonText: 'Get Free Consultation',
  ctaButtonLink: '/contact',
};

export default function AdminContentPage() {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'about' | 'blog' | 'contact'>('home');
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    async function loadContent() {
      setLoading(true);
      setMessage(null);
      try {
        const res = await api.getPageContent(activeTab);
        let defaults: any = defaultHome;
        if (activeTab === 'services') defaults = defaultServices;
        if (activeTab === 'about') defaults = defaultAbout;
        if (activeTab === 'blog') defaults = defaultBlog;
        if (activeTab === 'contact') defaults = defaultContact;

        if (res && Object.keys(res).length > 0) {
          setFormData({ ...defaults, ...res });
        } else {
          setFormData(defaults);
        }
      } catch (err: any) {
        setMessage({ type: 'error', text: err.message || `Failed to load ${activeTab} page content.` });
      } finally {
        setLoading(false);
      }
    }
    loadContent();
  }, [activeTab]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    if (confirm(`Are you sure you want to revert all text on this page to system defaults?`)) {
      let defaults: any = defaultHome;
      if (activeTab === 'services') defaults = defaultServices;
      if (activeTab === 'about') defaults = defaultAbout;
      if (activeTab === 'blog') defaults = defaultBlog;
      if (activeTab === 'contact') defaults = defaultContact;
      setFormData(defaults);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      await api.updatePageContent(activeTab, formData);
      const pageLabel = activeTab === 'home' ? 'Homepage' : activeTab === 'services' ? 'Services Page' : activeTab === 'about' ? 'About Us Page' : activeTab === 'blog' ? 'Blog Page' : 'Contact Page';
      setMessage({ type: 'success', text: `Successfully updated the ${pageLabel} content!` });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Failed to save changes.' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Dynamic Page Content Manager</h2>
          <p className="text-gray-500 text-xs mt-1">
            Choose a page to live-edit its copy, highlights, headlines, and call-to-actions.
          </p>
        </div>
        
        {/* Page Switch Tabs */}
        <div className="flex space-x-1 p-1 bg-white/5 rounded-xl border border-white/5">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'home'
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Home className="h-3.5 w-3.5" />
            <span>Homepage</span>
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'services'
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            <span>Services</span>
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'about'
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Info className="h-3.5 w-3.5" />
            <span>About Us</span>
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'blog'
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Blog</span>
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'contact'
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Contact</span>
          </button>
        </div>
      </div>

      {message && (
        <div
          className={`flex items-start gap-3 p-4 rounded-xl border ${
            message.type === 'success'
              ? 'bg-green-500/10 border-green-500/20 text-green-400'
              : 'bg-red-500/10 border-red-500/20 text-red-400'
          }`}
        >
          {message.type === 'success' ? (
            <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          )}
          <span className="text-sm font-semibold">{message.text}</span>
        </div>
      )}

      {loading ? (
        <div className="py-24 flex flex-col items-center justify-center space-y-3">
          <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
          <p className="text-gray-500 text-sm">Loading page configurations...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* TAB 1: HOMEPAGE CONTENT FORM */}
          {activeTab === 'home' && (
            <>
              {/* HERO SECTION */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2.5 uppercase tracking-wider text-blue-400">
                  Hero Section Settings
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Main Hero Title</label>
                    <input
                      type="text"
                      name="heroTitle"
                      value={formData.heroTitle || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Hero Subtitle</label>
                    <textarea
                      name="heroSubtitle"
                      value={formData.heroSubtitle || ''}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-400 font-bold uppercase">CTA Button Text</label>
                      <input
                        type="text"
                        name="heroCtaText"
                        value={formData.heroCtaText || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-400 font-bold uppercase">CTA Button Destination Link</label>
                      <input
                        type="text"
                        name="heroCtaLink"
                        value={formData.heroCtaLink || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* FEATURES */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-6 text-left">
                <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2.5 uppercase tracking-wider text-purple-400">
                  Features Section Settings
                </h3>

                <div className="space-y-6 divide-y divide-white/5">
                  <div className="space-y-3 pt-0">
                    <h4 className="text-xs font-bold text-gray-300">Feature Block 1</h4>
                    <input
                      type="text"
                      name="feature1Title"
                      placeholder="Title"
                      value={formData.feature1Title || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                    <textarea
                      name="feature1Desc"
                      placeholder="Description"
                      value={formData.feature1Desc || ''}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>

                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-bold text-gray-300">Feature Block 2</h4>
                    <input
                      type="text"
                      name="feature2Title"
                      placeholder="Title"
                      value={formData.feature2Title || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                    <textarea
                      name="feature2Desc"
                      placeholder="Description"
                      value={formData.feature2Desc || ''}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>

                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-bold text-gray-300">Feature Block 3</h4>
                    <input
                      type="text"
                      name="feature3Title"
                      placeholder="Title"
                      value={formData.feature3Title || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                    <textarea
                      name="feature3Desc"
                      placeholder="Description"
                      value={formData.feature3Desc || ''}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>
                </div>
              </div>

              {/* BOTTOM CTA */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2.5 uppercase tracking-wider text-cyan-400">
                  Bottom Call-To-Action (CTA) Settings
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">CTA Block Heading</label>
                    <input
                      type="text"
                      name="ctaTitle"
                      value={formData.ctaTitle || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">CTA Block Subtext</label>
                    <textarea
                      name="ctaSubtitle"
                      value={formData.ctaSubtitle || ''}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">CTA Action Button Text</label>
                    <input
                      type="text"
                      name="ctaButtonText"
                      value={formData.ctaButtonText || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: SERVICES PAGE CONTENT FORM */}
          {activeTab === 'services' && (
            <>
              {/* PAGE HEADER */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2.5 uppercase tracking-wider text-blue-400">
                  Services Page Header Settings
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Main Page Title</label>
                    <input
                      type="text"
                      name="pageTitle"
                      value={formData.pageTitle || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Page Subtitle</label>
                    <textarea
                      name="pageSubtitle"
                      value={formData.pageSubtitle || ''}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>
                </div>
              </div>

              {/* SERVICES LIST */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-6 text-left">
                <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2.5 uppercase tracking-wider text-purple-400">
                  Service Blocks & Features
                </h3>

                <div className="space-y-6 divide-y divide-white/5">
                  {/* Service 1 */}
                  <div className="space-y-4 pt-0">
                    <h4 className="text-xs font-bold text-white uppercase text-blue-500">Service 1: Workflow Automation</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <input
                        type="text"
                        name="service1Title"
                        placeholder="Title"
                        value={formData.service1Title || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                      <textarea
                        name="service1Desc"
                        placeholder="Description"
                        value={formData.service1Desc || ''}
                        onChange={handleChange}
                        required
                        rows={2}
                        className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" name="service1Cap1" placeholder="Capability 1" value={formData.service1Cap1 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                      <input type="text" name="service1Cap2" placeholder="Capability 2" value={formData.service1Cap2 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                      <input type="text" name="service1Cap3" placeholder="Capability 3" value={formData.service1Cap3 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                      <input type="text" name="service1Cap4" placeholder="Capability 4" value={formData.service1Cap4 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                    </div>
                  </div>

                  {/* Service 2 */}
                  <div className="space-y-4 pt-6">
                    <h4 className="text-xs font-bold text-white uppercase text-purple-500">Service 2: AI Conversational Agents</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <input
                        type="text"
                        name="service2Title"
                        placeholder="Title"
                        value={formData.service2Title || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                      <textarea
                        name="service2Desc"
                        placeholder="Description"
                        value={formData.service2Desc || ''}
                        onChange={handleChange}
                        required
                        rows={2}
                        className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" name="service2Cap1" placeholder="Capability 1" value={formData.service2Cap1 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                      <input type="text" name="service2Cap2" placeholder="Capability 2" value={formData.service2Cap2 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                      <input type="text" name="service2Cap3" placeholder="Capability 3" value={formData.service2Cap3 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                      <input type="text" name="service2Cap4" placeholder="Capability 4" value={formData.service2Cap4 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                    </div>
                  </div>

                  {/* Service 3 */}
                  <div className="space-y-4 pt-6">
                    <h4 className="text-xs font-bold text-white uppercase text-cyan-500">Service 3: Intelligent Document Processing</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <input
                        type="text"
                        name="service3Title"
                        placeholder="Title"
                        value={formData.service3Title || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                      <textarea
                        name="service3Desc"
                        placeholder="Description"
                        value={formData.service3Desc || ''}
                        onChange={handleChange}
                        required
                        rows={2}
                        className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" name="service3Cap1" placeholder="Capability 1" value={formData.service3Cap1 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                      <input type="text" name="service3Cap2" placeholder="Capability 2" value={formData.service3Cap2 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                      <input type="text" name="service3Cap3" placeholder="Capability 3" value={formData.service3Cap3 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                      <input type="text" name="service3Cap4" placeholder="Capability 4" value={formData.service3Cap4 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                    </div>
                  </div>

                  {/* Service 4 */}
                  <div className="space-y-4 pt-6">
                    <h4 className="text-xs font-bold text-white uppercase text-indigo-500">Service 4: Custom AI & Fine-Tuning</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <input
                        type="text"
                        name="service4Title"
                        placeholder="Title"
                        value={formData.service4Title || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                      <textarea
                        name="service4Desc"
                        placeholder="Description"
                        value={formData.service4Desc || ''}
                        onChange={handleChange}
                        required
                        rows={2}
                        className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" name="service4Cap1" placeholder="Capability 1" value={formData.service4Cap1 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                      <input type="text" name="service4Cap2" placeholder="Capability 2" value={formData.service4Cap2 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                      <input type="text" name="service4Cap3" placeholder="Capability 3" value={formData.service4Cap3 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                      <input type="text" name="service4Cap4" placeholder="Capability 4" value={formData.service4Cap4 || ''} onChange={handleChange} required className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* PIPELINE SIMULATION */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2.5 uppercase tracking-wider text-cyan-400">
                  Pipeline Section Settings
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Section Title</label>
                    <input
                      type="text"
                      name="pipelineTitle"
                      value={formData.pipelineTitle || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Description Paragraph 1</label>
                    <textarea
                      name="pipelineDesc1"
                      value={formData.pipelineDesc1 || ''}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Description Paragraph 2</label>
                    <textarea
                      name="pipelineDesc2"
                      value={formData.pipelineDesc2 || ''}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB 3: ABOUT US PAGE CONTENT FORM */}
          {activeTab === 'about' && (
            <>
              {/* PAGE HEADER */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2.5 uppercase tracking-wider text-blue-400">
                  About Page Header & Description
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Vision Title</label>
                    <input
                      type="text"
                      name="pageTitle"
                      value={formData.pageTitle || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Vision Paragraph 1</label>
                    <textarea
                      name="pageSubtitle1"
                      value={formData.pageSubtitle1 || ''}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Vision Paragraph 2</label>
                    <textarea
                      name="pageSubtitle2"
                      value={formData.pageSubtitle2 || ''}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>
                </div>
              </div>

              {/* STATISTICS GRID */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2.5 uppercase tracking-wider text-purple-400">
                  Core Operations Statistics
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Stat 1 */}
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-3">
                    <h4 className="text-xs font-bold text-gray-300">Statistic Card 1</h4>
                    <input type="text" name="stat1Value" placeholder="Value (e.g. 20M+)" value={formData.stat1Value || ''} onChange={handleChange} required className="w-full px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs text-white" />
                    <input type="text" name="stat1Label" placeholder="Label (e.g. Fields Parsed)" value={formData.stat1Label || ''} onChange={handleChange} required className="w-full px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs text-white" />
                  </div>

                  {/* Stat 2 */}
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-3">
                    <h4 className="text-xs font-bold text-gray-300">Statistic Card 2</h4>
                    <input type="text" name="stat2Value" placeholder="Value (e.g. 45k+)" value={formData.stat2Value || ''} onChange={handleChange} required className="w-full px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs text-white" />
                    <input type="text" name="stat2Label" placeholder="Label (e.g. Hours Saved)" value={formData.stat2Label || ''} onChange={handleChange} required className="w-full px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs text-white" />
                  </div>

                  {/* Stat 3 */}
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-3">
                    <h4 className="text-xs font-bold text-gray-300">Statistic Card 3</h4>
                    <input type="text" name="stat3Value" placeholder="Value (e.g. 99.9%)" value={formData.stat3Value || ''} onChange={handleChange} required className="w-full px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs text-white" />
                    <input type="text" name="stat3Label" placeholder="Label (e.g. Accuracy)" value={formData.stat3Label || ''} onChange={handleChange} required className="w-full px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs text-white" />
                  </div>

                  {/* Stat 4 */}
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-3">
                    <h4 className="text-xs font-bold text-gray-300">Statistic Card 4</h4>
                    <input type="text" name="stat4Value" placeholder="Value (e.g. 24/7)" value={formData.stat4Value || ''} onChange={handleChange} required className="w-full px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs text-white" />
                    <input type="text" name="stat4Label" placeholder="Label (e.g. Uptime)" value={formData.stat4Label || ''} onChange={handleChange} required className="w-full px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs text-white" />
                  </div>
                </div>
              </div>

              {/* CORE PRINCIPLES */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2.5 uppercase tracking-wider text-cyan-400">
                  Principles Settings
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Section Title</label>
                    <input type="text" name="principlesTitle" value={formData.principlesTitle || ''} onChange={handleChange} required className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Section Subtitle</label>
                    <textarea name="principlesSubtitle" value={formData.principlesSubtitle || ''} onChange={handleChange} required rows={2} className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                  </div>
                </div>

                <div className="space-y-6 divide-y divide-white/5 pt-4">
                  {/* Principle 1 */}
                  <div className="space-y-3 pt-0">
                    <h4 className="text-xs font-bold text-white">Principle 1</h4>
                    <input type="text" name="principle1Title" placeholder="Title" value={formData.principle1Title || ''} onChange={handleChange} required className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                    <textarea name="principle1Desc" placeholder="Description" value={formData.principle1Desc || ''} onChange={handleChange} required rows={2} className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                  </div>
                  {/* Principle 2 */}
                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-bold text-white">Principle 2</h4>
                    <input type="text" name="principle2Title" placeholder="Title" value={formData.principle2Title || ''} onChange={handleChange} required className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                    <textarea name="principle2Desc" placeholder="Description" value={formData.principle2Desc || ''} onChange={handleChange} required rows={2} className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                  </div>
                  {/* Principle 3 */}
                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-bold text-white">Principle 3</h4>
                    <input type="text" name="principle3Title" placeholder="Title" value={formData.principle3Title || ''} onChange={handleChange} required className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                    <textarea name="principle3Desc" placeholder="Description" value={formData.principle3Desc || ''} onChange={handleChange} required rows={2} className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                  </div>
                  {/* Principle 4 */}
                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-bold text-white">Principle 4</h4>
                    <input type="text" name="principle4Title" placeholder="Title" value={formData.principle4Title || ''} onChange={handleChange} required className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                    <textarea name="principle4Desc" placeholder="Description" value={formData.principle4Desc || ''} onChange={handleChange} required rows={2} className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                  </div>
                </div>
              </div>

              {/* TEAM SECTION */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-6 text-left">
                <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2.5 uppercase tracking-wider text-pink-400">
                  Leadership Profiles
                </h3>

                <div className="space-y-6 divide-y divide-white/5">
                  {/* Member 1 */}
                  <div className="space-y-3 pt-0">
                    <h4 className="text-xs font-bold text-white">Team Member 1</h4>
                    <input type="text" name="team1Name" placeholder="Name" value={formData.team1Name || ''} onChange={handleChange} required className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                    <input type="text" name="team1Role" placeholder="Role" value={formData.team1Role || ''} onChange={handleChange} required className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                    <textarea name="team1Bio" placeholder="Short Biography" value={formData.team1Bio || ''} onChange={handleChange} required rows={2} className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                  </div>
                  {/* Member 2 */}
                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-bold text-white">Team Member 2</h4>
                    <input type="text" name="team2Name" placeholder="Name" value={formData.team2Name || ''} onChange={handleChange} required className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                    <input type="text" name="team2Role" placeholder="Role" value={formData.team2Role || ''} onChange={handleChange} required className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                    <textarea name="team2Bio" placeholder="Short Biography" value={formData.team2Bio || ''} onChange={handleChange} required rows={2} className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                  </div>
                  {/* Member 3 */}
                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-bold text-white">Team Member 3</h4>
                    <input type="text" name="team3Name" placeholder="Name" value={formData.team3Name || ''} onChange={handleChange} required className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                    <input type="text" name="team3Role" placeholder="Role" value={formData.team3Role || ''} onChange={handleChange} required className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                    <textarea name="team3Bio" placeholder="Short Biography" value={formData.team3Bio || ''} onChange={handleChange} required rows={2} className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                  </div>
                </div>
              </div>

              {/* TIMELINE JOURNEY */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2.5 uppercase tracking-wider text-blue-400">
                  Milestones & Growth Journey
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Journey Section Title</label>
                    <input type="text" name="milestonesTitle" value={formData.milestonesTitle || ''} onChange={handleChange} required className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Journey Section Subtitle</label>
                    <textarea name="milestonesSubtitle" value={formData.milestonesSubtitle || ''} onChange={handleChange} required rows={2} className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                  </div>
                </div>

                <div className="space-y-6 divide-y divide-white/5 pt-4">
                  {/* Milestone 1 */}
                  <div className="space-y-3 pt-0">
                    <h4 className="text-xs font-bold text-white">Milestone 1</h4>
                    <div className="grid grid-cols-4 gap-3">
                      <input type="text" name="milestone1Year" placeholder="Year" value={formData.milestone1Year || ''} onChange={handleChange} required className="col-span-1 px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                      <input type="text" name="milestone1Title" placeholder="Milestone Name" value={formData.milestone1Title || ''} onChange={handleChange} required className="col-span-3 px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                    </div>
                    <textarea name="milestone1Desc" placeholder="Description of achievement" value={formData.milestone1Desc || ''} onChange={handleChange} required rows={2} className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                  </div>

                  {/* Milestone 2 */}
                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-bold text-white">Milestone 2</h4>
                    <div className="grid grid-cols-4 gap-3">
                      <input type="text" name="milestone2Year" placeholder="Year" value={formData.milestone2Year || ''} onChange={handleChange} required className="col-span-1 px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                      <input type="text" name="milestone2Title" placeholder="Milestone Name" value={formData.milestone2Title || ''} onChange={handleChange} required className="col-span-3 px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                    </div>
                    <textarea name="milestone2Desc" placeholder="Description of achievement" value={formData.milestone2Desc || ''} onChange={handleChange} required rows={2} className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                  </div>

                  {/* Milestone 3 */}
                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-bold text-white">Milestone 3</h4>
                    <div className="grid grid-cols-4 gap-3">
                      <input type="text" name="milestone3Year" placeholder="Year" value={formData.milestone3Year || ''} onChange={handleChange} required className="col-span-1 px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                      <input type="text" name="milestone3Title" placeholder="Milestone Name" value={formData.milestone3Title || ''} onChange={handleChange} required className="col-span-3 px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                    </div>
                    <textarea name="milestone3Desc" placeholder="Description of achievement" value={formData.milestone3Desc || ''} onChange={handleChange} required rows={2} className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white" />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB 4: BLOG PAGE CONTENT FORM */}
          {activeTab === 'blog' && (
            <>
              {/* BLOG LISTING HEADER */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                <h3 className="text-sm font-bold border-b border-white/5 pb-2.5 uppercase tracking-wider text-blue-400">
                  Blog Listing Page Header
                </h3>
                <p className="text-xs text-gray-500">Controls the title and intro text shown at the top of the <span className="text-blue-400">/blog</span> page.</p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Page Title</label>
                    <input
                      type="text"
                      name="pageTitle"
                      value={formData.pageTitle || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                    <p className="text-[10px] text-gray-600">Tip: Include an ampersand (&amp;) to split the title — the second part gets the gradient highlight.</p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Page Subtitle</label>
                    <textarea
                      name="pageSubtitle"
                      value={formData.pageSubtitle || ''}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>
                </div>
              </div>

              {/* ARTICLE-BOTTOM CTA */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                <h3 className="text-sm font-bold border-b border-white/5 pb-2.5 uppercase tracking-wider text-purple-400">
                  Article-Bottom Call-To-Action Banner
                </h3>
                <p className="text-xs text-gray-500">Appears at the bottom of every individual blog article page after the content.</p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">CTA Heading</label>
                    <input
                      type="text"
                      name="ctaHeading"
                      value={formData.ctaHeading || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">CTA Subtext</label>
                    <textarea
                      name="ctaSubtext"
                      value={formData.ctaSubtext || ''}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-400 font-bold uppercase">Button Text</label>
                      <input
                        type="text"
                        name="ctaButtonText"
                        value={formData.ctaButtonText || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-400 font-bold uppercase">Button Link</label>
                      <input
                        type="text"
                        name="ctaButtonLink"
                        value={formData.ctaButtonLink || ''}
                        onChange={handleChange}
                        required
                        placeholder="/contact"
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* BLOG POSTS NOTE */}
              <div className="glass p-5 rounded-2xl border border-blue-500/20 bg-blue-500/5 flex items-start gap-3 text-left">
                <BookOpen className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-blue-300">Managing Blog Articles</p>
                  <p className="text-xs text-gray-400 mt-1">
                    To create, edit, or delete individual blog posts, go to the{' '}
                    <a href="/admin/blogs" className="text-blue-400 hover:underline font-semibold">Blog Posts Manager</a>{' '}
                    in the sidebar. Each post has its own title, content, category, image, and read time.
                  </p>
                </div>
              </div>
            </>
          )}

          {/* TAB 5: CONTACT PAGE CONTENT FORM */}
          {activeTab === 'contact' && (
            <>
              {/* CONTACT HERO */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                <h3 className="text-sm font-bold border-b border-white/5 pb-2.5 uppercase tracking-wider text-blue-400">
                  Contact Page Header & Hero
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Page Title</label>
                    <input
                      type="text"
                      name="pageTitle"
                      value={formData.pageTitle || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Page Subtitle</label>
                    <textarea
                      name="pageSubtitle"
                      value={formData.pageSubtitle || ''}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>
                </div>
              </div>

              {/* CONTACT DETAILS */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                <h3 className="text-sm font-bold border-b border-white/5 pb-2.5 uppercase tracking-wider text-purple-400">
                  Contact Details
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase">Headquarters Address</label>
                    <textarea
                      name="address"
                      value={formData.address || ''}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-400 font-bold uppercase">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-400 font-bold uppercase">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQS SECTION */}
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-6 text-left">
                <h3 className="text-sm font-bold border-b border-white/5 pb-2.5 uppercase tracking-wider text-cyan-400">
                  Frequently Asked Questions (FAQs)
                </h3>
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-400 font-bold uppercase">FAQ Section Title</label>
                  <input
                    type="text"
                    name="faqSectionTitle"
                    value={formData.faqSectionTitle || ''}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
                  />
                </div>

                <div className="space-y-6 divide-y divide-white/5">
                  {/* FAQ 1 */}
                  <div className="space-y-3 pt-0">
                    <h4 className="text-xs font-bold text-white uppercase text-blue-500">FAQ Item 1</h4>
                    <input
                      type="text"
                      name="faq1Q"
                      placeholder="Question"
                      value={formData.faq1Q || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white"
                    />
                    <textarea
                      name="faq1A"
                      placeholder="Answer"
                      value={formData.faq1A || ''}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white"
                    />
                  </div>

                  {/* FAQ 2 */}
                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-bold text-white uppercase text-blue-500">FAQ Item 2</h4>
                    <input
                      type="text"
                      name="faq2Q"
                      placeholder="Question"
                      value={formData.faq2Q || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white"
                    />
                    <textarea
                      name="faq2A"
                      placeholder="Answer"
                      value={formData.faq2A || ''}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white"
                    />
                  </div>

                  {/* FAQ 3 */}
                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-bold text-white uppercase text-blue-500">FAQ Item 3</h4>
                    <input
                      type="text"
                      name="faq3Q"
                      placeholder="Question"
                      value={formData.faq3Q || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white"
                    />
                    <textarea
                      name="faq3A"
                      placeholder="Answer"
                      value={formData.faq3A || ''}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white"
                    />
                  </div>

                  {/* FAQ 4 */}
                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-bold text-white uppercase text-blue-500">FAQ Item 4</h4>
                    <input
                      type="text"
                      name="faq4Q"
                      placeholder="Question"
                      value={formData.faq4Q || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white"
                    />
                    <textarea
                      name="faq4A"
                      placeholder="Answer"
                      value={formData.faq4A || ''}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-white"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* SUBMIT BUTTONS */}

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-blue-500/20 disabled:shadow-none transition-all cursor-pointer"
            >
              {saving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Saving settings...</span>
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
