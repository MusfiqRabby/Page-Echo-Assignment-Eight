import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
  const { bookId, image, bookName, author } = book;
  return (
   
    <Link to={`/home/${bookId}`}>
   <div className="card w lg:w-96 lg:mt-2 bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-[350px] h-[200px]  p-3 rounded-lg"
          src={image}
        />
      </figure>
      <div className="flex gap-5 lg:gap-10 ml-10 lg:ml-10 mt-5 text-[#23BE0A] text-sm font-medium">
        <p>
          <span className="bg-gray-100 rounded-md">#Young Adult</span>
        </p>
        <p>
          <span className="bg-gray-100 rounded-md">#Identity</span>
        </p>
      </div>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p className="text-sm font-medium">by: {author}</p>
        <hr />
        <div className="flex items-center lg:items-center text-sm font-medium">
          <p>Fiction</p>
          <span className="mr-1 lg:mr-2">5.00</span>
          <span>
            <CiStar></CiStar>
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
