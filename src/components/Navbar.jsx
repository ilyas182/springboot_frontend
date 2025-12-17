import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-extrabold text-blue-600 tracking-tight">
                    EMP<span className="text-gray-800">MS</span>
                </h1>

            <nav className="flex gap-8">
                    <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
                    <Link to="/departments" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Departments</Link>
                    <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</Link>
                    <Link to="/promote" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Promote</Link>
                </nav>

        </div>
        </header>
        
    );
}