
import { Building2, Users, DollarSign, Calendar, Vote, FileText, Shield, Globe } from 'lucide-react';

const Governance = () => {
    const incomeSource = [
        'Board of Directors\' financial and material support',
        'Funding from Foreign and Local Governments',
        'Funding from Foundations',
        'UN Body/Agencies',
        'International and National NGOs',
        'Individual donations',
        'Organization safe funding'
    ];

    const governanceInfo = [
        { label: 'Board of Directors Tenure', value: '5 Years', icon: Calendar },
        { label: 'Meeting Quorum', value: '1/3 Majority or Simple Majority', icon: Vote },
        { label: 'Registration Year', value: '2025', icon: FileText },
        { label: 'Organization Type', value: 'Child-focused and Women\'s Rights NGO', icon: Shield }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <header className="bg-blue-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Building2 className="h-16 w-16 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Governance</h1>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                        Transparency, Accountability, and Ethical Leadership
                    </p>
                    <p className="text-lg italic text-blue-300 mt-2">
                        "Humanitarian Aid with a Humane Touch"
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Organization Information */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Organization Information</h2>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-blue-700 mb-4">Official Name</h3>
                                <p className="text-gray-700 mb-4">
                                    Humanity First Mission for Children Women and the Disabled Populations (FIRST MISSION)
                                </p>

                                <h3 className="text-xl font-semibold text-blue-700 mb-4">Slogan</h3>
                                <p className="text-gray-700 italic mb-4">"Humanitarian Aid with a Humane Touch"</p>

                                <h3 className="text-xl font-semibold text-blue-700 mb-4">Organization Color</h3>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-blue-600 rounded mr-3"></div>
                                    <span className="text-gray-700">Blue</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-blue-700 mb-4">Contact Information</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <Building2 className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                                        <div>
                                            <p className="font-medium text-gray-800">Office Address</p>
                                            <p className="text-gray-600">Block F1 Fashar Shopping Complex, Behind Hassan Gas Maduganari By-pass</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <Globe className="h-5 w-5 text-blue-600 mr-3" />
                                        <div>
                                            <p className="font-medium text-gray-800">Email</p>
                                            <p className="text-gray-600">hom@firstmission.org.ng</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <Globe className="h-5 w-5 text-blue-600 mr-3" />
                                        <div>
                                            <p className="font-medium text-gray-800">Phone Numbers</p>
                                            <p className="text-gray-600">+234 816 631 5323 | +234 0902 907 3561</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Governance Structure */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Governance Structure</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {governanceInfo.map((info, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                                <info.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-blue-800 mb-2">{info.label}</h3>
                                <p className="text-gray-600">{info.value}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Board of Directors */}
                <section className="mb-16">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="flex items-center mb-6">
                            <Users className="h-8 w-8 text-blue-600 mr-3" />
                            <h2 className="text-3xl font-bold text-blue-800">Board of Directors</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-blue-700 mb-4">Governance Structure</h3>
                                <p className="text-gray-700 mb-4">
                                    The Board of Directors serves as the highest governing body of FIRST MISSION, providing strategic oversight
                                    and ensuring the organization fulfills its humanitarian mandate effectively and ethically.
                                </p>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-2">Key Responsibilities</h4>
                                    <ul className="text-gray-700 space-y-1">
                                        <li>• Strategic planning and oversight</li>
                                        <li>• Financial governance and accountability</li>
                                        <li>• Policy development and approval</li>
                                        <li>• Risk management and compliance</li>
                                        <li>• Performance monitoring and evaluation</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-blue-700 mb-4">Meeting Procedures</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                                        <div>
                                            <p className="font-medium text-gray-800">Tenure</p>
                                            <p className="text-gray-600">5 Years</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <Vote className="h-6 w-6 text-blue-600 mr-3" />
                                        <div>
                                            <p className="font-medium text-gray-800">Quorum</p>
                                            <p className="text-gray-600">1/3 Majority or Simple Majority</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sources of Income */}
                <section className="mb-16">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="flex items-center mb-6">
                            <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
                            <h2 className="text-3xl font-bold text-blue-800">Sources of Income</h2>
                        </div>
                        <p className="text-gray-600 mb-6">
                            FIRST MISSION maintains financial sustainability through diverse funding sources, ensuring independence
                            and reliability in delivering humanitarian services.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {incomeSource.map((source, index) => (
                                <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">{source}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Transparency and Accountability */}
                <section>
                    <div className="bg-blue-50 rounded-lg p-8 text-center">
                        <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-blue-800 mb-4">Commitment to Transparency</h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                            FIRST MISSION is committed to maintaining the highest standards of transparency, accountability,
                            and ethical governance in all our operations. We believe that good governance is fundamental
                            to achieving our humanitarian mission and building trust with our stakeholders.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div className="text-center">
                                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                                <h3 className="font-semibold text-blue-800 mb-2">Financial Transparency</h3>
                                <p className="text-gray-600">Regular financial reporting and audits</p>
                            </div>
                            <div className="text-center">
                                <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                                <h3 className="font-semibold text-blue-800 mb-2">Stakeholder Engagement</h3>
                                <p className="text-gray-600">Active participation in decision-making</p>
                            </div>
                            <div className="text-center">
                                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                                <h3 className="font-semibold text-blue-800 mb-2">Ethical Standards</h3>
                                <p className="text-gray-600">Adherence to humanitarian principles</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Governance;