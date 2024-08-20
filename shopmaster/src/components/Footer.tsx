import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 p-4 mt-8">
    <div className="container mx-auto text-center text-white">
      &copy; {new Date().getFullYear()} ShopMaster. All rights reserved.
    </div>
  </footer>
);

export default Footer;
