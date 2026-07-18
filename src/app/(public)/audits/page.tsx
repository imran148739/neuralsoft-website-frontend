'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  AlertTriangle,
  Clock,
  Sparkles,
  Bot,
  Database,
  ArrowRight,
  ShieldCheck,
  Zap,
  Building,
  FileText,
  UserCheck,
  Check,
  UserPlus
} from 'lucide-react';

// Common page link for all solutions
const COMMON_SOLUTION_LINK = '/contact';

const AUDITS_DATA = [
  {
    id: 'policy-renewals',
    company: 'Elite Insurance Associates',
    industry: 'Property & Casualty Insurance',
    summary: 'Elite Insurance was losing 25% of their active auto and home policies every month because staff could not keep up with calling clients manually before their coverage expired.',
    bottlenecks: [
      'Staff spent 4 hours every morning manually checking spreadsheets to find upcoming policy expiration dates.',
      'Calling and leaving voicemails for late payments resulted in zero response from busy clients.',
      'Agents missed cross-selling opportunities because they were too busy chasing past-due renewals.'
    ],
    solutions: [
      'Built an automated system that checks the system daily and sends instant renewal alerts straight to clients via WhatsApp.',
      'Integrated a secure 1-click payment link inside the text message so clients can renew instantly without picking up the phone.',
      'Setup automatic calendar triggers that notify agents to pitch life insurance only after a client successfully renews home coverage.'
    ],
    metrics: [
      { label: 'Policy Retention Rate', before: '75%', after: '94%', isImprovement: true },
      { label: 'Weekly Hours Wasted', value: '28 Hours Saved', isHighlight: true },
      { label: 'Late Payment Drops', before: '18.2%', after: '1.5%', isImprovement: true }
    ],
    roi: 'Retained $6,400/month in premiums that would have expired, allowing agents to focus entirely on closing new sales.'
  },
  {
    id: 'instant-quotes',
    company: 'Metro Mutual Agency',
    industry: 'Life & Health Insurance Brokers',
    summary: 'Metro Mutual was spending hundreds of dollars buying online web leads, but losing 40% of them to competitors because agents took hours to manually type quotes and reply.',
    bottlenecks: [
      'Online quote requests sat in email inboxes for an average of 3.5 hours before an agent looked at them.',
      'Staff manually copy-pasted applicant health data back and forth between 4 different insurance carrier portals.',
      'Leads went cold or bought coverage from faster agencies who called them within the first 5 minutes.'
    ],
    solutions: [
      'Implemented a lead capture pipeline that extracts web form details the exact second a prospect clicks submit.',
      'Connected a smart cross-platform link that generates estimate ranges instantly across top carriers automatically.',
      'Deployed an immediate automated text message response introducing the agent with a direct booking link.'
    ],
    metrics: [
      { label: 'Lead Response Time', before: '3.5 Hours', after: '12 Seconds', isImprovement: true },
      { label: 'Lead Conversion Rate', before: '4.2%', after: '14.8%', isImprovement: true },
      { label: 'Data Entry Mistakes', before: '12%', after: '0%', isImprovement: true }
    ],
    roi: 'Tripled the value of their monthly lead spend and completely eliminated manual typing tasks for agency office staff.'
  },
  {
    id: 'claims-support',
    company: 'Secure Life Brokers',
    industry: 'Commercial & Asset Insurance',
    summary: 'Secure Life’s phone lines were completely gridlocked with frustrated clients calling just to ask basic status tracking questions about their active claims.',
    bottlenecks: [
      'Agents spent over half the working day answering identical phone calls asking "Where is my claim check?".',
      'Manually looking up updates inside internal databases while keeping customers waiting on hold for 10+ minutes.',
      'Customer satisfaction scores dropped due to slow responses during emergency claim situations.'
    ],
    solutions: [
      'Launched a 24/7 AI Insurance Assistant on WhatsApp to securely answer policy questions instantly.',
      'Linked the messaging bot directly to the claims status database using secure encrypted lookup lookups.',
      'Programmed instant phone/text notifications that alert the client the minute a claim is approved or paid.'
    ],
    metrics: [
      { label: 'Claim Status Phone Calls', before: '110 / day', after: '14 / day', isImprovement: true },
      { label: 'Customer Wait Times', before: '12 Mins', after: '0 Mins', isImprovement: true },
      { label: 'Client Satisfaction Score', value: '96% Positive', isHighlight: true }
    ],
    roi: 'Freed up 3 full-time office staff members to handle complex claims adjustments instead of simple status reporting.'
  }
];

