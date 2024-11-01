import React from 'react';

function ProductCardLarge({ products, title }) {
    // Define an array of colors
    const colors = [
        'bg-[#FFB5D9]',
        'bg-[#FFFCB5]',
        'bg-[#B5FFC5]',
        'bg-[#B5D9FF]',
        'bg-[#D9B5FF]',
        'bg-[#FFC5B5]',
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {products.map((product, index) => {
                    // Select a color based on the product's index
                    const colorClass = colors[index % colors.length]; // Use modulo to cycle through colors

                    return (
                        <div
                            key={product.id}
                            className={`flex flex-row justify-between items-center border rounded-lg overflow-hidden ${colorClass} p-4 pr-0`}
                        >
                            <div className="flex-grow pr-4">
                                <h3 className="text-lg font-semibold mb-3">{product.name}</h3> {/* Increased margin-bottom */}
                                <p className="text-gray-600 mb-3 text-sm">{product.description}</p> {/* Increased margin-bottom */}
                                <p className="text-[#C13378] font-medium mb-1">Starting from:</p> {/* Increased margin-bottom */}
                                <p className="text-xl font-bold text-black">${product.price}</p>
                            </div>

                            <div className="w-1/3">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProductCardLarge;

