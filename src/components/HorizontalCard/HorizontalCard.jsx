import React from 'react';

function HorizontalCard({ image, head, title, description }) {
    return (
        <div className="flex flex-col md:flex-row items-center p-8 bg-white w-full lg:w-3/4 mx-auto md:mx-0">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img src={image} alt={title} className="w-full rounded-lg object-cover" />
            </div>
            <div className="w-full md:w-1/2 px-0 md:px-8 text-center md:text-left">
                <h3 className="text-sm font-medium text-brand-text-light mb-2">{head}</h3>
                <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">{title}</h4>
                <p className="text-base text-brand-dark leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

export default HorizontalCard;
