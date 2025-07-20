interface PaystackPop {
    newTransaction(config: {
        key: string;
        email: string;
        amount: number;
        currency?: string;
        ref: string;
        metadata?: Record<string, any>;
        onSuccess: (response: { reference: string; [key: string]: any }) => void;
        onCancel: () => void;
    }): void;
}

interface Window {
    PaystackPop: new () => PaystackPop;
}