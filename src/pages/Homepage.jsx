import Navbar from "../components/shared/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/shared/Footer";
import ProductList from "../components/product/ProductList"


export default function Homepage() {
  return (
    <div>
       <Navbar></Navbar>
       <Banner></Banner>
       <ProductList></ProductList>
      
    </div>
  )
}
