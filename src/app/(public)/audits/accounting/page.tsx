'use client';

import React, { useState } from 'react';
import { 
  Zap, 
  ChevronDown, 
  Users, 
  FileCheck, 
  RefreshCcw, 
  Cpu, 
  Database,
  Layers,
  Calculator,
  ShieldCheck,
  MessageSquare,
  AlertTriangle,
  FileText,
  Clock,
  Briefcase,
  Sparkles,
  BarChart3,
  Search,
  CheckCircle2
} from 'lucide-react';

type AutomationFeature = {
  id: string;
  title: string;
  icon: React.ReactNode;
  eli5: string;
  techDetails: string[];
};

export default function UnifiedAccountingAutomation() {
  // Dropdown Strategy Selectors
  const [accountingLine, setAccountingLine] = useState<string>('corporate');
  const [ledgerFramework, setLedgerFramework] = useState<string>('accrual');
  
  // Interactive Operations Filtering Strategy
  const [activeSuite, setActiveSuite] = useState<'all' | 'leads' | 'ops'>('all');
  const [expandedCard, setExpandedCard] = useState<string | null>('intake');

  // Dynamic Ledger Accounting Rules Engine Context
  const ledgerProfiles: Record<string, { name: string; description: string; entryRule: string }> = {
    cash: {
      name: '💵 Cash-Basis Automation Engine',
      description: 'Logs operations revenue exclusively when customer cash clearances are posted by the bank. Ideal for direct individual consultants and micro-agencies.',
      entryRule: 'Ledger Engine Event: Cash Received -> Debit Operating Bank Cash | Credit Revenue Received'
    },
    accrual: {
      name: '📈 Accrual-Basis Automation Engine',
      description: 'Logs operational revenue instantly when a client invoice is finalized and dispatched, tracking long-term balance metrics and receivables arrays.',
      entryRule: 'Ledger Engine Event: Invoice Finalized -> Debit Accounts Receivable | Credit Earned Fees'
    },
    corporate: {
      name: '⚖️ Corporate & Advisory Standard Framework',
      description: 'Manages complex multi-month retainers, separating immediate billings from deferred revenue accounts dynamically based on service delivery schedules.',
      entryRule: 'Ledger Engine Event: Retainer Processed -> Debit Cash | Credit Unearned Client Liability'
    }
  };

  // Structured Core Automation Data Modules
  const coreModules: AutomationFeature[] = [
    {
      id: 'intake',
      title: '1. Multi-Channel Lead Intake & WhatsApp Funnels',
      icon: <Users className="h-6 w-6 text-blue-400 animate-pulse" />,
      eli5: 'An instant digital receptionist. It catches incoming inquiries from Facebook, Google, or website forms, instantly builds a tracking profile, and fires a helpful introduction packet directly to the client\'s WhatsApp.',
      techDetails: [
        'Webhooks parsing API data from Facebook Lead Ads, Google Forms, and custom landing endpoints',
        'Automatic deduplication check cross-referencing company names, emails, and mobile numbers',
        'Intelligent lead distribution via customizable parameters (Round-Robin, location proximity, or availability)'
      ]
    },
    {
      id: 'onboarding',
      title: '2. Smart Onboarding & OCR Identification Reading',
      icon: <FileCheck className="h-6 w-6 text-emerald-400" />,
      eli5: 'No more slow paperwork. Clients upload photos of corporate IDs, and our system uses computer vision to extract details, check tax databases, and generate engagement contracts for digital signing.',
      techDetails: [
        'Secure OCR parsing engines transforming dirty image files into structured JSON data',
        'Automated structural API verifications validating corporate registration indices and tax registry configurations',
        'Masked storage protocols ensuring strict data handling protocols (e.g., [ID Digits Redacted for Security])'
      ]
    },
    {
      id: 'bookkeeping',
      title: '3. Automated Bookkeeping & Bank Statement Matching',
      icon: <Layers className="h-6 w-6 text-indigo-400 animate-bounce" />,
      eli5: 'A digital data sorter that logs into authorized bank feeds daily, accurately matches income with outstanding bills, reads receipts, and cleanly categorizes business expenses.',
      techDetails: [
        'Direct core integration processing electronic institutional financial text feeds continuously',
        'Algorithmic transaction matching sorting recurring items based on historical text signatures',
        'Cloud repository scanning reading expense logs and extracting line-item totals effortlessly'
      ]
    },
    {
      id: 'taxation',
      title: '4. Tax, GST Compliance & Automated Reminders',
      icon: <Calculator className="h-6 w-6 text-teal-400" />,
      eli5: 'A constant internal calendar monitor. It builds a checklist of upcoming state tax filings, alerts clients via text to upload missing files, and computes calculated tax balance options automatically.',
      techDetails: [
        'Real-time transaction compliance loops computing outstanding state tax obligations',
        'Automated multi-channel broadcast engine dispatching alert protocols (at 30, 15, and 7 day parameters)',
        'Data verification monitors mapping internal transaction matrices against primary ledger declarations'
      ]
    },
    {
      id: 'audit',
      title: '5. Intelligent Audit Management & Anomaly Scanners',
      icon: <ShieldCheck className="h-6 w-6 text-red-400 animate-pulse" />,
      eli5: 'A round-the-clock internal auditor. It combs through rows of ledger transactions, instantly surfaces double entries or unusual amounts, and generates clean validation sheets for review.',
      techDetails: [
        'Statistical distribution analysis identifying operational discrepancies and transaction abnormalities',
        'Automated checklist creation custom-tailored to designated industry compliance parameters',
        'Immutable internal trace logs documenting file modifications and review history chains'
      ]
    },
    {
      id: 'reporting',
      title: '6. Dynamic MIS Reporting & Dashboard Generation',
      icon: <BarChart3 className="h-6 w-6 text-cyan-400" />,
      eli5: 'A magical financial viewing mirror. It turns rows of confusing numbers into clean, colorful charts showing the firm\'s accurate cash flow, active profits, and outstanding bills.',
      techDetails: [
        'Real-time compiling engines building balance sheets and income summaries on-demand',
        'Interactive financial ratio engines mapping current operational metrics instantly',
        'Secure distribution engines emailing password-protected tracking metrics to specified stakeholders'
      ]
    }
  ];

  return (
    <div className="audits-zoom-in relative bg-[#070b14] text-slate-100 min-h-screen py-20 px-4 sm:px-8 selection:bg-indigo-500 selection:text-white">
      {/* Background Lighting Gradients */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Branding Header Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-bold text-indigo-400 uppercase tracking-widest">
            <Cpu className="h-4 w-4 animate-spin text-indigo-400" />
            <span>Operational Efficiency Engine</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
            Accounting Firm{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-200 to-emerald-400 bg-clip-text text-transparent">
              Automation Hub
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A cohesive automation architecture linking client generation, automated data processing pipelines, and internal company operations.
          </p>
        </div>

        {/* Global Configuration Dashboard Control Console */}
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-6 backdrop-blur-md shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-indigo-400" />
              Dynamic System Customization Console
            </h2>
            <span className="text-xs font-mono text-slate-500">v2.4.0-Stable</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Control 1: Core Accounting Service Specialization Line Dropdown */}
            <div className="space-y-2">
              <label htmlFor="accounting-line-select" className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                1. Accounting Service Focus
              </label>
              <div className="relative">
                <select
                  id="accounting-line-select"
                  value={accountingLine}
                  onChange={(e) => setAccountingLine(e.target.value)}
                  className="w-full appearance-none bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white cursor-pointer focus:outline-none focus:border-indigo-500 transition-all"
                >
                  <option value="corporate">🏢 Corporate & Enterprise General Ledger</option>
                  <option value="tax">🧾 Tax Consulting & GST Advisory Line</option>
                  <option value="audit">⚖️ High-Volume Statutory Auditing Operations</option>
                  <option value="smb">📊 Fractional CFO & Small Business Bookkeeping</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Control 2: Active Financial Accounting Operational System Dropdown */}
            <div className="space-y-2">
              <label htmlFor="ledger-framework-select" className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                2. Internal Accounting Model
              </label>
              <div className="relative">
                <select
                  id="ledger-framework-select"
                  value={ledgerFramework}
                  onChange={(e) => setLedgerFramework(e.target.value)}
                  className="w-full appearance-none bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white cursor-pointer focus:outline-none focus:border-emerald-500 transition-all"
                >
                  <option value="cash">💵 Cash-Basis Method</option>
                  <option value="accrual">📈 Accrual-Basis Method</option>
                  <option value="corporate">⚖️ Corporate & Advisory Retainer Rules</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Control 3: Scope Visibility Filtering Toggles */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                3. System Automation Scope
              </label>
              <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-xl border border-white/10 h-[46px] items-center">
                <button
                  type="button"
                  onClick={() => setActiveSuite('all')}
                  className={`text-xs font-bold py-2 rounded-lg transition-all ${
                    activeSuite === 'all' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Full View
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSuite('leads')}
                  className={`text-xs font-bold py-2 rounded-lg transition-all ${
                    activeSuite === 'leads' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Leads Only
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSuite('ops')}
                  className={`text-xs font-bold py-2 rounded-lg transition-all ${
                    activeSuite === 'ops' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Ops Only
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Financial Ledger Mode Infrastructure Display Block */}
        <div className="bg-gradient-to-r from-indigo-950/30 via-slate-900/40 to-emerald-950/20 border border-indigo-500/20 rounded-2xl p-6 shadow-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400 flex-shrink-0">
              <Calculator className="h-5 w-5 animate-pulse" />
            </div>
            <div className="space-y-1 w-full">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Active Core Ledger Target Architecture</span>
              <h3 className="text-xl font-extrabold text-white">{ledgerProfiles[ledgerFramework].name}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{ledgerProfiles[ledgerFramework].description}</p>
              <div className="mt-3 block font-mono text-xs bg-black/50 border border-white/5 px-3 py-1.5 rounded-lg text-emerald-400 max-w-max">
                {ledgerProfiles[ledgerFramework].entryRule}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Solution Operations Modules Execution Stack */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-emerald-400" />
              Operational Automation Modules Execution Tree
            </h2>
            <div className="text-xs text-slate-400 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5">
              Active Strategy Track: <span className="text-indigo-400 font-bold uppercase">{accountingLine}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {coreModules
              .filter(mod => {
                if (activeSuite === 'leads') return mod.id === 'intake';
                if (activeSuite === 'ops') return mod.id !== 'intake';
                return true;
              })
              .map((mod) => {
                const isExpanded = expandedCard === mod.id;
                return (
                  <div 
                    key={mod.id}
                    onClick={() => setExpandedCard(isExpanded ? null : mod.id)}
                    className={`border transition-all duration-200 rounded-2xl p-5 text-left bg-slate-900/20 ${
                      isExpanded 
                        ? 'border-indigo-500/30 shadow-xl shadow-indigo-950/20 bg-slate-950/40' 
                        : 'border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl border ${isExpanded ? 'bg-indigo-950 border-indigo-500/30' : 'bg-slate-950 border-white/5'}`}>
                          {mod.icon}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white transition-colors group-hover:text-indigo-400">
                          {mod.title}
                        </h3>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-indigo-400' : ''}`} />
                    </div>

                    {isExpanded && (
                      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-white/5 animate-fadeIn">
                        
                        {/* Left Column: ELI5 Non-Technical Explanation Block */}
                        <div className="bg-indigo-600/[0.02] border border-indigo-500/10 rounded-xl p-4 space-y-2">
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded uppercase tracking-wider">
                            👶 Simple Concept Explanation (ELI5)
                          </span>
                          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                            {mod.eli5}
                          </p>
                        </div>

                        {/* Right Column: High-Value Technical Specifications Block */}
                        <div className="bg-slate-950/80 border border-white/5 rounded-xl p-4 space-y-2">
                          <span className="inline-block text-[10px] font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded uppercase tracking-wider">
                            ⚙️ Developer API & Subsystem Routines
                          </span>
                          <ul className="space-y-2 text-xs text-slate-400">
                            {mod.techDetails.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="text-emerald-400 h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span className="leading-normal">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        {/* Global Structural Continuous Automation Deployed Workers */}
        <div className="border border-white/5 bg-gradient-to-b from-slate-900/20 to-transparent rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
              <Database className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Active Background Deployed Workers</h3>
              <p className="text-xs text-slate-400">Asynchronous systems running natively inside backend environments without user intervention</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono text-slate-400">
            <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Sync: Transaction Streams API</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold px-1.5 py-0.5 bg-emerald-500/10 rounded">Idle</span>
            </div>
            <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Parser: Expense Document Scans</span>
              </div>
              <span className="text-[10px] text-indigo-400 font-bold px-1.5 py-0.5 bg-indigo-500/10 rounded">Active</span>
            </div>
            <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Monitor: Corporate Filing Calendars</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold px-1.5 py-0.5 bg-emerald-500/10 rounded">Checked</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}