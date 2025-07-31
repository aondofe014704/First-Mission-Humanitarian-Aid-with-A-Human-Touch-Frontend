import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

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

    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
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
                <p className="text-gray-600 line-clamp-2">{post.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
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
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex justify-center items-center"
                >
                    Read More & Donate <ArrowRight className="w-4 h-4 ml-2" />
                </button>
            </div>
        </div>
    );
};
