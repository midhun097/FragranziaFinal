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
    id:21,
    title: "Auto alfi 500ml For Men",
    price: 950,
    originalPrice: 1900,
    isNew: true,
    image: image1,
  },
  { id:22,
    title: "kira alfi milo 200ml For Men",
    price: 399,
    originalPrice: 2000,
    isNew: true,
    image: image2,
  },
  { id:23,
    title: "Oud Of qatar Eau De barf 100ml",
    price: 599,
    originalPrice: 2241,
    isNew: true,
    image: image3,
  },
  { id:24,
    title: "Roi o banner der Darfum 300ml",
    price: 1250,
    originalPrice: 2000,
    isNew: true,
    image: image4,
  },
  { id:25,
    title: "royal  britain 600ml",
    price: 680,
    originalPrice: 1900,
    isNew: true,
    image: image4,
  },
  { id:26,
    title: "al dubai roger Fdedre 100ml",
    price: 950,
    originalPrice: 1300,
    isNew: true,
    image: image4,
  },
  { id:27,
    title: "Ril alkeru De Parfum 100ml",
    price: 670,
    originalPrice: 1400,
    isNew: true,
    image: image4,
  },
  { id:28,
    title: "Royal el blue 100ml",
    price: 250,
    originalPrice: 1800,
    isNew: true,
    image: image4,
  },
];

const OffersCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">
        Offer Zone
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

export default OffersCarousel;
