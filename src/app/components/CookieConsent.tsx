'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Settings, Check, X, ShieldAlert } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Granular choices
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if user already made a choice
    const savedConsent = localStorage.getItem('neuralsoft_cookie_consent');
    if (!savedConsent) {
      // Small delay for clean entrance animation
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    } else {
      try {
        setPreferences(JSON.parse(savedConsent));
      } catch (e) {
        console.error('Failed to parse cookie preferences');
      }
    }
  }, []);

  // Listen to the custom event from the footer link
  useEffect(() => {
    const handleOpenPreferences = () => {
      setShowModal(true);
    };

    window.addEventListener('open-cookie-preferences', handleOpenPreferences);
    return () => {
      window.removeEventListener('open-cookie-preferences', handleOpenPreferences);
    };
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('neuralsoft_cookie_consent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleDeclineAll = () => {
    const allDeclined = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('neuralsoft_cookie_consent', JSON.stringify(allDeclined));
    setPreferences(allDeclined);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('neuralsoft_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
  };

  if (!showBanner && !showModal) return null;

  return (
    <>
      {/* 🍪 1. Bottom Slide-in Cookie Banner */}
      {showBanner && !showModal && (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[100] animate-in slide-in-from-bottom-10 duration-500">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Ambient blue aura inside the card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl shrink-0">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-white">We Value Your Privacy</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    We use cookies to optimize system dashboards, analyze performance data, and deliver WhatsApp automation services.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md shadow-blue-500/10 hover:scale-[1.02]"
                >
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Settings className="h-3.5 w-3.5" />
                  Customize
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ⚙️ 2. Advanced Preferences Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative overflow-hidden w-full max-w-lg rounded-3xl border border-white/10 bg-zinc-950 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] max-h-[90vh] flex flex-col">
            {/* Design glows */}
            <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Modal Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 relative z-10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl">
                  <Settings className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Cookie Preferences</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Manage how NeuralSoft handles your data</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-white/5 border border-transparent hover:border-white/10 text-gray-400 hover:text-white rounded-xl transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto py-6 space-y-6 relative z-10 flex-grow pr-1">
              {/* Card 1: Essential (Required) */}
              <div className="p-5 rounded-2xl border border-white/10 bg-white/5 flex gap-4 items-start">
                <div className="pt-0.5">
                  <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Check className="h-3 w-3" />
                  </div>
                </div>
                <div className="flex-grow space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">Essential Cookies</h4>
                    <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 rounded-full uppercase tracking-wider">
                      Required
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Necessary for user session authentication, security checks, and persistent UI configurations. Cannot be turned off.
                  </p>
                </div>
              </div>

              {/* Card 2: Analytics */}
              <div className="p-5 rounded-2xl border border-white/10 bg-white/5 flex gap-4 items-start">
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      setPreferences((prev) => ({ ...prev, analytics: !prev.analytics }))
                    }
                    className={`w-11 h-6 rounded-full p-0.5 transition-colors focus:outline-none cursor-pointer ${
                      preferences.analytics ? 'bg-indigo-600' : 'bg-zinc-800'
                    }`}
                  >
                    <div
                      className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ${
                        preferences.analytics ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex-grow space-y-1">
                  <h4 className="text-base font-bold text-white">Analytics & Performance</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Allows us to analyze page views, monitor API response lags, and calibrate site loading speeds to improve layout scaling.
                  </p>
                </div>
              </div>

              {/* Card 3: Marketing */}
              <div className="p-5 rounded-2xl border border-white/10 bg-white/5 flex gap-4 items-start">
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      setPreferences((prev) => ({ ...prev, marketing: !prev.marketing }))
                    }
                    className={`w-11 h-6 rounded-full p-0.5 transition-colors focus:outline-none cursor-pointer ${
                      preferences.marketing ? 'bg-indigo-600' : 'bg-zinc-800'
                    }`}
                  >
                    <div
                      className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ${
                        preferences.marketing ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex-grow space-y-1">
                  <h4 className="text-base font-bold text-white">Marketing & Retargeting</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Used to measure conversion rates from Google Ads or Meta Campaigns and improve lead capture setups.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 relative z-10 shrink-0">
              <button
                type="button"
                onClick={handleDeclineAll}
                className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 rounded-2xl text-sm font-bold transition-all cursor-pointer"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl text-sm font-bold transition-all cursor-pointer shadow-lg shadow-indigo-500/20 hover:scale-[1.01]"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
