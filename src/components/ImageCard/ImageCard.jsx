import React from 'react';

function ImageCard({ image, name, subtitle }) {
    return (
        <div className="w-full mx-auto max-w-xs md:max-w-sm lg:max-w-md rounded-3xl overflow-hidden shadow-md my-2">
            <img src={image} alt={name} className="w-full h-80 object-cover object-top" />
            <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-black">{name}</h3>
                <p className="text-gray-600">{subtitle}</p>
            </div>
        </div>
    );
}

export default ImageCard;
