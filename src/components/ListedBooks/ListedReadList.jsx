import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import BookListCard from "../ui/BookListCard";
import { BookOpen } from "lucide-react";

const ListedReadList = () => {
  const { readList } = useContext(BookContext);

  if (readList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-base-content/40">
        <BookOpen size={48} />
        <p className="text-lg font-medium">Your read list is empty</p>
      </div>
    );
  }

  return (
    <div>
      {readList.map((book, ind) => (
        <BookListCard key={ind} book={book}></BookListCard>
      ))}
    </div>
  );
};

export default ListedReadList;
