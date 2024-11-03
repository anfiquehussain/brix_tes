import React from 'react';

function HeroBanner({ title, subtitle }) {
  return (
    <div className="relative w-full bg-brand-primary flex flex-col md:flex-row justify-center items-center"
      style={{ backgroundImage: "url('/images/banner_images/HB_bg.png')", backgroundSize: "fill", backgroundPosition: "center" }}>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Text Section */}
      <div className="relative z-20 flex-initial w-full md:w-1/2 p-4 md:p-8">
        <h1 className="text-5xl md:text-6xl text-white text-center md:text-left">
          {title}
        </h1>
        <p className="text-white text-center md:text-left mt-4 text-sm">
          {subtitle}
        </p>
      </div>

      {/* Image Section */}
      <div className="relative z-20 flex-initial w-full md:w-1/2 p-4 md:p-8 flex justify-center">
        <img
          src="/images/banner_images/iPhone13.png"
          alt="iPhone 13"
          className="w-1/4 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}

export default HeroBanner;
