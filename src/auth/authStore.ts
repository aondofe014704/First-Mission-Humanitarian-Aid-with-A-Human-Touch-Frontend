import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface User {
    id: number;
    name: string;
    email: string;
    phone_number: string;
}

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

    // Actions
    login: (email: string, password: string) => Promise<boolean>;
    register: (data: RegisterData) => Promise<boolean>;
    logout: () => void;
    refreshAccessToken: () => Promise<boolean>;
    clearError: () => void;
}

interface RegisterData {
    name: string;
    email: string;
    password: string;
    phone_number: string;
}

interface LoginResponse {
    access: string;
    refresh: string;
    user: User;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,

            login: async (email: string, password: string) => {
                set({ isLoading: true, error: null });

                try {
                    const response = await axios.post<LoginResponse>(`${BASE_URL}/api/jwt/create/`, {
                        email,
                        password,
                    });

                    const { access, refresh, user } = response.data;

                    set({
                        user,
                        accessToken: access,
                        refreshToken: refresh,
                        isAuthenticated: true,
                        isLoading: false,
                        error: null,
                    });

                    // Set default authorization header
                    axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;

                    return true;
                } catch (error: any) {
                    set({
                        isLoading: false,
                        error: error.response?.data?.detail || 'Login failed',
                    });
                    return false;
                }
            },

            register: async (data: RegisterData) => {
                set({ isLoading: true, error: null });

                try {
                    await axios.post(`${BASE_URL}/api/register/`, data);

                    // Auto-login after successful registration
                    const loginSuccess = await get().login(data.email, data.password);

                    set({ isLoading: false });
                    return loginSuccess;
                } catch (error: any) {
                    set({
                        isLoading: false,
                        error: error.response?.data?.detail || 'Registration failed',
                    });
                    return false;
                }
            },

            logout: () => {
                set({
                    user: null,
                    accessToken: null,
                    refreshToken: null,
                    isAuthenticated: false,
                    error: null,
                });

                // Remove authorization header
                delete axios.defaults.headers.common['Authorization'];
            },

            refreshAccessToken: async () => {
                const { refreshToken } = get();

                if (!refreshToken) {
                    get().logout();
                    return false;
                }

                try {
                    const response = await axios.post(`${BASE_URL}/api/jwt/refresh/`, {
                        refresh: refreshToken,
                    });

                    const { access } = response.data;

                    set({ accessToken: access });
                    axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;

                    return true;
                } catch (error) {
                    get().logout();
                    return false;
                }
            },

            clearError: () => set({ error: null }),
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);