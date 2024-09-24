import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { getAllProduct } from "../../utlis/product";


export default function ProductList() {
  const [products, setProducts] = useState([]);
  const getAllProductList = async () => {
    const data = await getAllProduct();
    setProducts(data);
    
  };
  useEffect(() => {
    getAllProductList();
  }, []);
  return (
    <section>
    
      <div>
          <h1 className="text-3xl font-serif text-center"> There is no friend as loyal as a book </h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
        {products?.map((product) => (
          <SingleProduct key={product.bookId} product={product} > </SingleProduct>
          
        ))}
      </div>
    </section>
  );
}
