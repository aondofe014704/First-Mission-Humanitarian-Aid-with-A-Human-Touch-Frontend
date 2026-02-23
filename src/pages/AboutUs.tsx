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
        'To ensure equal access to quality and inclusive education for all children, including those with disabilities.',
        'To empower youth and new graduates with essential skills for careers in international development.',
        'To provide access to healthcare for pregnant and breastfeeding women to ensure they have access to healthcare for the various needs like anti-natal, Delivery, ANC, etc. Through our health specific programs.',
        'To promote gender equality, equity, and inclusivity in all aspects of the organization\'s work.',
        'To treat under-5 children for malnutrition (MAM, SAM, and SAM with complications), and ensure MIYCF and healthcare strengthening/advocacy through our holistic nutrition programming.',
        'To combat HIV/AIDS/malaria, tuberculosis, and neglected tropical diseases through prevention, treatment, awareness, and improved health systems.',
        'To ensure communities have access to clean and adequate water and WASH facilities provision/rehabilitation/upgrade, as well as prevention of WASH Related diseases.',
        'To Protect children and vulnerable people through comprehensive protection programs.',
        'To promote and protect the rights of people with disabilities and women, ensuring access to education, healthcare, and economic empowerment.',
        'To provide temporal and long-term food security through food assistance and agricultural support.',
        'To conduct evidence-based research for international development in emergency and developmental contexts.',
        'To promote gender equality, women rights, and economic empowerment for women and girls.',
        'To promote dialogue, reconciliation, and social cohesion to prevent and manage conflicts, and address community-based rehabilitation, reintegration and transitional Justice to address past human rights abuses.',
        'To mainstream climate change and environmental considerations into all programs and activities.'
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/*<header className="flex justify-center pt-10 pb-6">*/}
            {/*    <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]">*/}
            {/*        <img*/}
            {/*            src="https://res.cloudinary.com/dgvjxhqjd/image/upload/v1752847535/WhatsApp_Image_2025-07-18_at_14.42.00_f65ea67b-removebg-preview_k1iyo0.png"*/}
            {/*            alt="First Mission Logo"*/}
            {/*            className="w-full h-auto object-contain rounded-lg shadow"*/}
            {/*            loading="lazy"*/}
            {/*        />*/}
            {/*        /!*<h2 className="text-center text-lg font-semibold mt-4 text-blue-900">*!/*/}
            {/*        /!*    First Mission*!/*/}
            {/*        /!*</h2>*!/*/}

            {/*    </div>*/}

            {/*</header>*/}


            {/*    </div>*/}
            {/*</header>*/}

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Organization Profile */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">ORGANIZATION PROFILE</h2>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            HUMANITY FIRST MISSION FOR CHILDREN WOMEN AND PEOPLE WITH 
                            DISABILITIES (FIRST MISSION) is a child-focused and women's 
                            rights organization registered in Nigeria, FIRST MISSION is a 
                            humanitarian and developmental organization mandated to respond 
                            to humanitarian crises, poverty encroachment, insurgencies, 
                            climate crisis, and environmental issues across the country, 
                            with a specific focus to Children Women and PWDs. Dedicated to 
                            ensuring child health, education, women's empowerment, and 
                            gender equality towards ending violence against women and 
                            adolescent girls, FIRST MISSION delivers comprehensive programs 
                            in protection, health, nutrition, women's empowerment, WASH, 
                            education, food security and livelihood/early recovery and 
                            climate change/sustainability with a strong emphasis on 
                            inclusivity for people with disabilities and mainstreaming.
                        </p>
                       
                    </div>
                </section>

                {/* Mission Section */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <Target className="h-8 w-8 text-blue-600 mr-3" />
                                <h2 className="text-3xl font-bold text-blue-800">MISSION STATEMENT</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                FIRST MISSION is committed to provide compassionate and 
                                timely humanitarian aid to those affected by crisis, 
                                promoting dignity, hope, resilience, and gender 
                                equality, working towards ending violence against 
                                women and adolescent girls.
                            </p>
                            
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                                <h2 className="text-3xl font-bold text-blue-800">VISION STATEMENT</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                FIRST MISSION envisioned a Nigeria where every individual 
                                has access to basic necessities, safety, and opportunities 
                                to thrive, free from the impact of crisis and poverty, 
                                having dignity and hope all individuals especially women and Girls.
                            </p>
                           
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">CORE VALUES</h2>
                    <p className="text-center text-gray-600 mb-8 max-w-4xl mx-auto">
                        FIRST MISSION is guided by the core values of Compassion, 
                        Integrity, Inclusivity, Accountability, Transparency, and 
                        Sustainability, upholding the dignity and rights of vulnerable 
                        populations, particularly children, women, and people with disabilities, 
                        in all aspects of our humanitarian and development work in Nigeria and beyond.
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
                    <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">AIMS AND OBJECTIVES</h2>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {objectives.map((objective, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{objective}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cross-Cutting Objectives */}
                <section className="mb-16">
                    <div className="bg-blue-50 rounded-lg p-8">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-6 text-center">OUR TOP PRIORITIES</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                                <p className="text-gray-700">To mainstream climate change and environmental considerations 
                                    into all programs and activities.</p>
                            </div>
                            <div className="text-center">
                                <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                                <p className="text-gray-700">To promote gender equality, equity, and inclusion in all 
                                    aspects of the organization's work.</p>
                            </div>
                            <div className="text-center">
                                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                                <p className="text-gray-700">To ensure the inclusion and participation of people with 
                                    disabilities in all programs and activities.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutUs;