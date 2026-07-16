'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Shield,
  Zap,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Search,
  Plus,
  Minus,
  Mail,
  RefreshCw,
  Layers
} from 'lucide-react';

// Full Currencies List for the Searchable Dropdown
const ALL_CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'AED', symbol: 'AED ', name: 'UAE Dirham' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
  { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar' },
  { code: 'CHF', symbol: 'CHF ', name: 'Swiss Franc' },
  { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar' },
  { code: 'ZAR', symbol: 'R ', name: 'South African Rand' },
  { code: 'MYR', symbol: 'RM ', name: 'Malaysian Ringgit' },
  { code: 'THB', symbol: '฿', name: 'Thai Baht' },
  { code: 'PHP', symbol: '₱', name: 'Philippine Peso' },
  { code: 'IDR', symbol: 'Rp ', name: 'Indonesian Rupiah' },
  { code: 'SAR', symbol: 'SR ', name: 'Saudi Riyal' },
  { code: 'QAR', symbol: 'QR ', name: 'Qatari Riyal' },
  { code: 'KWD', symbol: 'KD ', name: 'Kuwaiti Dinar' },
  { code: 'BHD', symbol: 'BD ', name: 'Bahraini Dinar' },
  { code: 'OMR', symbol: 'RO ', name: 'Omani Rial' },
  { code: 'BRL', symbol: 'R$', name: 'Brazilian Real' },
  { code: 'MXN', symbol: 'Mex$', name: 'Mexican Peso' },
];

export default function HomePage() {
  // --- STATE FOR ROI CALCULATOR ---
  const [tasksCount, setTasksCount] = useState(50);
  const [taskHours, setTaskHours] = useState(3);
  const [employeeCount, setEmployeeCount] = useState(1);
  const [rateValue, setRateValue] = useState(40);
  const [rateBasis, setRateBasis] = useState<'hour' | 'week' | 'month'>('hour');

  // Currency States
  const [selectedCurrency, setSelectedCurrency] = useState(ALL_CURRENCIES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCurrencies = ALL_CURRENCIES.filter(
    (curr) =>
      curr.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      curr.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBasisChange = (newBasis: 'hour' | 'week' | 'month') => {
    let newValue = rateValue;
    if (rateBasis === 'hour') {
      if (newBasis === 'week') newValue = rateValue * 40;
      else if (newBasis === 'month') newValue = rateValue * 160;
    } else if (rateBasis === 'week') {
      if (newBasis === 'hour') newValue = Math.round(rateValue / 40);
      else if (newBasis === 'month') newValue = rateValue * 4;
    } else if (rateBasis === 'month') {
      if (newBasis === 'hour') newValue = Math.round(rateValue / 160);
      else if (newBasis === 'week') newValue = Math.round(rateValue / 4);
    }
    setRateValue(Math.max(1, newValue));
    setRateBasis(newBasis);
  };

  const getSliderLimits = () => {
    switch (rateBasis) {
      case 'week': return { min: 1, max: 20000, step: 10 };
      case 'month': return { min: 1, max: 100000, step: 50 };
      case 'hour':
      default: return { min: 1, max: 1000, step: 1 };
    }
  };

  const limits = getSliderLimits();

  const adjustRate = (direction: 'up' | 'down') => {
    const changeAmount = limits.step;
    setRateValue((prev) => {
      const updated = direction === 'up' ? prev + changeAmount : prev - changeAmount;
      return Math.min(limits.max, Math.max(limits.min, updated));
    });
  };

  // Math Calculations (Factoring in Employee Count)
  const manualHoursPerYear = tasksCount * taskHours * 52 * employeeCount;
  const hourlyEquivalent = rateBasis === 'hour'
    ? rateValue
    : rateBasis === 'week'
      ? rateValue / 40
      : rateValue / 160;

  const manualCostPerYear = manualHoursPerYear * hourlyEquivalent;
  
  // Automation Saves 85% of Time & Cost
  const hoursSavedPerYear = Math.round(manualHoursPerYear * 0.85);
  const moneySavedPerYear = Math.round(manualCostPerYear * 0.85);

  // --- HARDCODED CONTENT FOR NEURALSOFT TECHNOLOGIES ---
  const content = {
    heroTitle: 'Automate Your Operations with Agentic Intelligence',
    heroSubtitle: 'NeuralSoft Technologies designs, builds, and deploys custom AI workflows and autonomous agents that free your team from tedious, boring, and repetitive operations.',
    heroCtaText: 'Schedule Free Audit',
    heroCtaLink: '/contact',
    
    // Three Core Superpowers / Features
    feature1Title: '⚡ Hyper-Speed Execution',
    feature1Desc: 'Runs background business operations 10x faster than manual data entry. Say goodbye to waiting!',
    feature2Title: '🤖 Smart AI Team Helpers',
    feature2Desc: 'Deploys friendly AI agents that talk and work together to solve complex business problems automatically.',
    feature3Title: '🎯 99.9% Perfect Accuracy',
    feature3Desc: 'Uses clever smart validators to review all details, meaning zero typing mistakes and absolute quality.',
    
    // CTA Elements
    ctaTitle: 'Ready to Stop Doing Boring Work?',
    ctaSubtitle: 'Get in touch with NeuralSoft Technologies today. Our automation specialists will design a custom, tailor-made roadmap to scale your company to the next level.',
    ctaButtonText: 'Start Automating Now 🚀',
  };

  // Generalized 1-2-3-4 Workflow Steps 
  const workflowSteps = [
    { id: '1', title: '💻 Smart Lead Website', desc: 'Captures fresh new clients automatically.' },
    { id: '2', title: '📊 Custom Central Dashboard', desc: 'Tracks clients and deals in one simple room.' },
    { id: '3', title: '💬 24/7 AI WhatsApp Bot', desc: 'Answers questions and sends reminders all day & night.' },
    { id: '4', title: '🔄 Secure Auto-Database Sync', desc: 'Updates all your computer files instantly.' },
  ];

  return (
    <div className="relative overflow-hidden pb-24 bg-[#070b14] text-white">
      {/* Background soft glowing lights */}
      <div className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[25%] right-[-10%] w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-10 text-left">
            <div className="inline-flex items-center space-x-3 px-4 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-bold tracking-wider uppercase">
              <Sparkles className="h-5 w-5 text-blue-400 animate-spin" />
              <span>Easy Business Automation for Everyone 🪄</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-tight bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text">
              {content.heroTitle}
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl leading-relaxed">
              {content.heroSubtitle}
            </p>
            
            {/* Clear, Big Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Link
                href={content.heroCtaLink}
                className="inline-flex items-center justify-center px-8 py-5 text-lg font-extrabold rounded-2xl text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all group duration-300"
              >
                {content.heroCtaText}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-5 text-lg font-extrabold rounded-2xl text-slate-100 hover:text-white bg-white/5 hover:bg-white/10 transition-all border border-white/15 hover:border-white/25 duration-300"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          {/* Hero Right - Interactive Flow Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white/5 rounded-[36px] p-8 relative z-10 border border-white/10 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8">
                <div className="flex space-x-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-red-500/80" />
                  <div className="w-4.5 h-4.5 rounded-full bg-yellow-500/80" />
                  <div className="w-4.5 h-4.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-sm text-blue-400 font-mono font-bold tracking-wider">neuralsoft-flow 🚀</span>
              </div>
              
              <div className="space-y-6">
                {workflowSteps.map((step, idx) => (
                  <React.Fragment key={step.id}>
                    <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between hover:border-blue-500/40 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sm font-black text-blue-400">
                          {step.id}
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-extrabold text-white">{step.title}</h4>
                          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{step.desc}</p>
                        </div>
                      </div>
                      <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0 ml-2" />
                    </div>
                    {idx < workflowSteps.length - 1 && (
                      <div className="flex justify-start ml-[38.5px] my-1.5">
                        <div className="w-[3px] h-8 bg-gradient-to-b from-blue-500/60 to-transparent" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Superpowers (Features Highlight) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">Our 3 Superpowers 🌟</h2>
          <p className="text-lg sm:text-xl text-slate-300 mt-4">
            How NeuralSoft Technologies makes your business run beautifully and automatically.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white/5 hover:bg-white/10 p-10 rounded-[32px] border border-white/10 text-left transition-all duration-300 group">
            <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
              <Zap className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{content.feature1Title}</h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{content.feature1Desc}</p>
          </div>

          <div className="bg-white/5 hover:bg-white/10 p-10 rounded-[32px] border border-white/10 text-left transition-all duration-300 group">
            <div className="p-4 bg-purple-600/10 border border-purple-500/20 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
              <Bot className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{content.feature2Title}</h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{content.feature2Desc}</p>
          </div>

          <div className="bg-white/5 hover:bg-white/10 p-10 rounded-[32px] border border-white/10 text-left transition-all duration-300 group">
            <div className="p-4 bg-cyan-600/10 border border-cyan-500/20 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
              <Shield className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{content.feature3Title}</h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{content.feature3Desc}</p>
          </div>
        </div>
      </section>

      {/* Advanced ROI Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white/5 rounded-[40px] p-8 lg:p-16 border border-white/10 relative overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Inputs Panel */}
            <div className="lg:col-span-7 space-y-8 text-left flex flex-col justify-between">
              
              {/* Header */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-300 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 border border-blue-500/20">
                  <Sparkles className="h-4 w-4 text-blue-400" />
                  <span>Super Easy ROI Calculator 🧮</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  Calculate Your Savings! 💰
                </h2>
                <p className="text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
                  Fill in the steps below to see how much money and time you can save with NeuralSoft Automation!
                </p>
              </div>

              {/* STEP 1: Currency Selector */}
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative" ref={dropdownRef}>
                <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 text-sm font-black border border-blue-500/30 shrink-0">1</span>
                  <label className="text-white text-base sm:text-lg font-bold">Pick your currency 🌍</label>
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => { setIsDropdownOpen(!isDropdownOpen); setSearchQuery(''); }}
                    className="w-full sm:w-64 flex items-center justify-between px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm hover:bg-white/10 transition-all focus:outline-none font-bold"
                  >
                    <span className="truncate">{selectedCurrency.name} ({selectedCurrency.code})</span>
                    <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 shrink-0 ml-2 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-[#0f1626] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden backdrop-blur-xl">
                      <div className="p-2 border-b border-white/10 flex items-center space-x-2 bg-white/5">
                        <Search className="h-4 w-4 text-gray-400 shrink-0 ml-1" />
                        <input
                          type="text"
                          placeholder="Type currency name..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full bg-transparent text-xs sm:text-sm text-white focus:outline-none py-1"
                          autoFocus
                        />
                      </div>
                      <ul className="max-h-48 overflow-y-auto">
                        {filteredCurrencies.length > 0 ? (
                          filteredCurrencies.map((curr) => (
                            <li key={curr.code}>
                              <button
                                type="button"
                                onClick={() => { setSelectedCurrency(curr); setIsDropdownOpen(false); }}
                                className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm flex items-center justify-between ${selectedCurrency.code === curr.code ? 'bg-blue-600/30 text-blue-400 font-black' : 'text-slate-300 hover:bg-white/5'}`}
                              >
                                <span className="truncate mr-2">{curr.name}</span>
                                <span className="font-mono text-gray-400 shrink-0">{curr.code}</span>
                              </button>
                            </li>
                          ))
                        ) : (
                          <li className="px-4 py-2.5 text-xs sm:text-sm text-gray-500">No currency found</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Steps 2 to 5: Compact 2x2 Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* STEP 2: Number of Employees */}
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 text-sm font-black border border-blue-500/30 shrink-0">2</span>
                      <label className="text-white text-sm sm:text-base font-bold">How many people? 👥</label>
                    </div>

                    {/* Numeric Input Controls */}
                    <div className="flex items-center space-x-1 bg-white/5 border border-white/10 rounded-xl p-1 text-white focus-within:border-blue-500 transition-all shrink-0">
                      <button
                        type="button"
                        onClick={() => setEmployeeCount(prev => Math.max(1, prev - 1))}
                        className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={employeeCount || ''}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setEmployeeCount(val > 100 ? 100 : val);
                        }}
                        onBlur={() => {
                          if (!employeeCount || employeeCount < 1) setEmployeeCount(1);
                        }}
                        className="w-10 bg-transparent text-center text-sm font-black text-blue-400 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setEmployeeCount(prev => Math.min(100, prev + 1))}
                        className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 border border-white/5 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                {/* STEP 3: Tasks Count (Boring Tasks Per Week Per Person) */}
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-3">
                  <div className="flex flex-wrap justify-between items-center gap-3">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 text-sm font-black border border-blue-500/30 shrink-0">3</span>
                      <label className="text-white text-sm sm:text-base font-bold">Tasks / week? 🔄</label>
                    </div>
                    <span className="bg-blue-500/10 text-blue-300 px-2.5 py-1 rounded-lg text-xs sm:text-sm font-extrabold border border-blue-500/20">
                      {tasksCount} tasks
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="150"
                    value={tasksCount}
                    onChange={(e) => setTasksCount(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 border border-white/5 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                {/* STEP 4: Time Spent */}
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-3">
                  <div className="flex flex-wrap justify-between items-center gap-3">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 text-sm font-black border border-blue-500/30 shrink-0">4</span>
                      <label className="text-white text-sm sm:text-base font-bold">Hours per task? ⏱️</label>
                    </div>
                    <span className="bg-blue-500/10 text-blue-300 px-2.5 py-1 rounded-lg text-xs sm:text-sm font-extrabold border border-blue-500/20">
                      {taskHours} hrs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.5"
                    value={taskHours}
                    onChange={(e) => setTaskHours(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 border border-white/5 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                {/* STEP 5: Resource Cost */}
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-3">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 text-sm font-black border border-blue-500/30 shrink-0">5</span>
                      <label className="text-white text-sm sm:text-base font-bold">What is their pay? 💰</label>
                    </div>

                    <div className="flex bg-white/10 p-0.5 rounded-lg border border-white/10 shrink-0">
                      {(['hour', 'week', 'month'] as const).map((basis) => (
                        <button
                          key={basis}
                          type="button"
                          onClick={() => handleBasisChange(basis)}
                          className={`px-2 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider transition-all ${rateBasis === basis ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'}`}
                        >
                          {basis === 'hour' ? 'hr' : basis === 'week' ? 'wk' : 'mo'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 w-full">
                    <div className="relative flex items-center w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus-within:border-blue-500 transition-all">
                      <span className="text-gray-400 text-sm select-none mr-1.5 font-bold shrink-0">
                        {selectedCurrency.symbol}
                      </span>
                      <input
                        type="number"
                        min={limits.min}
                        max={limits.max}
                        value={rateValue || ''}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setRateValue(val > limits.max ? limits.max : val);
                        }}
                        onBlur={() => {
                          if (!rateValue || rateValue < limits.min) setRateValue(limits.min);
                        }}
                        className="w-full bg-transparent text-sm font-black text-blue-400 focus:outline-none"
                      />
                      
                      {/* Plus/Minus rate control triggers */}
                      <div className="flex items-center space-x-1 shrink-0 ml-1">
                        <button
                          type="button"
                          onClick={() => adjustRate('down')}
                          className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-all"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => adjustRate('up')}
                          className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-all"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculator Results Panel */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
              <div className="space-y-8 text-left">
                <h3 className="text-xl sm:text-2xl font-black text-white border-b border-white/10 pb-4">
                  Estimated Savings 📊
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-widest font-black">Hours Saved / Year</p>
                    <p className="text-4xl sm:text-5xl font-black mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                      {hoursSavedPerYear.toLocaleString('en-US')} hrs
                    </p>
                    <p className="text-xs sm:text-sm text-green-400 font-medium mt-1">That is 85% of your free time back!</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-widest font-black">Money Saved / Year</p>
                    <p className="text-4xl sm:text-6xl font-black text-green-400 mt-2">
                      {selectedCurrency.symbol}{moneySavedPerYear.toLocaleString('en-US')}
                    </p>
                    <p className="text-xs sm:text-sm text-cyan-300 font-medium mt-1">Money that can be reinvested into growth!</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 mt-8">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-base sm:text-lg font-extrabold rounded-2xl text-white bg-blue-600 hover:bg-blue-500 shadow-lg hover:shadow-blue-500/30 transition-all group duration-300"
                >
                  Request a Custom Demo
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="relative bg-white/5 rounded-[40px] p-12 sm:p-20 overflow-hidden border border-white/10 backdrop-blur-md">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
              {content.ctaTitle}
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              {content.ctaSubtitle}
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 rounded-2xl text-lg sm:text-xl font-extrabold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all group duration-300"
              >
                {content.ctaButtonText}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}