import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="flex space-x-4">
        <Link
          to="/"
          className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors"
        >
          Home
        </Link>
        <Link
          to="/login"
          className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors"
        >
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Header;
