import React from 'react';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';
import type { DonationPost } from '../types/donation';

interface Props {
    post: DonationPost;
    onSelect: (post: DonationPost) => void;
    fallbackImage: string;
}

export const DonationCard: React.FC<Props> = ({ post, onSelect, fallbackImage }) => {
    const formatDate = (date: string) => {
        try {
            const d = new Date(date);
            if (isNaN(d.getTime())) return 'Invalid Date';
            return d.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            });
        } catch {
            return 'Invalid Date';
        }
    };

    const formatCurrency = (amount: string | number) => {
        const num = typeof amount === 'string' ? parseFloat(amount) : amount;
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 0,
        }).format(num);
    };

    return (
        <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
                src={post.image_url || post.image || fallbackImage}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== fallbackImage) target.src = fallbackImage;
                }}
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{post.title}</h3>
                <p className="text-gray-600 line-clamp-2 mb-3">{post.description}</p>

                {/* Total Donated */}
                {post.total_donated && parseFloat(post.total_donated) > 0 && (
                    <div className="bg-green-50 border border-green-200 rounded-md p-2 mb-3">
                        <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 flex items-center">
                <TrendingUp className="w-4 h-4 mr-1 text-green-600" />
                Total Donated
              </span>
                            <span className="text-lg font-bold text-green-600">
                {formatCurrency(post.total_donated)}
              </span>
                        </div>
                    </div>
                )}

                <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
              {post.author_name || 'First Mission'}
          </span>
                    <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
                        {formatDate(post.created_at)}
          </span>
                </div>

                <button
                    onClick={() => onSelect(post)}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex justify-center items-center transition"
                >
                    Read More & Donate <ArrowRight className="w-4 h-4 ml-2" />
                </button>
            </div>
        </div>
    );
};