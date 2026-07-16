'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { api } from '../../../lib/api';
import { Calendar, Clock, ArrowRight, Loader2, BookOpen } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  imageUrl?: string;
  readTime: string;
  createdAt: string;
}

const defaultBlogContent = {
  pageTitle: 'Insights & Case Studies',
  pageSubtitle: 'Read about our latest research in agentic AI, implementation guides for document processing, and real-world efficiency success stories.',
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pageContent, setPageContent] = useState(defaultBlogContent);

  // Category state
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'AI Trends', 'Case Studies', 'Automation Guides'];

  useEffect(() => {
    async function loadAll() {
      // Load blog posts
      try {
        const data = await api.getBlogs();
        setBlogs(data || []);
      } catch (err: any) {
        setError(err.message || 'Failed to load blog posts.');
      } finally {
        setLoading(false);
      }

      // Load dynamic header content (non-blocking)
      try {
        const res = await api.getPageContent('blog');
        if (res && Object.keys(res).length > 0) {
          setPageContent((prev) => ({ ...prev, ...res }));
        }
      } catch {
        // Silently fall back to defaults
      }
    }
    loadAll();
  }, []);

  const filteredBlogs = activeCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === activeCategory);

  // Split title at '&' for gradient styling
  const titleParts = pageContent.pageTitle.split('&');
  const titleBefore = titleParts[0]?.trim() || 'Insights';
  const titleAfter = titleParts[1]?.trim() || 'Case Studies';

  return (
    <div className="relative overflow-hidden py-16 text-left">
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {titleBefore}&{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {titleAfter}
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            {pageContent.pageSubtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blogs Content */}
        {loading ? (
          <div className="py-24 flex flex-col items-center justify-center space-y-3">
            <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
            <p className="text-gray-500 text-sm">Fetching publications...</p>
          </div>
        ) : error ? (
          <div className="glass p-8 rounded-2xl border border-red-500/10 text-center text-red-400 max-w-lg mx-auto">
            <p className="font-semibold">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-xs font-bold text-blue-400 hover:text-blue-300"
            >
              Retry
            </button>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="h-12 w-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500">No articles found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="glass glass-hover rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-between group"
              >
                <div>
                  {/* Article Image */}
                  {blog.imageUrl && (
                    <div className="h-48 relative overflow-hidden bg-gray-950">
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  {/* Article Content */}
                  <div className="p-6 space-y-4">
                    <span className="inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase bg-blue-600/10 border border-blue-500/20 text-blue-400">
                      {blog.category}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between text-[11px] text-gray-500 border-t border-white/5 pt-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1.5" />
                      <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1.5" />
                      <span>{blog.readTime || '5 min read'}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center text-xs font-bold text-blue-400 hover:text-blue-300 group/link"
                  >
                    Read Full Article
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
