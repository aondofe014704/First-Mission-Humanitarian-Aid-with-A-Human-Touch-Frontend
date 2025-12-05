import { useEffect, useState } from 'react';
import { Calendar, User, BookOpen, Loader2 } from 'lucide-react';
import { useStoriesStore } from '../stores/storiesStore';

const fallbackImage = '/firstmission.png';

const StoriesSection = () => {
    const { stories, isLoading, error, fetchStories, clearError } = useStoriesStore();
    const [expandedStory, setExpandedStory] = useState<number | null>(null);

    useEffect(() => {
        fetchStories();
    }, [fetchStories]);

    useEffect(() => {
        if (error) {
            console.error('Stories error:', error);
            // optional: show toast/banner here
        }
    }, [error]);

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

    const stripHtml = (html: string): string => {
        if (!html) return '';
        const tmp = document.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };

    const truncateText = (text: string, max = 150) => {
        if (text.length <= max) return text;
        return text.slice(0, max) + '...';
    };

    const handleReadMore = (id: number) => {
        setExpandedStory(expandedStory === id ? null : id);
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement;
        if (target.src !== fallbackImage) {
            target.src = fallbackImage;
        }
    };

    if (isLoading && stories.length === 0) {
        return (
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center">
                    <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Loading impact stories...</p>
                </div>
            </section>
        );
    }

    if (stories.length === 0) {
        return (
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center">
                    <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No Stories Yet</h3>
                    <p className="text-gray-500">
                        Check back soon for inspiring stories from our mission.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">
                    Our Impact Stories
                </h2>

                <div
                    className={`grid gap-8 ${
                        stories.length === 1
                            ? 'grid-cols-1 max-w-2xl mx-auto'
                            : stories.length === 2
                                ? 'grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto'
                                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    }`}
                >
                    {stories.map((story) => {
                        const plainText = stripHtml(story.description);
                        const needsReadMore = plainText.length > 150;
                        const imageUrl = story.image_url || story.image || fallbackImage;

                        return (
                            <article
                                key={story.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
                            >
                                <div className="relative h-64 bg-gray-200">
                                    <img
                                        src={imageUrl}
                                        alt={story.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        onError={handleImageError}
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-2">
                                        {story.title}
                                    </h3>

                                    {expandedStory === story.id ? (
                                        <div
                                            className="prose prose-sm max-w-none text-gray-700 mb-6 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: story.description }}
                                        />
                                    ) : (
                                        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                                            {truncateText(plainText, 180)}
                                        </p>
                                    )}

                                    {needsReadMore && (
                                        <button
                                            onClick={() => handleReadMore(story.id)}
                                            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center mb-6"
                                        >
                                            {expandedStory === story.id ? 'Show Less' : 'Read More'}
                                            <BookOpen className="h-4 w-4 ml-2" />
                                        </button>
                                    )}

                                    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-200">
                                        <div className="flex items-center">
                                            <User className="h-4 w-4 mr-1" />
                                            <span>{story.author_name || 'First Mission'}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            <span>{formatDate(story.created_at)}</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StoriesSection;
