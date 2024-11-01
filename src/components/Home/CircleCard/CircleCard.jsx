import React from 'react';

const CircleCard = ({ data, title, bg }) => {
    return (
        <>
            <h1 className='text-2xl font-bold mx-10'>{title}</h1>
            <div className="flex overflow-x-auto p-4 space-x-4">
                {data.map(d => (
                    <div
                        key={d.id} // Ensure category.id is unique
                        className="flex flex-col items-center justify-center"
                    >
                        <img
                            src={d.image}
                            alt={d.name}
                            className={`w-2/3 p-2 rounded-full object-cover ${bg}`} // Corrected to use template literals properly
                        />
                        <span className="text-center mt-2 text-xs font-medium w-24 overflow-hidden text-ellipsis">
                            {d.name} {/* Truncate text with ellipsis */}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CircleCard;
