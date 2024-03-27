import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
   
   const [books, setBooks] = useState([]);

   useEffect(() => {
      fetch('books.json')
      .then(res => res.json())
      .then(data => setBooks(data))
   },[])
   
    return (
        <div >
           <div className="text-4xl font-bold text-center my-9">
           <h1>Book Lists </h1> 
           </div>
           <div className='grid lg:grid-cols-3 lg:gap-6 lg:my-9'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
           </div>
        </div>  
    );
};

export default Books;
