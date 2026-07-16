'use client';

import React, { useState } from 'react';
import { api } from '../../../lib/api';
import {
  MapPin,
  Send,
  Loader2,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  User,
  Mail,
  Building2,
  Smartphone,
  MessageSquare,
  Activity,
  CheckCircle2,
} from 'lucide-react';

const content = {
  pageTitle: 'Scale Your Operations with Custom Automation',
  pageSubtitle:
    'NeuralSoft Technologies engineers custom web applications, centralized dashboard integrations, and intelligent WhatsApp workflows designed to eliminate manual bottlenecks and accelerate business growth.',
  address: 'NeuralSoft Technologies, Chennai, India',
  phone: '+91 9342371091',
  email: 'hello@neuralsoft.ai',
  faqSectionTitle: 'Frequently Asked Questions',

  faq1Q: 'What is the expected deployment timeline for a custom system?',
  faq1A:
    'We execute a structured 6-week delivery roadmap:\n• Week 1: Requirements gathering, system architecture, and scoping.\n• Week 2: Development of the brand landing page and lead capture framework.\n• Weeks 3-4: Construction of the centralized CRM control panel and message dispatch engine.\n• Week 5: Engineering and calibration of the natural language WhatsApp assistant.\n• Week 6: End-to-end sandbox testing, quality assurance, and system handover.',

  faq2Q: 'What core architecture is included in the NeuralSoft ecosystem?',
  faq2A:
    'Our standard enterprise deployment packages three integrated layers:\n1. A high-performance Web Gateway configured to capture and validate inbound prospects.\n2. A Unified Dashboard (CRM) to manage customer profiles, review chronological conversation logs, and execute targeted bulk messaging campaigns.\n3. An Automated WhatsApp Workflow Engine to handle recurring status notifications, transaction reminders, and direct customer interactions 24/7.',

  faq3Q: 'Who is responsible for third-party platform licensing and operational fees?',
  faq3A:
    'NeuralSoft covers the architectural design, custom coding, implementation, and deployment. Any ongoing third-party costs—such as custom domains, Meta/Google ad spend, or direct WhatsApp Business API consumption rates—are billed directly by the respective utility providers. We provide comprehensive configuration support for these integrations.',

  faq4Q: 'What support SLA is provided post-deployment?',
  faq4A:
    'Each system deployment includes a 30-day comprehensive warranty covering functional debugging, system calibration, and critical platform updates. Beyond this window, we offer predictable, tiered monthly operations and maintenance agreements to ensure continuous platform availability.',
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: content.faq1Q, a: content.faq1A },
    { q: content.faq2Q, a: content.faq2A },
    { q: content.faq3Q, a: content.faq3A },
    { q: content.faq4Q, a: content.faq4A },
  ];

  const addressLines = content.address.split('\n');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      // 1. Submit to database (NestJS backend)
      await api.submitInquiry({
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        phone: formData.phone || undefined,
        message: formData.message,
      });

      // 2. Send email notification (Next.js server-side SMTP route)
      try {
        await fetch('/api/send-inquiry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            message: formData.message,
          }),
        });
      } catch (emailErr) {
        console.error('Email send failed:', emailErr);
        // We do not throw emailErr so the UI still displays success since it saved to DB
      }

      setSuccess(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative overflow-hidden py-24 text-left bg-[#070b14] min-h-screen">
      {/* Ambient Glows */}
      <div className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">

        {/* Page Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm font-bold text-indigo-400 uppercase tracking-widest">
            <Activity className="h-5 w-5" /> Partner Inquiry
          </div>
          <h4 className="sm:text-4xl font-black text-white tracking-tight leading-tight">
            {content.pageTitle}
          </h4>
          {/* <p className="text-slate-200 text-xl sm:text-2xl leading-relaxed font-medium max-w-3xl">
            {content.pageSubtitle}
          </p> */}
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT: Info & Steps */}
          <div className="lg:col-span-5 space-y-8">

            {/* Contact Info Card */}
            <div className="rounded-[28px] border-2 border-white/10 bg-white/5 p-8 space-y-8 backdrop-blur-md shadow-2xl">
              <div>
                <h2 className="text-2xl font-extrabold text-white">Direct Channels</h2>
                <p className="text-slate-300 text-base mt-1.5">
                  Connect with our business development representatives directly.
                </p>
              </div>

              <div className="space-y-5">
                {/* Office */}
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-indigo-400 uppercase tracking-wider">Headquarters</p>
                    <p className="text-base font-semibold text-gray-200 mt-1">
                      {addressLines.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}{i < addressLines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>

                {/* Phone / WhatsApp Link */}
                <a
                  href="https://wa.me/919342371091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <svg
                      className="h-7 w-7 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.216 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-black text-emerald-400 uppercase tracking-wider group-hover:text-emerald-300 transition-colors">
                      Inquiry Line (WhatsApp)
                    </p>
                    <p className="text-base font-semibold text-gray-200 mt-1">{content.phone}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Engagement Workflow Steps */}
            <div className="rounded-[28px] border-2 border-white/10 bg-white/5 p-8 space-y-8 backdrop-blur-md shadow-2xl">
              <div className="pb-5 border-b-2 border-white/10">
                <h3 className="text-2xl font-extrabold text-white">Engagement Workflow</h3>
                <p className="text-slate-300 text-base mt-1.5">A standardized, non-disruptive onboarding process.</p>
              </div>

              <div className="space-y-7">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-base font-black text-indigo-400 shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Scope Definition</h4>
                    <p className="text-slate-300 text-base mt-1 leading-relaxed">
                      Submit your requirements to baseline objectives and define deliverables.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-base font-black text-indigo-400 shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Technical Assessment</h4>
                    <p className="text-slate-300 text-base mt-1 leading-relaxed">
                      Collaborate on an initial discovery call to review integration architecture.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-base font-black text-indigo-400 shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">System Delivery</h4>
                    <p className="text-slate-300 text-base mt-1 leading-relaxed">
                      Engineered systems are sandbox-tested, calibrated, and deployed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] border-2 border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-md">
              {success ? (
                <div className="py-20 flex flex-col items-center justify-center text-center space-y-8">
                  <div className="p-5 bg-emerald-500/10 border-2 border-emerald-500/20 text-emerald-400 rounded-full">
                    <CheckCircle2 className="h-14 w-14" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-extrabold text-white">Submission Confirmed</h3>
                    <p className="text-slate-300 text-lg max-w-sm mx-auto leading-relaxed">
                      Your inquiry has been logged. A systems architect will review your details and contact you within one business day.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-base font-bold transition-all border border-white/15 hover:border-white/25 cursor-pointer"
                  >
                    Submit New Inquiry <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                    <div className="p-5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-base font-semibold flex items-center gap-3">
                      <span>⚠️</span> {error}
                    </div>
                  )}

                  {/* Form Header */}
                  <div className="pb-6 border-b-2 border-white/10">
                    <h3 className="text-2xl font-extrabold text-white">Request Proposal</h3>
                    <p className="text-slate-300 text-base mt-1.5">
                      Provide your details to receive a customized implementation architecture.
                    </p>
                  </div>

                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-gray-300">
                        <User className="h-4 w-4 text-gray-400" />
                        Full Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Kumar"
                        className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-5 py-4 text-base text-white placeholder-gray-600 focus:outline-none transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-gray-300">
                        <Mail className="h-4 w-4 text-gray-400" />
                        Email Address <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. rkumar@mycompany.com"
                        className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-5 py-4 text-base text-white placeholder-gray-600 focus:outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-gray-300">
                        <Building2 className="h-4 w-4 text-gray-400" />
                        Company Name{' '}
                        <span className="text-sm text-gray-500 ml-1">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. NeuralSoft Enterprises"
                        className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-5 py-4 text-base text-white placeholder-gray-600 focus:outline-none transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-gray-300">
                        <Smartphone className="h-4 w-4 text-gray-400" />
                        Phone Number{' '}
                        <span className="text-sm text-gray-500 ml-1">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-5 py-4 text-base text-white placeholder-gray-600 focus:outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-300">
                      <MessageSquare className="h-4 w-4 text-gray-400" />
                      Automation Requirements <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe the processes you'd like to automate (e.g., WhatsApp bots, lead dashboards, database syncing)..."
                      className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-5 py-4 text-base text-white placeholder-gray-600 focus:outline-none transition-all resize-none font-medium leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800/40 text-white font-extrabold rounded-2xl transition-all text-lg cursor-pointer border border-indigo-500 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="space-y-10 max-w-4xl mx-auto border-t-2 border-white/10 pt-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-gray-400 uppercase tracking-widest">
              <HelpCircle className="h-5 w-5" /> Common Questions
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white">{content.faqSectionTitle}</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border-2 border-white/10 bg-white/5 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-md overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                  >
                    <span className="font-bold text-gray-200 group-hover:text-indigo-400 transition-colors text-lg pr-6">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-6 w-6 text-gray-500 group-hover:text-white transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-indigo-400' : ''
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-8 pb-8 text-base text-slate-300 leading-relaxed border-t-2 border-white/10 pt-6 whitespace-pre-line font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}