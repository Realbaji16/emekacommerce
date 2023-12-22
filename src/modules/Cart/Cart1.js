import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    // Add more products as needed
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="border p-4 shadow-md">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-red-200"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Total: ${getTotalPrice()}</h2>
      </div>
    </div>
  );
};

export default ShoppingCart;
