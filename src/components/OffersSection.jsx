import React from "react";
import OfferCard from "./OfferCard";
import offer1 from "../images/99a4784f39f68e5bc0205c10f49c812ed0cf44ba.jpg";
import offer2 from "../images/07abda464afffff33f7d7bd5c5e8f4399c16deb3.png";
import offer3 from "../images/5a59d0411273b847b8af9755751370ea3f08ac3b.png";

const OffersSection = () => {
  const offers = [
    {
      title: "Unlock Exclusive Offers",
      subtitle: "Discover special deals tailored just for you!",
      image: offer1,
    },
    {
      title: "Gift a Scents to your loved one.",
      subtitle: "Make your love more beautiful",
      image: offer2,
    },
    {
      title: "Luxury Scents Starting at ₹4,000",
      subtitle: "",
      image: offer3,
      badge: "Shop Now",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            title={offer.title}
            subtitle={offer.subtitle}
            image={offer.image}
            badge={offer.badge}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
