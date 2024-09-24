import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductsDetailsPage() {
    let {detailId}=useParams();
    console.log(detailId);
    const getSingleProductById=()=>
    {
        
    }
  return (
    <div>ProductsDetailsPage</div>
  )
}
