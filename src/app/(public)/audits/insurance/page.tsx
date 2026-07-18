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
  BarChart3
} from 'lucide-react';

// Unified Types
type AutomationFeature = {
  id: string;
  title: string;
  icon: React.ReactNode;
  eli5: string;
  techDetails: string[];
};

export default function UnifiedInsuranceAutomation() {
  // Dropdown States
  const [insuranceType, setInsuranceType] = useState<string>('motor');
  const [accountingType, setAccountingType] = useState<string>('cash');
  
  // Toggle Visibility State System
  const [activeModules, setActiveModules] = useState<Record<string, boolean>>({
    leads: true,
    crm: true,
    ops: true,
    support: true,
    claims: true,
    renewals: true,
    finance: true,
    team: true,
    compliance: true
  });

  const [showAll, setShowAll] = useState<boolean>(true);

  // Toggle helper logic
  const toggleModule = (key: string) => {
    setShowAll(false);
    setActiveModules(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleShowEverything = () => {
    setShowAll(true);
    setActiveModules({
      leads: true,
      crm: true,
      ops: true,
      support: true,
      claims: true,
      renewals: true,
      finance: true,
      team: true,
      compliance: true
    });
  };

  // Dynamic Accounting Profiles
  const accountingProfiles: Record<string, { title: string; desc: string; triggerLog: string }> = {
    cash: {
      title: '💵 Cash-Basis Ledger Operations',
      desc: 'Recognizes operating revenue exclusively when currency physical updates banking accounts. Tailored for agile, direct retail brokers.',
      triggerLog: 'System Trigger: On Cash Receipt -> Debit Cash | Credit Commission Income'
    },
    accrual: {
      title: '📈 Accrual-Basis Enterprise Management',
      desc: 'Recognizes revenue instantly at point-of-sale binding, regardless of settlement status. Tracks real-time active sales pipelines.',
      triggerLog: 'System Trigger: On Policy Binding -> Debit Accounts Receivable | Credit Earned Revenue'
    },
    statutory: {
      title: '⚖️ Statutory Insurance Principles (SAP Framework)',
      desc: 'Monitors long-term systemic liquidity metrics to guarantee policyholder claims cash reserves meet absolute balance requirements.',
      triggerLog: 'System Trigger: On Allocation -> Route to Unearned Premium Reserve | Balance Liability accounts'
    }
  };

  // Structured Module Details
  const automationModules: AutomationFeature[] = [
    {
      id: 'leads',
      title: '1. Lead Generation & Capture Pipeline',
      icon: <Users className="h-6 w-6 text-blue-400 animate-pulse" />,
      eli5: 'Like a smart digital helper standing outside your shop 24/7. It catches every person who asks about pricing from Facebook, Google, or WhatsApp, and assigns them to the best agent instantly!',
      techDetails: [
        'Multi-channel API hooks into Facebook Lead Ads, Google Ads, and custom landing funnels',
        'Automatic deduplication and semantic address parsing matching client inputs',
        'Round-robin and availability-based operational dynamic assignment algorithms'
      ]
    },
    {
      id: 'crm',
      title: '2. Zero-Entry Smart CRM Data Architecture',
      icon: <Layers className="h-6 w-6 text-indigo-400 animate-bounce" />,
      eli5: 'A magical digital binder that automatically writes down your client names, phone numbers, and plan choices without you ever typing a single letter.',
      techDetails: [
        'Real-time automated logging of consumer mobile data, communication history, and previous policy states',
        'Dynamic timeline indexing and predictive lead scoring tracking matrix variables',
        'Instant customer profiling generation complete with automated semantic tagging infrastructure'
      ]
    },
    {
      id: 'ops',
      title: '3. Digital Onboarding & OCR Reading Engine',
      icon: <FileCheck className="h-6 w-6 text-emerald-400" />,
      eli5: 'Your system uses smart computer eyes to read photos of client ID papers (like Driver Licenses or Passports), verifies their history automatically, and saves everything in secure digital lockboxes.',
      techDetails: [
        'Intelligent OCR extraction targeting identification forms (Driver Licenses, Passports, and PAN documents)',
        'Automated background document verification processing models bypassing administrative overhead',
        'Secure tokenized file indexing inside encrypted electronic cloud document directories'
      ]
    },
    {
      id: 'support',
      title: '4. WhatsApp & 24/7 AI Support Agents',
      icon: <MessageSquare className="h-6 w-6 text-teal-400" />,
      eli5: 'A polite automated receptionist living inside WhatsApp. It texts clients welcome brochures, sets up meeting links, and answers questions even when your team is fast asleep.',
      techDetails: [
        'Structured automated messaging sequences (Day 0 Welcome, Day 3 Benefits, Day 7 Reminders)',
        'Conversational AI routing mechanisms tracking account configuration states and claim requests',
        'Integrated scheduling calendar connections running priority customer ticket generation systems'
      ]
    },
    {
      id: 'claims',
      title: '5. Automated Claim Portals & Fraud Spotters',
      icon: <ShieldCheck className="h-6 w-6 text-red-400 animate-pulse" />,
      eli5: 'When a customer gets into an accident, they upload a photo. The smart assistant reads the damage, checks for bad tricks or fake reports, and alerts managers to pay out quickly.',
      techDetails: [
        'Public-facing digital claim entry pathways managing asynchronous data uploads',
        'ML anomaly checkers parsing documents for high-risk flags and transaction alerts',
        'Automated escalation loops optimizing back-office operations for pending accounts'
      ]
    },
    {
      id: 'renewals',
      title: '6. Policy Issuance & Auto-Renewal Clocks',
      icon: <RefreshCcw className="h-6 w-6 text-pink-400" />,
      eli5: 'An automated alarm clock system. It checks policy dates and gently pings clients on text or email at 90, 60, and 30 days before their coverage expires so you never lose business.',
      techDetails: [
        'Algorithmic lifecycle tracking processing expiration arrays across system instances',
        'Multi-channel outreach logic (WhatsApp, SMS, Email sequences)',
        'Instant multi-carrier balance comparison updates routing to auto-generated renewal paperwork'
      ]
    },
    {
      id: 'finance',
      title: '7. Automation of Premium Accounting & GST Invoices',
      icon: <Calculator className="h-6 w-6 text-cyan-400" />,
      eli5: 'A mathematical genius that automatically calculates tax costs, handles payout splits, sends digital receipts to clients, and coordinates with your main ledger system.',
      techDetails: [
        'Auto-compilation of tax structures, commission structures, and agency payout statements',
        'Asynchronous generation of system-signed PDF policy documents and regulatory cash invoices',
        'Real-time hooks reconciling client payments directly with ledger records'
      ]
    },
    {
      id: 'team',
      title: '8. Internal Team & Performance Command Centers',
      icon: <Briefcase className="h-6 w-6 text-amber-400" />,
      eli5: 'A live visual dashboard tracking which sales agents are working, who is winning the most client sales, and how much performance payout they earned today.',
      techDetails: [
        'Live tracking boards evaluating agent operational performance benchmarks',
        'Automated administrative pipelines managing team leaves and processing commission tables',
        'Aggregated regional office matrix trackers plotting real-time strategic KPIs'
      ]
    },
    {
      id: 'compliance',
      title: '9. Background Compliance Monitors',
      icon: <AlertTriangle className="h-6 w-6 text-orange-400" />,
      eli5: 'A quiet digital auditor working silently in the shadows. It verifies all processes follow official guidelines and double-checks files for missing details automatically.',
      techDetails: [
        'Continuous background evaluation routines screening missing or expired regulatory inputs',
        'Unified system audit logging tracking institutional information handling chains',
        'Automated execution of corporate regulatory reports formatting standard transaction fields'
      ]
    }
  ];

  return (
    <div className="audits-zoom-in relative bg-[#070b14] text-slate-100 min-h-screen py-16 px-4 sm:px-8 selection:bg-blue-500 selection:text-white">
      {/* Visual Ambient Light Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Brand Title Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400 uppercase tracking-widest">
            <Cpu className="h-4 w-4 text-blue-400 animate-spin" />
            <span>Smart Insurance Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
            Unified Agency{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-emerald-400 bg-clip-text text-transparent">
              Automation System
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            From automated landing traffic pipelines to backend structural accounting ledgers, fully managed by dynamic backend routines.
          </p>
        </div>

        {/* Global Controls Panel */}
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 backdrop-blur-md shadow-2xl space-y-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-400" />
            Interactive Configuration Center
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Control 1: Insurance Market Sector Selection */}
            <div className="space-y-2">
              <label htmlFor="insurance-sector" className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                1. Targeted Policy Market
              </label>
              <div className="relative">
                <select
                  id="insurance-sector"
                  value={insuranceType}
                  onChange={(e) => setInsuranceType(e.target.value)}
                  className="w-full appearance-none bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white cursor-pointer focus:outline-none focus:border-blue-500 transition-all"
                >
                  <option value="motor">🚗 Motor / Vehicle Insurance Line</option>
                  <option value="life">❤️ Life & Family Asset Protection</option>
                  <option value="health">🏥 Health Risk Insurance Systems</option>
                  <option value="home">🏠 Residential Property Protection</option>
                  <option value="commercial">🏢 Commercial Liability Frameworks</option>
                  <option value="all">🌐 Unified Portfolio (All Insurance Lines)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Control 2: Accounting Variable Select */}
            <div className="space-y-2">
              <label htmlFor="ledger-framework" className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                2. Embedded Financial Accounting Architecture
              </label>
              <div className="relative">
                <select
                  id="ledger-framework"
                  value={accountingType}
                  onChange={(e) => setAccountingType(e.target.value)}
                  className="w-full appearance-none bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white cursor-pointer focus:outline-none focus:border-indigo-500 transition-all"
                >
                  <option value="cash">💵 Cash-Basis Engine</option>
                  <option value="accrual">📈 Accrual-Basis Architecture</option>
                  <option value="statutory">⚖️ Statutory Principles (SAP Standard)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Control 3: Solution Scoping Filters */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                3. Operations Scope Filtering
              </label>
              <div className="flex gap-2 h-[46px] items-center">
                <button
                  type="button"
                  onClick={handleShowEverything}
                  className={`flex-1 text-xs font-bold h-full px-3 rounded-xl border transition-all ${
                    showAll 
                      ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20' 
                      : 'bg-slate-950/60 border-white/10 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  ✨ Full Suite View
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAll(false);
                    setActiveModules({
                      leads: true, crm: true, support: true,
                      ops: false, claims: false, renewals: false, finance: false, team: false, compliance: false
                    });
                  }}
                  className={`flex-1 text-xs font-bold h-full px-3 rounded-xl border transition-all ${
                    !showAll && activeModules.leads && !activeModules.ops
                      ? 'bg-blue-600 border-blue-500 text-white shadow-lg'
                      : 'bg-slate-950/60 border-white/10 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  🚀 Front Leads Only
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Financial Accounting Dynamic Pipeline Indicator */}
        <div className="bg-gradient-to-r from-indigo-950/30 via-slate-900/50 to-emerald-950/20 border border-indigo-500/20 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400 flex-shrink-0">
              <Calculator className="h-5 w-5 animate-pulse" />
            </div>
            <div className="space-y-1 w-full">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Active Financial Architecture Ledger Context</div>
              <h3 className="text-lg font-bold text-white">{accountingProfiles[accountingType].title}</h3>
              <p className="text-sm text-slate-300">{accountingProfiles[accountingType].desc}</p>
              <div className="mt-3 block font-mono text-xs bg-black/40 border border-white/5 px-3 py-1.5 rounded-lg text-emerald-400 max-w-max">
                {accountingProfiles[accountingType].triggerLog}
              </div>
            </div>
          </div>
        </div>

        {/* Master Workflow Block */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-emerald-400" />
              Operational Modules & Infrastructure Layout
            </h2>
            <div className="text-xs text-slate-400 hidden sm:block">
              Selected Segment: <span className="text-blue-400 font-bold uppercase">{insuranceType}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {automationModules.map((mod) => {
              const isVisible = activeModules[mod.id];
              return (
                <div 
                  key={mod.id}
                  onClick={() => toggleModule(mod.id)}
                  className={`border transition-all duration-300 rounded-2xl p-6 cursor-pointer text-left ${
                    isVisible 
                      ? 'bg-slate-900/40 border-white/10 shadow-xl opacity-100' 
                      : 'bg-slate-950/20 border-white/5 opacity-40 hover:opacity-70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${isVisible ? 'bg-slate-950 border-white/10' : 'bg-transparent border-white/5'}`}>
                        {mod.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white">{mod.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded ${
                        isVisible ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-500'
                      }`}>
                        {isVisible ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  </div>

                  {isVisible && (
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-white/5 animate-fadeIn">
                      
                      {/* Left: ELI5 Non-Technical Block */}
                      <div className="bg-blue-600/[0.02] border border-blue-500/10 rounded-xl p-4 space-y-2">
                        <span className="inline-block text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded uppercase tracking-wider">
                          👶 Simplified Operations Explanation (ELI5)
                        </span>
                        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                          {mod.eli5}
                        </p>
                      </div>

                      {/* Right: Technical Functional Steps */}
                      <div className="bg-slate-950/60 border border-white/5 rounded-xl p-4 space-y-2">
                        <span className="inline-block text-[10px] font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded uppercase tracking-wider">
                          ⚙️ Developer API & Workflow Rules
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-400">
                          {mod.techDetails.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-emerald-400 mt-0.5">✔</span>
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

        {/* Global Structural Core Routine Running States */}
        <div className="border border-white/10 bg-gradient-to-b from-slate-900/40 to-transparent rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
              <Database className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Active Background Operational Demons</h3>
              <p className="text-xs text-slate-400">Automated workflows running quietly on standard event timers</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono text-slate-400">
            <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Routine Check: Duplicate Profiles Scan</span>
            </div>
            <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Cron 00:00: Lifecycle Expiration Audit</span>
            </div>
            <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Trigger Sync: CRM &lt;-&gt; WhatsApp API</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}