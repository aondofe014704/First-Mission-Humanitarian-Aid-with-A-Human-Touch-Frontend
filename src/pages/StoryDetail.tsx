import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Loader2, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import { useStoriesStore } from '../stores/storiesStore';
import type { Story } from '../types/story';

const fallbackImage = '/firstmission.png';

const StoryDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { stories, fetchStories, isLoading } = useStoriesStore();
    const [story, setStory] = useState<Story | null>(null);

    useEffect(() => {
        // Fetch stories if not already loaded
        if (stories.length === 0) {
            fetchStories();
        }
    }, [stories.length, fetchStories]);

    useEffect(() => {
        // Find the story by ID
        if (id && stories.length > 0) {
            const foundStory = stories.find((s) => s.id === parseInt(id));
            if (foundStory) {
                setStory(foundStory);
            } else {
                toast.error('Story not found');
                navigate('/stories');
            }
        }
    }, [id, stories, navigate]);

    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
        } catch {
            return 'Date unavailable';
        }
    };

    const handleShare = async () => {
        if (navigator.share && story) {
            try {
                await navigator.share({
                    title: story.title,
                    text: 'Check out this inspiring story from First Mission',
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Share cancelled or failed', err);
            }
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            toast.success('Link copied to clipboard!');
        }
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement;
        if (target.src !== fallbackImage) {
            target.src = fallbackImage;
        }
    };

    if (isLoading || !story) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
            </div>
        );
    }

    const imageUrl = story.image_url || story.image || fallbackImage;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Image */}
            <div className="relative h-96 bg-gradient-to-b from-blue-900 to-blue-800">
                <img
                    src={imageUrl}
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />

                <div className="relative h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
                    <button
                        onClick={() => navigate('/stories')}
                        className="absolute top-8 left-4 sm:left-6 lg:left-8 bg-white/90 hover:bg-white text-blue-800 px-4 py-2 rounded-lg flex items-center font-semibold transition-all shadow-lg"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Stories
                    </button>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        {story.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-white/90">
                        <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                            <User className="h-4 w-4 mr-2" />
                            <span className="font-medium">{story.author_name || 'First Mission'}</span>
                        </div>
                        <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{formatDate(story.created_at)}</span>
                        </div>
                        <button
                            onClick={handleShare}
                            className="flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors"
                        >
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    {/* Rich Text Content */}
                    <div
                        className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
                        style={{
                            fontSize: '1.125rem',
                            lineHeight: '1.8',
                        }}
                        dangerouslySetInnerHTML={{ __html: story.description }}
                    />

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-12" />

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-blue-900 mb-3">
                            Inspired by this story?
                        </h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Join us in making a difference. Your support helps us continue our mission
                            to provide humanitarian aid with a human touch.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => navigate('/')}
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
                            >
                                Learn More About Us
                            </button>
                            <button
                                onClick={handleShare}
                                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                            >
                                Share This Story
                            </button>
                        </div>
                    </div>
                </article>

                {/* Navigation */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={() => navigate('/stories')}
                        className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        View All Stories
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StoryDetail;