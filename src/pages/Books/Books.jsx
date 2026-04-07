import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import ListedReadList from '../../components/ListedBooks/ListedReadList';
import ListedWishlist from '../../components/ListedBooks/ListedWishlist';


const Books = () => {

      const { readList, wishList } = useContext(BookContext);
      console.log(readList, wishList, "bookContext");

    return (
      <div className="container mx-auto my-6">
       




        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ListedReadList></ListedReadList>
          </TabPanel>
          <TabPanel>
            <ListedWishlist></ListedWishlist>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default Books;