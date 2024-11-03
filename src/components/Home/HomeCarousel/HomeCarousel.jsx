import React, { useState, useEffect } from 'react';

function HomeCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        { id: 1, title: "Slide 1", src: "/images/slideimages/slide1.png" },
        { id: 2, title: "Slide 2", src: "/images/slideimages/slide2.png" },
        { id: 3, title: "Slide 3", src: "/images/banner_images/full_banner.png" },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % items.length
        );
    };

    const getVisibleSlides = () => {
        const totalSlides = items.length;
        const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
        const nextIndex = (currentIndex + 1) % totalSlides;

        return [
            { ...items[prevIndex], position: -1 },
            { ...items[currentIndex], position: 0 },
            { ...items[nextIndex], position: 1 },
        ];
    };

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto relative">
            <div className="relative h-80 overflow-hidden">
                <div className="absolute w-full h-full flex items-center justify-center">
                    {getVisibleSlides().map((item) => {
                        const isCenter = item.position === 0;
                        const offset = item.position * 400; // Increased spacing between slides
                        const scale = isCenter ? 1 : 0.85;
                        const opacity = isCenter ? 1 : 0.6;
                        const zIndex = isCenter ? 10 : 5;

                        return (
                            <div
                                key={item.id}
                                className="absolute transition-all duration-500 ease-out"
                                style={{
                                    transform: `translateX(${offset}px) scale(${scale})`,
                                    opacity,
                                    zIndex,
                                }}
                            >
                                {/* Adjust the height for mobile and larger devices */}
                                <div className="w-[90vw] h-48 md:h-64 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg overflow-hidden">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-fill rounded-lg"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-center gap-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-1 h-1 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-black' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomeCarousel;
