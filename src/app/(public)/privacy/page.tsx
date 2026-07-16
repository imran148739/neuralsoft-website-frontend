'use client';

import React from 'react';
import { Shield, Lock, FileText, CheckCircle, Mail, Phone, MapPin, Eye } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const collectionData = [
    {
      category: 'Identity Data',
      type: 'Full name, job title, corporate entity name.',
      purpose: 'Client onboarding, communication, and contract execution.',
    },
    {
      category: 'Contact Data',
      type: 'Corporate email address, telephone number, WhatsApp contact details.',
      purpose: 'Responding to inquiries, project updates, and sending system alerts.',
    },
    {
      category: 'Operational & Configuration Data',
      type: 'Business process logs, communication history, workflow templates, target system credentials.',
      purpose: 'Designing and configuring your centralized dashboard (CRM) and WhatsApp workflow engines.',
    },
    {
      category: 'Technical & Usage Data',
      type: 'IP addresses, browser types, device identifiers, and interaction data with our portal.',
      purpose: 'Monitoring website performance, diagnostics, and security auditing.',
    },
  ];

  return (
    <div className="relative overflow-hidden py-24 text-left bg-[#070b14] min-h-screen">
      {/* Background gradients */}
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 relative z-10">
        
        {/* Header Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm font-bold text-indigo-400 uppercase tracking-widest">
            <Shield className="h-5 w-5" /> Data Protection
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl font-medium">
            Last Updated: July 2026
          </p>
          <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500/50 to-transparent" />
        </div>

        {/* Intro */}
        <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-normal">
          NeuralSoft Technologies (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, interact with our services, or utilize our custom automation, dashboard, and WhatsApp communication systems. Please read this Privacy Policy carefully. By accessing our website or utilizing our services, you consent to the data practices described in this policy.
        </p>

        {/* Section 1: Information We Collect */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <FileText className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">1. Information We Collect</h2>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed">
            To deliver and maintain our custom automation platforms, we collect several categories of information, summarized below:
          </p>
          
          {/* Responsive Custom Table */}
          <div className="overflow-x-auto rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-white/10 bg-white/5">
                  <th className="p-6 text-sm font-black uppercase tracking-wider text-indigo-400">Category</th>
                  <th className="p-6 text-sm font-black uppercase tracking-wider text-indigo-400">Type of Data Collected</th>
                  <th className="p-6 text-sm font-black uppercase tracking-wider text-indigo-400">Primary Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {collectionData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 text-base font-extrabold text-white whitespace-nowrap">{row.category}</td>
                    <td className="p-6 text-base font-medium text-slate-200 leading-relaxed">{row.type}</td>
                    <td className="p-6 text-base font-medium text-slate-300 leading-relaxed">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">2. How We Use Your Information</h2>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed">
            We process personal and operational data based on legitimate business interests, contractual obligations, and direct consent. Specifically, we use your information to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-indigo-400 shrink-0" />
                Design and Build Services
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Provision and configure custom websites, centralized CRM dashboards, and natural language WhatsApp workflows as outlined in our service agreements.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-indigo-400 shrink-0" />
                Facilitate Communication
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Respond to partner inquiries, deliver technical support, and send crucial system configuration updates.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-indigo-400 shrink-0" />
                Deploy Automated Reminders
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Set up trigger-based notifications (such as transaction confirmations or renewal warnings) on behalf of your integrated business workflows.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-indigo-400 shrink-0" />
                Maintain Security & Compliance
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Detect, prevent, and address technical issues, unauthorized access, or fraudulent activity, and meet licensing, tax, and registration requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Data Sharing & Third-Party Integrations */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <Shield className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">3. Data Sharing & Third-Party Integrations</h2>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed">
            We do not sell, rent, or trade your personal or business data to third parties. Your information is only shared under strict confidential terms with trusted sub-processors necessary to run your automated ecosystem:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-sm font-black text-indigo-400 shrink-0 mt-1">
                A
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Meta & WhatsApp Business API</h4>
                <p className="text-slate-300 text-base mt-1 leading-relaxed">To engineer, configure, and route automated customer conversations and broadcast notifications on your behalf.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-sm font-black text-indigo-400 shrink-0 mt-1">
                B
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Hosting & Cloud Infrastructure Providers</h4>
                <p className="text-slate-300 text-base mt-1 leading-relaxed">Secure servers and databases used to run your customized systems and centralized dashboard applications.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-sm font-black text-indigo-400 shrink-0 mt-1">
                C
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Enterprise Integration Tools</h4>
                <p className="text-slate-300 text-base mt-1 leading-relaxed">Middleware pipelines (such as APIs or webhook relays) explicitly required to automate your operational flows.</p>
              </div>
            </li>
          </ul>
          <div className="p-6 rounded-2xl border-2 border-indigo-500/20 bg-indigo-500/5 backdrop-blur-md">
            <p className="text-indigo-300 text-base leading-relaxed font-semibold">
              <strong className="text-white">Note on Third-Party Billing:</strong> While we assist in configuring these integrations, you are directly responsible for the operational and licensing accounts (such as Meta Business Suite or web hosting) established with these platforms.
            </p>
          </div>
        </section>

        {/* Section 4: Data Retention & Security */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">4. Data Retention & Security</h2>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed">
            We implement industry-standard administrative, technical, and physical security measures designed to protect your data from unauthorized access, alteration, disclosure, or destruction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[24px] border-2 border-white/10 bg-white/5 backdrop-blur-md space-y-4">
              <h3 className="text-xl font-bold text-white">Retention Policy</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                We retain your personal and business data only for as long as necessary to fulfill the purposes outlined in this policy or to comply with legal, tax, or reporting requirements.
              </p>
            </div>
            <div className="p-8 rounded-[24px] border-2 border-white/10 bg-white/5 backdrop-blur-md space-y-4">
              <h3 className="text-xl font-bold text-white">Security Standards</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Data transmitted through our custom gateways and CRM systems is secured using standard encryption protocols (SSL/TLS) during transmission and restricted access controls at rest.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Your Rights and Choices */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">5. Your Rights and Choices</h2>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed">
            Depending on your jurisdiction, you possess specific rights regarding the personal data we hold about you:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Access & Portability', desc: 'You may request a copy of the personal data we currently store.' },
              { title: 'Correction & Rectification', desc: 'You have the right to update or correct incomplete or inaccurate information.' },
              { title: 'Erasure ("Right to be Forgotten")', desc: 'You can request that we delete your personal or operational profile, subject to contractual or legal record-keeping requirements.' },
              { title: 'Consent Withdrawal', desc: 'Where processing is based on consent, you may withdraw it at any time.' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-300 text-base leading-relaxed">
            To exercise any of these rights, please contact our privacy compliance team using the details provided below.
          </p>
        </section>

        {/* Section 6: Contact Us */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">6. Contact Us</h2>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed">
            If you have questions, concerns, or requests regarding this Privacy Policy or our data management practices, please contact us:
          </p>
          
          <div className="rounded-[28px] border-2 border-white/10 bg-white/5 p-8 max-w-2xl backdrop-blur-md shadow-2xl space-y-6">
            <h3 className="text-2xl font-extrabold text-white">Privacy Compliance Team</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Shield className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-black text-indigo-400 uppercase tracking-wider">Entity & Location</p>
                  <p className="text-base font-semibold text-gray-200 mt-1">NeuralSoft Technologies — Chennai, India</p>
                </div>
              </div>

              {/* <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-black text-indigo-400 uppercase tracking-wider">Email Address</p>
                  <p className="text-base font-semibold text-gray-200 mt-1">
                    <a href="mailto:hello@neuralsoft.ai" className="hover:text-indigo-400 transition-colors">hello@neuralsoft.ai</a>
                  </p>
                </div>
              </div> */}

              <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Phone className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-black text-indigo-400 uppercase tracking-wider">Direct Hotline</p>
                  <p className="text-base font-semibold text-gray-200 mt-1">+91 9342371091</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
