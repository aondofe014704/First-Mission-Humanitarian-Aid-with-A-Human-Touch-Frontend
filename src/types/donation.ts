export interface DonationPost {
    id: number;
    title: string;
    description: string;
    image?: string; // For backwards compatibility
    image_url: string;
    author_name?: string;
    total_donated: string;
    created_at: string;
}

export interface Donation {
    id: number;
    donor_name: string;
    donor_email: string;
    donation_post: number;
    donation_post_title: string;
    amount: string;
    reference: string;
    verified: boolean;
    created_at: string;
}