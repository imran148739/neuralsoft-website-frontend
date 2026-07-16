'use client';

import React from 'react';
import {
  FileText,
  Layers,
  UserCheck,
  Globe,
  CreditCard,
  Key,
  ShieldCheck,
  AlertTriangle,
  Scale,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function TermsOfServicePage() {
  const sections = [
    {
      id: 1,
      title: '1. Scope of Services',
      icon: <Layers className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-lg leading-relaxed">
            NeuralSoft Technologies specializes in custom software engineering, specifically:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 space-y-2">
              <h4 className="text-lg font-bold text-white">Web Development</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Engineering functional web applications and lead capture gateways.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 space-y-2">
              <h4 className="text-lg font-bold text-white">Centralized Dashboards</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Designing and integrating custom CRM control panels and data pipelines.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 space-y-2">
              <h4 className="text-lg font-bold text-white">Automated Workflows</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Calibrating and deploying natural language WhatsApp conversational agents and notification protocols.
              </p>
            </div>
          </div>
          <p className="text-slate-300 text-base leading-relaxed">
            Specific deliverables, development schedules, and project milestones will be detailed in an independent, mutually signed Statement of Work (SOW). Any work outside the defined SOW will require a change order.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: '2. Client Obligations and Prerequisites',
      icon: <UserCheck className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-lg leading-relaxed">
            To guarantee successful project delivery within the targeted timeline, the Client agrees to:
          </p>
          <ul className="space-y-3 pl-5 list-disc text-slate-300 text-base leading-relaxed">
            <li>
              <strong>Provision Access:</strong> Provide timely access to necessary databases, systems, API keys, and third-party administrative portals as requested.
            </li>
            <li>
              <strong>Inbound Content:</strong> Supply all raw brand assets, specific copy guidelines, and workflow rules required for systems design.
            </li>
            <li>
              <strong>System Testing:</strong> Participate in active sandbox testing and complete user acceptance testing (UAT) within the agreed timelines specified in the SOW.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: '3. Third-Party Platform Terms & Associated Fees',
      icon: <Globe className="h-6 w-6" />,
      content: (
        <div className="space-y-4 text-slate-300 text-base leading-relaxed">
          <p>
            Our automation systems integrate with external platforms (including but not limited to Meta Business Suite, Google Cloud, web hosting servers, and domain registrars).
          </p>
          <div className="p-5 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.03]">
            <p className="font-semibold text-white">Direct Billing:</p>
            <p className="mt-1">
              The Client acknowledges that NeuralSoft Technologies does not cover external software fees. All recurring charges, such as domain registrations, cloud server hosting, Meta/Google ad spend, or WhatsApp API per-message rates, must be paid directly to those respective platforms.
            </p>
          </div>
          <p>
            <strong>Platform Policy Compliance:</strong> The Client is solely responsible for ensuring their business model complies with the terms of service of integrated platforms (e.g., Meta’s WhatsApp Business Policy). We are not liable for any account suspensions or API restrictions imposed by third-party platforms.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: '4. Payment Terms, Retainers, and Billing',
      icon: <CreditCard className="h-6 w-6" />,
      content: (
        <div className="space-y-4 text-slate-300 text-base leading-relaxed">
          <p>
            <strong>Project Invoicing:</strong> Custom system builds are billed according to the milestone payment schedule outlined in your Statement of Work.
          </p>
          <p>
            <strong>Deposits:</strong> A non-refundable mobilization deposit is typically required before engineering or systems architecture design commences.
          </p>
          <p>
            <strong>Service Suspensions:</strong> If payments are overdue by more than fourteen (14) business days, we reserve the right to pause all active development and temporarily suspend cloud-hosted dashboard access until the outstanding invoices are cleared.
          </p>
          <p>
            <strong>Post-Deployment Retainers:</strong> Standard support and monthly maintenance operations plans are billed on a recurring monthly cycle, due on the first day of the billing period.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: '5. Intellectual Property (IP) Rights',
      icon: <Key className="h-6 w-6" />,
      content: (
        <div className="space-y-4 text-slate-300 text-base leading-relaxed">
          <p>
            <strong>Client Ownership:</strong> Upon receipt of final and full payment, the Client owns the custom front-end branding assets and specialized workflow configurations specifically coded for their integration.
          </p>
          <p>
            <strong>NeuralSoft Proprietary Frameworks:</strong> We retain all rights, titles, and intellectual property interests in any pre-existing code, baseline system architectures, database paradigms, or proprietary dashboard tools utilized to build your systems.
          </p>
          <p>
            <strong>Case Studies:</strong> Unless strictly prohibited by a signed Non-Disclosure Agreement (NDA), we reserve the right to display a generalized, non-sensitive summary of the automation system&apos;s performance and design as a corporate case study.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      title: '6. Support SLAs & Maintenance',
      icon: <ShieldCheck className="h-6 w-6" />,
      content: (
        <div className="space-y-4 text-slate-300 text-base leading-relaxed">
          <p>
            <strong>Warranty Support:</strong> Every new custom system deployment includes a complimentary thirty (30) day warranty window. This covers system bugs, critical error resolution, and minor logic adjustments directly related to the original scope.
          </p>
          <p>
            <strong>Service Level Agreements (SLA):</strong> Ongoing performance monitoring, feature upgrades, and routine API updates are only provided under an active Monthly Operations & Maintenance Agreement.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      title: '7. Limitation of Liability',
      icon: <AlertTriangle className="h-6 w-6" />,
      content: (
        <div className="space-y-4 text-slate-300 text-base leading-relaxed">
          <p>
            Under no circumstances shall NeuralSoft Technologies, its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
          </p>
          <ul className="space-y-2 pl-5 list-disc">
            <li>Loss of profits, revenue, or business opportunities caused by system downtime.</li>
            <li>Third-party API downtime, outages, or sudden structural policy shifts (e.g., Meta changing WhatsApp API pricing or rules).</li>
            <li>Data loss resulting from hosting failures, unapproved Client-side configuration adjustments, or unauthorized external security breaches.</li>
          </ul>
          <p className="mt-2 font-semibold text-white">
            Our total aggregate liability under any agreement shall not exceed the total amount paid by you to NeuralSoft Technologies for the specific service module causing the issue during the three (3) months immediately preceding the event.
          </p>
        </div>
      ),
    },
    {
      id: 8,
      title: '8. Governing Law & Dispute Resolution',
      icon: <Scale className="h-6 w-6" />,
      content: (
        <p className="text-slate-300 text-base leading-relaxed">
          These Terms of Service, along with any separate service agreements, shall be governed by, construed, and enforced in accordance with the laws of India. Any legal action, dispute, or proceeding arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts located in Chennai, Tamil Nadu, India.
        </p>
      ),
    },
    {
      id: 9,
      title: '9. Modifications to Terms',
      icon: <RefreshCw className="h-6 w-6" />,
      content: (
        <p className="text-slate-300 text-base leading-relaxed">
          We reserve the right to update or modify these Terms of Service at any time. Any changes will be published directly on this webpage with an updated &quot;Last Updated&quot; timestamp. Continued engagement with our services or website after modifications are published constitutes absolute acceptance of the revised Terms.
        </p>
      ),
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
            <FileText className="h-5 w-5" /> LEGAL AGREEMENT
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl font-medium">
            Last Updated: July 2026
          </p>
          <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500/50 to-transparent" />
        </div>

        {/* Intro */}
        <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-normal">
          These Terms of Service (&quot;Terms&quot;) govern the acquisition, deployment, and use of custom software development, system integration, and business automation services provided by NeuralSoft Technologies (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By commissioning our services, executing a Statement of Work (SOW), or interacting with our website, you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) agree to be bound by these Terms.
        </p>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  {section.icon}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {section.title}
                </h2>
              </div>
              <div className="pl-0 sm:pl-16">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Section 10: Contact Info */}
        <section className="space-y-8 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              10. Contact Information
            </h2>
          </div>
          <div className="pl-0 sm:pl-16 space-y-4">
            <p className="text-slate-300 text-lg leading-relaxed">
              For inquiries, legal notices, or clarifications regarding these Terms of Service, please contact our administrative team:
            </p>

            <div className="rounded-[28px] border-2 border-white/10 bg-white/5 p-8 max-w-2xl backdrop-blur-md shadow-2xl space-y-6">
              <h3 className="text-2xl font-extrabold text-white">NeuralSoft Legal</h3>
              
              <div className="space-y-4">
                {/* Entity & Location */}
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-indigo-400 uppercase tracking-wider">Corporate Entity</p>
                    <p className="text-base font-semibold text-gray-200 mt-1">NeuralSoft Technologies — Chennai, India</p>
                  </div>
                </div>

                {/* Email Address */}
                {/* <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-indigo-400 uppercase tracking-wider">Email Address</p>
                    <p className="text-base font-semibold text-gray-200 mt-1">
                      <a href="mailto:hello@neuralsoft.ai" className="hover:text-indigo-400 transition-colors">
                        hello@neuralsoft.ai
                      </a>
                    </p>
                  </div>
                </div> */}

                {/* Direct Hotline */}
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
          </div>
        </section>
      </div>
    </div>
  );
}
