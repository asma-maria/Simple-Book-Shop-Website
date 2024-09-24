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
      <div className="grid grid-cols-3 gap-4 px-2 py-10 ">
        {products?.map((product) => (
          <SingleProduct key={product.bookId} product={product} > </SingleProduct>
          
        ))}
      </div>
    </section>
  );
}
