import React from 'react';
import { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';

const Books = () => {

      const { storedBooks } = useContext(BookContext);
      console.log(storedBooks, "bookContext");

    return (
        <div>
            Books
        </div>
    );
};

export default Books;