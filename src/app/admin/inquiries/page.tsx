'use client';

import React, { useState, useEffect } from 'react';
import { api } from '../../../lib/api';
import { Mail, Phone, Calendar, Trash2, CheckCircle, Clock, AlertCircle, Loader2, ArrowUpDown } from 'lucide-react';

interface Inquiry {
  id: number;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  status: 'NEW' | 'CONTACTED' | 'RESOLVED';
  createdAt: string;
}

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  
  // Action status logs
  const [actionLoading, setActionLoading] = useState<number | null>(null);

  useEffect(() => {
    loadInquiries();
  }, []);

  async function loadInquiries() {
    try {
      const data = await api.getInquiries();
      setInquiries(data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load inquiries list.');
    } finally {
      setLoading(false);
    }
  }

  const handleUpdateStatus = async (id: number, status: 'NEW' | 'CONTACTED' | 'RESOLVED') => {
    setActionLoading(id);
    try {
      const updated = await api.updateInquiryStatus(id, status);
      setInquiries((prev) => prev.map((inq) => (inq.id === id ? updated : inq)));
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry(updated);
      }
    } catch (err: any) {
      alert(err.message || 'Failed to update status.');
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
    setActionLoading(id);
    try {
      await api.deleteInquiry(id);
      setInquiries((prev) => prev.filter((inq) => inq.id !== id));
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry(null);
      }
    } catch (err: any) {
      alert(err.message || 'Failed to delete inquiry.');
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center space-y-3">
        <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
        <p className="text-gray-500 text-sm">Fetching client inquiries...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 text-left">
      {error && (
        <div className="glass p-4 rounded-xl border border-red-500/10 text-red-400 text-xs font-semibold">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: List of Inquiries */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <h2 className="text-base font-bold text-white">All Messages ({inquiries.length})</h2>
          </div>

          {inquiries.length === 0 ? (
            <div className="glass p-8 rounded-2xl border border-white/5 text-center text-gray-500 text-sm">
              No inquiries found in database.
            </div>
          ) : (
            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">
              {inquiries.map((inq) => {
                const isSelected = selectedInquiry?.id === inq.id;
                return (
                  <div
                    key={inq.id}
                    onClick={() => setSelectedInquiry(inq)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600/10 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                        : 'bg-[#0d1322] border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white">{inq.name}</h4>
                        <p className="text-xs text-gray-500">{inq.email}</p>
                      </div>
                      
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
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[10px] text-gray-500">
                      <span>{inq.company || 'No Company'}</span>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{new Date(inq.createdAt).toLocaleDateString('en-US')}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Side: Expanded Inquiry Details */}
        <div className="lg:col-span-6">
          {selectedInquiry ? (
            <div className="glass p-8 rounded-3xl border border-white/5 space-y-6 sticky top-6">
              {/* Header */}
              <div className="border-b border-white/5 pb-4 flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">{selectedInquiry.name}</h3>
                  <div className="flex items-center text-xs text-gray-400 gap-4">
                    <span className="flex items-center">
                      <Mail className="h-3.5 w-3.5 mr-1.5 text-blue-400" />
                      {selectedInquiry.email}
                    </span>
                    {selectedInquiry.phone && (
                      <span className="flex items-center">
                        <Phone className="h-3.5 w-3.5 mr-1.5 text-purple-400" />
                        {selectedInquiry.phone}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(selectedInquiry.id)}
                  disabled={actionLoading === selectedInquiry.id}
                  className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                  title="Delete Inquiry"
                >
                  <Trash2 className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Company Info */}
              <div className="text-xs text-gray-500">
                Company: <span className="text-gray-300 font-semibold">{selectedInquiry.company || 'Not Specified'}</span>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</h4>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {selectedInquiry.message}
                </div>
              </div>

              {/* Actions & Status Updates */}
              <div className="pt-4 border-t border-white/5 space-y-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Update Status</h4>
                
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleUpdateStatus(selectedInquiry.id, 'NEW')}
                    disabled={selectedInquiry.status === 'NEW' || actionLoading === selectedInquiry.id}
                    className="flex items-center space-x-1.5 px-3 py-2 text-xs font-bold rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 bg-yellow-500/5 hover:bg-yellow-500/10 text-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>Set New</span>
                  </button>

                  <button
                    onClick={() => handleUpdateStatus(selectedInquiry.id, 'CONTACTED')}
                    disabled={selectedInquiry.status === 'CONTACTED' || actionLoading === selectedInquiry.id}
                    className="flex items-center space-x-1.5 px-3 py-2 text-xs font-bold rounded-xl border border-blue-500/10 hover:border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <Clock className="h-3.5 w-3.5" />
                    <span>Set Contacted</span>
                  </button>

                  <button
                    onClick={() => handleUpdateStatus(selectedInquiry.id, 'RESOLVED')}
                    disabled={selectedInquiry.status === 'RESOLVED' || actionLoading === selectedInquiry.id}
                    className="flex items-center space-x-1.5 px-3 py-2 text-xs font-bold rounded-xl border border-green-500/10 hover:border-green-500/30 bg-green-500/5 hover:bg-green-500/10 text-green-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <CheckCircle className="h-3.5 w-3.5" />
                    <span>Set Resolved</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass p-12 rounded-3xl border border-white/5 text-center text-gray-500 text-sm sticky top-6">
              Select an inquiry from the list to view full details and update status.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
