
import { useLoaderData,useParams } from "react-router-dom";

const BookCard = () => {
   
   const books = useLoaderData();
   const {bookId} = useParams();
   const bookIdInt = parseInt(bookId);
   const book = books.find(book => book.bookId == bookIdInt);
    console.log(book);

    return (
        <div>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <img src={book.image} alt="" />
                </div>
                <div>
                    <h1 className='text-4xl font-bold text-[#131313] mb-3'>{book.bookName}</h1>
                    <p className='text-lg mb-5'>By : {book.author}</p>
                    <hr />
                    <p className='my-4'>{book.category}</p>
                    <hr />
                    <h4 className='mt-5'><span className='font-bold '>Review:</span> {book.review}</h4>
                    <p className='font-bold mb-2'>tag #<span className='text-[23BE0A]'>{book.tags}</span></p>
                    <hr />
                    <div className='flex gap-8 mt-2'>
                        <div>
                        <p className='opacity-80 mb-1'>Number of Pages:</p>
                        <p className='opacity-80 mb-1'>Publisher: </p>
                        <p className='opacity-80 mb-1'>Year of Publishing:</p>
                        <p className='opacity-80 mb-1'>Rating:</p>
                        </div>
                        <div>
                        <p className='font-bold mb-1'>{book.totalPages}</p>
                        <p className='font-bold mb-1'>{book.publisher}</p>
                        <p className='font-bold mb-1'>{book.yearOfPublishing}</p>
                        <p className='font-bold mb-1'>{book.rating}</p>
                        </div>
                    </div>
                    <div className=' text-white mt-4'>
                      <button class="btn mr-4">Read</button>
                     <button class="btn bg-[#50B1C9]">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;