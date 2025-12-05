import { toast } from 'sonner';
import {
    initializeDonation,
    verifyDonation,
    type DonationInitRequest
} from '../api/donations';

interface PaystackConfig {
    reference: string;
    email: string;
    amount: number;
    metadata: Record<string, any>;
    onSuccess: (reference: string) => void;
    onCancel?: () => void;
}

export const usePaystack = () => {
    /**
     * Initialize a donation and get payment reference
     */
    const initiate = async (
        donation_post: number,
        amount: number,
        email: string,
        name: string
    ) => {
        const payload: DonationInitRequest = {
            donation_post,
            amount,
            email,
            name,
        };

        return await initializeDonation(payload);
    };

    /**
     * Verify donation after payment
     */
    const verify = async (
        reference: string,
        donation_post: number,
        amount: number
    ) => {
        return await verifyDonation({
            reference,
            donation_post,
            amount,
        });
    };

    /**
     * Open Paystack payment modal
     */
    const openPaystack = (config: PaystackConfig) => {
        if (!window.PaystackPop) {
            toast.error('Payment system unavailable. Please try again later.');
            return;
        }

        const paystack = new window.PaystackPop();
        paystack.newTransaction({
            key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '',
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