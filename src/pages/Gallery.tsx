import { Link } from 'react-router-dom';

const Gallery = () => {
    const galleryItems = [
        {
            id: 1,
            title: 'Community Health Outreach',
            description: 'Our health outreach program provides essential medical services and health education to underserved communities, ensuring access to quality healthcare for all.',
            image: 'https://placehold.co/600x400/1e40af/ffffff?text=Community+Health+Outreach'
        },
        {
            id: 2,
            title: 'Women Empowerment Workshop',
            description: 'Empowering women through skill-building workshops and leadership training to foster independence and create sustainable change in their communities.',
            image: 'https://placehold.co/600x400/1e40af/ffffff?text=Women+Empowerment+Workshop'
        },
        {
            id: 3,
            title: 'Youth Education Support Program',
            description: 'Supporting the education of young minds through scholarships, school supplies, and mentorship programs to build a brighter future.',
            image: 'https://placehold.co/600x400/1e40af/ffffff?text=Youth+Education+Support'
        },
        {
            id: 4,
            title: 'Food & Relief Distribution',
            description: 'Providing essential food supplies and relief materials to vulnerable communities affected by crises and natural disasters.',
            image: 'https://placehold.co/600x400/1e40af/ffffff?text=Food+%26+Relief+Distribution'
        },
        {
            id: 5,
            title: 'Community Clean-Up & Sanitation Drive',
            description: 'Promoting hygiene and environmental sustainability through community clean-up initiatives and sanitation awareness programs.',
            image: 'https://placehold.co/600x400/1e40af/ffffff?text=Clean-Up+%26+Sanitation'
        },
        {
            id: 6,
            title: 'Agricultural & Livelihood Support',
            description: 'Supporting sustainable agriculture and livelihood programs to enhance food security and economic stability in rural communities.',
            image: 'https://placehold.co/600x400/1e40af/ffffff?text=Agricultural+Support'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4 uppercase">OUR GALLERY</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our impactful programs and initiatives that are making a difference in communities around the world.
                    </p>
                </div>

                <div className="space-y-16">
                    {galleryItems.map((item, index) => (
                        <div 
                            key={item.id}
                            className={`bg-white rounded-lg shadow-md overflow-hidden ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col`}
                        >
                            <div className="md:w-1/2">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-64 md:h-full object-cover"
                                />
                            </div>
                            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h2>
                                <p className="text-gray-600 mb-6">
                                    {item.description}
                                </p>
                                <div>
                                    <Link 
                                        to={`/gallery/${item.id}`}
                                        className="inline-block bg-blue-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors duration-200"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
