'use client';

import React, { useState, useEffect } from 'react';
import { api } from '../../../lib/api';
import { Plus, Edit2, Trash2, X, Loader2, Calendar, Clock, Image } from 'lucide-react';

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

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'AI Trends',
    imageUrl: '',
    readTime: '5 min read',
  });
  
  const [modalLoading, setModalLoading] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState<number | null>(null);

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    try {
      const data = await api.getBlogs();
      setBlogs(data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load blog posts.');
    } finally {
      setLoading(false);
    }
  }

  const handleOpenCreate = () => {
    setModalMode('create');
    setSelectedBlogId(null);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: 'AI Trends',
      imageUrl: '',
      readTime: '5 min read',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (blog: BlogPost) => {
    setModalMode('edit');
    setSelectedBlogId(blog.id);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      imageUrl: blog.imageUrl || '',
      readTime: blog.readTime,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) return;
    setActionLoadingId(id);
    try {
      await api.deleteBlog(id);
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (err: any) {
      alert(err.message || 'Failed to delete blog post.');
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalLoading(true);

    try {
      const payload = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        imageUrl: formData.imageUrl || undefined,
        readTime: formData.readTime,
      };

      if (modalMode === 'create') {
        const created = await api.createBlog(payload);
        setBlogs((prev) => [created, ...prev]);
      } else if (modalMode === 'edit' && selectedBlogId) {
        const updated = await api.updateBlog(selectedBlogId, payload);
        setBlogs((prev) => prev.map((b) => (b.id === selectedBlogId ? updated : b)));
      }

      setIsModalOpen(false);
    } catch (err: any) {
      alert(err.message || 'Failed to submit article details.');
    } finally {
      setModalLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center space-y-3">
        <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
        <p className="text-gray-500 text-sm">Loading publication database...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-left relative">
      {error && (
        <div className="glass p-4 rounded-xl border border-red-500/10 text-red-400 text-xs font-semibold">
          {error}
        </div>
      )}

      {/* Header Actions */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <h2 className="text-base font-bold text-white">Publications ({blogs.length})</h2>
        
        <button
          onClick={handleOpenCreate}
          className="inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-500/10"
        >
          <Plus className="h-4 w-4 mr-1.5" />
          Add New Post
        </button>
      </div>

      {/* Table List */}
      {blogs.length === 0 ? (
        <div className="glass p-12 rounded-2xl border border-white/5 text-center text-gray-500 text-sm">
          No articles written yet. Click "Add New Post" to start.
        </div>
      ) : (
        <div className="glass rounded-2xl border border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-gray-500 border-b border-white/5 bg-white/5">
                  <th className="p-4 font-semibold uppercase tracking-wider">Title</th>
                  <th className="p-4 font-semibold uppercase tracking-wider">Category</th>
                  <th className="p-4 font-semibold uppercase tracking-wider">Read Time</th>
                  <th className="p-4 font-semibold uppercase tracking-wider">Date</th>
                  <th className="p-4 font-semibold uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {blogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-white/5 transition-all">
                    <td className="p-4">
                      <div className="font-semibold text-white max-w-sm truncate">{blog.title}</div>
                      <div className="text-gray-500 text-[10px] truncate max-w-sm">{blog.excerpt}</div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-blue-600/10 border border-blue-500/20 text-blue-400">
                        {blog.category}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400">{blog.readTime || '5 min read'}</td>
                    <td className="p-4 text-gray-500">
                      {new Date(blog.createdAt).toLocaleDateString('en-US')}
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => handleOpenEdit(blog)}
                        disabled={actionLoadingId === blog.id}
                        className="p-1.5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all"
                        title="Edit Article"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        disabled={actionLoadingId === blog.id}
                        className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                        title="Delete Article"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Editor Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="glass w-full max-w-2xl rounded-3xl border border-white/10 shadow-2xl p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <h3 className="text-lg font-bold text-white">
                {modalMode === 'create' ? 'Create Publication' : 'Edit Publication'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-gray-500 hover:text-white rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Title */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Article Title *</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="The Future of RPA..."
                  className="w-full bg-[#0a0f1d] border border-white/5 focus:border-blue-500/50 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Category */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0f1d] border border-white/5 focus:border-blue-500/50 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="AI Trends">AI Trends</option>
                    <option value="Case Studies">Case Studies</option>
                    <option value="Automation Guides">Automation Guides</option>
                  </select>
                </div>

                {/* Read Time */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Read Time</label>
                  <input
                    type="text"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleInputChange}
                    placeholder="5 min read"
                    className="w-full bg-[#0a0f1d] border border-white/5 focus:border-blue-500/50 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Image URL (Unsplash Link)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    <Image className="h-4 w-4" />
                  </span>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full bg-[#0a0f1d] border border-white/5 focus:border-blue-500/50 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Brief Summary / Excerpt *</label>
                <textarea
                  name="excerpt"
                  required
                  rows={2}
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  placeholder="Enter a brief, engaging summary of the article..."
                  className="w-full bg-[#0a0f1d] border border-white/5 focus:border-blue-500/50 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Content Body */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Article Content *</label>
                <textarea
                  name="content"
                  required
                  rows={8}
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Write the full content details here... (Use double newlines for paragraphs, '###' for headings)"
                  className="w-full bg-[#0a0f1d] border border-white/5 focus:border-blue-500/50 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors resize-y font-sans"
                />
              </div>

              {/* Buttons */}
              <div className="pt-4 border-t border-white/5 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-white glass rounded-xl border border-white/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={modalLoading}
                  className="inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-500/10"
                >
                  {modalLoading && <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />}
                  {modalMode === 'create' ? 'Create' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
