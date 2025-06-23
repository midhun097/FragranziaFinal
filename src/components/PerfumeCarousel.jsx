import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import perfume1 from '../images/008b0741afb5a356ca961785c67012d75bc3802b (1).png'
import perfume2 from '../images/008b0741afb5a356ca961785c67012d75bc3802b.png'

const slides = [
  {
    title: "Discover perfumes that celebrate individuality",
    subtitle: "Every moment with an unforgettable essence.",
    image: perfume1 ,
  },
  {
    title: "Find your signature scent",
    subtitle: "Unleash the power of your presence.",
    image: perfume2, 
  },
];

const PerfumeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div className="flex flex-col-reverse md:flex-row items-center bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-10">
              <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">{slide.title}</h2>
                <p className="text-sm md:text-lg">{slide.subtitle}</p>
                <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition">
                  Shop Now
                </button>
              </div>
              
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img
                  src={slide.image}
                  alt="Perfume"
                  className="h-52 md:h-72 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PerfumeCarousel;
