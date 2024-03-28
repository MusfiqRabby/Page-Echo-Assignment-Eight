import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBook, getWishdBook } from "../../utility/LoacalStorage";
import { MdOutlineRequestPage } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [Wishlist, setWishList] = useState([]);
  const books = useLoaderData();

  const [displayBooks, setDisplayBooks] = useState([]);

  useEffect(() => {
    const storedBooksIds = getStoredBook();
    const getishdBook = getWishdBook();

    const booksApplied = [];
    for (const bookId of storedBooksIds) {
      const book = books.find((book) => book.bookId == bookId);
      if (book) {
        booksApplied.push(book);
      }
    }
    const wish = [];
    for (const bookId of getishdBook) {
      const book = books.find((book) => book.bookId == bookId);
      if (book) {
        wish.push(book);
      }
    }
    setDisplayBooks(booksApplied);
    setWishList(wish);
  }, []);

  const showBooks = tabIndex === 0 ? displayBooks : Wishlist;

  return (
    <div>
      <div className="bg-gray-200 my-7 text-[#131313] text-3xl rounded-lg font-bold">
        <h1 className="text-center items-center py-4 ">Books</h1>
      </div>

      <div className="text-center items-center my-4">
        <details className="dropdown">
          <summary className=" btn bg-[#23EB0A] text-white">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">

         
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        <div className="flex -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800 my-4">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
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
          </Link>
          <Link
            onClick={() => setTabIndex(1)}
            to=""
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
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
          </Link>
        </div>
      </div>
      <div>
        {

          showBooks.map((book) => (
            <div className="card card-side gap-4 bg-base-100 my-4 shadow-xl ">
              <img
                className="w-[300px] h-[180px] p-3 rounded-lg"
                src={book.image}
              />
              <div className="">
                <h2 className="card-title">{book.bookName}</h2>
                <p className="font-bold">by : {book.author}</p>

                <div>
                  <div className="flex ">
                    <div className="flex gap-3 ">
                      <div>
                        <p className="font-medium">
                          {/* tag:{" "} */}
                          {book.tags.map((idx) => (
                            <span className="text-[#23BE0A] mr-2">#{idx}</span>
                          ))}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1 items-center ml-6">
                      <p>
                        <CiLocationOn />
                      </p>
                      <span>year of publishing : {book.yearOfPublishing}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-7 mb-4">
                  <div className="flex items-center gap-2">
                    <p>
                      <FaUserFriends />
                    </p>
                    <span className="opacity-80 ">
                      Publisher : {book.publisher}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="item-center ">
                      <MdOutlineRequestPage />
                    </p>
                    <span className="opacity-80">{book.totalPages}</span>
                  </div>
                </div>
                <hr />
                <div className="flex my-3 gap-6">
                  <div className="bg-[#328EFF4D] text-[#328EFF] rounded-full ">
                    <h3 className="p-2">category : {book.category}</h3>
                  </div>
                  <div className="bg-[#FFAC334D] text-[#FFAC33] rounded-full">
                    <h5 className="p-2 items-center">Rating: {book.rating}</h5>
                  </div>
                  <div>
                    <button className="btn btn-active bg-[#23BE0A] text-white rounded-full">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ListedBooks;
