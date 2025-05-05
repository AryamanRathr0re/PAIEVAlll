import React from "react";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain mb-2"
        />
        <h2 className="font-semibold text-lg">{product.title}</h2>
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
