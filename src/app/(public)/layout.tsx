'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cpu, Menu, X, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import CookieConsent from '../components/CookieConsent';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-dark text-gray-200">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="p-2.5 bg-blue-600/10 border border-blue-500/20 rounded-xl group-hover:border-blue-500/50 transition-all duration-300">
                  <Cpu className="h-6 w-6 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-100 to-blue-400 bg-clip-text text-transparent">
                  NeuralSoft
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 relative py-1 ${isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              {/* <Link
                href="/admin"
                className="text-xs text-gray-500 hover:text-gray-300 font-medium transition-colors"
              >
                Portal Login
              </Link> */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-200 group"
              >
                Get Automated
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-b border-white/5 px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-base font-medium transition-all ${isActive
                      ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/5 flex flex-col space-y-3 px-3">
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 text-sm font-medium text-gray-400 hover:text-white"
              >
                Portal Login
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-500 text-center shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
              >
                Get Automated
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-bg-dark border-t border-white/5 relative z-10 pt-16 pb-12 overflow-hidden">
        {/* Glow effect in footer background */}
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/5">
            {/* Logo / Tagline */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Cpu className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold text-white">NeuralSoft</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Empowering modern enterprises with autonomous AI agents, workflow automation, and custom LLM solutions.
              </p>
              {/* <div className="flex space-x-4">
                <a href="#" className="p-2 bg-white/5 hover:bg-blue-600/10 hover:text-blue-400 border border-white/5 hover:border-blue-500/20 rounded-lg transition-all" aria-label="Twitter">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-blue-600/10 hover:text-blue-400 border border-white/5 hover:border-blue-500/20 rounded-lg transition-all" aria-label="LinkedIn">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-blue-600/10 hover:text-blue-400 border border-white/5 hover:border-blue-500/20 rounded-lg transition-all" aria-label="GitHub">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              {/* <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Workflow Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
                    AI Conversational Agents
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Intelligent Document Processing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Custom LLM Tuning
                  </Link>
                </li>
              </ul> */}
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-gray-400">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>NeuralSoft Technologies, Chennai, India</span>
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <Phone className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>+91 9884477627</span>
                </li>
                {/* <li className="flex items-center text-sm text-gray-400">
                  <Mail className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>hello@neuralsoft.ai</span>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} NeuralSoft Technologies. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
                className="hover:text-gray-300 transition-colors cursor-pointer text-left bg-transparent border-none p-0 font-inherit"
              >
                Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  );
}
