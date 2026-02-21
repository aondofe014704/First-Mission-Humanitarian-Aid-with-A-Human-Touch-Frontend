import { Shield, Apple, Droplets, GraduationCap, Briefcase, Wheat, TreePine } from 'lucide-react';

const Programs = () => {
    const programs = [
        {
            title: 'PROTECTION',
            icon: Shield,
            description: 'In Nigeria\'s complex protection environment, marked by displacement, insurgencies, communal crises, poverty, and economic hardship, vulnerable populations face significant risks. Women, children, and adolescent girls are disproportionately affected, requiring targeted protection interventions. The organization\'s protection efforts focus on ensuring safety and security for these groups, addressing specific needs and vulnerabilities. This includes providing support and services to mitigate the impact of violence, exploitation, and abuse. By prioritizing protection, the organization aims to safeguard the well-being and dignity of vulnerable populations in Nigeria engaging in sub-activities like GBV, Child protection, mine actions, land, property and for the displaced persons. Another component of protection which is addressed by FIRST MISSION is Promoting gender equality, women\'s rights, and economic empowerment/social protection to women and adolescent girls affected by humanitarian crisis. We engage in creating opportunities for women to gain independence, confidence, and decision-making abilities. our programs address issues such as gender-based violence, economic inequality, and access to education and healthcare. By targeting vulnerable populations, we will aim to reduce disparities and promote inclusivity, ultimately contributing to a more equitable Nigeria. Through advocacy and support, the programs seek to create lasting positive change for women and vulnerable groups.',
            activities: ['GBV (Gender-Based Violence)', 'Child Protection', 'Mine Actions', 'Land and Property Rights', 'Support for Displaced Persons']
        },
        {
            title: 'HEALTH/ NUTRITION',
            icon: Apple,
            description: 'In Nigeria\'s emergency contexts, the organization delivers essential healthcare services to vulnerable populations. Women, children, and adolescent girls face heightened health risks, including sexual and reproductive health (SRH) issues, maternal health complications, and health consequences of sexual and gender-based violence (SGBV). Mental health and psychosocial support (MHPSS), HIV/AID/Tuberculosis (TB)/Malaria, and other tropical/neglected diseases are also critical concerns, as survivors of violence and displacement often experience trauma. The organization\'s health initiatives aim to address these complex needs, providing medical care, health education, and psychosocial support. the organization also, addresses malnutrition through targeted nutrition interventions. These initiatives include promoting Mother, Infant, and Young Child Feeding (MIYCF) practices, managing Moderate Acute Malnutrition (MAM), and treating Severe Acute Malnutrition (SAM). The organization prioritizes localized approaches, such as using Tom Brown (a nutrient-rich blend of grains and legumes) for treatment, and collaborates with local structures to ensure sustainability. Cash and Voucher Assistance (CVA) is also integrated to support access to nutritious food. By addressing malnutrition, the organization aims to reduce child mortality, improve maternal health, and enhance overall well-being in crisis-affected communities. By responding to these health/nutrition challenges, the organization seeks to improve overall well-being and resilience among affected communities.',
            activities: ['Mother, Infant, and Young Child Feeding (MIYCF)', 'Moderate Acute Malnutrition (MAM) Management', 'Severe Acute Malnutrition (SAM) Treatment', 'Tom Brown Nutrition Program', 'Cash and Voucher Assistance (CVA)']
        },
        {
            title: 'WASH (WATER, SANITATION, AND HYGIENE), NFI/MPCA',
            icon: Droplets,
            description: 'Humanitarian Mission provides critical WASH services, including access to clean water, sanitation facilities, and hygiene promotion, in response to climate-related disasters like flooding, fire outbreaks and conflict-induced displacement. In Northwest, Northeast, and Northcentral Nigeria, where WASH infrastructure has been damaged or destroyed, the organization\'s tailored interventions aim to restore access to essential services. Non-Food Items (NFIs) and Multi-Purpose Cash Assistance (MPCA) are integrated into WASH programming to support vulnerable populations. By promoting hygiene practices and providing WASH services, the organization seeks to reduce water-borne illnesses and improve overall health outcomes. Ultimately, the goal is to enhance resilience and well-being in communities affected by conflict and climate-related shocks.',
            activities: ['Clean Water Access', 'Sanitation Facilities', 'Hygiene Promotion', 'Non-Food Items (NFIs)', 'Multi-Purpose Cash Assistance (MPCA)']
        },
        {
            title: 'EDUCATION',
            icon: GraduationCap,
            description: 'The organization prioritizes education as a crucial aspect of development, focusing on improving access to quality education and vocational training. This includes initiatives to promote literacy, numeracy to un advantaged children and equip parents/caregivers with skills/livelihood necessary for longer sustainability, future opportunities for both children and communities where we operate especially in emergency situations and poverty encroached communities, the organization delivers Education in Emergencies (EiE) services, ensuring continuity of learning despite challenging circumstances. By integrating various education strategies, the organization addresses both immediate needs and long-term development goals. Ultimately, the goal is to empower individuals and communities through education, fostering resilience and sustainable growth.',
            activities: ['Education in Emergencies (EiE)', 'Literacy and Numeracy Programs', 'Vocational Training', 'Skills Development', 'Educational Infrastructure']
        },
        {
            title: 'FOOD SECURITY AND EARLY RECOVERY',
            icon: Wheat,
            description: 'In the volatile landscape of Northeast and other Regions in Nigeria specifically within the Borno, Adamawa, and Yobe (BAY) states, FIRST MISSION is dedicated to breaking the cycle of vulnerability through an integrated approach to Food Security and Early Recovery. Recognizing that conflict, climate-induced flooding, and economic instability disproportionately impact the most marginalized, we prioritize the immediate nutritional needs of children, women, and persons with disabilities while simultaneously laying the groundwork for sustainable self-reliance. By transitioning from emergency food assistance to early recovery initiatives such as climate-smart agricultural training, inclusive vocational skill-building, and the restoration of local markets we empower crisis-affected households to move beyond aid dependency. Our mission is to ensure that the recovery process is inherently inclusive, restoring not only the livelihoods but also the dignity and social equity of the region’s most vulnerable populations as they rebuild their futures.',
            activities: ['Emergency Food Assistance (In-Kind and Cash/CVA)', 'Agriculture and Livelihood Support', 'Vocational Training and Income-Generating Activities (IGA)', 'Restoration of Basic Infrastructure and Services', 'Strengthening Local Governance and Social Cohesion (Village Savings and Loan Associations (VSLAs))']
        },
        {
            title: 'CLIMATE CHANGE AND SUSTAINABILITY',
            icon: TreePine,
            description: 'The Climate Change and Sustainability program promotes safe climate practices and encourages environmental sustainability in regions. The program addresses climate-related challenges, such as flooding, sandstorms, and fire outbreaks, which exacerbate displacement and vulnerability. Through tailored interventions, the program aims to mitigate the impacts of climate change and promote sustainable environmental practices. By implementing climate-resilient solutions, the organization seeks to reduce risks and enhance adaptive capacities among communities. Ultimately, the goal is to contribute to a more sustainable and climate-resilient future for vulnerable populations and communities in the country. The organization\'s Climate Action will address Food Security and Sustainability (FSS) and Livelihood and recovery initiatives to promote sustainable agriculture, address hunger, and support livelihood restoration in human and climate crisis-affected communities. In response to climate-related disasters and conflict-induced displacement in Nigeria\'s Northwest, Northeast, and Northcentral regions, the organization prioritizes emergency food distribution, agricultural input provision, and social protection initiatives. These efforts aim to enhance food security, revive livelihoods, and build resilience among Internally Displaced Persons (IDPs) and host communities. By supporting economic recovery and livelihood restoration, the organization helps affected households and individuals regain stability and self-sufficiency. Ultimately, the goal is to improve food security, reduce vulnerability, and promote sustainable livelihoods in the face of humanitarian crises.',
            activities: ['Climate Adaptation', 'Environmental Sustainability', 'Disaster Risk Reduction', 'Green Practices', 'Climate Resilience']
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <header className="bg-blue-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Briefcase className="h-16 w-16 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">OUR PROGRAMS</h1>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                        Comprehensive humanitarian and development programs addressing the needs of vulnerable populations
                    </p>
                    <p className="text-lg italic text-blue-300 mt-2">
                        "Humanitarian Aid with a Human Touch"
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Introduction */}
                <section className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">WHAT WE DO</h2>
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
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">JOIN OUR MISSION</h2>
                    <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                        Together, we can create lasting change in the lives of vulnerable populations across Nigeria.
                        Your support helps us deliver comprehensive programs that address immediate needs while building
                        sustainable solutions for the future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => (window.location.href = '/donations')}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                            DONATE NOW
                        </button>
                        {/*<button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold">*/}
                        {/*    Get Involved*/}
                        {/*</button>*/}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Programs;