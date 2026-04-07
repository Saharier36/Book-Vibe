import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      alert("exists");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      alert(`${currentBook.bookName} is added to list.`);
    }
    console.log(currentBook, storedBooks, "book");
  };

  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
