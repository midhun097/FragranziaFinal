import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#98c2c6] text-gray-800 pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-3">Fragranzia</h2>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Pages</h3>
          <ul className="space-y-1">
            <li>Home</li>
            <li>Products</li>
            <li>Gifting</li>
            <li>About</li>
            <li>Profile</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>Privacy policy</li>
            <li>Terms and conditions</li>
            <li>FAQs</li>
            <li>Customer service</li>
          </ul>
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2">
            <FaEnvelope />
            <span>frfurniture@gmail.com</span>
          </div>
          <div className="mb-4 flex items-center gap-2">
            <FaPhone />
            <span>+91 9876543210</span>
          </div>
          <h3 className="font-semibold mb-1">Social Media</h3>
          <div className="flex gap-4 text-xl">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-gray-900">
        <div className="flex flex-wrap gap-4 text-center md:text-left">
          <span>Web Accessibility</span>
          <span>|</span>
          <span>Terms of Use</span>
          <span>|</span>
          <span>Privacy Statement</span>
          <span>|</span>
          <span>Contact Us</span>
        </div>
        <p className="mt-2 md:mt-0">Â© 2024 fragranza Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
