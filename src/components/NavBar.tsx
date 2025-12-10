import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleGetInvolved = () => {
        setIsGetInvolvedOpen(!isGetInvolvedOpen);
    };

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Organogram', href: '/organogram' },
        { name: 'Governance', href: '/governance' },
        { name: 'Program', href: '/programs' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact Us', href: '/contact' }
    ];
    
    const getInvolvedItems = [
        { name: 'Partner With Us', href: '/partner' },
        { name: 'Volunteer With Us', href: '/volunteer' }
    ];

    return (
        <nav className="bg-blue-900 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <Link to="/" className="flex items-center">
                        <img src="/logo.png" alt="First Mission Logo" className="h-8 w-8 mr-2" />
                        <div className="text-white">
                            <div className="text-base font-bold">
                                First Mission
                            </div>
                            <div className="text-xs italic">
                                "Humanitarian Aid with a Human Touch"
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <ul className="flex space-x-8 items-center">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            {/* Get Involved Dropdown */}
                            <li className="relative group">
                                <button 
                                    onClick={toggleGetInvolved}
                                    className="text-white hover:text-blue-200 transition-colors duration-200 font-medium flex items-center focus:outline-none"
                                >
                                    Get Involved
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isGetInvolvedOpen && (
                                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                            {getInvolvedItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                                    onClick={() => setIsGetInvolvedOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>

                    {/* Desktop Actions */}
                    {/*
                    <div className="hidden lg:flex items-center space-x-4">
                        <button
                            onClick={handleDonateClick}
                            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-md"
                        >
                            DONATE NOW
                        </button>
                    </div>
                    */}

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-blue-200 transition-colors duration-200 p-2 rounded-md"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                            <span className="sr-only">Toggle menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                id="mobile-menu"
                className={`lg:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden bg-blue-900`}
            >
                <div className="px-4 pt-2 pb-4 space-y-2">
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className="block px-3 py-2 text-white hover:bg-blue-800 hover:text-blue-200 rounded-md transition-colors duration-200 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button 
                                onClick={() => setIsGetInvolvedOpen(!isGetInvolvedOpen)}
                                className="w-full text-left px-3 py-2 text-white hover:bg-blue-800 hover:text-blue-200 rounded-md transition-colors duration-200 font-medium flex items-center justify-between"
                            >
                                Get Involved
                                <svg className={`w-4 h-4 transform transition-transform ${isGetInvolvedOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isGetInvolvedOpen && (
                                <ul className="ml-4 mt-1 space-y-1">
                                    {getInvolvedItems.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                to={item.href}
                                                className="block px-3 py-2 text-white hover:bg-blue-800 hover:text-blue-200 rounded-md transition-colors duration-200 font-medium"
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setIsGetInvolvedOpen(false);
                                                }}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>

                    {/* Mobile Actions */}
                    {/*
                    <div className="pt-4 border-t border-blue-600 space-y-3">
                        <button
                            onClick={() => {
                                handleDonateClick();
                                setIsMenuOpen(false);
                            }}
                            className="w-full bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-md"
                        >
                            DONATE NOW
                        </button>
                    </div>
                    */}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