const DIAGNOSTIC_QUESTIONS = [
  {
    id: 'renewals',
    label: 'Chasing clients for policy renewals & past-due payments',
    hours: 10,
    solution: 'Automated Renewal & WhatsApp Payment System',
    icon: <Clock className="h-5 w-5 text-cyan-400" />
  },
  {
    id: 'quoting',
    label: 'Manually typing client details into multiple carrier portals for quotes',
    hours: 15,
    solution: 'Multi-Carrier Quote Automation Engine',
    icon: <Database className="h-5 w-5 text-purple-400" />
  },
  {
    id: 'leads',
    label: 'Slow response times to new online insurance leads',
    hours: 8,
    solution: 'Instant Lead Responder & Automatic Text System',
    icon: <UserPlus className="h-5 w-5 text-blue-400" />
  },
  {
    id: 'claims',
    label: 'Answering basic claim status and policy questions over the phone',
    hours: 12,
    solution: '24/7 AI Claims Support WhatsApp Robot',
    icon: <Bot className="h-5 w-5 text-emerald-400" />
  },
  {
    id: 'onboarding',
    label: 'Collecting driving records, IDs, and signatures from new clients',
    hours: 8,
    solution: 'Secure Digital Client Intake Portal',
    icon: <FileText className="h-5 w-5 text-indigo-400" />
  }
];

