import React from 'react';

function BannerHire() {
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center bg-[#F65859] p-8 md:p-14 lg:p-20">
            <div className="flex justify-center md:justify-start w-full md:w-3/5 lg:w-1/2 xl:w-[45%] mb-8 md:mb-0">
                <img src="/images/banner_images/van.png" alt="van" className="w-full sm:w-4/5 md:w-full lg:w-[90%] xl:w-[85%]" />
            </div>
            <div className="text-white text-center md:text-left w-full md:w-1/2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Hire Your</h1>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">Pick-up</h1>
                <button className="mt-6 px-8 py-3 bg-white text-[#F65859] font-semibold rounded-lg text-lg md:text-xl transition transform hover:scale-105 hover:bg-gray-200">
                    Hire Now
                </button>
            </div>
        </div>
    );
}

export default BannerHire;
