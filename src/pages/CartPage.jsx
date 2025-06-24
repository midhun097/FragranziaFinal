import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/cartSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalOriginal = cartItems.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );
  const totalDiscount = totalOriginal - totalPrice;

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />

      <div className="px-8 py-6">
        <h2 className="text-2xl font-bold mb-2">Cart</h2>
        <p className="text-sm text-gray-500">Home &gt; Cart</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 px-8 py-4">
        {/* Cart Items */}
        <div className="flex-1 space-y-6">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded p-4 flex flex-col md:flex-row gap-6 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{item.title}</h3>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4 mb-2">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="px-3 py-1 border rounded text-lg hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="px-3 py-1 border rounded text-lg hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <p className="font-semibold text-lg">
                      Rs {item.price} × {item.quantity} = Rs{" "}
                      {item.price * item.quantity}
                    </p>
                    <p className="line-through text-gray-500 text-sm">
                      Original: Rs {item.originalPrice}
                    </p>
                    <p className="text-green-600 font-medium text-sm">
                      {item.discount} off
                    </p>

                    <div className="flex gap-3 mt-3">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-100"
                      >
                        Delete
                      </button>
                      <button className="border px-4 py-1 rounded">Share</button>
                      <button className="bg-blue-900 text-white px-6 py-1 rounded">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear Cart Button */}
              <button
                onClick={handleClearCart}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
              >
                Clear Cart
              </button>
            </>
          )}
        </div>

        {/* Checkout Summary */}
        <div className="w-full lg:w-1/3 border rounded p-6 shadow-sm h-fit">
          <h3 className="text-xl font-semibold mb-4">Check Out</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>
                Price ({cartItems.length} item
                {cartItems.length !== 1 ? "s" : ""})
              </span>
              <span>Rs {totalOriginal}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-600">Rs {totalDiscount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span className="text-green-600">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total Amount</span>
              <span>Rs {totalPrice}</span>
            </div>
          </div>
          <button className="bg-blue-900 text-white w-full py-2 mt-4 rounded hover:bg-blue-800">
            Proceed to Buy
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Safe and Secure Payments. Easy returns. 100% Authentic products.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
