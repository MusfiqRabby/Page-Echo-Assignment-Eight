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
           <h1>Book Lists: {books.length}</h1> 
           </div>
           <div className='grid grid-cols-3 gap-6 my-9'>
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
           </div>
        </div>
       
    );
};

export default Books;

// https://i.ibb.co/12ncJ3b/top-view-pile-books.jpg