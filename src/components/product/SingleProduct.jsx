import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

export default function SingleProduct(props) {
  const { product } = props;
  return (
    <Link >
      <div className="bg-white p-3 shadow rounded border border-red-100 space-y-4 relative">
        <span className="absolute top-0 right-0 bg-gray-400 p-1 rounded">
          10%
        </span>
        <div className="bg-gray-100">
          <img
            src={product.image}
            alt=""
          />
        </div>
        <p className="text-xs font-semibold" title={product?.bookName}>
         
        </p>
        <button
          type="button"
          className="bg-orange-900 rounded px-3 text-white py-2"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
