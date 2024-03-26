import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="text-center my-48">
               <h1 className="text-lime-600 text-xl font-bold my-2">Oops!!</h1> 
                <h4 className="text-2xl font-bold my-2">Not Found Page</h4>
               <button className="btn"><Link to="/">Go back</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;