export default function AuditsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedInefficiencies, setSelectedInefficiencies] = useState<string[]>([]);
  const [employeeCount, setEmployeeCount] = useState(3);

  const filteredAudits = activeTab === 'all'
    ? AUDITS_DATA
    : AUDITS_DATA.filter(audit => audit.id === activeTab);

  const handleInefficiencyToggle = (id: string) => {
    setSelectedInefficiencies(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Diagnostic calculations
  const weeklyHoursWastedPerPerson = selectedInefficiencies.reduce((acc, currId) => {
    const question = DIAGNOSTIC_QUESTIONS.find(q => q.id === currId);
    return acc + (question ? question.hours : 0);
  }, 0);

  const totalWeeklyHoursWasted = weeklyHoursWastedPerPerson * employeeCount;
  const yearlyHoursWasted = totalWeeklyHoursWasted * 52;
  const estimatedAnnualSavings = Math.round(yearlyHoursWasted * 40 * 0.85);

  return (
    <div className="audits-zoom-in relative overflow-hidden py-24 text-left bg-[#070b14] min-h-screen">
      {/* Ambient glow overlays */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24">
        
        {/* Title Header */}
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-bold text-blue-400 uppercase tracking-widest">
            <ShieldCheck className="h-5 w-5" /> Real Examples
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-tight">
            Insurance Agency{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Automation Blueprints
            </span>
          </h1>
          <p className="text-slate-200 text-2xl leading-relaxed font-medium">
            See exactly how traditional insurance agencies eliminate manual paperwork, retain more policies, and reply to client requests in seconds using custom, easy-to-understand automation solutions.
          </p>
        </div>

        {/* Tab Filter Navigation */}
        <div className="flex flex-wrap gap-4 border-b border-white/10 pb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-xl font-bold text-base transition-all ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            All Case Studies
          </button>
          {AUDITS_DATA.map(audit => (
            <button
              key={audit.id}
              onClick={() => setActiveTab(audit.id)}
              className={`px-6 py-3 rounded-xl font-bold text-base transition-all ${
                activeTab === audit.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              {audit.company}
            </button>
          ))}
        </div>

        {/* Audits Sections list */}
        <div className="space-y-16">
          {filteredAudits.map((audit) => (
            <section
              key={audit.id}
              className="bg-white/5 rounded-[40px] border-2 border-white/10 p-8 sm:p-12 relative overflow-hidden backdrop-blur-md shadow-2xl flex flex-col gap-12"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

              {/* Audit Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                    <Building className="h-4 w-4" /> {audit.industry}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{audit.company} Solution</h2>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-3 rounded-2xl text-base font-extrabold flex items-center gap-2">
                  <Zap className="h-5 w-5 animate-pulse" /> Verified Result
                </div>
              </div>

              {/* Audit Description */}
              <div className="text-left space-y-4">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider text-slate-400">The Business Problem</h3>
                <p className="text-slate-200 text-xl leading-relaxed">{audit.summary}</p>
              </div>

              {/* Bottlenecks vs Solutions Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Bottlenecks Found */}
                <div className="bg-red-500/[0.02] border border-red-500/20 rounded-[28px] p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-black text-white">Manual Bottlenecks Found</h4>
                  </div>
                  <ul className="space-y-4">
                    {audit.bottlenecks.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-base sm:text-lg text-slate-300 font-medium">
                        <span className="text-red-500 text-xl font-black shrink-0 mt-0.5">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Automation Deployed */}
                <div className="bg-blue-500/[0.02] border border-blue-500/20 rounded-[28px] p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg">
                      <Bot className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-black text-white">Smart Automation Deployed</h4>
                  </div>
                  <ul className="space-y-4">
                    {audit.solutions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-base sm:text-lg text-slate-300 font-medium">
                        <span className="text-blue-400 text-xl font-black shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Metrics & Return on Investment */}
              <div className="pt-8 border-t border-white/10 space-y-8">
                <h4 className="text-lg font-black text-yellow-400 uppercase tracking-widest">Measured Performance Gains:</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {audit.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{metric.label}</p>
                      
                      {metric.isImprovement ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-500 line-through shrink-0">{metric.before}</span>
                          <span className="text-2xl font-bold text-gray-400 shrink-0">→</span>
                          <span className="text-3xl font-black text-green-400 truncate">{metric.after}</span>
                        </div>
                      ) : (
                        <p className="text-3xl font-black text-indigo-400">{metric.value}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="p-5 bg-emerald-500/5 border border-emerald-500/15 rounded-2xl flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <p className="text-slate-200 text-base sm:text-lg font-bold text-left">
                      <span className="text-emerald-400 uppercase font-black mr-2">Financial Growth:</span> {audit.roi}
                    </p>
                  </div>
                  <Link 
                    href={COMMON_SOLUTION_LINK}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-colors shrink-0"
                  >
                    Setup For My Agency
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Self-Diagnostic Audit tool Section */}
        <section className="bg-white/5 rounded-[40px] p-8 sm:p-16 border-2 border-white/10 relative overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Widget Left Description */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-2 border border-purple-500/20 rounded-full text-sm font-bold uppercase tracking-wider">
                <Sparkles className="h-4 w-4" /> Cost & Time Simulator
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                Calculate Wasted Hours In Your Agency
              </h2>
              <p className="text-slate-200 text-xl leading-relaxed">
                Select the everyday repetitive tasks your staff is currently doing by hand, choose your team size, and see how much money automation can save your agency every year.
              </p>

              {/* Adjust Employee Count */}
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-white text-base font-bold flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-indigo-400" /> Total insurance agents & office staff:
                  </label>
                  <span className="bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-lg text-sm font-extrabold border border-indigo-500/20">
                    {employeeCount} staff
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 border border-white/5 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
            </div>

            {/* Widget Right Interactive Area */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Checkboxes List */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider text-slate-400 text-left">Select Office Inefficiencies:</h3>
                
                <div className="flex flex-col gap-3">
                  {DIAGNOSTIC_QUESTIONS.map((question) => {
                    const isChecked = selectedInefficiencies.includes(question.id);
                    return (
                      <button
                        key={question.id}
                        type="button"
                        onClick={() => handleInefficiencyToggle(question.id)}
                        className={`w-full p-5 rounded-2xl border-2 text-left transition-all duration-300 flex items-start gap-4 ${
                          isChecked
                            ? 'bg-blue-600/10 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                            : 'bg-white/5 border-white/5 hover:border-white/15'
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl border transition-colors shrink-0 mt-0.5 ${
                          isChecked ? 'bg-blue-500/20 border-blue-400 text-blue-400' : 'bg-white/5 border-white/10 text-gray-400'
                        }`}>
                          {isChecked ? <Check className="h-5 w-5" /> : question.icon}
                        </div>
                        <div className="space-y-1">
                          <p className="font-bold text-white text-base leading-snug">{question.label}</p>
                          <p className="text-xs text-slate-400">
                            Wastes ~{question.hours} hours/week per staff member
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Output Results */}
              {selectedInefficiencies.length > 0 ? (
                <div className="bg-[#0f172a] border border-blue-500/30 rounded-3xl p-8 space-y-6 text-left animate-fadeIn">
                  <h4 className="text-xl font-bold text-white border-b border-white/10 pb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-400" /> Agency Diagnostic Report
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Hours Lost / Year</span>
                      <p className="text-3xl font-black text-red-400">{yearlyHoursWasted.toLocaleString()} hrs</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Recoverable Premium Revenue</span>
                      <p className="text-3xl font-black text-green-400">${estimatedAnnualSavings.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Recommended System Deployments:</span>
                    <ul className="space-y-2">
                      {selectedInefficiencies.map((id) => {
                        const question = DIAGNOSTIC_QUESTIONS.find(q => q.id === id);
                        return (
                          <li key={id} className="flex items-center gap-2 text-sm text-slate-200 font-semibold">
                            <span className="text-blue-400 shrink-0">❖</span>
                            <span>{question?.solution}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={COMMON_SOLUTION_LINK}
                      className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-extrabold rounded-2xl text-white bg-blue-600 hover:bg-blue-500 shadow-lg hover:shadow-blue-500/30 transition-all group duration-300"
                    >
                      Get These Solutions Pre-Built Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center text-slate-400 text-base font-medium">
                  Select one or more office tasks above to unlock custom automation strategies and dynamic cost estimates.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Global Free Audit CTA */}
        <section className="text-center">
          <div className="relative bg-white/5 rounded-[40px] p-12 sm:p-20 overflow-hidden border border-white/10 backdrop-blur-md">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-3xl mx-auto space-y-8 relative z-10">
              <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
                Ready to Automate Your Insurance Agency?
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                Stop losing customers to slow manual follow-ups. Get in touch with our team today, and we will build a custom workflow tailored precisely for your office tools.
              </p>
              <div className="pt-6">
                <Link
                  href={COMMON_SOLUTION_LINK}
                  className="inline-flex items-center px-10 py-5 rounded-2xl text-lg sm:text-xl font-extrabold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all group duration-300"
                >
                  Setup Your Free Automation Roadmap 🚀
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}