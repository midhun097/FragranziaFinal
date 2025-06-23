import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; // Make sure the path is correct

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white p-4 w-full max-w-xs border border-amber-950 rounded-md shadow-md">
      <div className="relative">
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-cyan-900 text-white text-xs px-3 py-1 rounded-full rotate-[-15deg]">
            New
          </span>
        )}
        <div className="bg-white w-64 h-64 p-10 rounded-br-3xl rounded-tl-3xl place-items-center shadow-2xl">
          <img
            src={product.image}
            alt={product.title}
            className="mx-auto h-40 object-contain"
          />
        </div>
      </div>
      <h4 className="mt-4 font-medium text-sm">{product.title}</h4>
      <div className="text-lg font-bold mt-2">RS {product.price}</div>
      <div className="text-sm text-gray-400 line-through">RS {product.originalPrice}</div>
      <button
        className="bg-cyan-900 text-white mt-4 py-2 w-full rounded-md hover:bg-cyan-800 transition-colors"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
