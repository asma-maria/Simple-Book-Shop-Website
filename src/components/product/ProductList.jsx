import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { getAllProduct } from "../../utlis/product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const getAllProductList = async () => {
    const data = await getAllProduct();
    setProducts(data?.results);
  };
  useEffect(() => {
    getAllProductList();
  }, []);
  return (
    <section className="mx-auto container">
      <div className="grid grid-cols-4 gap-5">
        {products?.map((product) => (
          <SingleProduct key={product.bookId} product={product} />
        ))}
      </div>
    </section>
  );
}
