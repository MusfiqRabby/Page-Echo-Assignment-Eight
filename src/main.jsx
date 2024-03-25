import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import PagesRead from "./components/PagesRead/PagesRead";
import BookCard from "./components/BookCard/BookCard";
import { loader } from "react";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: '/home/:bookId',
        element: <BookCard></BookCard>,
        loader: () => fetch('books.json')
      },
      {
        path: '/pages',
        element: <PagesRead></PagesRead>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
