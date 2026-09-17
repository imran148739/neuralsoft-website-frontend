'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Phone, MapPin, ChevronDown } from 'lucide-react';
import CookieConsent from '../components/CookieConsent';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenSubMenu, setMobileOpenSubMenu] = useState<string | null>(null);

  // Structured menu items matching the simplified, non-technical target strategy
  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      subLinks: [
        { name: 'Instagram Reels', href: '/services/instagram' },
        { name: 'Business Automation', href: '/services' },
      ],
    },
    {
      name: 'Real Examples',
      href: '/audits',
      subLinks: [
        { name: 'For Insurance Agents', href: '/audits/insurance' },
        { name: 'For Accounting Firms', href: '/audits/accounting' },
        { name: 'For Retail Shops', href: '/audits/retail' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const solutionLinks = [
    { name: 'Instagram Reels', href: '/services/instagram' },
    { name: 'Your Smart Website', href: '/services' },
    { name: 'Your Easy Dashboard', href: '/services' },
    { name: '24/7 Friendly Chat Robots', href: '/services' },
    { name: 'Super Connections', href: '/services' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-dark text-gray-200">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <Image
                  src="/neural_bright_logo.png"
                  alt="NeuralSoft logo"
                  width={200}
                  height={200}
                  priority
                  // className="h-12 w-auto sm:h-14"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.subLinks && pathname.startsWith(link.href));

                if (link.subLinks) {
                  return (
                    <div key={link.name} className="relative group/dropdown py-1">
                      <Link
                        href={link.href}
                        className={`text-sm font-medium transition-colors duration-200 flex items-center space-x-1 py-1 ${
                          isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover/dropdown:rotate-180" />
                      </Link>

                      {/* Dropdown Box Organized by Industry Type */}
                      <div className="absolute top-full left-0 mt-0 w-60 hidden group-hover/dropdown:block bg-bg-dark/95 backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {link.subLinks.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                isSubActive
                                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/10'
                                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          );
                        })}
                      </div>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                      isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white'
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
              const isActive = pathname === link.href || (link.subLinks && pathname.startsWith(link.href));

              if (link.subLinks) {
                return (
                  <div key={link.name} className="space-y-1">
                    <button
                      type="button"
                      onClick={() => setMobileOpenSubMenu(mobileOpenSubMenu === link.name ? null : link.name)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-blue-600/5 text-blue-400'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileOpenSubMenu === link.name ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Expandable Mobile Sub-links organized directly by user intent */}
                    {mobileOpenSubMenu === link.name && (
                      <div className="pl-4 pr-2 pt-1 space-y-1 border-l border-white/5 ml-3">
                        {link.subLinks.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileOpenSubMenu(null);
                              }}
                              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                isSubActive
                                  ? 'text-blue-400 bg-white/5'
                                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-base font-medium transition-all ${
                    isActive
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
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-blue-50/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-50/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/5">
            {/* Logo / Tagline */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Image
                  src="/neural_bright_logo.png"
                  alt="NeuralSoft logo"
                  width={200}
                  height={200}
                  priority
                  // className="h-12 w-auto sm:h-14"
                />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Empowering modern enterprises with autonomous AI agents, workflow automation, and custom LLM solutions.
              </p>
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
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Solutions</h3>
              <ul className="space-y-3">
                {solutionLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
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
                  <span>+91 9342371091</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
            <div className="flex flex-col space-y-1 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} NeuralSoft Technologies. All rights reserved.</p>
              <p className="text-gray-500/80">NeuralSoft Technologies is a registered MSME enterprise</p>
            </div>
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