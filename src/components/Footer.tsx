import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, X, Linkedin } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/17Kirf9FKE/' },
        { name: 'X', icon: X, href: 'https://x.com/Firstmissionng' },
        { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/firstmissionnigeria?igsh=MTNqNXhjaXNhYmNyeg==' },
        { name: 'Youtube', icon: Youtube, href: 'https://www.youtube.com/@FirstMission-c7r' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/first-mission-21909b3aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    ];

    return (
        <>
            {/* Partners Section - Above Footer */}
            <div className="bg-blue-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-2xl font-bold text-center mb-8 text-white">Our Valued Partners</h3>
                    <div className="relative overflow-hidden bg-blue-800 rounded-lg py-6">
                        <div className="flex animate-marquee">
                            <div className="flex space-x-12 mx-6">
                                <img src="/casfod.jpeg" alt="CASFOD Partner" className="h-16 w-auto object-contain" />
                                <img src="/catai.jpeg" alt="CATAI Partner" className="h-16 w-auto object-contain" />
                                <img src="/ghiv.jpeg" alt="GHIV Partner" className="h-16 w-auto object-contain" />
                                <img src="/cfci.png" alt="CFCI Partner" className="h-16 w-auto object-contain" />
                            </div>
                            <div className="flex space-x-12 mx-6">
                                <img src="/casfod.jpeg" alt="CASFOD Partner" className="h-16 w-auto object-contain" />
                                <img src="/catai.jpeg" alt="CATAI Partner" className="h-16 w-auto object-contain" />
                                <img src="/ghiv.jpeg" alt="GHIV Partner" className="h-16 w-auto object-contain" />
                                <img src="/cfci.png" alt="CFCI Partner" className="h-16 w-auto object-contain" />
                            </div>
                            <div className="flex space-x-12 mx-6">
                                <img src="/casfod.jpeg" alt="CASFOD Partner" className="h-16 w-auto object-contain" />
                                <img src="/catai.jpeg" alt="CATAI Partner" className="h-16 w-auto object-contain" />
                                <img src="/ghiv.jpeg" alt="GHIV Partner" className="h-16 w-auto object-contain" />
                                <img src="/cfci.png" alt="CFCI Partner" className="h-16 w-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <footer className="bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Organization Info */}
                        <div className="lg:col-span-2">
                            <h3 className="text-xl font-bold mb-4">
                                HUMANITY FIRST MISSION FOR CHILDREN WOMEN AND PEOPLE WITH DISABILITIES (FIRST MISSION)
                            </h3>
                            <p className="text-blue-200 mb-4 max-w-md">
                                FIRST MISSION is Dedicated to providing humanitarian aid and support to vulnerable populations, particularly children, women, and people with disabilities, in Nigeria.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4 text-blue-300" />
                                    <span className="text-sm text-blue-200">hom@firstmission-ng.org</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Phone className="h-4 w-4 text-blue-300" />
                                    <span className="text-sm text-blue-200">+234 091 644 072 13</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MapPin className="h-4 w-4 text-blue-300" />
                                    <span className="text-sm text-blue-200">
                                        No. 6 Off Damboa Road, Opp. Mafoni Librety Pri, Sch, Beside Armani Event Center, Maiduguri, Borno State
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="/home" className="text-blue-200 hover:text-white transition-colors duration-200">Home</a></li>
                                <li><a href="/about" className="text-blue-200 hover:text-white transition-colors duration-200">About Us</a></li>
                                <li><a href="/organogram" className="text-blue-200 hover:text-white transition-colors duration-200">Organogram</a></li>
                                <li><a href="/programs" className="text-blue-200 hover:text-white transition-colors duration-200">Programs</a></li>
                                <li><a href="/contact" className="text-blue-200 hover:text-white transition-colors duration-200">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4 mb-6">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="text-blue-200 hover:text-white transition-colors duration-200
                                         p-2 rounded-full hover:bg-blue-800"
                                        aria-label={`Follow us on ${social.name}`}
                                    >
                                        <social.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-12 pt-8 border-t border-blue-800">
                        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                            <div className="text-center sm:text-left">
                                <p className="text-sm text-blue-200">
                                    &copy; 2025 Humanity First Mission for Children Women and People with Disabilities (FIRST MISSION). All rights reserved.
                                </p>
                            </div>
                            <div className="text-center sm:text-right">
                                <a
                                    href="https://jack-songu-portfolio-psi.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-300 flex flex-row sm:flex-col 
                                    items-center sm:items-start gap-1 sm:gap-0 hover:text-blue-500 transition-colors"
                                >
                                    <span>Designed by</span>
                                    <span className="font-semibold">Visual Status Nig Ltd</span>
                                    <span className="font-semibold">Reg No. 6911797</span>
                                    <span className="font-semibold">08065099019</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;