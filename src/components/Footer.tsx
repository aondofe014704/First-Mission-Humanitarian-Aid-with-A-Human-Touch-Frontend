import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: '#' },
        { name: 'Twitter', icon: Twitter, href: '#' },
        { name: 'Instagram', icon: Instagram, href: '#' },
        { name: 'LinkedIn', icon: Linkedin, href: '#' },
    ];

    return (
        <footer className="bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Organization Info */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold mb-4">
                            Humanity First Mission for Children Women and the Disabled Populations
                        </h3>
                        <p className="text-blue-200 mb-4 max-w-md">
                            "Humanitarian Aid with a Humane Touch" - Dedicated to providing humanitarian aid and support to vulnerable populations, particularly children, women, and people with disabilities, in Nigeria.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-blue-300" />
                                <span className="text-sm text-blue-200">hom@firstmission.org.ng</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-blue-300" />
                                <span className="text-sm text-blue-200">+234 816 631 5323 | +234 0902 907 3561</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-blue-300" />
                                <span className="text-sm text-blue-200">
                  Block F1 Fashar Shopping Complex, Behind Hassan Gas Maduganari By-pass
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
                            <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors duration-200">Contact</a></li>
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
                                    className="text-blue-200 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-blue-800"
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
                                &copy; 2025 Humanity First Mission for Children Women and the Disabled Populations (FIRST MISSION). All rights reserved.
                            </p>
                        </div>
                        <div className="text-center sm:text-right">
                            <p className="text-sm text-blue-300 flex flex-col items-start">
                                <span>Designed by</span>
                                <span className="font-semibold">Visual Status Nig Ltd</span>
                                <span className="font-semibold">Reg No. 6911797</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;