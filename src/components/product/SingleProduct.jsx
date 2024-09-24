import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

export default function SingleProduct(props) {
  const { product } = props;

  return (

      <Link to={ROUTES.SINGLE_PRODUCTS.DYNAMIC(product.bookId)}>
        
      <div className="card glass w-100 shadow rounded border border-red-300 gap-6">
      <figure>
        <img className="w-full h-72 object-cover"
          src={product.image}
          alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title "> Book Title: {product.bookName}</h2>
        <div className="card-title ">
          Tags: {product.tags && product.tags.map((tag,index)=>{
            return(
              <>
               {index?',': ' '}{tag}
              </>
            )
          }

          )}
        </div>
        <h3 className="card-title "> Author: {product.author}</h3>
        <h3 className="card-title "> Category: {product.category}</h3>
        <h3 className="card-title "> Rating: {product.rating}</h3>

        <div className="card-actions justify-end">
          <Link to={ROUTES.SINGLE_PRODUCTS.DYNAMIC(product.bookId)} className="btn btn-primary">Details about {product.bookName}</Link>
        </div>
      </div>
    </div>
      
      
      </Link>
  
 
  );
}
