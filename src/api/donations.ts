import { apiClient } from './config';

export interface DonationPost {
    id: number;
    title: string;
    description: string;
    image?: string;
    image_url: string;
    author_name?: string;
    total_donated: string;
    created_at: string;
}

export interface DonationInitRequest {
    amount: number;
    donation_post: number;
    email: string;
    name: string;
}

export interface DonationInitResponse {
    reference: string;
    authorization_url: string;
    amount: number;
}

export interface DonationVerifyRequest {
    reference: string;
    amount: number;
    donation_post: number;
}

export interface DonationVerifyResponse {
    message: string;
    donation_id: number;
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

/**
 * Fetch all donation posts
 */
export const fetchDonationPosts = async (): Promise<DonationPost[]> => {
    const { data } = await apiClient.get<DonationPost[]>('/donation-posts/');
    return data;
};

/**
 * Fetch single donation post by ID
 */
export const fetchDonationPostById = async (id: number): Promise<DonationPost> => {
    const { data } = await apiClient.get<DonationPost>(`/donation-posts/${id}/`);
    return data;
};

/**
 * Fetch donations (optionally filtered by donation_post)
 */
export const fetchDonations = async (donationPostId?: number): Promise<Donation[]> => {
    const params = donationPostId ? { donation_post: donationPostId } : {};
    const { data } = await apiClient.get<Donation[]>('/donations/', { params });
    return data;
};

/**
 * Initialize a donation (get payment reference)
 */
export const initializeDonation = async (
    payload: DonationInitRequest
): Promise<DonationInitResponse> => {
    const { data } = await apiClient.post<DonationInitResponse>('/donations/init/', payload);
    return data;
};

/**
 * Verify a donation after payment
 */
export const verifyDonation = async (
    payload: DonationVerifyRequest
): Promise<DonationVerifyResponse> => {
    const { data } = await apiClient.post<DonationVerifyResponse>('/donations/verify/', payload);
    return data;
};