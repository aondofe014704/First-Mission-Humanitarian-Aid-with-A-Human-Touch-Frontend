import axios from 'axios';

// Base API URL from environment
export const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Create axios instance with default config
export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 seconds
});

// Request interceptor for adding auth token + disable caching in dev
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Simpler cache-busting: only add timestamp param in dev
        if (import.meta.env.DEV) {
            const separator = config.url?.includes('?') ? '&' : '?';
            config.url = `${config.url}${separator}_=${Date.now()}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor for handling errors
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If 401 and haven't retried yet, try to refresh token
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem('refreshToken');
            if (refreshToken) {
                try {
                    const { data } = await axios.post(`${API_BASE_URL}/jwt/refresh/`, {
                        refresh: refreshToken,
                    });
                    localStorage.setItem('accessToken', data.access);
                    originalRequest.headers.Authorization = `Bearer ${data.access}`;
                    return apiClient(originalRequest);
                } catch {
                    // Refresh failed, clear tokens
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                    window.location.href = '/';
                }
            }
        }

        return Promise.reject(error);
    }
);
