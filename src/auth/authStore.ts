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
    // Authentication-related state
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

    // UI modal control state
    isAuthModalOpen: boolean;
    modalType: 'login' | 'register' | null;

    // Actions
    login: (email: string, password: string) => Promise<boolean>;
    register: (data: RegisterData) => Promise<boolean>;
    logout: () => void;
    refreshAccessToken: () => Promise<boolean>;
    clearError: () => void;

    // Modal control methods
    openAuthModal: (type: 'login' | 'register') => void;
    closeAuthModal: () => void;
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
            // initial state
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,

            // Modal control state
            isAuthModalOpen: false,
            modalType: null,

            // Modal control functions
            openAuthModal: (type) => set({ isAuthModalOpen: true, modalType: type }),
            closeAuthModal: () => set({ isAuthModalOpen: false, modalType: null }),

            // Auth actions
            login: async (email, password) => {
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

                    // Set default Authorization header
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

            register: async (data) => {
                set({ isLoading: true, error: null });
                try {
                    await axios.post(`${BASE_URL}/api/register/`, data);
                    // Auto-login after registration
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