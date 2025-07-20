import { Heart, Target, Eye, Shield, Users, Globe, CheckCircle } from 'lucide-react';

const AboutUs = () => {
    const coreValues = [
        { name: 'Compassion', icon: Heart, description: 'Showing empathy and care for vulnerable populations' },
        { name: 'Integrity', icon: Shield, description: 'Maintaining honesty and ethical standards in all operations' },
        { name: 'Inclusivity', icon: Users, description: 'Ensuring equal access and participation for all, especially people with disabilities' },
        { name: 'Accountability', icon: CheckCircle, description: 'Taking responsibility for our actions and their impact' },
        { name: 'Transparency', icon: Eye, description: 'Operating with openness and clear communication' },
        { name: 'Sustainability', icon: Globe, description: 'Creating lasting positive change for future generations' }
    ];

    const objectives = [
        'To provide humanitarian assistance and support to vulnerable populations, particularly children, women, and people with disabilities, in Nigeria.',
        'To promote and protect the rights of children and women, ensuring their access to education, healthcare, and economic empowerment.',
        'To contribute to the reduction of poverty, inequality, and social injustice in Nigeria, with a focus on marginalized communities.',
        'To mainstream climate change and environmental considerations into all programs and activities.',
        'To promote gender equality, equity, and inclusivity in all aspects of the organization\'s work.',
        'To contribute to fighting the climate change issues in Nigeria, and bringing sustainable Nigeria after the occurrence climate change impact.',
        'To contribute to combating internal crises among community in Nigeria through peaceful dialogues and effective programming that will bring peace.'
    ];

    const generalObjectives = [
        'To respond promptly and effectively to humanitarian crises, including conflicts, natural disasters, and epidemics, in Nigeria.',
        'To improve the health, nutrition, and well-being of vulnerable populations, particularly children, women, and people with disabilities.',
        'To increase access to quality education and career development opportunities for disadvantaged children and youth.',
        'To empower women and girls through economic and social empowerment programs.',
        'To promote inclusive and sustainable development in Nigeria, with a focus on marginalized communities.',
        'To prevent climate change effect in Nigeria and rebuild the effect/impact that brought about by climate crisis.',
        'To achieve a free and safety communities, and reconstruction of communities after man-made crisis.'
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="flex justify-center pt-10 pb-6">
                <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]">
                    <img
                        src="https://res.cloudinary.com/dgvjxhqjd/image/upload/v1752847535/WhatsApp_Image_2025-07-18_at_14.42.00_f65ea67b-removebg-preview_k1iyo0.png"
                        alt="First Mission Logo"
                        className="w-full h-auto object-contain rounded-lg shadow"
                        loading="lazy"
                    />
                    {/*<h2 className="text-center text-lg font-semibold mt-4 text-blue-900">*/}
                    {/*    First Mission*/}
                    {/*</h2>*/}

                </div>

            </header>


            {/*    </div>*/}
            {/*</header>*/}

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Organization Profile */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Organization Profile</h2>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            FIRST MISSION INITIATIVE FOR CHILDREN, WOMEN AND THE DISABLED POPULATION (HUMANITARIAN MISSION) is a child-focused and women's rights organization registered in Nigeria in 2025, a humanitarian and developmental organization mandated to respond to humanitarian crises, poverty encroachment, insurgencies, climate change, and environmental issues across the country, with a specific focus on the insurgent and poverty bedeviled communities in Nigeria.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mt-4">
                            Dedicated to ensuring child health, education, women's empowerment, and gender equality, ending violence against women and adolescent girls, FIRST MISSION delivers comprehensive programs in protection, health, nutrition, women's empowerment, WASH/NFIs/MPCA, education, career development, research for international development, food security, livelihood/early recovery, climate change/sustainability, and conflict resolution/Peace restoration and reconstruction with a strong emphasis on inclusivity for people with disabilities and mainstreaming climate change considerations in all programming.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <Target className="h-8 w-8 text-blue-600 mr-3" />
                                <h2 className="text-3xl font-bold text-blue-800">Mission Statement</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                FIRST MISSION is committed to delivering inclusive and sustainable humanitarian assistance, promoting child health, education, women's empowerment, and gender equality, while addressing the unique needs of people with disabilities and mitigating the impacts of climate change, to vulnerable populations, particularly in Nigerian communities, affected by insurgency, conflict, and environmental degradation.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-blue-800 mb-2">Precise Mission</h3>
                                <p className="text-gray-700">
                                    FIRST MISSION is committed to provide compassionate and timely humanitarian aid to those affected by crisis, promoting dignity, hope, and resilience.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                                <h2 className="text-3xl font-bold text-blue-800">Vision Statement</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                FIRST MISSION envisions a resilient and equitable Nigeria where all individuals, particularly children, women, and people with disabilities, have access to quality education, healthcare, and economic opportunities, and are empowered to thrive in a climate-resilient and sustainable environment, free from poverty, inequality, and social injustice.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-blue-800 mb-2">Precise Vision</h3>
                                <p className="text-gray-700">
                                    FIRST MISSION envisioned a Nigeria where every individual has access to basic necessities, safety, and opportunities to thrive, free from the impact of crisis and poverty.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Core Values</h2>
                    <p className="text-center text-gray-600 mb-8 max-w-4xl mx-auto">
                        FIRST MISSION is guided by the core values of Compassion, Integrity, Inclusivity, Accountability, Transparency, and Sustainability, upholding the dignity and rights of vulnerable populations, particularly children, women, and people with disabilities, in all aspects of our humanitarian and development work in Nigeria and beyond.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <value.icon className="h-8 w-8 text-blue-600 mr-3" />
                                    <h3 className="text-xl font-semibold text-blue-800">{value.name}</h3>
                                </div>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Aims and Objectives */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Aims and Objectives</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Main Objectives</h3>
                            <ul className="space-y-4">
                                {objectives.map((objective, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{objective}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-2xl font-semibold text-blue-700 mb-6">General Objectives</h3>
                            <ul className="space-y-4">
                                {generalObjectives.map((objective, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{objective}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Cross-Cutting Objectives */}
                <section className="mb-16">
                    <div className="bg-blue-50 rounded-lg p-8">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Cross-Cutting Objectives</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                                <p className="text-gray-700">Mainstream climate change and environmental considerations into all programs and activities.</p>
                            </div>
                            <div className="text-center">
                                <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                                <p className="text-gray-700">Promote gender equality, equity, and inclusivity in all aspects of the organization's work.</p>
                            </div>
                            <div className="text-center">
                                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                                <p className="text-gray-700">Ensure the inclusion and participation of people with disabilities in all programs and activities.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutUs;