import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios, { AxiosError } from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface Story {
    id: number;
    title: string;
    description: string;
    image: string;
    image_url: string;
    author_name: string;
    created_at: string;
}

interface StoriesState {
    stories: Story[];
    isLoading: boolean;
    error: string | null;
    fetchStories: () => Promise<void>;
    clearError: () => void;
}

export const useStoriesStore = create<StoriesState>()(
    persist(
        (set, get) => ({
            stories: [],
            isLoading: false,
            error: null,

            fetchStories: async () => {
                set({ isLoading: true, error: null });

                try {
                    const response = await axios.get<Story[]>(`${BASE_URL}/api/poststories/`);

                    const currentStories = get().stories;
                    const newStories = response.data;

                    // Compare if new stories are available before updating
                    const isDifferent =
                        newStories.length !== currentStories.length ||
                        JSON.stringify(newStories.map(s => s.id)) !== JSON.stringify(currentStories.map(s => s.id));

                    if (isDifferent) {
                        set({ stories: newStories });
                    }

                    set({ isLoading: false, error: null });
                } catch (error: unknown) {
                    const err = error as AxiosError<{ detail?: string }>;
                    const fallback = err.response?.data?.detail || err.message || 'Failed silently';

                    // Suppress error if cached stories are present
                    if (get().stories.length === 0) {
                        set({ error: fallback });
                    }

                    set({ isLoading: false });
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
