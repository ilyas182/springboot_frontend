import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex flex-col justify-center">
            <div>
            <h1 className="text-center">Employee Management</h1>
            </div>
            <div className="flex justify-center gap-4 p-2">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/about" className="hover:text-gray-300">About</Link>
                <Link to="/departments" className="hover:text-gray-300">Departments</Link>
                <Link to="/promote" className="hover:text-gray-300">Promote</Link>
            </div>

        </div>
        
    );
}