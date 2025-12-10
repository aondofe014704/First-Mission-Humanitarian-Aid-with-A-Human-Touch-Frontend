import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import { toast, Toaster } from 'sonner';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const subjects = [
        'General Inquiry',
        'Volunteer Opportunities',
        'Partnership',
        'Donation Questions',
        'Other'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        toast.success('Your message has been sent! We\'ll get back to you within 24-48 hours.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Toaster position="top-right" richColors />
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We'd love to hear from you. Reach out to us with your questions, feedback, or partnership inquiries.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Left Column - Contact Information */}
                        <div className="bg-blue-900 text-white p-8 md:w-1/3">
                            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-blue-100">Our Office</h3>
                                        <p className="text-blue-200">
                                            1234 Charity Street<br />
                                            City, State 12345<br />
                                            Country
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="h-6 w-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-blue-100">Phone</h3>
                                        <p className="text-blue-200">
                                            Main: +1 (555) 123-4567<br />
                                            Toll-Free: 1-800-123-4567
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-blue-100">Email</h3>
                                        <p className="text-blue-200">
                                            info@firstmission.org<br />
                                            support@firstmission.org
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="h-6 w-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-blue-100">Working Hours</h3>
                                        <p className="text-blue-200">
                                            Monday - Friday: 9:00 AM - 5:00 PM<br />
                                            Saturday: 10:00 AM - 2:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <h3 className="font-semibold text-blue-100 mb-3">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                                            <Facebook className="h-6 w-6" />
                                        </a>
                                        <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                                            <Twitter className="h-6 w-6" />
                                        </a>
                                        <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                                            <Instagram className="h-6 w-6" />
                                        </a>
                                        <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                                            <Linkedin className="h-6 w-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="p-8 md:w-2/3">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                            Subject <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                        >
                                            <option value="">Select a subject</option>
                                            {subjects.map((subject) => (
                                                <option key={subject} value={subject}>
                                                    {subject}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-900 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center"
                                    >
                                        Send Message
                                    </button>
                                    <p className="mt-3 text-sm text-gray-500 text-center">
                                        We'll respond to your message within 24-48 hours.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
