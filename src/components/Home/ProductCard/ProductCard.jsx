import React from "react";
import { IoMdAdd } from "react-icons/io";

function ProductCard({ products,title ,bg}) {
  return (
      <div style={{ backgroundColor: bg }} className="py-10 my-3">
          <h1 className="mx-10 text-2xl font-bold">{title}</h1>
      <div className="flex space-x-4 overflow-x-auto p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-48 flex-none rounded-lg bg-white p-3 border-2 border-[bg]"
          >
            <div className="text-end text-sm text-brand-light-gray">
              <span className="rounded-lg bg-red-600 p-1">{`-${product.discount}%`}</span>
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="mb-2 h-32 w-full object-cover"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-center font-semibold">{product.name}</h3>
              <p className="text-center text-sm text-gray-600">
                {product.description}
              </p>
              <div className="flex w-full justify-between">
                <p className="text-center text-lg font-bold">{`$${product.price}`}</p>
                <span className="justify-center rounded-lg bg-brand-primary p-2 text-brand-light-gray">
                  <IoMdAdd />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
