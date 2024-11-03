import React, { useState } from 'react';

const texts = [
  { title: "Extra 5% off on Selected Banks" },
  { title: "Your Centered Text 2" },
  { title: "Your Centered Text 3" },
];

function HomeCarousel2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
  };

  return (
    <div className="relative w-full">
      <img
        src="/images/banner_images/banner_bg_img_g8.png"
        alt="Banner"
        className="w-full h-40 md:h-auto object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-start mt-4 md:mt-0 md:justify-center items-start pl-10 text-black">
        <h2 className="text-md md:text-3xl lg:text-5xl w-full md:w-1/4 font-bold">
          {texts[currentIndex].title}
        </h2>
        <div className="flex flex-col md:flex-row items-center mt-2 md:mt-4">
          <div className="flex items-center">
            <button
              onClick={prevSlide}
              className="text-3xl text-white"
            >
              <span>&lt;</span>
            </button>
            <div className="flex space-x-2 mx-4">
              {texts.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-blue-400' : 'bg-white'}`}
                ></div>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="text-3xl text-white"
            >
              <span>&gt;</span>
            </button>
          </div>
          <button className="mt-2 md:mt-0 ml-0 md:ml-4 px-4 md:px-6 py-2 bg-brand-secondary-gray text-black rounded hover:bg-brand-light-gray text-sm md:text-base">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel2;
