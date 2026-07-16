import React from 'react';
import Link from 'next/link';
import { api } from '../../../../lib/api';
import { ArrowLeft, Calendar, Clock, Sparkles } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl?: string;
  readTime: string;
  createdAt: string;
}

const defaultCta = {
  ctaHeading: 'Want similar efficiencies for your business?',
  ctaSubtext: 'Let us deploy these custom IDP pipelines and agent networks directly into your operations.',
  ctaButtonText: 'Get Free Consultation',
  ctaButtonLink: '/contact',
};

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let blog: BlogPost | null = null;
  let errorMsg = '';
  let cta = defaultCta;

  // Fetch blog post and page content settings in parallel
  const [blogResult, ctaResult] = await Promise.allSettled([
    api.getBlogBySlug(slug),
    api.getPageContent('blog'),
  ]);

  if (blogResult.status === 'fulfilled') {
    blog = blogResult.value;
  } else {
    errorMsg = (blogResult.reason as any)?.message || 'Failed to fetch article details.';
  }

  if (ctaResult.status === 'fulfilled' && ctaResult.value && Object.keys(ctaResult.value).length > 0) {
    cta = { ...defaultCta, ...ctaResult.value };
  }

  if (errorMsg || !blog) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-left">
        <div className="glass p-8 rounded-3xl border border-red-500/10 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Article Not Found</h2>
          <p className="text-gray-400 text-sm mb-6">{errorMsg || 'The article you are looking for does not exist.'}</p>
          <Link
            href="/blog"
            className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  // Format content paragraphs
  const paragraphs = blog.content.split('\n\n');

  return (
    <article className="relative overflow-hidden py-16 text-left">
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog List
        </Link>

        {/* Hero Section */}
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold tracking-wider uppercase bg-blue-600/10 border border-blue-500/20 text-blue-400">
            {blog.category}
          </span>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-white/5 pb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>
                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{blog.readTime || '5 min read'}</span>
            </div>
          </div>
        </div>

        {/* Banner Image */}
        {blog.imageUrl && (
          <div className="aspect-video w-full rounded-3xl overflow-hidden bg-gray-950 border border-white/5 shadow-2xl">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
          {paragraphs.map((p, idx) => {
            if (p.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl sm:text-2xl font-bold text-white pt-4">
                  {p.replace('### ', '')}
                </h3>
              );
            }
            if (p.startsWith('- ') || p.startsWith('* ')) {
              const listItems = p.split('\n').map((item) => item.replace(/^[-*]\s+/, ''));
              return (
                <ul key={idx} className="list-disc pl-6 space-y-2 text-gray-300">
                  {listItems.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (p.startsWith('1. ') || p.startsWith('2. ') || p.startsWith('3. ')) {
              const listItems = p.split('\n').map((item) => item.replace(/^\d+\.\s+/, ''));
              return (
                <ol key={idx} className="list-decimal pl-6 space-y-2 text-gray-300">
                  {listItems.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ol>
              );
            }
            return <p key={idx}>{p}</p>;
          })}
        </div>

        {/* Dynamic CTA section at bottom of article */}
        <div className="pt-12 border-t border-white/5">
          <div className="glass rounded-3xl p-8 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-500" />
                {cta.ctaHeading}
              </h4>
              <p className="text-xs text-gray-400 max-w-md">
                {cta.ctaSubtext}
              </p>
            </div>
            <Link
              href={cta.ctaButtonLink}
              className="inline-flex items-center px-5 py-3 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all shrink-0"
            >
              {cta.ctaButtonText}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
