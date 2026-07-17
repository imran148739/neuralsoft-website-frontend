'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

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

const PAGE_TITLE = 'Insights & Case Studies';
const PAGE_SUBTITLE = 'Read about our latest research in agentic AI, implementation guides for document processing, and real-world efficiency success stories.';

// Fully hardcoded high-quality blog posts matching NeuralSoft's domain
const HARDCODED_BLOGS: BlogPost[] = [
  {
    id: 1,
    title: 'The Shift to Agentic AI: Moving Beyond Simple LLM Prompts',
    slug: 'shift-to-agentic-ai-beyond-llm-prompts',
    excerpt: 'Discover how autonomous AI agents are redefining enterprise software by taking actions, executing complex multi-step workflows, and continuously learning from user feedback.',
    category: 'AI Trends',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
    readTime: '6 min read',
    createdAt: '2026-03-15T08:00:00.000Z'
  },
  {
    id: 2,
    title: 'Automating Invoicing for a Global Logistics Firm: A Case Study',
    slug: 'case-study-automating-invoicing-global-logistics',
    excerpt: 'How NeuralSoft implemented a custom agentic pipeline to parse 50,000+ monthly international invoices, cutting manual verification overhead and processing time by over 84%.',
    category: 'Case Studies',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    readTime: '8 min read',
    createdAt: '2026-03-10T14:30:00.000Z'
  },
  {
    id: 3,
    title: 'Step-by-Step: Building Resilient Document Extraction Pipelines',
    slug: 'guide-resilient-document-extraction-pipelines',
    excerpt: 'A comprehensive technical guide on handling edge cases, complex formatting errors, dynamic layouts, and low-resolution scans in modern document processing architectures.',
    category: 'Automation Guides',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    readTime: '10 min read',
    createdAt: '2026-03-01T11:00:00.000Z'
  },
  {
    id: 4,
    title: 'The Evolution of Intelligent Document Processing (IDP)',
    slug: 'evolution-of-intelligent-document-processing',
    excerpt: 'We trace the journey from rigid, rule-based OCR templates to multimodal vision-language models capable of understanding spatial layouts and unstructured business contracts natively.',
    category: 'AI Trends',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    readTime: '5 min read',
    createdAt: '2026-02-28T10:00:00.000Z'
  },
  {
    id: 5,
    title: 'Mitigating Hallucinations in Financial AI Agents',
    slug: 'guide-mitigating-hallucinations-financial-ai-agents',
    excerpt: 'Practical strategies for implementing strict JSON schemas, multi-agent validation loops, and database-grounding layers to ensure high reliability in critical financial automation.',
    category: 'Automation Guides',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    readTime: '9 min read',
    createdAt: '2026-02-10T16:00:00.000Z'
  },
  {
    id: 6,
    title: 'Reducing Compliance Auditing Overhead in Healthcare systems',
    slug: 'case-study-reducing-healthcare-compliance-overhead',
    excerpt: 'A deep dive into how a leading regional healthcare provider utilized secure, localized AI agents to automatically verify health insurance records and compliance documentation.',
    category: 'Case Studies',
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
    readTime: '7 min read',
    createdAt: '2026-01-15T09:15:00.000Z'
  }
];

export default function BlogPage() {
  // Category filter state
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'AI Trends', 'Case Studies', 'Automation Guides'];

  // Client-side filtering
  const filteredBlogs = activeCategory === 'All'
    ? HARDCODED_BLOGS
    : HARDCODED_BLOGS.filter(blog => blog.category === activeCategory);

  // Split title at '&' for gradient styling
  const titleParts = PAGE_TITLE.split('&');
  const titleBefore = titleParts[0]?.trim() || 'Insights';
  const titleAfter = titleParts[1]?.trim() || 'Case Studies';

  return (
    <div className="relative overflow-hidden py-16 text-left">
      {/* Background Gradients */}
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
            {PAGE_SUBTITLE}
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
        {filteredBlogs.length === 0 ? (
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
                      <span>
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
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