import React from 'react';
import { Heart, Loader2, TrendingUp } from 'lucide-react';
import type { DonationPost } from '../types/donation';

interface Props {
    post: DonationPost;
    donationEmail: string;
    donationName: string;
    donationAmount: string;
    isDonating: boolean;
    onChangeEmail: (v: string) => void;
    onChangeName: (v: string) => void;
    onChangeAmount: (v: string) => void;
    onDonate: () => void;
    onBack: () => void;
    fallbackImage: string;
}

export const DonationDetail: React.FC<Props> = ({
                                                    post,
                                                    donationEmail,
                                                    donationName,
                                                    donationAmount,
                                                    isDonating,
                                                    onChangeEmail,
                                                    onChangeName,
                                                    onChangeAmount,
                                                    onDonate,
                                                    onBack,
                                                    fallbackImage,
                                                }) => {
    const formatCurrency = (amount: string | number) => {
        const num = typeof amount === 'string' ? parseFloat(amount) : amount;
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 0,
        }).format(num);
    };

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
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== fallbackImage) target.src = fallbackImage;
                    }}
                />
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-blue-800 mb-4">{post.title}</h1>

                    {/* Total Donated */}
                    {post.total_donated && parseFloat(post.total_donated) > 0 && (
                        <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
                            <div className="flex items-center justify-between">
                <span className="text-gray-700 flex items-center font-medium">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Total Donated So Far
                </span>
                                <span className="text-2xl font-bold text-green-600">
                  {formatCurrency(post.total_donated)}
                </span>
                            </div>
                        </div>
                    )}

                    {/* Render HTML description with proper styling */}
                    <div
                        className="text-gray-700 mb-6 prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.description }}
                    />

                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h2 className="text-lg font-semibold text-blue-800 mb-4">
                            Make Your Donation
                        </h2>

                        <label className="text-sm text-gray-700 font-medium mb-1 block">
                            Full Name
                        </label>
                        <input
                            type="text"
                            value={donationName}
                            onChange={(e) => onChangeName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md mb-4"
                            placeholder="e.g. John Doe"
                            required
                        />

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
                            disabled={!donationAmount || !donationEmail || !donationName || isDonating}
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