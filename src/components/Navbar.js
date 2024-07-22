import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user, signOut }) {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/about" className="text-white">About</Link>
        <Link to="/contact" className="text-white">Contact</Link>
        {user ? (
          <>
            <button onClick={signOut} className="text-white">Sign Out</button>
          </>
        ) : (
          <>
            <Link to="/signin" className="text-white">Sign In</Link>
            <Link to="/signup" className="text-white">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;




