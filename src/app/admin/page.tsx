'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { api } from '../../lib/api';
import { MessageSquare, BookOpen, Clock, CheckCircle, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

interface AnalyticsData {
  totalInquiries: number;
  inquiriesByStatus: {
    NEW: number;
    CONTACTED: number;
    RESOLVED: number;
  };
  totalBlogs: number;
}

interface Inquiry {
  id: number;
  name: string;
  email: string;
  company?: string;
  status: 'NEW' | 'CONTACTED' | 'RESOLVED';
  createdAt: string;
}

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<AnalyticsData | null>(null);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const [analyticsRes, inquiriesRes] = await Promise.all([
          api.getAnalytics(),
          api.getInquiries(),
        ]);
        setMetrics(analyticsRes);
        setInquiries(inquiriesRes || []);
      } catch (err: any) {
        setError(err.message || 'Failed to load dashboard statistics.');
      } finally {
        setLoading(false);
      }
    }
    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center space-y-3">
        <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
        <p className="text-gray-500 text-sm">Compiling workspace stats...</p>
      </div>
    );
  }

  if (error || !metrics) {
    return (
      <div className="glass p-8 rounded-2xl border border-red-500/10 text-center text-red-400">
        <p className="font-semibold">{error || 'Something went wrong.'}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all"
        >
          Retry
        </button>
      </div>
    );
  }

  const recentInquiries = inquiries.slice(0, 5);

  return (
    <div className="space-y-10">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total inquiries */}
        <div className="glass p-6 rounded-2xl border border-white/5 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Total Inquiries</p>
            <h3 className="text-3xl font-extrabold text-white">{metrics.totalInquiries}</h3>
          </div>
          <div className="p-3 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl">
            <MessageSquare className="h-5 w-5" />
          </div>
        </div>

        {/* Total Blogs */}
        <div className="glass p-6 rounded-2xl border border-white/5 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Total Blogs</p>
            <h3 className="text-3xl font-extrabold text-white">{metrics.totalBlogs}</h3>
          </div>
          <div className="p-3 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-xl">
            <BookOpen className="h-5 w-5" />
          </div>
        </div>

        {/* New inquiries */}
        <div className="glass p-6 rounded-2xl border border-white/5 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">New Messages</p>
            <h3 className="text-3xl font-extrabold text-yellow-500">{metrics.inquiriesByStatus.NEW}</h3>
          </div>
          <div className="p-3 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-xl">
            <Clock className="h-5 w-5" />
          </div>
        </div>

        {/* Resolved Inquiries */}
        <div className="glass p-6 rounded-2xl border border-white/5 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Resolved</p>
            <h3 className="text-3xl font-extrabold text-green-500">{metrics.inquiriesByStatus.RESOLVED}</h3>
          </div>
          <div className="p-3 bg-green-500/10 text-green-400 border border-green-500/20 rounded-xl">
            <CheckCircle className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Inquiries List */}
        <div className="lg:col-span-8 glass p-6 rounded-2xl border border-white/5 space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h3 className="text-base font-bold text-white">Recent Inquiries</h3>
            <Link
              href="/admin/inquiries"
              className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 font-bold transition-colors"
            >
              Manage Inquiries
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>

          {recentInquiries.length === 0 ? (
            <div className="text-center py-10 text-gray-500 text-sm">
              No inquiries found in database.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-gray-500 border-b border-white/5">
                    <th className="pb-3 font-semibold uppercase tracking-wider">Client</th>
                    <th className="pb-3 font-semibold uppercase tracking-wider">Company</th>
                    <th className="pb-3 font-semibold uppercase tracking-wider">Status</th>
                    <th className="pb-3 font-semibold uppercase tracking-wider">Submitted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {recentInquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-white/5 transition-all">
                      <td className="py-4.5">
                        <div className="font-semibold text-white">{inq.name}</div>
                        <div className="text-gray-500 text-[10px]">{inq.email}</div>
                      </td>
                      <td className="py-4.5 text-gray-400">{inq.company || '—'}</td>
                      <td className="py-4.5">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[9px] font-bold ${
                            inq.status === 'NEW'
                              ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400'
                              : inq.status === 'CONTACTED'
                              ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                              : 'bg-green-500/10 border border-green-500/20 text-green-400'
                          }`}
                        >
                          {inq.status}
                        </span>
                      </td>
                      <td className="py-4.5 text-gray-500">
                        {new Date(inq.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Quick Stats Distribution */}
        <div className="lg:col-span-4 glass p-6 rounded-2xl border border-white/5 space-y-6">
          <h3 className="text-base font-bold text-white border-b border-white/5 pb-4">Inquiry Distribution</h3>
          
          <div className="space-y-4">
            {/* New messages bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400 font-semibold flex items-center">
                  <AlertCircle className="h-3.5 w-3.5 text-yellow-500 mr-1.5" />
                  New Messages
                </span>
                <span className="text-white font-bold">{metrics.inquiriesByStatus.NEW}</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-500 rounded-full"
                  style={{
                    width: `${
                      metrics.totalInquiries > 0
                        ? (metrics.inquiriesByStatus.NEW / metrics.totalInquiries) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Contacted messages bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400 font-semibold flex items-center">
                  <Clock className="h-3.5 w-3.5 text-blue-500 mr-1.5" />
                  Contacted
                </span>
                <span className="text-white font-bold">{metrics.inquiriesByStatus.CONTACTED}</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{
                    width: `${
                      metrics.totalInquiries > 0
                        ? (metrics.inquiriesByStatus.CONTACTED / metrics.totalInquiries) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Resolved messages bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400 font-semibold flex items-center">
                  <CheckCircle className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                  Resolved
                </span>
                <span className="text-white font-bold">{metrics.inquiriesByStatus.RESOLVED}</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{
                    width: `${
                      metrics.totalInquiries > 0
                        ? (metrics.inquiriesByStatus.RESOLVED / metrics.totalInquiries) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

