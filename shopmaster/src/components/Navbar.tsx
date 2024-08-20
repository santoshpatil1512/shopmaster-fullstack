import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-xl font-bold">ShopMaster</Link>
      <div>
        <Link to="/checkout" className="text-white">Cart</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
