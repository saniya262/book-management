import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../features/books/bookSlice';
import BookForm from './BookForm';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const [editingBook, setEditingBook] = useState(null);
  const [showBookList, setShowBookList] = useState(false);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleAddBook = () => {
    setShowBookList(true); // Show the book list after adding a book
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <BookForm currentBook={editingBook} onClose={() => setEditingBook(null)} onAdd={handleAddBook} />

      {showBookList && (
        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '60px', fontFamily: 'monospace' }}>Book List</h2>
          <table style={{ width: '60%', margin: '0 auto', borderCollapse: 'collapse', backgroundColor: 'white' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Book Title</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Author</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Edit</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book.id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.title}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.author}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <button className='btn btn-warning' onClick={() => setEditingBook(book)}>Edit</button>
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <button className='btn btn-danger' onClick={() => handleDelete(book.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookList;
