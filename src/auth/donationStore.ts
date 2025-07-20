import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios, { AxiosError } from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface DonationPost {
    id: number;
    title: string;
    description: string;
    image?: string;
    image_url: string;
    author_name?: string;
    created_at: string;
}

interface DonationsState {
    posts: DonationPost[];
    hasNewUpdates: boolean;
    loading: boolean;

    fetchPosts: () => Promise<void>;
    refreshPosts: () => Promise<void>;
    clearUpdates: () => void;
}

export const useDonationsStore = create<DonationsState>()(
    persist(
        (set, get) => ({
            posts: [],
            hasNewUpdates: false,
            loading: false,

            fetchPosts: async () => {
                set({ loading: true });
                try {
                    const accessToken = localStorage.getItem('accessToken');
                    const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
                    const res = await axios.get(`${BASE_URL}/api/postdonations/`, {
                        headers,
                    });
                    // console.log('fetchPosts response:', res.data);
                    const posts = Array.isArray(res.data.results) ? res.data.results : res.data;
                    set({ posts });
                    // console.log('fetchPosts updated state:', { posts });
                } catch (err: unknown) {
                    const error = err as AxiosError;
                    console.error('Failed to fetch donation posts:', error.response?.data || error.message);
                    set({ posts: [] });
                } finally {
                    set({ loading: false });
                }
            },

            refreshPosts: async () => {
                try {
                    const accessToken = localStorage.getItem('accessToken');
                    const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
                    const res = await axios.get(`${BASE_URL}/api/postdonations/`, {
                        headers,
                    });
                    // console.log('refreshPosts response:', res.data);
                    const latest = Array.isArray(res.data.results) ? res.data.results : res.data;
                    const prev = get().posts;

                    const isDifferent = JSON.stringify(latest) !== JSON.stringify(prev);

                    if (isDifferent) {
                        set({
                            posts: latest,
                            hasNewUpdates: true,
                        });
                        console.log('refreshPosts updated state:', {
                            posts: latest,
                            hasNewUpdates: true,
                        });
                    }
                } catch (err: unknown) {
                    const error = err as AxiosError;
                    console.warn('Silent refresh failed:', error.response?.data || error.message);
                    set({ posts: get().posts || [] });
                }
            },

            clearUpdates: () => set({ hasNewUpdates: false }),
        }),
        {
            name: 'donation-store',
            partialize: (state) => ({
                posts: state.posts,
            }),
        }
    )
);