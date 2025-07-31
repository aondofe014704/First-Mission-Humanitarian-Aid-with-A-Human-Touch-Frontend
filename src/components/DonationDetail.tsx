import React from 'react';
import { Heart, Loader2 } from 'lucide-react';

export interface DonationPost {
    id: number;
    title: string;
    description: string;
    image?: string;
    image_url: string;
    author_name?: string;
    created_at: string;
}

interface Props {
    post: DonationPost;
    donationEmail: string;
    donationAmount: string;
    isDonating: boolean;
    onChangeEmail: (v: string) => void;
    onChangeAmount: (v: string) => void;
    onDonate: () => void;
    onBack: () => void;
    fallbackImage: string;
}

export const DonationDetail: React.FC<Props> = ({
                                                    post,
                                                    donationEmail,
                                                    donationAmount,
                                                    isDonating,
                                                    onChangeEmail,
                                                    onChangeAmount,
                                                    onDonate,
                                                    onBack,
                                                    fallbackImage,
                                                }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <button onClick={onBack} className="mb-6 text-blue-600 hover:underline">
                ← Back to Campaigns
            </button>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                    src={post.image_url || post.image || fallbackImage}
                    alt={post.title}
                    className="w-full h-80 object-cover"
                    loading="lazy"
                />
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-blue-800 mb-4">{post.title}</h1>
                    <p className="text-gray-700 whitespace-pre-line mb-6">{post.description}</p>

                    <div className="bg-blue-50 p-4 rounded-lg">
                        <label className="text-sm text-gray-700 font-medium mb-1 block">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={donationEmail}
                            onChange={(e) => onChangeEmail(e.target.value)}
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
                            onChange={(e) => onChangeAmount(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md mb-4"
                            placeholder="e.g. 1000"
                            min={100}
                            required
                        />
                        <button
                            disabled={!donationAmount || !donationEmail || isDonating}
                            onClick={onDonate}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-md hover:opacity-90 transition disabled:opacity-50 flex justify-center items-center"
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
    );
};
