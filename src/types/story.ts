export interface Story {
    id: number;
    title: string;
    description: string;
    image?: string; // For backwards compatibility
    image_url: string;
    author_name?: string;
    created_at: string;
}