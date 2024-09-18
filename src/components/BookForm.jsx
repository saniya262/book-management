import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, editBook } from '../features/books/bookSlice';

const BookForm = ({ currentBook, onClose, onAdd }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (currentBook) {
      setTitle(currentBook.title);
      setAuthor(currentBook.author);
    } else {
      setTitle('');
      setAuthor('');
    }
  }, [currentBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: currentBook ? currentBook.id : Date.now(), title, author };

    if (currentBook) {
      dispatch(editBook({ id: currentBook.id, updatedBook: book }));
    } else {
      dispatch(addBook(book));
    }

    setTitle('');
    setAuthor('');
    onAdd(); // Notify the parent component to show the book list
    onClose();
  };

  return (
    <div className='container mt-5' style={{ marginBottom: '2rem' }}>
      <h1 style={{ fontSize: '60px', fontFamily: 'monospace', marginTop: '30px' }}>Add Book Details</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <div className='d-flex flex-column align-items-center'>
          <input
            className='form-control w-25 mb-3'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title"
            required
          />
          <input
            className='form-control w-25 mb-3'
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            required
          />
          <button type="submit" className='btn btn-outline-success'>
            {currentBook ? 'Update' : 'Add'} Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
