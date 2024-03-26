import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../../utility/LoacalStorage";
import { MdOutlineRequestPage } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

const ListedBooks = () => {
  const books = useLoaderData();

  const [appliedBooks, setAppliedBooks] = useState([]);

  useEffect(() => {
    const storedBooksIds = getStoredBook();
    // const booksApplied = books.filter((book) =>
    //   storedBooksIds.includes(book.bookId)
    // );

    const booksApplied = [];
    for (const bookId of storedBooksIds) {
      const book = books.find((book) => book.bookId == bookId);
      if (book) {
        booksApplied.push(book);
      }
    }

    setAppliedBooks(booksApplied);

    // console.log(books, storedBooksIds, booksApplied);
  }, []);

  return (
    <div>
      <div className="bg-gray-200 my-7 text-[#131313] text-3xl rounded-lg font-bold">
        <h1 className="text-center items-center py-6 ">Books</h1>
      </div>

      <div className="text-center items-center my-4">
        <button className="btn bg-[#23BE0A] text-white">sortBy</button>
      </div>

      {/* 2 no line  */}

      <div>
        <div className="flex -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800 my-4">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Books</span>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist Books</span>
          </a>
        </div>
      </div>

      <div>
        {appliedBooks.map((book) => (
            <div className="card card-side gap-4 bg-base-100 my-4 shadow-xl ">
                <img className="w-[300px] h-[180px] p-3 rounded-lg"
                  src={book.image}
                />
              <div className="">
                <h2 className="card-title">{book.bookName}</h2>
                <p className="font-bold">by : {book.author}</p>
                <p>Tag : </p>
               <div className="flex gap-7 mb-4">
                <div className="flex items-center gap-2">
                    <p><FaUserFriends/></p>
                    <span className="opacity-80 ">Publisher : {book.publisher}</span>
                </div>
               <div className="flex items-center gap-1">
               <p className="item-center "><MdOutlineRequestPage/></p>
               <span className="opacity-80">{book.totalPages}</span>
               </div>
               </div>
               < hr /> 
               <div className="flex my-3 gap-6">
                <div className="bg-[#328EFF4D] text-[#328EFF] rounded-full ">
                    <h3 className="p-2">category : {book.category}</h3>
                </div>
                <div className="bg-[#FFAC334D] text-[#FFAC33] rounded-full">
                    <h5 className="p-2 items-center">Rating: {book.rating}</h5>
                </div>
                <div>
                <button className="btn btn-active bg-[#23BE0A] text-white rounded-full">View Details</button>
                </div>
               </div>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
