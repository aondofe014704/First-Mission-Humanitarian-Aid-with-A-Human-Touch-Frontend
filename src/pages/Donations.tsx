import { useEffect, useState } from 'react';
import { useDonationsStore } from '../auth/donationStore';
import { toast } from 'sonner';
import { Loader2, Calendar, User, Heart, ArrowRight } from 'lucide-react';
import axios, { AxiosError } from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface DonationPost {
    id: number;
    title: string;
    description: string;
    image?: string;
    image_url: string;
    author_name?: string;
    created_at: string;
}

interface InitDonationResponse {
    public_key: string;
    email: string;
    amount: number;
    reference: string;
    donation_post_title: string;
}

interface ErrorResponse {
    error?: string;
}

const Donations = () => {
    const {
        posts,
        fetchPosts,
        refreshPosts,
        hasNewUpdates,
        clearUpdates,
        loading,
    } = useDonationsStore();

    const [selectedPost, setSelectedPost] = useState<DonationPost | null>(null);
    const [donationAmount, setDonationAmount] = useState('');
    const [donationEmail, setDonationEmail] = useState('');
    const [isDonating, setIsDonating] = useState(false);

    useEffect(() => {
        fetchPosts();
        refreshPosts();
    }, []);

    useEffect(() => {
        if (hasNewUpdates) {
            toast.success('✨ New campaigns loaded');
            clearUpdates();
        }
    }, [hasNewUpdates]);

    const formatDate = (date: string): string => {
        try {
            const parsedDate = new Date(date);
            if (isNaN(parsedDate.getTime())) {
                return 'Invalid Date';
            }
            return parsedDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            });
        } catch {
            return 'Invalid Date';
        }
    };

    const handleDonate = async () => {
        if (!selectedPost) {
            toast.error('Please select a campaign.');
            return;
        }

        if (!donationAmount || isNaN(Number(donationAmount)) || Number(donationAmount) < 100) {
            toast.error('Please enter a valid donation amount (minimum ₦100).');
            return;
        }

        if (!donationEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donationEmail)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        if (!window.PaystackPop) {
            console.error('PaystackPop is not defined. Ensure the Paystack script is loaded.');
            toast.error('Payment system unavailable. Please try again later.');
            return;
        }

        setIsDonating(true);

        try {
            const accessToken = localStorage.getItem('accessToken');
            const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
            const res = await axios.post<InitDonationResponse>(
                `${BASE_URL}/api/donate/init/`,
                {
                    donation_post: selectedPost.id,
                    amount: donationAmount,
                    email: donationEmail,
                },
                { headers }
            );

            const { public_key, email, amount, reference, donation_post_title } = res.data;

            if (!public_key || !email || !amount || !reference) {
                throw new Error('Invalid response from server: missing required fields');
            }

            const paystack = new window.PaystackPop();
            paystack.newTransaction({
                key: public_key,
                email,
                amount,
                currency: 'NGN',
                ref: reference,
                metadata: {
                    donation_post_id: selectedPost.id,
                    donation_post_title,
                },
                onSuccess: (response: { reference: string }) => {
                    console.log('Payment successful:', response);
                    verifyDonation(response.reference);
                },
                onCancel: () => {
                    console.log('Paystack popup closed');
                    toast.info('Payment cancelled.');
                    setIsDonating(false);
                },
            });
        } catch (error: unknown) {
            const axiosError = error as AxiosError<ErrorResponse>;
            console.error('Error initiating donation:', axiosError.message, axiosError.response?.data);
            toast.error(
                axiosError.response?.data?.error || 'Unable to initiate donation. Try again.'
            );
            setIsDonating(false);
        }
    };

    const verifyDonation = async (reference: string) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
            await axios.post(
                `${BASE_URL}/api/donate/verify/`,
                {
                    reference,
                    donation_post: selectedPost?.id,
                    amount: donationAmount,
                    email: donationEmail,
                },
                { headers }
            );

            toast.success('🎉 Thank you for your donation!');
            setSelectedPost(null);
            setDonationAmount('');
            setDonationEmail('');
        } catch (error: unknown) {
            const axiosError = error as AxiosError<ErrorResponse>;
            console.error('Error verifying donation:', axiosError.message, axiosError.response?.data);
            toast.error(
                axiosError.response?.data?.error || 'Verification failed. Please contact support.'
            );
        } finally {
            setIsDonating(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-50">
                <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Donation Campaigns</h2>

            {!selectedPost ? (
                <>
                    {Array.isArray(posts) && posts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <div key={post.id} className="bg-white shadow rounded-lg overflow-hidden">
                                    <img
                                        src={post.image_url || post.image || 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg'}
                                        alt={post.title}
                                        className="w-full h-48 object-cover"
                                        loading="lazy"
                                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                            (e.target as HTMLImageElement).src =
                                                'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg';
                                        }}
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold text-blue-700 mb-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 line-clamp-2">{post.description}</p>
                                        <div className="flex justify-between text-sm text-gray-500 mt-2">
                                            <span className="flex items-center gap-1">
                                                <User className="w-4 h-4" />
                                                {post.author_name || 'Anonymous'}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {formatDate(post.created_at)}
                                            </span>
                                        </div>

                                        <button
                                            onClick={() => setSelectedPost(post)}
                                            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex justify-center items-center"
                                        >
                                            Read More & Donate
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-600">
                            No campaigns available at the moment.
                        </div>
                    )}
                </>
            ) : (
                <div className="max-w-4xl mx-auto">
                    <button
                        onClick={() => setSelectedPost(null)}
                        className="mb-6 text-blue-600 hover:underline"
                    >
                        ← Back to Campaigns
                    </button>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={selectedPost.image_url || selectedPost.image || 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg'}
                            alt={selectedPost.title}
                            className="w-full h-80 object-cover"
                            loading="lazy"
                        />
                        <div className="p-6">
                            <h1 className="text-2xl font-bold text-blue-800 mb-4">{selectedPost.title}</h1>
                            <p className="text-gray-700 whitespace-pre-line mb-6">{selectedPost.description}</p>

                            <div className="bg-blue-50 p-4 rounded-lg">
                                <label className="text-sm text-gray-700 font-medium mb-1 block">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={donationEmail}
                                    onChange={(e) => setDonationEmail(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                                    placeholder="e.g. user@example.com"
                                    required
                                />
                                <label className="text-sm text-gray-700 font-medium mb-1 block">
                                    Donation Amount (₦)
                                </label>
                                <input
                                    type="number"
                                    value={donationAmount}
                                    onChange={(e) => setDonationAmount(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                                    placeholder="e.g. 1000"
                                    min="100"
                                    required
                                />
                                <button
                                    disabled={!donationAmount || !donationEmail || isDonating}
                                    onClick={handleDonate}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-md hover:opacity-90 transition disabled:opacity-50"
                                >
                                    {isDonating ? (
                                        <span className="flex justify-center items-center">
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                            Processing...
                                        </span>
                                    ) : (
                                        <span className="flex justify-center items-center">
                                            <Heart className="w-5 h-5 mr-2" />
                                            DONATE NOW
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donations;