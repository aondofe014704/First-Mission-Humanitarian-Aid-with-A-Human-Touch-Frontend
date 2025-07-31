import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios, { AxiosError } from 'axios';
import { saveStories, getAllStories } from '../types/indexeddb';
import type {Story} from '../types/story'; // unified import
// unified import

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface StoriesState {
    stories: Story[];
    isLoading: boolean;
    error: string | null;
    fetchStories: () => Promise<void>;
    clearError: () => void;
    setStories: (stories: Story[]) => void; // optional setter
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
                    const response = await axios.get<Story[]>(`${BASE_URL}/api/poststories/`);
                    const newStories = response.data;
                    const currentStories = get().stories;

                    const isDifferent =
                        newStories.length !== currentStories.length ||
                        JSON.stringify(newStories.map((s) => s.id)) !==
                        JSON.stringify(currentStories.map((s) => s.id));

                    if (isDifferent) {
                        set({ stories: newStories });
                        await saveStories(newStories);
                    }

                    set({ isLoading: false });
                } catch (error: unknown) {
                    const err = error as AxiosError<{ detail?: string }>;
                    const fallbackMessage = err.response?.data?.detail || err.message || 'Failed silently';

                    try {
                        const cached = await getAllStories();
                        if (cached.length) {
                            set({ stories: cached });
                        } else {
                            set({ error: fallbackMessage });
                        }
                    } catch {
                        set({ error: fallbackMessage });
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
