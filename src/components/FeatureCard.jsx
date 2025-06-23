import React from "react";

const FeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <Icon className="w-8 h-8 text-cyan-900" />
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
