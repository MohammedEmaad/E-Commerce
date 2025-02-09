import React from 'react';

const ShoppingCart = ({ cartQuantities }) => {
  const cartItems = Object.entries(cartQuantities);

  // Calculate the total price of all items in the cart
  const totalCartPrice = cartItems.reduce((total, [productId, item]) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="absolute inset-0 bg-white flex justify-center items-center">
      <div className="bg-blue-50 shadow-2xl rounded-lg p-6 w-[500px]">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-600 ">
          Shopping Cart
        </h2>
        {cartItems.length > 0 ? (
          <>
            <ul className="space-y-4">
              {cartItems.map(([productId, item]) => {
                const totalPrice = item.price * item.quantity;
                return (
                  <li
                    key={productId}
                    className="flex items-center bg-white p-3 rounded-lg shadow"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="ml-4">
                      <span className="font-medium text-lg">{item.name}</span>
                      <div>${item.price}</div>
                      <div className="text-gray-700">x{item.quantity}</div>
                    </div>
                    <div className="ml-auto mr-4">${totalPrice.toFixed(2)}</div>
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-center flex-col items-center mt-6 pt-4 border-t border-gray-300">
              <div className="text-xl font-bold">Total Price</div>
              <div className="text-xl font-bold mb-2">
                ${totalCartPrice.toFixed(2)}
              </div>
            </div>
            <div className="p-4 bg-blue-200 shadow-2xl rounded-lg hover:bg-blue-300 text-center">
              Payment
            </div>
          </>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
