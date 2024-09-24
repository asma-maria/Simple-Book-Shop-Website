import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import books from './books.json'

const  BookDetails= () => {
  const { bookId } = useParams();
  
  const book = books.filter((b) => b.bookId === parseInt(bookId));
  
  console.log(books);

  if (!book) {
    return <h2>Book not found</h2>;
  }

  const handleAddToCart = () => {
    alert(`${book.bookName} has been successfully added to the Cart`);
  };

  const handleWishToRead = () => {
    alert(`${book.bookName} has been successfully added to the Wishlist`);
  };

  return (
    <div className="book-details">
      <img src={book?.image} alt={book.bookName} />
      <div className="details">
        <h1>{book.bookName}</h1>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Review:</strong> {book.review}</p>
        <p><strong>Total Pages:</strong> {book.totalPages}</p>
        <p><strong>Publisher:</strong> {book.publisher}</p>
        <p><strong>Year of Publishing:</strong> {book.yearOfPublishing}</p>
        <p><strong>Rating:</strong> {book.rating}</p>
        <div className="buttons">
          <button onClick={handleWishToRead}>Wish to Read</button>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
