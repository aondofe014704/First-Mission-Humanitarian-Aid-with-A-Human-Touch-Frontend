import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs';
import Organogram from './pages/Organogram';
import Governance from './pages/Governance';
import Donations from './pages/Donations';

import AuthModal from './auth/AuthModal';

import { useAuthStore } from './auth/authStore';

import { Users, Target, HandHeart, ArrowRight } from 'lucide-react';
import StoriesSection from "./pages/StoriesSection.tsx";

function App() {
    const {
        isAuthModalOpen,
        closeAuthModal,
        // openAuthModal,
        // user,
    } = useAuthStore();

    const handleLearnMore = () => {
        window.location.href = '/about';
    };

    // const handleViewPrograms = () => {
    //     window.location.href = '/programs';
    // };

    // const handleGetInvolved = () => {
    //     if (user) {
    //         alert('You are already part of our mission! Thank you for your support.');
    //     } else {
    //         openAuthModal('register');
    //     }
    // };

    return (
        <Router>
            <div className="min-h-screen bg-white">
                <NavBar />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <main>
                                {/* Hero Section */}
                                <section className="bg-gray-50 py-12 px-4">
                                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">

                                        {/* Logo */}
                                        <div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
                                            <img
                                                src="https://res.cloudinary.com/dgvjxhqjd/image/upload/v1752847535/WhatsApp_Image_2025-07-18_at_14.42.00_f65ea67b-removebg-preview_k1iyo0.png"
                                                alt="First Mission Logo"
                                                className="h-20 lg:h-24 w-auto"
                                            />

                                        </div>

                                        {/* Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full lg:w-auto">
                                            <button
                                                onClick={handleLearnMore}
                                                className="bg-blue-600 text-white px-5 py-2 text-sm lg:text-base rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
                                            >
                                                Learn More About Us
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => (window.location.href = '/donations')}
                                                className="bg-blue-500 text-white px-5 py-2 text-sm lg:text-base rounded-full font-semibold hover:bg-blue-400 transition-colors duration-300 animate-pulse"
                                            >
                                                DONATE NOW
                                            </button>
                                        </div>

                                    </div>
                                </section>
                                <StoriesSection />



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

                                {/* Call to Action */}
                                {/*<section className="py-16 px-4 bg-blue-600 text-white">*/}
                                {/*    <div className="max-w-4xl mx-auto text-center">*/}
                                {/*        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>*/}
                                {/*        <p className="text-xl mb-8 opacity-90">*/}
                                {/*            Together, we can create a more equitable Nigeria where every individual has access to*/}
                                {/*            quality education, healthcare, and economic opportunities.*/}
                                {/*        </p>*/}
                                {/*        <div className="flex flex-col sm:flex-row gap-4 justify-center">*/}
                                {/*            <button*/}
                                {/*                onClick={handleViewPrograms}*/}
                                {/*                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"*/}
                                {/*            >*/}
                                {/*                View Our Programs*/}
                                {/*            </button>*/}
                                {/*            <button*/}
                                {/*                onClick={handleGetInvolved}*/}
                                {/*                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300 border-2 border-white"*/}
                                {/*            >*/}
                                {/*                Get Involved*/}
                                {/*            </button>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</section>*/}

                            </main>
                        }
                    />

                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/organogram" element={<Organogram />} />
                    <Route path="/governance" element={<Governance />} />
                    <Route path="/donations" element={<Donations />} />
                    <Route path='/stories' element={<StoriesSection/>} />
                </Routes>

                <Footer />

                {isAuthModalOpen && (
                    <AuthModal onClose={closeAuthModal} isOpen={true} />
                )}
            </div>
        </Router>
    );
}

export default App;