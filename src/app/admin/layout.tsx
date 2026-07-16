'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { api } from '../../lib/api';
import { LayoutDashboard, MessageSquare, BookOpen, LogOut, Cpu, Loader2, Settings } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [adminUser, setAdminUser] = useState('Admin');

  // If this is the login page, don't show the dashboard layout
  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    if (isLoginPage) {
      setLoading(false);
      return;
    }

    const auth = api.isAuthenticated();
    if (!auth) {
      router.push('/admin/login');
    } else {
      setAuthenticated(true);
      if (typeof window !== 'undefined') {
        const username = window.localStorage.getItem('admin_username') || 'Admin';
        setAdminUser(username);
      }
      setLoading(false);
    }
  }, [pathname, router, isLoginPage]);

  const handleLogout = () => {
    api.logout();
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-dark flex flex-col justify-center items-center space-y-3 text-gray-400">
        <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
        <span className="text-sm">Verifying Session...</span>
      </div>
    );
  }

  // If we are on the login page, render it directly without the dashboard template
  if (isLoginPage) {
    return <>{children}</>;
  }

  // If not authenticated, prevent flash of content
  if (!authenticated) {
    return null;
  }

  const sidebarLinks = [
    { name: 'Dashboard', href: '/admin', icon: <LayoutDashboard className="h-4 w-4" /> },
    { name: 'Inquiries', href: '/admin/inquiries', icon: <MessageSquare className="h-4 w-4" /> },
    { name: 'Blog Posts', href: '/admin/blogs', icon: <BookOpen className="h-4 w-4" /> },
    { name: 'Page Content', href: '/admin/content', icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#070b14] flex text-gray-200 text-left">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#0a0f1d] flex flex-col justify-between hidden md:flex">
        <div className="space-y-6 p-6">
          {/* Sidebar Header */}
          <Link href="/" className="flex items-center space-x-2.5 pb-6 border-b border-white/5">
            <div className="p-2 bg-blue-600/10 border border-blue-500/20 rounded-xl">
              <Cpu className="h-5 w-5 text-blue-500" />
            </div>
            <span className="text-lg font-bold text-white">NeuralSoft Portal</span>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-white/5 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400">
              U
            </div>
            <div>
              <p className="text-xs font-bold text-white">{adminUser}</p>
              <p className="text-[10px] text-gray-500">System Administrator</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-white/5 hover:bg-red-500/10 border border-white/5 hover:border-red-500/20 text-gray-400 hover:text-red-400 rounded-xl text-xs font-bold transition-all"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Panel Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 bg-[#0a0f1d] flex items-center justify-between px-8 md:px-12">
          <div>
            <h1 className="text-lg font-bold text-white">
              {sidebarLinks.find((l) => l.href === pathname)?.name || 'Admin'}
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-xs text-blue-400 hover:text-blue-300 font-bold transition-colors"
            >
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="p-2 md:hidden text-gray-400 hover:text-red-400 transition-colors"
              title="Sign Out"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Scrollable Workspace */}
        <main className="flex-1 overflow-y-auto p-8 md:p-12">{children}</main>
      </div>
    </div>
  );
}

