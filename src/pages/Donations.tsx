import { useEffect, useState, useCallback } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { useDonationsStore } from '../stores/donationStore';
import { getAllDonationPosts } from '../types/donationdb';
import { DonationCard } from '../components/DonationCard';
import { DonationDetail } from '../components/DonationDetail';
import { usePaystack } from '../hooks/usePaystack';
import type { DonationPost } from '../types/donation';

const firstmission = '/firstmission.png';

const Donations = () => {
    const {
        posts,
        fetchPosts,
        refreshPosts,
        hasNewUpdates,
        clearUpdates,
        loading,
        setPosts,
    } = useDonationsStore();

    const [selectedPost, setSelectedPost] = useState<DonationPost | null>(null);
    const [donationAmount, setDonationAmount] = useState('');
    const [donationEmail, setDonationEmail] = useState('');
    const [donationName, setDonationName] = useState('');
    const [isDonating, setIsDonating] = useState(false);
    const [hydratedFromCache, setHydratedFromCache] = useState(false);

    const { initiate, verify, openPaystack } = usePaystack();

    const loadAndRefresh = useCallback(async () => {
        try {
            await fetchPosts();
            await refreshPosts();
        } catch {
            // Fallback logic runs separately
        }
    }, [fetchPosts, refreshPosts]);

    useEffect(() => {
        void loadAndRefresh();
    }, [loadAndRefresh]);

    useEffect(() => {
        if ((!Array.isArray(posts) || posts.length === 0) && !hydratedFromCache) {
            void (async () => {
                try {
                    const cached = await getAllDonationPosts();
                    if (cached.length) {
                        setPosts(cached);
                        setHydratedFromCache(true);
                    }
                } catch {
                    // Swallow error
                }
            })();
        }
    }, [posts, hydratedFromCache, setPosts]);

    useEffect(() => {
        if (hasNewUpdates) {
            toast.success('✨ New campaigns loaded');
            clearUpdates();
        }
    }, [hasNewUpdates, clearUpdates]);

    const handleDonate = async () => {
        if (!selectedPost) {
            toast.error('Please select a campaign.');
            return;
        }

        const amount = Number(donationAmount);

        if (!donationAmount || isNaN(amount) || amount < 100) {
            toast.error('Please enter a valid donation amount (minimum ₦100).');
            return;
        }

        if (!donationEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donationEmail)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        if (!donationName || donationName.trim().length < 2) {
            toast.error('Please enter your name.');
            return;
        }

        if (!window.PaystackPop) {
            console.error('PaystackPop is not defined.');
            toast.error('Payment system unavailable. Please try again later.');
            return;
        }

        setIsDonating(true);

        const capturedPost = selectedPost;
        const capturedEmail = donationEmail;
        const capturedAmount = amount;
        const capturedName = donationName;

        try {
            // Initialize donation
            const initData = await initiate(
                capturedPost.id,
                capturedAmount,
                capturedEmail,
                capturedName
            );

            const { reference, amount: paystackAmount } = initData;

            if (!reference || !paystackAmount) {
                throw new Error('Invalid response from server: missing required fields');
            }

            // Open Paystack modal
            openPaystack({
                reference,
                email: capturedEmail,
                amount: paystackAmount,
                metadata: {
                    donation_post_id: capturedPost.id,
                    donation_post_title: capturedPost.title,
                    donor_name: capturedName,
                },
                onSuccess: async (ref) => {
                    toast.success('Payment completed with Paystack. Verifying...');
                    try {
                        await verify(ref, capturedPost.id, capturedAmount);
                        toast.success('🎉 Thank you for your donation!');
                        setSelectedPost(null);
                        setDonationAmount('');
                        setDonationEmail('');
                        setDonationName('');
                        setIsDonating(false);
                    } catch (verifyErr) {
                        console.error('Verification error:', verifyErr);
                        toast.error('Verification failed. Please contact support.');
                        setIsDonating(false);
                    }
                },
                onCancel: () => {
                    toast.info('Payment cancelled.');
                    setIsDonating(false);
                },
            });
        } catch (error: any) {
            console.error('Error initiating donation:', error);
            toast.error(
                error?.response?.data?.error || 'Unable to initiate donation. Try again.'
            );
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
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
                Donation Campaigns
            </h2>

            {!selectedPost ? (
                <>
                    {Array.isArray(posts) && posts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <DonationCard
                                    key={post.id}
                                    post={post}
                                    onSelect={setSelectedPost}
                                    fallbackImage={firstmission}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-600">
                            No campaigns available at the moment.
                        </div>
                    )}
                </>
            ) : (
                <DonationDetail
                    post={selectedPost}
                    donationEmail={donationEmail}
                    donationName={donationName}
                    donationAmount={donationAmount}
                    isDonating={isDonating}
                    onChangeEmail={setDonationEmail}
                    onChangeName={setDonationName}
                    onChangeAmount={setDonationAmount}
                    onDonate={handleDonate}
                    onBack={() => setSelectedPost(null)}
                    fallbackImage={firstmission}
                />
            )}
        </div>
    );
};

export default Donations;