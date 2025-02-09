import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ItemView = ({ cartQuantities, setCartQuantities }) => {
  const [selectedFlower, setSelectedFlower] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const { products } = location.state;

  if (!products) {
    return (
      <div className="text-center text-2xl text-gray-600 py-12">
        No products available!
      </div>
    );
  }

  const product = products.find((product) => product.id === id);
  if (!product) {
    return (
      <div className="text-center text-2xl text-gray-600 py-12">
        Product not found!
      </div>
    );
  }

  // Get quantity for the specific product
  const productQuantity = cartQuantities[id]?.quantity || 0;

  const handleAddToCart = () => {
    setCartQuantities((prev) => ({
      ...prev,
      [id]: {
        name: product.name,
        image: product.image,
        quantity: 1,
        price: product.price,
      },
    }));
  };

  const increaseQuantity = () => {
    setCartQuantities((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        quantity: (prev[id]?.quantity || 0) + 1,
      },
    }));
  };

  const decreaseQuantity = () => {
    if (productQuantity > 1) {
      setCartQuantities((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          quantity: prev[id].quantity - 1,
        },
      }));
    } else {
      // If quantity is 1 and we decrease, remove item from the cart
      const updatedCart = { ...cartQuantities };
      delete updatedCart[id];
      setCartQuantities(updatedCart);
    }
  };

  const ImageToDisplay = selectedFlower || product.image;
  const galleryImages = [
    product.image,
    product.image2,
    product.image3,
    product.image4,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={ImageToDisplay}
              alt={product.name}
              className="w-full h-[600px] object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-8">{product.description}</p>
            <div className="flex items-center justify-between mb-8">
              <p className="text-2xl font-semibold text-gray-800">
                ${product.price}
              </p>
              {productQuantity === 0 ? (
                <button
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-lg shadow-md hover:from-pink-600 hover:to-rose-700 transition-all duration-300"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    className="w-10 h-10 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 transition-all duration-200"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold text-gray-800">
                    {productQuantity}
                  </span>
                  <button
                    className="w-10 h-10 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 transition-all duration-200"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Product Gallery
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedFlower(image)}
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-lg border-2 border-gray-300  hover:shadow-lg transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemView;
