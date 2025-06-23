import React from "react";
import Navbar from "../components/Navbar"; // adjust path if needed
import Footer from "../components/Footer"; // adjust path if needed

export default function AboutPage() {
  return (
    <div className="font-sans">
      {/* ✅ Shared Navbar */}
      <Navbar />

      {/* 📖 About Section */}
      <div className="px-6 py-10 md:flex gap-10 items-start">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">About Fragranzia</h1>
          <p className="text-sm text-gray-700 mb-4">Home &gt; About</p>
          <p className="mb-4">
            At Fragranzia, we believe that a perfume is more than just a scent—it’s a story, an art, and a science combined to create memories that linger...
          </p>
          {/* Other paragraphs remain unchanged */}
        </div>

        <div className="md:w-1/3 flex flex-col gap-4 mt-6 md:mt-0">
          <img
            src="https://c.stocksy.com/a/9EaM00/z9/5382477.jpg"
            alt="Perfume 1"
            className="rounded-tl-[50px] rounded-br-[50px]"
          />
          <img
            src="https://www.fragrancex.com/blog/wp-content/uploads/2020/03/areas-to-apply-fragrance-hero-1.jpg"
            alt="Perfume 2"
            className="rounded-tl-[50px] rounded-br-[50px]"
          />
        </div>
      </div>

      {/* 🔻 Shared Footer */}
      <Footer />
    </div>
  );
}
