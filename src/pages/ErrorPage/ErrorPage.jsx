import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center text-2xl mt-8 space-y-4">
            <h1>404</h1>
            <p>Not Found Page</p>
            <Link to="/" className="btn btn-outline btn-ghost">Go to Home</Link>
        </div>
    );
};

export default ErrorPage;