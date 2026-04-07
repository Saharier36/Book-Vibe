import React, { useContext } from 'react';
import { BookContext } from "../../context/BookProvider";
import BookListCard from '../ui/BookListCard';
import { BookX } from 'lucide-react';

const ListedWishlist = () => {
   const { wishList } = useContext(BookContext);

    if(wishList.length === 0){
        return (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-base-content/40">
            <BookX size={48} />
            <p className="text-lg font-medium">Your wishlist is empty</p>
          </div>
        );
    }

   return (
     <div>
       {wishList.map((book, ind) => (
         <BookListCard key={ind} book={book}></BookListCard>
       ))}
     </div>
   );
};

export default ListedWishlist;