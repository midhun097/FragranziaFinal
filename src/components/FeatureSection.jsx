import React from "react";
import FeatureCard from "./FeatureCard";
import { Truck, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    title: "Fast & Reliable Delivery",
    description: "Get your orders delivered on time, every time.",
    Icon: Truck,
  },
  {
    title: "Secure Payments",
    description: "Shop with confidence using our encrypted payment gateways.",
    Icon: ShieldCheck,
  },
  {
    title: "24/7 Customer Support",
    description: "We're here to assist you anytime, anywhere.",
    Icon: Headphones,
  },
];

const FeatureSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            Icon={feature.Icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
