// import { useNavigate } from 'react-router-dom';
import { Users, Target, HandHeart } from 'lucide-react';
// import StoriesSection from './StoriesSection';
import Carousel from './Carousel'

export default function Home() {
    // const navigate = useNavigate();

    return (
        <main>
            {/* Hero Section */}
            {/*<section className="bg-gray-50 py-8">*/}
            {/*    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-4">*/}
            {/*        /!* Logo *!/*/}
            {/*        <div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">*/}
            {/*            <img*/}
            {/*                src="https://res.cloudinary.com/dgvjxhqjd/image/upload/v1752847535/WhatsApp_Image_2025-07-18_at_14.42.00_f65ea67b-removebg-preview_k1iyo0.png"*/}
            {/*                alt="First Mission Updated Logo"*/}
            {/*                className="h-20 lg:h-24 w-auto transition-transform duration-300 hover:scale-105"*/}
            {/*            />*/}
            {/*        </div>*/}

            {/*        /!* Buttons *!/*/}
            {/*        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full lg:w-auto">*/}
            {/*            <button*/}
            {/*                onClick={() => navigate('/about')}*/}
            {/*                className="bg-blue-600 text-white px-6 py-3 text-sm lg:text-base rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 shadow-sm hover:shadow-md"*/}
            {/*            >*/}
            {/*                Learn More About Us*/}
            {/*                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
            {/*                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>*/}
            {/*                </svg>*/}
            {/*            </button>*/}
            {/*            <button*/}
            {/*                onClick={() => navigate('/donations')}*/}
            {/*                className="bg-blue-500 text-white px-6 py-3 text-sm lg:text-base rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden group"*/}
            {/*            >*/}
            {/*                <span className="relative z-10">DONATE NOW</span>*/}
            {/*                <span className="absolute inset-0 bg-blue-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*<StoriesSection />*/}
            <Carousel />
            {/* Mission Overview */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                            FIRST MISSION is committed to delivering inclusive and sustainable humanitarian assistance,
                            promoting child health, education, women's empowerment, and gender equality, while addressing
                            the unique needs of people with disabilities and mitigating the impacts of climate change.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Protection & Care</h3>
                            <p className="text-gray-600">
                                Ensuring safety and security for vulnerable populations, particularly children, women, and people with disabilities.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Sustainable Development</h3>
                            <p className="text-gray-600">
                                Promoting inclusive and sustainable development with focus on education, healthcare, and economic empowerment.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <HandHeart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Humanitarian Response</h3>
                            <p className="text-gray-600">
                                Responding promptly to humanitarian crises, conflicts, natural disasters, and climate-related challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
