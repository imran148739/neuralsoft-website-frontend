'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { api } from '../../../lib/api';
import { Cpu, Lock, User, Loader2, ArrowLeft } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If already authenticated, redirect to /admin immediately
  useEffect(() => {
    if (api.isAuthenticated()) {
      router.push('/admin');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.login(username, password);
      router.push('/admin');
    } catch (err: any) {
      setError(err.message || 'Invalid username or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark flex flex-col justify-center items-center px-4 relative overflow-hidden text-left">
      {/* Background glow */}
      <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-md space-y-6 relative z-10">
        {/* Link back */}
        <Link href="/" className="inline-flex items-center text-xs text-gray-500 hover:text-white transition-colors">
          <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
          Back to Public Website
        </Link>

        {/* Card */}
        <div className="glass p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 bg-blue-600/15 border border-blue-500/30 rounded-2xl">
              <Cpu className="h-6 w-6 text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mt-2">Portal Login</h2>
            <p className="text-xs text-gray-400">NeuralSoft Technologies Admin Dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs font-semibold">
                {error}
              </div>
            )}

            {/* Username Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Username</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500">
                  <User className="h-4 w-4" />
                </span>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full bg-white/5 border border-white/5 focus:border-blue-500/50 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500">
                  <Lock className="h-4 w-4" />
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/5 focus:border-blue-500/50 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center px-5 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-semibold rounded-xl transition-all text-sm shadow-lg shadow-blue-500/10"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Authenticating...
                </>
              ) : (
                'Log In'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
