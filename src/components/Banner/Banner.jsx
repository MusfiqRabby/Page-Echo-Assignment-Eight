
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-gray-100">
        <div className="hero-content flex-col gap-64 lg:flex-row-reverse ">
          <img className=' bg-base-200 w-full h-0' src="/src/assets/pngwing 1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold mb-12">Books to freshen up <br /> your bookshelf</h1>
            <button className="btn bg-[#23BE0A] text-white"><Link to='/listed'>View The List</Link></button>
          </div>
        </div>
      </div>
    );
};

export default Banner;