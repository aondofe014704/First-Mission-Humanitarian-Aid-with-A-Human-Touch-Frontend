import { useState, useEffect } from 'react';
import { Heart, Calendar, User, ArrowRight, Loader2 } from 'lucide-react';
import { useAuthStore } from '../auth/authStore';
import AuthModal from '../auth/AuthModal';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface DonationPost {
    id: number;
    title: string;
    description: string;
    image: string;
    image_url: string;
    author_name: string;
    created_at: string;
}

interface DonationDetail {
    title: string;
    description: string;
}

const Donations = () => {
    const [posts, setPosts] = useState<DonationPost[]>([]);
    const [selectedPost, setSelectedPost] = useState<DonationPost | null>(null);
    const [postDetail, setPostDetail] = useState<DonationDetail | null>(null);
    const [donationAmount, setDonationAmount] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isDetailLoading, setIsDetailLoading] = useState(false);
    const [isDonating, setIsDonating] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const { isAuthenticated, accessToken } = useAuthStore();

    useEffect(() => {
        fetchDonationPosts();
    }, []);

    const fetchDonationPosts = async () => {
        try {
            const response = await axios.get<DonationPost[]>(`${BASE_URL}/api/postdonations/`);
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching donation posts:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchPostDetail = async (id: number) => {
        setIsDetailLoading(true);
        try {
            const response = await axios.get<DonationDetail>(`${BASE_URL}/api/postdonations/${id}/`);
            setPostDetail(response.data);
        } catch (error) {
            console.error('Error fetching post detail:', error);
        } finally {
            setIsDetailLoading(false);
        }
    };

    const handleReadMore = (post: DonationPost) => {
        setSelectedPost(post);
        fetchPostDetail(post.id);
    };

    const handleDonate = async () => {
        if (!isAuthenticated) {
            setShowAuthModal(true);
            return;
        }

        if (!selectedPost || !donationAmount) return;

        setIsDonating(true);
        try {
            const response = await axios.post(
                `${BASE_URL}/api/donation/init/`,
                {
                    amount: donationAmount,
                    donation_post: selectedPost.id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            const { public_key, email, name, amount } = response.data;

            // Initialize Paystack
            const PaystackPop = (window as any).PaystackPop;
            const paystack = PaystackPop.setup({
                key: public_key,
                email: email,
                amount: amount,
                currency: 'NGN',
                callback: function(response: any) {
                    verifyDonation(response.reference);
                },
                onClose: function() {
                    setIsDonating(false);
                },
            });

            paystack.openIframe();
        } catch (error) {
            console.error('Error initializing donation:', error);
            setIsDonating(false);
        }
    };

    const verifyDonation = async (reference: string) => {
        try {
            await axios.post(
                `${BASE_URL}/api/donation/verify/`,
                {
                    reference: reference,
                    amount: donationAmount,
                    donation_post: selectedPost?.id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            // Show success message
            alert('Thank you for your donation! Your contribution will make a difference.');
            setSelectedPost(null);
            setDonationAmount('');
        } catch (error) {
            console.error('Error verifying donation:', error);
            alert('There was an error processing your donation. Please try again.');
        } finally {
            setIsDonating(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Loading donation campaigns...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <header className="bg-blue-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Heart className="h-16 w-16 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Difference</h1>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                        Support our humanitarian campaigns and help us provide aid to vulnerable populations
                    </p>
                    <p className="text-lg italic text-blue-300 mt-2">
                        "Humanitarian Aid with a Humane Touch"
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {!selectedPost ? (
                    <>
                        <section className="mb-12 text-center">
                            <h2 className="text-3xl font-bold text-blue-800 mb-6">Active Campaigns</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                Choose a campaign that resonates with you and make a direct impact on the lives of those in need.
                            </p>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="relative h-48">
                                        <img
                                            src={post.image_url || post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800';
                                            }}
                                        />
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-blue-800 mb-3 line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                            <div className="flex items-center">
                                                <User className="h-4 w-4 mr-1" />
                                                <span>{post.author_name}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                <span>{formatDate(post.created_at)}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handleReadMore(post)}
                                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                                        >
                                            Read More & Donate
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </section>

                        {posts.length === 0 && (
                            <div className="text-center py-12">
                                <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Active Campaigns</h3>
                                <p className="text-gray-500">Check back soon for new donation campaigns.</p>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="max-w-4xl mx-auto">
                        <button
                            onClick={() => setSelectedPost(null)}
                            className="mb-6 text-blue-600 hover:text-blue-700 flex items-center"
                        >
                            ← Back to Campaigns
                        </button>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative h-64 md:h-80">
                                <img
                                    src={selectedPost.image_url || selectedPost.image}
                                    alt={selectedPost.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800';
                                    }}
                                />
                            </div>

                            <div className="p-8">
                                <h1 className="text-3xl font-bold text-blue-800 mb-4">
                                    {selectedPost.title}
                                </h1>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                                    <div className="flex items-center">
                                        <User className="h-4 w-4 mr-1" />
                                        <span>{selectedPost.author_name}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        <span>{formatDate(selectedPost.created_at)}</span>
                                    </div>
                                </div>

                                {isDetailLoading ? (
                                    <div className="text-center py-8">
                                        <Loader2 className="h-8 w-8 text-blue-600 animate-spin mx-auto mb-4" />
                                        <p className="text-gray-600">Loading campaign details...</p>
                                    </div>
                                ) : postDetail ? (
                                    <div className="prose max-w-none mb-8">
                                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                            {postDetail.description}
                                        </p>
                                    </div>
                                ) : null}

                                {/* Donation Section */}
                                <div className="bg-blue-50 rounded-lg p-6">
                                    <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
                                        Support This Campaign
                                    </h3>

                                    <div className="max-w-md mx-auto">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Donation Amount (₦)
                                        </label>
                                        <input
                                            type="number"
                                            value={donationAmount}
                                            onChange={(e) => setDonationAmount(e.target.value)}
                                            placeholder="Enter amount"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
                                            min="100"
                                        />

                                        <div className="grid grid-cols-3 gap-2 mb-6">
                                            {[1000, 5000, 10000].map((amount) => (
                                                <button
                                                    key={amount}
                                                    onClick={() => setDonationAmount(amount.toString())}
                                                    className="py-2 px-4 border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                                                >
                                                    ₦{amount.toLocaleString()}
                                                </button>
                                            ))}
                                        </div>

                                        <button
                                            onClick={handleDonate}
                                            disabled={!donationAmount || isDonating}
                                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg font-semibold animate-pulse"
                                        >
                                            {isDonating ? (
                                                <>
                                                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    <Heart className="h-5 w-5 mr-2" />
                                                    DONATE NOW
                                                </>
                                            )}
                                        </button>

                                        {!isAuthenticated && (
                                            <p className="text-sm text-gray-600 text-center mt-3">
                                                You need to sign in to make a donation
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                initialMode="login"
            />
        </div>
    );
};

export default Donations;