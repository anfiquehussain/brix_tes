import React from 'react';

function SquareImageCard({ data, title, bg }) {
    return (
        <>
            <h1 className='text-2xl font-bold mx-10'>{title}</h1>
            <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4 md:gap-10">
                {data.map(d => (
                    <div
                        key={d.id} // Ensure d.id is unique
                        className={`flex flex-col items-center justify-center ${bg} p-5`} // Centered content
                    >
                        <img
                            src={d.image}
                            alt={d.name}
                            className="w-32 h-32 md:w-48 md:h-48 object-contain" // Use object-contain to maintain aspect ratio without cropping
                        />
                        <span className="text-center mt-2 text-sm font-bold">
                            {d.name}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SquareImageCard;
