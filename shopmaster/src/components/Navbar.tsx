import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-blue-500 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">ShopMaster</Link>
      <div>
        <Link to="/cart" className="mr-4">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
