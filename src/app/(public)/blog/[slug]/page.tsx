import React from 'react';
import Link from 'next/link';
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

const DEFAULT_CTA = {
  ctaHeading: 'Want similar efficiencies for your business?',
  ctaSubtext: 'Let us deploy these custom IDP pipelines and agent networks directly into your operations.',
  ctaButtonText: 'Get Free Consultation',
  ctaButtonLink: '/contact',
};

// Local hardcoded database containing full content for all 6 articles
const HARDCODED_BLOGS: BlogPost[] = [
  {
    id: 1,
    title: 'The Shift to Agentic AI: Moving Beyond Simple LLM Prompts',
    slug: 'shift-to-agentic-ai-beyond-llm-prompts',
    excerpt: 'Discover how autonomous AI agents are redefining enterprise software by taking actions, executing complex multi-step workflows, and continuously learning from user feedback.',
    category: 'AI Trends',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    createdAt: '2026-03-15T08:00:00.000Z',
    content: `For the past few years, the tech landscape has been dominated by conversational AI. We learned to prompt, write detailed instructions, and wait for a generated response. But prompting is fundamentally passive. The next frontier belongs to Agentic AI—autonomous agents that don’t just chat, but execute.

### What Makes an AI "Agentic"?

Unlike classic chatbots that require step-by-step hand-holding, Agentic systems are designed with planning, memory, and tool usage. They are built around a loop of observation, decision-making, and execution.

- **Autonomous Planning:** Breaking down a broad goal ("Audit this vendor contract") into discrete sequential actions.
- **Tool Integration:** The ability to call APIs, query databases, execute calculations, and read code.
- **Self-Correction:** Evaluating outputs against constraints and retrying automatically if an error occurs.

### How Enterprises are Deploying Agents

Rather than deploying broad, general-purpose agents, enterprises find the most value in specialized agent networks. By setting up specialized roles, companies can orchestrate highly complex multi-agent workflows.

For instance, a customer support network might feature a Router Agent, a Database Lookup Agent, a Drafting Agent, and a QA Auditor Agent. Together, they resolve deep user requests with zero human intervention.

### The Roadmap Ahead

Transitioning to agentic workflows requires shifting your mental model from "writing prompts" to "delegating goals." Companies that lay down the infrastructure for structured memory and agent monitoring logs now will dominate the next decade of automated operations.`
  },
  {
    id: 2,
    title: 'Automating Invoicing for a Global Logistics Firm: A Case Study',
    slug: 'case-study-automating-invoicing-global-logistics',
    excerpt: 'How NeuralSoft implemented a custom agentic pipeline to parse 50,000+ monthly international invoices, cutting manual verification overhead and processing time by over 84%.',
    category: 'Case Studies',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    readTime: '8 min read',
    createdAt: '2026-03-10T14:30:00.000Z',
    content: `When dealing with international logistics, document formats are notoriously chaotic. Every port, customs agency, and shipping line operates with its own custom invoice layout, language translations, and structural quirks. Our client, a global shipping logistics provider, was drowning in over 50,000 multi-page invoices per month.

### The Challenge: Rigid Systems and High Error Rates

Prior to partnering with NeuralSoft, the client relied on standard template-based Optical Character Recognition (OCR). This traditional system failed whenever a supplier modified their invoice template by even a single pixel. This resulted in:

- **60% Manual Review Rate:** Most invoices were flagged for human verification.
- **7-Day Processing Backlog:** Delays in payment verification led to customs clearance hold-ups.
- **Costly Data Entry Mistakes:** Inconsistent currencies and itemized taxes caused frequent human ledger errors.

### The NeuralSoft Solution

We designed an Intelligent Document Processing (IDP) pipeline integrated with a dynamic, multi-agent validation layer.

1. **Multimodal Extraction:** Leveraging vision-language models to extract structured JSON data without relying on static templates.
2. **Deterministic Validation:** Setting up strict schema boundaries to isolate totals, tax configurations, and line items.
3. **Autonomous Discrepancy Resolution:** Implementing agents capable of querying the client's internal ERP to automatically match invoice items with historical purchase orders.

### The Results

Within 90 days of deploying the NeuralSoft IDP pipeline, the system achieved spectacular performance gains.

- **84% reduction in overall invoice processing times.**
- **Manual review rate slashed from 60% down to 4.2%.**
- **Saves an estimated 1,200 hours of manual data entry every single month.**`
  },
  {
    id: 3,
    title: 'Step-by-Step: Building Resilient Document Extraction Pipelines',
    slug: 'guide-resilient-document-extraction-pipelines',
    excerpt: 'A comprehensive technical guide on handling edge cases, complex formatting errors, dynamic layouts, and low-resolution scans in modern document processing architectures.',
    category: 'Automation Guides',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    readTime: '10 min read',
    createdAt: '2026-03-01T11:00:00.000Z',
    content: `Building a document extraction pipeline is relatively easy in a sandbox. But when deployed to production, it will immediately encounter crumpled papers, low-resolution phone photos, skewed orientations, and corrupted PDFs. This technical guide outlines how to build a production-grade, highly resilient pipeline.

### Step 1: Intelligent Pre-Processing

Raw documents must be normalized before they are fed into vision models or parser pipelines. Skipping this step drastically increases API costs and hallucinations.

- **Deskewing:** Correcting rotational angles using OpenCV to align the document vertically.
- **Contrast Optimization:** Using adaptive thresholding to maximize text clarity against dark or shadowed backgrounds.
- **Format Normalization:** Converting complex, multi-page formats (like complex nested TIFFs or encrypted PDFs) into a standard high-resolution image array.

### Step 2: Extracting with Schema Constraints

Do not rely on open-ended LLM requests. Always enforce structured schemas utilizing modern schema validation mechanisms like Pydantic or JSON Schema.

By enforcing rigid structural schemas at the API level (using tools like instructor or OpenAI's Structured Outputs), you guarantee that downstream databases will never receive malformed objects.

### Step 3: Implementing Double-Loop Verification

Even the best AI models can occasionally misread numbers. To eliminate error, build a double-loop programmatic verification step:

- **Mathematical Cross-Checking:** Programmatically verify that the sum of line items matches the stated subtotal and taxes.
- **Cross-Reference Matching:** Match parsed vendor names against your existing CRM/ERP database to prevent duplicate entity creation.`
  },
  {
    id: 4,
    title: 'The Evolution of Intelligent Document Processing (IDP)',
    slug: 'evolution-of-intelligent-document-processing',
    excerpt: 'We trace the journey from rigid, rule-based OCR templates to multimodal vision-language models capable of understanding spatial layouts and unstructured business contracts natively.',
    category: 'AI Trends',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    createdAt: '2026-02-28T10:00:00.000Z',
    content: `Document processing has quietly evolved from a niche back-office task to one of the most critical battlegrounds for corporate operational efficiency. To understand where IDP is going, we have to look back at how we got here.

### Generation 1: Template-based OCR

In the early days, software relied on exact X/Y coordinate templates. You defined a specific box on an invoice where the "Invoice Number" resided. If the vendor moved that number by an inch, the template broke completely. It was brittle, expensive to configure, and required continuous developer maintenance.

### Generation 2: Machine Learning Classifiers

The second wave introduced basic layout classification and named entity recognition (NER). While more flexible than rigid coordinate boxes, these models still required training on thousands of clean, labeled sample documents to achieve acceptable accuracy.

### Generation 3: Generative AI & Multimodal Foundation Models

Today, we are in the era of multimodal foundation models. Modern architectures understand documents the same way humans do: by simultaneously analyzing the visual layout, typographic hierarchy, and semantic text.

At NeuralSoft, we leverage this generation of IDP to help companies read completely novel documents on Day 1 with zero model training, bringing unprecedented speed and flexibility to operational pipelines.`
  },
  {
    id: 5,
    title: 'Mitigating Hallucinations in Financial AI Agents',
    slug: 'guide-mitigating-hallucinations-financial-ai-agents',
    excerpt: 'Practical strategies for implementing strict JSON schemas, multi-agent validation loops, and database-grounding layers to ensure high reliability in critical financial automation.',
    category: 'Automation Guides',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    readTime: '9 min read',
    createdAt: '2026-02-10T16:00:00.000Z',
    content: `When building AI agents for financial pipelines, "mostly accurate" is not acceptable. A single hallucinated decimal point can result in compliance penalties, bookkeeping nightmares, or lost capital. Managing hallucination risks is paramount.

### Grounding Agents with RAG

AI agents should never generate financial assessments purely from their parametric memory. Every action must be grounded in real-time truth.

- **Retrieval-Augmented Generation (RAG):** Provide the agent with precise, extracted text blocks directly within the prompt context.
- **Reference Tagging:** Ensure the agent must cite exactly which document page or paragraph supported its calculated output.

### The Guardrail Architecture

At NeuralSoft, we implement a defensive, multi-layered architecture to trap hallucinations before they propagate to production databases.

- **Type-Safe Schemas:** Utilizing runtime schema enforcement (like TypeScript types or Pydantic schemas) to reject any output containing non-conforming parameters.
- **Critic Agents:** Deploying a second, independent LLM agent whose sole objective is to audit the output of the first agent for inconsistencies.
- **Deterministic Checksums:** Running algorithmic validation checks on all financial tables and balances to guarantee mathematical precision.`
  },
  {
    id: 6,
    title: 'Reducing Compliance Auditing Overhead in Healthcare systems',
    slug: 'case-study-reducing-healthcare-compliance-overhead',
    excerpt: 'A deep dive into how a leading regional healthcare provider utilized secure, localized AI agents to automatically verify health insurance records and compliance documentation.',
    category: 'Case Studies',
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
    createdAt: '2026-01-15T09:15:00.000Z',
    content: `In the healthcare sector, regulatory compliance is highly complex. Providers are required to audit thousands of patient admission files, treatment consent forms, and medical billing ledgers to ensure adherence to strict state and federal mandates.

### The Manual Auditing Bottleneck

Our client—a healthcare provider managing dozens of facilities—was spending massive human resources manually reviewing records. Each compliance audit required professional teams to cross-reference doctor notes with insurance claim forms to avoid compliance penalties.

### Transitioning to Local, HIPAA-Compliant AI

To address their needs safely, NeuralSoft developed a localized AI agent network that complies with rigorous HIPAA privacy guidelines.

1. **Local Model Deployment:** Running open-weights models locally on secure, private VPC instances to guarantee patient data never left secure internal servers.
2. **Automated Cross-Referencing:** Building agents that systematically verified that every procedural code recorded in a billing statement was backed up by corresponding physician documentation.
3. **Structured Explanations:** Generating complete compliance audit reports, flagging missing electronic signatures and identifying potential billing mismatches instantly.

### Major Operational Milestones

Following full integration, the medical compliance team witnessed massive structural improvements.

- **Compliance processing speeds surged by 350%.**
- **Over 99.8% of structural paperwork errors were flagged instantly prior to audit submittals.**
- **Reallocated valuable clinical audit specialists back to complex patient-care improvements.**`
  }
];

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Query local database directly instead of calling API
  const blog = HARDCODED_BLOGS.find((b) => b.slug === slug) || null;

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-left">
        <div className="glass p-8 rounded-3xl border border-red-500/10 text-center bg-gray-900/50 backdrop-blur-md">
          <h2 className="text-xl font-bold text-white mb-2">Article Not Found</h2>
          <p className="text-gray-400 text-sm mb-6">The article you are looking for does not exist.</p>
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
      {/* Visual background glows */}
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
          <div className="glass rounded-3xl p-8 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-900/40 backdrop-blur-md">
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-500" />
                {DEFAULT_CTA.ctaHeading}
              </h4>
              <p className="text-xs text-gray-400 max-w-md">
                {DEFAULT_CTA.ctaSubtext}
              </p>
            </div>
            <Link
              href={DEFAULT_CTA.ctaButtonLink}
              className="inline-flex items-center px-5 py-3 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all shrink-0"
            >
              {DEFAULT_CTA.ctaButtonText}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}