const API_BASE_URL = 'http://localhost:5000/api';

interface FetchOptions extends RequestInit {
  token?: string;
}

async function apiCall(endpoint: string, options: FetchOptions = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const headers = new Headers(options.headers || {});
  
  // Try to get token from localStorage if not explicitly passed
  let token = options.token;
  if (!token && typeof window !== 'undefined') {
    token = window.localStorage.getItem('admin_token') || undefined;
  }
  
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  
  if (!(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorMessage = 'An error occurred';
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      // JSON parsing failed, use status text
      errorMessage = response.statusText || errorMessage;
    }
    throw new Error(errorMessage);
  }

  // Handle empty responses (like 204 No Content)
  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export const api = {
  // Public blog endpoints
  getBlogs: () => apiCall('/blogs'),
  getBlogBySlug: (slug: string) => apiCall(`/blogs/slug/${slug}`),
  getBlogById: (id: number) => apiCall(`/blogs/${id}`),

  // Public contact endpoint
  submitInquiry: (data: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    message: string;
  }) => apiCall('/inquiries', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  // Auth endpoints
  login: async (username: string, password: string) => {
    const res = await apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    if (res && res.access_token) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('admin_token', res.access_token);
        window.localStorage.setItem('admin_username', username);
      }
    }
    return res;
  },

  logout: () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('admin_token');
      window.localStorage.removeItem('admin_username');
    }
  },

  isAuthenticated: () => {
    if (typeof window !== 'undefined') {
      return !!window.localStorage.getItem('admin_token');
    }
    return false;
  },

  // Admin blog endpoints
  createBlog: (data: {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    imageUrl?: string;
    readTime?: string;
  }) => apiCall('/blogs', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  updateBlog: (id: number, data: {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    imageUrl?: string;
    readTime?: string;
  }) => apiCall(`/blogs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),

  deleteBlog: (id: number) => apiCall(`/blogs/${id}`, {
    method: 'DELETE',
  }),

  // Admin inquiry endpoints
  getInquiries: () => apiCall('/inquiries'),
  updateInquiryStatus: (id: number, status: 'NEW' | 'CONTACTED' | 'RESOLVED') => apiCall(`/inquiries/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  }),
  deleteInquiry: (id: number) => apiCall(`/inquiries/${id}`, {
    method: 'DELETE',
  }),

  // Admin analytics endpoints
  getAnalytics: () => apiCall('/analytics'),

  // Page content endpoints
  getPageContent: (page: string) => apiCall(`/content/${page}`),
  updatePageContent: (page: string, data: Record<string, any>) => apiCall(`/content/${page}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
};
