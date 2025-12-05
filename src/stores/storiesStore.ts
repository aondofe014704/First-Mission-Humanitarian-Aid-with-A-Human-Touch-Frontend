import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'sonner';
import { fetchStories } from '../api/stories';
import { saveStories, getAllStories } from '../types/indexeddb';
import type { Story } from '../types/story';

interface StoriesState {
    stories: Story[];
    isLoading: boolean;
    error: string | null;

    fetchStories: () => Promise<void>;
    clearError: () => void;
    setStories: (stories: Story[]) => void;
}

export const useStoriesStore = create<StoriesState>()(
    persist(
        (set, get) => ({
            stories: [],
            isLoading: false,
            error: null,

            setStories: (stories) => set({ stories }),

            fetchStories: async () => {
                set({ isLoading: true, error: null });

                try {
                    // Try to fetch from API
                    const newStories = await fetchStories();
                    const currentStories = get().stories;

                    // Check if data has changed
                    const isDifferent =
                        newStories.length !== currentStories.length ||
                        JSON.stringify(newStories.map((s) => s.id).sort()) !==
                        JSON.stringify(currentStories.map((s) => s.id).sort());

                    if (isDifferent || currentStories.length === 0) {
                        set({ stories: newStories });
                        await saveStories(newStories);
                    }

                    set({ isLoading: false });
                } catch (error: any) {
                    console.error('Failed to fetch stories:', error);

                    // Try to load from cache
                    try {
                        const cached = await getAllStories();
                        if (cached.length) {
                            set({ stories: cached, isLoading: false });
                            toast.info('Showing cached stories (offline mode)');
                        } else {
                            set({
                                error: error.message || 'Failed to load stories',
                                isLoading: false
                            });
                            toast.error('Failed to load stories');
                        }
                    } catch (cacheError) {
                        set({
                            error: error.message || 'Failed to load stories',
                            isLoading: false
                        });
                        toast.error('Failed to load stories');
                    }
                }
            },

            clearError: () => set({ error: null }),
        }),
        {
            name: 'stories-store',
            partialize: (state) => ({ stories: state.stories }),
        }
    )
);