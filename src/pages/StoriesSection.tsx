import { useEffect, useState } from 'react';
import { Calendar, User, BookOpen, Loader2 } from 'lucide-react';
import { useStoriesStore } from '../auth/storiesStore';

const firstmission = '/firstmission.png'
const StoriesSection = () => {
    const { stories, isLoading, fetchStories } = useStoriesStore();
    const [expandedStory, setExpandedStory] = useState<number | null>(null);

    useEffect(() => {
        fetchStories(); // background refresh on mount
    }, [fetchStories]);

    const formatDate = (dateString: string) =>
        new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

    const truncateDescription = (text: string, max = 150) =>
        text.length <= max ? text : text.slice(0, max) + '...';

    const handleReadMore = (id: number) => {
        setExpandedStory(id === expandedStory ? null : id);
    };

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {isLoading && stories.length === 0 ? (
                    <div className="flex justify-center items-center py-12">
                        <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
                        <p className="text-gray-600">Loading our impact stories...</p>
                    </div>
                ) : stories.length === 0 ? (
                    <div className="text-center py-12">
                        <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No Stories Yet</h3>
                        <p className="text-gray-500">Check back soon for inspiring impact stories from our work.</p>
                    </div>
                ) : (
                    <div className={`grid gap-8 ${
                        stories.length === 1
                            ? 'grid-cols-1 max-w-md mx-auto'
                            : stories.length === 2
                                ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
                                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    }`}>
                        {stories.map((story) => (
                            <div
                                key={story.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative h-48">
                                    <img
                                        src={story.image_url || story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            if (target.src !== firstmission) target.src = firstmission;
                                        }}
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">
                                        {story.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {expandedStory === story.id
                                            ? story.description
                                            : truncateDescription(story.description)}
                                    </p>

                                    {story.description.length > 150 && (
                                        <button
                                            onClick={() => handleReadMore(story.id)}
                                            className="text-blue-600 hover:text-blue-700 font-medium mb-4 flex items-center"
                                        >
                                            {expandedStory === story.id ? 'Read Less' : 'Read More'}
                                            <BookOpen className="h-4 w-4 ml-1" />
                                        </button>
                                    )}

                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <User className="h-4 w-4 mr-1" />
                                            <span>{story.author_name} first-mission</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            <span>{formatDate(story.created_at)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default StoriesSection;
