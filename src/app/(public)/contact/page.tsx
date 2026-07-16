'use client';

import React, { useState, useEffect } from 'react';
import { api } from '../../../lib/api';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, ChevronDown, HelpCircle } from 'lucide-react';

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

export default function ContactPage() {
  const [content, setContent] = useState(defaultContact);

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

  useEffect(() => {
    async function loadContent() {
      try {
        const res = await api.getPageContent('contact');
        if (res && Object.keys(res).length > 0) {
          setContent((prev) => ({ ...prev, ...res }));
        }
      } catch {
        // Silently fall back to defaults
      }
    }
    loadContent();
  }, []);

  const faqs = [
    { q: content.faq1Q, a: content.faq1A },
    { q: content.faq2Q, a: content.faq2A },
    { q: content.faq3Q, a: content.faq3A },
    { q: content.faq4Q, a: content.faq4A },
  ];

  // Split address on newline for <br /> rendering
  const addressLines = content.address.split('\n');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await api.submitInquiry({
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        phone: formData.phone || undefined,
        message: formData.message,
      });
      setSuccess(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative overflow-hidden py-16 text-left">
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Title */}
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {content.pageTitle}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            {content.pageSubtitle}
          </p>
        </div>

        {/* Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Cards (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-blue-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Our Headquarters</h4>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                    {addressLines.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}{i < addressLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-purple-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Call Us</h4>
                  <p className="text-sm text-gray-400 mt-0.5">{content.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-cyan-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Email Us</h4>
                  <p className="text-sm text-gray-400 mt-0.5">{content.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form (Right) */}
          <div className="lg:col-span-7">
            <div className="glass p-8 rounded-3xl border border-white/5 relative">
              {success ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full animate-bounce">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-gray-400 text-sm max-w-sm">
                    Thank you for reaching out. A NeuralSoft automation specialist will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 text-sm text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-semibold">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/5 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-white/5 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Corp"
                        className="w-full bg-white/5 border border-white/5 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white/5 border border-white/5 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">How can we help? *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe the processes you would like to automate..."
                      className="w-full bg-white/5 border border-white/5 focus:border-blue-500/50 rounded-xl p-4 text-sm text-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-bold rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 transition-all text-sm group"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-1.5 text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{content.faqSectionTitle}</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="font-semibold text-white group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 group-hover:text-white transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
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
