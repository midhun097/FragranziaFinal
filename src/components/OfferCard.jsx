import React from "react";

const OfferCard = ({ title, subtitle, image, badge }) => {
  return (
    <div className="bg-slate-300 rounded-xl shadow-md p-4 flex flex-col items-start justify-between space-y-4 w-full">
      <div>
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>

      <div className="relative w-full flex justify-end">
        {badge && (
          <span className="absolute -left-2 -top-2 bg-blue-900 text-white px-3 py-1 text-xs rounded-full rotate-[-15deg]">
            {badge}
          </span>
        )}
        <img src={image} alt="Perfume" className="h-28 md:h-36 object-contain" />
      </div>
    </div>
  );
};

export default OfferCard;