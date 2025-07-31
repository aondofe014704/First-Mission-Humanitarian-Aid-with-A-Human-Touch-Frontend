import { toast } from 'sonner';
import axios from 'axios';

interface InitDonationResponse {
    public_key: string;
    email: string;
    amount: number;
    reference: string;
    donation_post_title: string;
}
export const usePaystack = () => {
    const initiate = async (
        donation_post: number,
        amount: string,
        email: string,
        accessToken?: string
    ): Promise<InitDonationResponse> => {
        const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
        const res = await axios.post<InitDonationResponse>(
            `${import.meta.env.VITE_BASE_URL}/api/donate/init/`,
            {
                donation_post,
                amount,
                email,
            },
            { headers }
        );
        return res.data;
    };

    const verify = async (
        reference: string,
        donation_post: number,
        amount: string,
        email: string,
        accessToken?: string
    ) => {
        const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
        await axios.post(
            `${import.meta.env.VITE_BASE_URL}/api/donate/verify/`,
            {
                reference,
                donation_post,
                amount,
                email,
            },
            { headers }
        );
    };

    const openPaystack = (config: {
        public_key: string;
        email: string;
        amount: number;
        reference: string;
        metadata: Record<string, any>;
        onSuccess: (reference: string) => void;
        onCancel?: () => void;
    }) => {
        if (!window.PaystackPop) {
            toast.error('Payment system unavailable. Please try again later.');
            return;
        }
        const paystack = new window.PaystackPop();
        paystack.newTransaction({
            key: config.public_key,
            email: config.email,
            amount: config.amount,
            currency: 'NGN',
            ref: config.reference,
            metadata: config.metadata,
            onSuccess: (resp: { reference: string }) => {
                config.onSuccess(resp.reference);
            },
            onCancel: () => {
                if (config.onCancel) config.onCancel();
            },
        });
    };

    return { initiate, verify, openPaystack };
};
