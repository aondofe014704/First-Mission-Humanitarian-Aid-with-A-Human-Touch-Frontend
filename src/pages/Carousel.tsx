import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {carouselData} from "./carouselData";

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselData.length);
            setIsTransitioning(false);
        }, 500);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
            setIsTransitioning(false);
        }, 500);
    };

    const goToSlide = (index: any) => {
        if (isTransitioning || index === currentIndex) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsTransitioning(false);
        }, 500);
    };

    return (
        <div className="bg-white py-8 sm:py-12 lg:py-16">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Carousel Container */}
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Image Section with Title Overlay */}
                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
                        {carouselData.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                                {/* Title on Image */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg leading-tight">
                                        {slide.title}
                                    </h2>
                                </div>
                            </div>
                        ))}

                        {/* Navigation Arrows */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-black z-10"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-black z-10"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>

                    {/* Description Section */}
                    <div className="relative bg-white p-4 sm:p-6 md:p-8">
                        {carouselData.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`transition-opacity duration-500 ease-in-out ${
                                    index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0 p-4 sm:p-6 md:p-8'
                                }`}
                            >
                                <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed">
                                    {slide.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Dot Indicators */}
                    <div className="bg-white pb-4 sm:pb-6 flex justify-center gap-2">
                        {carouselData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black ${
                                    index === currentIndex
                                        ? 'bg-black w-8 sm:w-10 h-2 sm:h-2.5'
                                        : 'bg-gray-300 hover:bg-gray-400 w-2 sm:w-2.5 h-2 sm:h-2.5'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Slide Counter */}
                <div className="text-center mt-3 sm:mt-4">
                    <p className="text-black text-xs sm:text-sm font-medium">
                        {currentIndex + 1} / {carouselData.length}
                    </p>
                </div>
            </div>
        </div>
    );
}