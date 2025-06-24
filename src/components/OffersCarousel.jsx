import React from 'react';
import Slider from 'react-slick';
import image from '../images/002.jpg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; // adjust path

const offers = [
  {
    id: 1,
    name: 'Royal Eau De Parfum 100ml For Men',
    price: 'R$ 650',
    oldPrice: 'R$ 1400',
    image: image,
  },
  {
    id: 2,
    name: 'Kyros Eau De Parfum 100ml For Men',
    price: 'R$ 899',
    oldPrice: 'R$ 2000',
    image: image,
  },
  {
    id: 3,
    name: 'Royal Oud Humanity 100ml',
    price: 'R$ 650',
    oldPrice: 'R$ 1400',
    image: image,
  },
  {
    id: 4,
    name: 'Autograph Eau De Parfum 100ml',
    price: 'R$ 999',
    oldPrice: 'R$ 2241',
    image: image,
  },
];

const OffersCarousel = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  return (
    <div className="py-10 px-4">
      <h2 className="text-xl font-semibold mb-4">Offers Zone</h2>
      <Slider {...settings}>
        {offers.map((item) => (
          <div key={item.id} className="p-3">
            <div className="bg-white rounded-xl shadow-md p-4 text-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain mx-auto mb-3"
              />
              <h3 className="text-sm font-medium">{item.name}</h3>
              <p className="text-lg font-semibold">
                {item.price}
                <span className="line-through text-gray-400 text-sm ml-2">
                  {item.oldPrice}
                </span>
              </p>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-2 bg-blue-900 text-white px-4 py-2 w-full rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OffersCarousel;
