import React from 'react'
import Navbar from "../components/shared/Navbar"
import Footer from '../components/shared/Footer'
import ProductList from '../components/product/ProductList'

export default function BuyBook() {
  return (
    <div>
        <Navbar></Navbar>
        <ProductList></ProductList>
        <Footer></Footer>
    </div>
  )
}
