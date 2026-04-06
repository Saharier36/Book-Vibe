import React from "react";
import { Star } from "lucide-react";

const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-sm rounded-2xl transition-all duration-300 ease-in-out hover:scale-[1.01] hover:-translate-y-1 hover:shadow-lg cursor-pointer">
      <figure className="p-6 bg-[#F3F3F3]">
        <img
          src={book.image}
          alt={book.bookName}
          className="rounded-xl h-62.5"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">
          {book.tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge rounded-full bg-[#23BE0A]/5 text-[#23BE0A] font-medium"
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title font-bold text-2xl font-playfair">
          {book.bookName}
        </h2>
        <p className="font-medium text-lg text-[#131313]/80">
          By : {book.author}
        </p>

        <div className="card-actions justify-between border-t-2 border-dashed border-[#131313]/15 pt-4 text-lg font-medium text-[#131313]/80">
          <div>{book.category}</div>
          <div className="flex items-center gap-2">
            {book.rating} <Star />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
