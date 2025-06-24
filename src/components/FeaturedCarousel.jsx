import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";

import image1 from '../images/001.png';
import image2 from '../images/002.jpg';
import image3 from '../images/003.jpg';
import image4 from '../images/004.jpg';

const products = [
  {
    id:11,
    title: "Autograph Eau De Parfum 100ml For Men",
    price: 650,
    originalPrice: 1400,
    isNew: true,
    image: image1,
  },
  { id:12,
    title: "Kyros Eau De Parfum 100ml For Men",
    price: 899,
    originalPrice: 2000,
    isNew: true,
    image: image2,
  },
  { id:13,
    title: "Oud Of Dubai Eau De Parfum 100ml",
    price: 999,
    originalPrice: 2241,
    isNew: true,
    image: image3,
  },
  { id:14,
    title: "Royal Eau De Parfum 100ml",
    price: 850,
    originalPrice: 1000,
    isNew: true,
    image: image4,
  },
  { id:15,
    title: "Royal Eau De Parfum 100ml",
    price: 350,
    originalPrice: 1900,
    isNew: true,
    image: image4,
  },
  { id:16,
    title: "Royal Eau De Parfum 100ml",
    price: 650,
    originalPrice: 1300,
    isNew: true,
    image: image4,
  },
  { id:17,
    title: "Royal Eau De Parfum 100ml",
    price: 570,
    originalPrice: 1400,
    isNew: true,
    image: image4,
  },
  { id:18,
    title: "Royal Eau De Parfum 100ml",
    price: 250,
    originalPrice: 1800,
    isNew: true,
    image: image4,
  },
];

const FeaturedCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">
        Featured <span className="text-cyan-900">Collections</span>
      </h2>

      <Swiper
        className="w-full"
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCarousel;
