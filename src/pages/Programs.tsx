import { Shield, Heart, Apple, Users, Droplets, GraduationCap, Briefcase, Search, Wheat, Leaf, TreePine, Handshake } from 'lucide-react';

const Programs = () => {
    const programs = [
        {
            title: 'Protection',
            icon: Shield,
            description: 'In Nigeria\'s complex protection environment, marked by displacement, insurgencies, communal crises, poverty, and economic hardship, vulnerable populations face significant risks. Women, children, and adolescent girls are disproportionately affected, requiring targeted protection interventions.',
            activities: ['GBV (Gender-Based Violence)', 'Child Protection', 'Mine Actions', 'Land and Property Rights', 'Support for Displaced Persons']
        },
        {
            title: 'Health',
            icon: Heart,
            description: 'In Nigeria\'s emergency contexts, the organization delivers essential healthcare services to vulnerable populations. Women, children, and adolescent girls face heightened health risks, including sexual and reproductive health (SRH) issues, maternal health complications, and health consequences of sexual and gender-based violence (SGBV).',
            activities: ['Sexual and Reproductive Health (SRH)', 'Maternal Health', 'Mental Health and Psychosocial Support (MHPSS)', 'Medical Care', 'Health Education']
        },
        {
            title: 'Nutrition',
            icon: Apple,
            description: 'In emergency contexts like Nigeria\'s Northeast, Northwest, and Northcentral regions, the organization addresses malnutrition through targeted nutrition interventions. These initiatives include promoting Mother, Infant, and Young Child Feeding (MIYCF) practices.',
            activities: ['Mother, Infant, and Young Child Feeding (MIYCF)', 'Moderate Acute Malnutrition (MAM) Management', 'Severe Acute Malnutrition (SAM) Treatment', 'Tom Brown Nutrition Program', 'Cash and Voucher Assistance (CVA)']
        },
        {
            title: 'Women Empowerment and Advocacy',
            icon: Users,
            description: 'Promoting gender equality, women\'s rights, and economic empowerment to women and adolescent girls affected by humanitarian crisis. We engage in creating opportunities for women to gain independence, confidence, and decision-making abilities.',
            activities: ['Economic Empowerment', 'Vocational Training', 'Entrepreneurship Support', 'Gender-Based Violence Prevention', 'Advocacy and Rights Protection']
        },
        {
            title: 'WASH, NFI/MPCA',
            icon: Droplets,
            description: 'Humanitarian Mission provides critical WASH services, including access to clean water, sanitation facilities, and hygiene promotion, in response to climate-related disasters like flooding, fire outbreaks and conflict-induced displacement.',
            activities: ['Clean Water Access', 'Sanitation Facilities', 'Hygiene Promotion', 'Non-Food Items (NFIs)', 'Multi-Purpose Cash Assistance (MPCA)']
        },
        {
            title: 'Education',
            icon: GraduationCap,
            description: 'The organization prioritizes education as a crucial aspect of development, focusing on improving access to quality education and vocational training. This includes initiatives to promote literacy, numeracy to disadvantaged children.',
            activities: ['Education in Emergencies (EiE)', 'Literacy and Numeracy Programs', 'Vocational Training', 'Skills Development', 'Educational Infrastructure']
        },
        {
            title: 'Career Development',
            icon: Briefcase,
            description: 'Humanitarian Mission\'s Career Development program empowers youth with essential skills, mentorship, and guidance to pursue careers in international development and aid support, particularly in emergency contexts.',
            activities: ['Youth Skills Development', 'Mentorship Programs', 'Career Guidance', 'Leadership Training', 'Capacity Building']
        },
        {
            title: 'Research for International Development',
            icon: Search,
            description: 'Humanitarian Mission\'s research efforts focus on generating evidence-based insights to inform development programs and policies, particularly in response to emerging humanitarian contexts.',
            activities: ['Needs Assessments', 'Policy Research', 'Best Practices Documentation', 'Impact Evaluation', 'Evidence-Based Programming']
        },
        {
            title: 'Food Security and Sustainability',
            icon: Wheat,
            description: 'The organization\'s Food Security and Sustainability (FSS) initiatives promote sustainable agriculture, address hunger, and support livelihood restoration in crisis-affected communities.',
            activities: ['Emergency Food Distribution', 'Agricultural Input Provision', 'Sustainable Agriculture', 'Social Protection', 'Nutrition Support']
        },
        {
            title: 'Livelihood and Early Recovery',
            icon: Leaf,
            description: 'These efforts aim to enhance food security, revive livelihoods, and build resilience among Internally Displaced Persons (IDPs) and host communities. By supporting economic recovery and livelihood restoration, the organization helps affected households regain stability.',
            activities: ['Livelihood Restoration', 'Economic Recovery', 'Skills Training', 'Income Generation', 'Community Resilience']
        },
        {
            title: 'Climate Change and Sustainability',
            icon: TreePine,
            description: 'The Climate Change and Sustainability program promotes safe climate practices and encourages environmental sustainability in regions. The program addresses climate-related challenges, such as flooding, sandstorms, and fire outbreaks.',
            activities: ['Climate Adaptation', 'Environmental Sustainability', 'Disaster Risk Reduction', 'Green Practices', 'Climate Resilience']
        },
        {
            title: 'Conflict Resolution and Peace Building',
            icon: Handshake,
            description: 'The Conflict Resolution and Peace Building program fosters conflict-free societies and promotes peaceful coexistence among diverse communities in Nigeria. In response to escalating crises, including displacements, insurgencies, and communal conflicts.',
            activities: ['Dialogue Facilitation', 'Community Mediation', 'Peace Education', 'Social Cohesion', 'Reconciliation Programs']
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <header className="bg-blue-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Briefcase className="h-16 w-16 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                        Comprehensive humanitarian and development programs addressing the needs of vulnerable populations
                    </p>
                    <p className="text-lg italic text-blue-300 mt-2">
                        "Humanitarian Aid with a Humane Touch"
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Introduction */}
                <section className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">What We Do</h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        FIRST MISSION delivers comprehensive programs across 12 key areas, focusing on protection, health, nutrition,
                        women's empowerment, education, and sustainable development. Our programs are designed to address both immediate
                        humanitarian needs and long-term development goals in Nigeria's most vulnerable communities.
                    </p>
                </section>

                {/* Programs Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <program.icon className="h-8 w-8 text-blue-600 mr-3" />
                                    <h3 className="text-xl font-semibold text-blue-800">{program.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>

                                <div className="border-t pt-4">
                                    <h4 className="font-semibold text-blue-700 mb-2">Key Activities:</h4>
                                    <ul className="space-y-1">
                                        {program.activities.map((activity, actIndex) => (
                                            <li key={actIndex} className="text-sm text-gray-600 flex items-start">
                                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                                {activity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Call to Action */}
                <section className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">Join Our Mission</h2>
                    <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                        Together, we can create lasting change in the lives of vulnerable populations across Nigeria.
                        Your support helps us deliver comprehensive programs that address immediate needs while building
                        sustainable solutions for the future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                            DONATE NOW
                        </button>
                        <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold">
                            Get Involved
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Programs;