import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice"; // adjust path if needed
import Navbar from "../components/Navbar"; // adjust path as needed

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
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
        <div className="flex-1 space-y-6">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="border rounded p-4 flex flex-col md:flex-row gap-6 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-contain"
                />
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <div className="flex flex-col gap-1 mb-2">
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
                  </div>
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
            ))
          )}
        </div>

        <div className="w-full lg:w-1/3 border rounded p-6 shadow-sm h-fit">
          <h3 className="text-xl font-semibold mb-4">Check Out</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>
                Price ({cartItems.length} item{cartItems.length !== 1 ? "s" : ""})
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

      <footer className="bg-teal-200 px-6 py-8">
        <div className="flex justify-between flex-wrap gap-6">
          <div>
            <h3 className="text-xl font-bold">Fragranzia</h3>
            <ul className="mt-4 space-y-1">
              <li>Home</li>
              <li>Products</li>
              <li>Gifting</li>
              <li>About</li>
              <li>Profile</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-1">
              <li>Privacy policy</li>
              <li>Terms and conditions</li>
              <li>FAQs</li>
              <li>Customer service</li>
            </ul>
          </div>
          <div>
            <p className="mb-2">tfrafurniture@gmail.com</p>
            <p className="mb-4">+91 9876543210</p>
            <div className="flex gap-2">
              <span>📷</span>
              <span>📘</span>
              <span>📹</span>
              <span>📸</span>
              <span>🔗</span>
            </div>
          </div>
        </div>
        <div className="text-xs text-center mt-4 border-t pt-2">
          Web Accessibility | Terms of Use | Privacy Statement | Contact Us
          <br />
          © 2024 Fragranzia Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CartPage;
