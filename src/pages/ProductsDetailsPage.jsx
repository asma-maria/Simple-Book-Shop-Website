import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function ProductsDetailsPage() {
    let {bookId}=useParams();
    const [book,setBook]=useState()
    console.log(bookId);
    const getSingleBookById = async () => {
        const data = await fetch("/Book.json");  // Fetch the Book.json file
        const result = await data.json();        // Parse the JSON response
        const foundBook = result.find(b => b.bookId === parseInt(bookId));  // Find the book that matches the bookId

        if (foundBook) {
            setBook(foundBook);  // Set the found book to state
        }
        if (!foundBook) {
            return <h2>Book not found</h2>;
          }
    };  

         useEffect(()=>{getSingleBookById()

         },[]) 
  
    const handleAddToCart = () => {
        alert(`Serial No:${book?.bookId}, Book Name : ${book?.bookName} has been successfully added to the Cart`);
      };
    
      const handleWishToRead = () => {
        alert(`Serial No:${book?.bookId},Book Name : ${book?.bookName}  has been successfully added to the Wishlist`);
      };
  return (
   
    <div className="card lg:card-side bg-base-100 shadow-xl">
      
      <img src={book?.image} alt={book?.bookName} />
      <div className="card-body justify-center">
        <h1 className='card-title'> Book Name: {book?.bookName}</h1>
        <p><strong>Author:</strong> {book?.author}</p>
        <p><strong>Category:</strong> {book?.category}</p>
        <p><strong>Review:</strong> {book?.review}</p>
        <p><strong>Total Pages:</strong> {book?.totalPages}</p>
        <p><strong>Publisher:</strong> {book?.publisher}</p>
        <p><strong>Year of Publishing:</strong> {book?.yearOfPublishing}</p>
        <p><strong>Rating:</strong> {book?.rating}</p>
        <div className="buttons ">
          <button className='btn bg-orange-500 gap-4' onClick={handleWishToRead}>Wish to Read</button>
          <button className='btn bg-lime-500' onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>

  )
};

