import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBooks } from '../API/apiBooks';
import '../css/SingleBookPage.css';

const SingleBookPage = () => {
  const { bookIndex } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksData = await fetchBooks();
        const selectedBook = booksData.find(book => book.index === parseInt(bookIndex));
        setBook(selectedBook);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [bookIndex]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-page">
      <div className="book-details">
        <div className="book-image">
          <img src={book.cover} alt={book.title} />
        </div>
        <div className="book-info">
          <h1>{book.title}</h1>
          <p>Original Title: {book.originalTitle}</p>
          <p>Release Date: {book.releaseDate}</p>
          <p>Pages: {book.pages}</p>
          <p>Description: {book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBookPage;
