import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    // Add more items as needed
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow-md">
            <p className="font-bold">{item.name}</p>
            <p className="text-gray-600">${item.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-xl font-bold">Total: ${calculateTotal()}</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
