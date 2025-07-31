import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';
import { saveDonationPosts, getAllDonationPosts } from '../types/donationdb';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export interface DonationPost {
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
    isOffline: boolean;

    fetchPosts: () => Promise<void>;
    refreshPosts: () => Promise<void>;
    clearUpdates: () => void;
    setPosts: (posts: DonationPost[]) => void;
}

export const useDonationsStore = create<DonationsState>()(
    persist(
        (set, get) => ({
            posts: [],
            hasNewUpdates: false,
            loading: false,
            isOffline: false,

            setPosts: (posts) => set({ posts }),

            fetchPosts: async () => {
                set({ loading: true });
                try {
                    if (!navigator.onLine) {
                        const cached = await getAllDonationPosts();
                        set({ posts: cached, isOffline: true });
                        toast.info('Offline: Showing cached campaigns.');
                        return;
                    }

                    const accessToken = localStorage.getItem('accessToken');
                    const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
                    const res = await axios.get(`${BASE_URL}/api/postdonations/`, {
                        headers,
                    });
                    const posts = Array.isArray(res.data.results) ? res.data.results : res.data;
                    set({ posts, isOffline: false });
                    await saveDonationPosts(posts);
                } catch (err: unknown) {
                    const error = err as AxiosError;
                    console.error('Failed to fetch donation posts:', error.response?.data || error.message);
                    try {
                        const cached = await getAllDonationPosts();
                        if (cached.length) {
                            set({ posts: cached, isOffline: true });
                            toast.info('Failed to fetch campaigns. Showing cached data.');
                        } else {
                            set({ posts: [] });
                            toast.error('Failed to fetch campaigns and no cached data available.');
                        }
                    } catch (dbErr) {
                        console.error('Failed to load cached posts:', dbErr);
                        set({ posts: [] });
                        toast.error('Failed to load campaigns.');
                    }
                } finally {
                    set({ loading: false });
                }
            },

            refreshPosts: async () => {
                try {
                    if (!navigator.onLine) {
                        set({ isOffline: true });
                        toast.info('Offline: Cannot refresh campaigns.');
                        return;
                    }

                    const accessToken = localStorage.getItem('accessToken');
                    const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
                    const res = await axios.get(`${BASE_URL}/api/postdonations/`, {
                        headers,
                    });
                    const latest = Array.isArray(res.data.results) ? res.data.results : res.data;
                    const prev = get().posts;

                    const isDifferent = JSON.stringify(latest) !== JSON.stringify(prev);
                    if (isDifferent) {
                        set({
                            posts: latest,
                            hasNewUpdates: true,
                            isOffline: false,
                        });
                        await saveDonationPosts(latest);
                        toast.success('Campaigns updated.');
                    }
                } catch (err: unknown) {
                    const error = err as AxiosError;
                    console.warn('Silent refresh failed:', error.response?.data || error.message);
                    set({ isOffline: !navigator.onLine });
                    toast.warning('Failed to refresh campaigns.');
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
