import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";
import Error from "../pages/Error/Error";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails
      }
    ],
    errorElement: <Error></Error>
  },
]);
