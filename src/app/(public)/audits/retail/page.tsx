'use client';

import React, { useState } from 'react';
import { 
  Zap, 
  ChevronDown, 
  Users, 
  ShoppingBag, 
  RefreshCcw, 
  Cpu, 
  Database,
  Layers,
  Calculator,
  ShieldCheck,
  MessageSquare,
  BarChart3,
  Sparkles,
  CheckCircle2,
  Truck,
  FileText,
  Boxes,
  Store
} from 'lucide-react';

type AutomationFeature = {
  id: string;
  title: string;
  icon: React.ReactNode;
  eli5: string;
  techDetails: string[];
};

export default function RetailAutomationHub() {
  // Retail Vertical Dropdown Selector State
  const [retailType, setRetailType] = useState<string>('general');
  // Operations Filtering Strategy State
  const [activeSuite, setActiveSuite] = useState<'all' | 'leads' | 'ops'>('all');
  // Card Accordion Expansion State
  const [expandedCard, setExpandedCard] = useState<string | null>('leads-intake');

  // Dynamic Retail Target Vertical Customizations
  const retailProfiles: Record<string, { name: string; targetStrategy: string; flowExample: string }> = {
    general: {
      name: '🛒 General Retail & Multi-Category Superstores',
      targetStrategy: 'Optimized for fast barcode scanning, high transaction volumes, multi-aisle stock synchronization, and generalized customer loyalty point loops.',
      flowExample: 'System Trigger: Point of Sale transaction updates regional warehouse levels and logs customer loyalty tier points.'
    },
    furniture: {
      name: '🛋️ High-Ticket Furniture & Home Décor Engine',
      targetStrategy: 'Tailored for high-touch customer consultation, custom showroom appointment bookings, long-lead follow-up sequences, and complex white-glove delivery tracking.',
      flowExample: 'System Trigger: Visual Facebook ad click instantly books a showroom design walkthrough via WhatsApp automated scheduling.'
    },
    electronics: {
      name: '⚡ Electronics, Gadgets & Appliance Systems',
      targetStrategy: 'Built to manage granular serial number tracking, extended manufacturer warranty assignments, batch inventory tracking, and technical trade-in evaluations.',
      flowExample: 'System Trigger: Purchase records instantly activate serial tracking logs and assign localized technical support warranties.'
    },
    fashion: {
      name: '👗 Apparel, Footwear & Trendy Fashion Boutique',
      targetStrategy: 'Configured for high-velocity Variant matrices (Size, Color, Fit arrays), quick seasonal pricing overrides, abandoned cart push prompts, and seamless multi-channel return workflows.',
      flowExample: 'System Trigger: Instagram cart drop initiates an automated 24-hour size-specific discount voucher directly over WhatsApp.'
    },
    jewelry: {
      name: '💎 Luxury Jewelry & High-Value Asset Management',
      targetStrategy: 'Engineered for top-tier security logs, gram-weight metal adjustments, unique item identification tags, personal VIP concierge assignment, and high-value insurance tracking.',
      flowExample: 'System Trigger: High-value lead entry forces instantaneous VIP agent notifications and schedules secure luxury showroom previews.'
    }
  };

  // Structured Core Automation Data Modules mapped to Retail Lifecycles
  const coreModules: AutomationFeature[] = [
    {
      id: 'leads-intake',
      title: '1. Multi-Channel Lead Capture & Instant WhatsApp Funnels',
      icon: <Users className="h-6 w-6 text-blue-400 animate-pulse" />,
      eli5: 'An instant digital greeter. It catches incoming customer questions from Facebook ads, Instagram messages, website forms, or QR codes, builds a profile, and texts them a catalog and store details on WhatsApp right away.',
      techDetails: [
        'Real-time webhooks parsing structural inbound payloads from Meta Graph APIs and landing endpoints',
        'Automatic cross-channel customer profile parsing via unique phone numbers and email variables',
        'Dynamic auto-response payload processing delivering structured WhatsApp catalog cards natively'
      ]
    },
    {
      id: 'crm-routing',
      title: '2. Smart CRM Management & Automated Executive Assignment',
      icon: <MessageSquare className="h-6 w-6 text-cyan-400" />,
      eli5: 'A smart digital sorting box. It files away every new customer under their preferred store location and budget, then instantly hands the lead to the best available salesperson using an elegant round-robin system.',
      techDetails: [
        'Automated database insertion executing deduplication algorithms against historic data logs',
        'Dynamic assignment logic routing profiles based on agent occupancy matrices and specialized category tags',
        'Immediate push alerts tracking response time metadata alongside real-time pipeline visual states'
      ]
    },
    {
      id: 'inventory-ops',
      title: '3. Real-Time Inventory & Auto-Reorder Procurement Pipelines',
      icon: <Boxes className="h-6 w-6 text-emerald-400 text-indigo-400" />,
      eli5: 'A digital stock watcher. It checks your shelves 24/7. When stock drops below a safe limit, it instantly flashes a red light and drafts a clean purchase order to email straight to your supplier.',
      techDetails: [
        'Asynchronous data monitoring scanning inventory tables against strict minimum-stock threshold arrays',
        'Auto-generation of vendor-specific purchase order templates containing real-time SKU identifiers',
        'Instant multi-warehouse inventory reconciliation synced across separate point-of-sale operational platforms'
      ]
    },
    {
      id: 'sales-billing',
      title: '4. Automated POS Sales, Tax Calculations & Digital Receipts',
      icon: <ShoppingBag className="h-6 w-6 text-purple-400" />,
      eli5: 'A super-fast checkout helper. It handles pricing shifts instantly, figures out all state and national tax percentages perfectly, applies active coupon discounts, and text-messages a clean digital receipt.',
      techDetails: [
        'Universal POS system integrations running synchronous web-service calls for instant transaction records',
        'Dynamic tax engine isolating localized tax rules and applying proportional transaction calculations',
        'Automated document distribution passing payment summaries into real-time ledger databases instantly'
      ]
    },
    {
      id: 'accounting-sync',
      title: '5. Daily Cash Reconciliation & Automated Bookkeeping Engines',
      icon: <Calculator className="h-6 w-6 text-teal-400" />,
      eli5: 'An invisible mathematical genius. It hooks up directly to your bank accounts and store terminals every night, checks that all incoming cash matches the sales logs, and builds beautiful profit charts by morning.',
      techDetails: [
        'Daily electronic banking feed ingestion matching operational cash inflows directly against sales records',
        'Automated categorization engine matching regular business costs based on historic transaction rules',
        'Real-time synthesis engine feeding clean balances to target dynamic Profit & Loss report panels'
      ]
    },
    {
      id: 'multi-store-dash',
      title: '6. Multi-Store Reporting & Continuous Management Dashboards',
      icon: <BarChart3 className="h-6 w-6 text-red-400" />,
      eli5: 'A magical business viewing mirror. It takes massive pages of messy store numbers and transforms them into clean, colorful live dashboards so owners can spot their top-selling items and best employees instantly.',
      techDetails: [
        'Distributed query aggregation collecting real-time sales metrics across separate physical branch locations',
        'Analytical processing layers ranking products based on inventory turnover rates and margin parameters',
        'Automated generation routines building snapshot updates for immediate stakeholder visual review'
      ]
    }
  ];

  return (
    <div className="relative bg-[#070b14] text-slate-100 min-h-screen py-16 px-4 sm:px-8 selection:bg-indigo-500 selection:text-white font-sans antialiased">
      {/* Structural Layer Lighting Blurs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Main Strategic Overview Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-bold text-indigo-400 uppercase tracking-widest">
            <Cpu className="h-4 w-4 animate-spin text-indigo-400" />
            <span>Retail Transformation Engine</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
            Retail Operation{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-200 to-emerald-400 bg-clip-text text-transparent">
              Automation Suite
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            A unified, low-latency framework designed to orchestrate front-end customer acquisition and backend inventory, sales, and multi-store operations.
          </p>
        </div>

        {/* Global Pipeline Configuration Selector Module */}
        <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="h-4 w-5 text-indigo-400 animate-pulse" />
              Interactive Solution Control Panel
            </h2>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">Deployment Profile v4.1</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Control Element 1: Retail Vertical Selector Dropdown */}
            <div className="space-y-2">
              <label htmlFor="retail-type-select" className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                1. Select Retail Category Business Profile
              </label>
              <div className="relative">
                <select
                  id="retail-type-select"
                  value={retailType}
                  onChange={(e) => setRetailType(e.target.value)}
                  className="w-full appearance-none bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white cursor-pointer focus:outline-none focus:border-indigo-500 transition-all hover:bg-slate-900"
                >
                  <option value="general">🛒 General Retail / Multi-Category Stores</option>
                  <option value="furniture">🛋️ High-Ticket Furniture & Showroom Décor</option>
                  <option value="electronics">⚡ Electronics, Devices & Household Appliances</option>
                  <option value="fashion">👗 Trendy Apparel, Footwear & Accessories</option>
                  <option value="jewelry">💎 Premium Luxury Jewelry & High-Value Assets</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Control Element 2: Automation Scope Visibility Filters */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                2. Filter Automation Deployment Architecture Focus
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
                  Internal Ops
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Context Profile View Window */}
        <div className="bg-gradient-to-r from-indigo-950/20 via-slate-900/30 to-emerald-950/10 border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400 flex-shrink-0">
              <Store className="h-5 w-5" />
            </div>
            <div className="space-y-1 w-full">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Active Sector Core Operational Model</span>
              <h3 className="text-lg font-black text-white">{retailProfiles[retailType].name}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{retailProfiles[retailType].targetStrategy}</p>
              <div className="mt-3 block font-mono text-xs bg-black/60 border border-white/5 px-3 py-2 rounded-lg text-emerald-400 max-w-max">
                {retailProfiles[retailType].flowExample}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Features Pipeline Accordion Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="h-5 w-5 text-emerald-400" />
            Architectural Component Implementations
          </h2>

          <div className="grid grid-cols-1 gap-3">
            {coreModules
              .filter(mod => {
                if (activeSuite === 'leads') return mod.id === 'leads-intake' || mod.id === 'crm-routing';
                if (activeSuite === 'ops') return mod.id !== 'leads-intake' && mod.id !== 'crm-routing';
                return true;
              })
              .map((mod) => {
                const isExpanded = expandedCard === mod.id;
                return (
                  <div 
                    key={mod.id}
                    onClick={() => setExpandedCard(isExpanded ? null : mod.id)}
                    className={`border transition-all duration-200 rounded-xl p-4 text-left bg-slate-900/10 cursor-pointer ${
                      isExpanded 
                        ? 'border-indigo-500/40 shadow-2xl bg-slate-950/50' 
                        : 'border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg border transition-transform duration-300 ${isExpanded ? 'bg-indigo-950 border-indigo-500/40 rotate-6' : 'bg-slate-950 border-white/5'}`}>
                          {mod.icon}
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-white">
                          {mod.title}
                        </h3>
                      </div>
                      <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-indigo-400' : ''}`} />
                    </div>

                    {isExpanded && (
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/5 transition-all">
                        
                        {/* Non-Technical Structural Explanations (ELI5 Block) */}
                        <div className="bg-indigo-600/[0.02] border border-indigo-500/10 rounded-xl p-4 space-y-1.5">
                          <span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded uppercase tracking-wider">
                            👶 Simple View (ELI5 Concept)
                          </span>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                            {mod.eli5}
                          </p>
                        </div>

                        {/* Developer Specifications Data Block */}
                        <div className="bg-black/40 border border-white/5 rounded-xl p-4 space-y-2">
                          <span className="inline-block text-[9px] font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded uppercase tracking-wider">
                            ⚙️ Technical Microservices & API Subsystems
                          </span>
                          <ul className="space-y-1.5 text-xs text-slate-400">
                            {mod.techDetails.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="text-emerald-400 h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                                <span className="leading-normal font-mono text-[11px]">{detail}</span>
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

        {/* Asynchronous System Background Services Status Board */}
        <div className="border border-white/5 bg-gradient-to-b from-slate-900/10 to-transparent rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400">
              <Database className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Continuous Core Daemon Processes</h3>
              <p className="text-xs text-slate-400">Low-latency tasks performing regular updates across storage tables continuously.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-400">
            <div className="p-3 bg-black/50 border border-white/5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Sync: Variant Stock Feeds</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">Online</span>
            </div>
            <div className="p-3 bg-black/50 border border-white/5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                <span>Parse: OCR Supplier Invoices</span>
              </div>
              <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded font-bold">Parsing</span>
            </div>
            <div className="p-3 bg-black/50 border border-white/5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Scan: Cart Recoveries</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">Active</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}