import { apiClient } from './config';
import type { Story } from '../types/story';

export interface StoriesResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Story[];
}

/**
 * Fetch all stories
 */
export const fetchStories = async (): Promise<Story[]> => {
    const { data } = await apiClient.get<StoriesResponse>('/stories/');
    return data.results;
};

/**
 * Fetch single story by ID
 */
export const fetchStoryById = async (id: number): Promise<Story> => {
    const { data } = await apiClient.get<Story>(`/stories/${id}/`);
    return data;
};