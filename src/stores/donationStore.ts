import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'sonner';
import { fetchDonationPosts } from '../api/donations';
import { saveDonationPosts, getAllDonationPosts } from '../types/donationdb';
import type { DonationPost } from '../types/donation';

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
                    // Check if online
                    if (!navigator.onLine) {
                        const cached = await getAllDonationPosts();
                        set({ posts: cached, isOffline: true, loading: false });
                        toast.info('Offline: Showing cached campaigns');
                        return;
                    }

                    // Fetch from API
                    const posts = await fetchDonationPosts();
                    set({ posts, isOffline: false, loading: false });

                    // Save to cache
                    await saveDonationPosts(posts);
                } catch (error: any) {
                    console.error('Failed to fetch donation posts:', error);

                    // Try to load from cache
                    try {
                        const cached = await getAllDonationPosts();
                        if (cached.length) {
                            set({ posts: cached, isOffline: true, loading: false });
                            toast.info('Failed to fetch campaigns. Showing cached data');
                        } else {
                            set({ posts: [], loading: false });
                            toast.error('Failed to load campaigns');
                        }
                    } catch (cacheError) {
                        console.error('Failed to load cached posts:', cacheError);
                        set({ posts: [], loading: false });
                        toast.error('Failed to load campaigns');
                    }
                }
            },

            refreshPosts: async () => {
                try {
                    // Check if online
                    if (!navigator.onLine) {
                        set({ isOffline: true });
                        toast.info('Offline: Cannot refresh campaigns');
                        return;
                    }

                    // Fetch latest data
                    const latest = await fetchDonationPosts();
                    const prev = get().posts;

                    // Check if data changed
                    const isDifferent = JSON.stringify(latest) !== JSON.stringify(prev);

                    if (isDifferent) {
                        set({
                            posts: latest,
                            hasNewUpdates: true,
                            isOffline: false,
                        });
                        await saveDonationPosts(latest);
                        toast.success('Campaigns updated');
                    }
                } catch (error: any) {
                    console.warn('Silent refresh failed:', error);
                    set({ isOffline: !navigator.onLine });
                }
            },

            clearUpdates: () => set({ hasNewUpdates: false }),
        }),
        {
            name: 'donation-store',
            partialize: (state) => ({ posts: state.posts }),
        }
    )
);