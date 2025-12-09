import axios from 'axios';

// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Create axios instance
export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    // timeout: 10000,
});

// Add cache-busting in development only
apiClient.interceptors.request.use((config) => {
    if (import.meta.env.DEV) {
        const separator = config.url?.includes('?') ? '&' : '?';
        config.url = `${config.url}${separator}_t=${Date.now()}`;
    }
    return config;
});

// Handle errors globally
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Log errors in development
        if (import.meta.env.DEV) {
            console.error('API Error:', {
                url: error.config?.url,
                status: error.response?.status,
                data: error.response?.data,
            });
        }

        // Handle network errors
        if (!error.response) {
            console.error('Network error - check your connection');
        }

        return Promise.reject(error);
    }
);