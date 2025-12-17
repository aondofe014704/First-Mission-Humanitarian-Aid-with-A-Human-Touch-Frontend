import { Link } from 'react-router-dom';

const Gallery = () => {
    const galleryItems = [
        {
            id: 1,
            title: 'Leaving No One Behind: Inclusive GBV and SRH Engagement in Mashimari Ward',
            description: 'FIRST MISSION Initiated program activities at Mashimari community,    Mashimari ward, Jere LGA, Borno state with women and the most marginalized, and people with disabilities on GBV, SRH, protection and Livelihood interventions.',
            image: 'https://res.cloudinary.com/dejlekubm/image/upload/v1765027493/storys/nupepkecpxcq5lsxlc4w.png'
        },
        {
            id: 2,
            title: 'Leadership Engagement on Gender-Based Violence, SRH, and Protection in Mashimari Ward',
            description: 'The inaugural mission team convened with the leaders of mashimari ward, for a dialogue on critical issues, specifically gender‑based violence (GBV), sexual and reproductive health (SRH), and protection concerns.',
            image: 'https://res.cloudinary.com/dejlekubm/image/upload/v1765934492/Screenshot_2025-12-17_022101_zmvffn.png'
        },
        {
            id: 3,
            title: 'Commencement of Community-Based GBV and SRH Protection Activities',
            description: 'The inaugural mission team that visited the Mashimari ward, Jere LGA, Borno state as part of the program activities.',
            image: 'https://res.cloudinary.com/dejlekubm/image/upload/v1765934209/Screenshot_2025-12-16_204656_lvzkem.png'
        },
        {
            id: 4,
            title: 'Inaugural Mission Dialogue with Women and Girls Living with Disabilities',
            description: 'During the inaugural mission, a dedicated session was convened with women and girls living with disabilities in the community. The purpose of the session is to elucidate the significance of preventing protection especially Child Protection, GBV, provision of inclusive SRH, Livelihood linking to providing practical guidance on issues of gender‑based violence (GBV), promoting sexual and reproductive health (SRH), and safeguarding the rights and protection of all women and girls.',
            image: 'https://res.cloudinary.com/dejlekubm/image/upload/v1765936896/Screenshot_2025-12-17_030103_jirg0w.png'
            
        },
        {
            id: 5,
            title: 'Together in Purpose: Strengthening Community Solidarity for Rights and Inclusion',
            description: 'In a spirit of unity and shared purpose, community leaders, the inaugural FIRST MISSION team, and persons with disabilities converged in harmonious collaboration during the closing session. The gathering was marked by joyous celebration and the exchange of hopeful reflections, reaffirming a collective commitment to advancing the rights and wellbeing of all community members.',
            image: 'https://res.cloudinary.com/dejlekubm/image/upload/v1765937493/Screenshot_2025-12-17_031043_jlfo2s.png'
        },
        {
            id: 6,
            title: 'FIRST MISSION Research to Advance Protection and Health Equity',
            description: 'The inaugural FIRST MISSION team is embarking on a critical research initiative focused on Gender-Based Violence (GBV), Sexual and Reproductive Health (SRH), and protection concerns. This endeavor seeks to gather evidence and insights to inform targeted, survivor-centered interventions that prioritize the safety, dignity, and well-being of vulnerable populations. By addressing these pressing issues, the team aims to contribute to a more protective and equitable environment, fostering resilience and access to essential services for those affected. The research will guide strategic partnerships and programming to amplify impact in safeguarding human rights and promoting health equity.',
            image: 'https://res.cloudinary.com/dejlekubm/image/upload/v1765938733/Screenshot_2025-12-17_033148_areocf.png'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4 uppercase">OUR GALLERY</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore the impactful programs and initiatives of the inaugural FIRST MISSION team, from community engagements with women, girls, and persons with disabilities, to research-driven interventions addressing Gender-Based Violence (GBV), Sexual and Reproductive Health (SRH), and protection concerns. Through inclusive dialogues, evidence-gathering, and collaborative partnerships, these efforts are fostering safer, more equitable communities, promoting health and wellbeing, and safeguarding the rights and dignity of vulnerable populations around the world.
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
