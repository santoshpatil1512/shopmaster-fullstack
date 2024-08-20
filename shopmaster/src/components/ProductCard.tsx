import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => (
  <div className="p-4 border rounded-lg shadow-sm">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-lg" />
    <h3 className="mt-2 text-lg font-semibold">{name}</h3>
    <p className="mt-1 text-sm text-gray-600">${price.toFixed(2)}</p>
  </div>
);

export default ProductCard;
