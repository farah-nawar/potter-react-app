import React, { useEffect, useState } from 'react';
import './Books.css';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../API/apiBooks';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    getBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="books-background">
      <h1 className="books-title">Books</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="books-content">
        <div className="card-grid">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <div key={index} className="card">
                <img src={book.cover} className="card-img-top" alt={book.title} />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">Release Date: {book.releaseDate}</p>
                  <Link to={`/books/${index}`} className="btn btn-primary">
                    View Book Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No books found with title: {searchTerm}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Books;
