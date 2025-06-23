import React from 'react';

const CategoryCircleCard = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden shadow-sm mb-2">
        <img src={image} alt={name} className="w-20 h-20 object-contain" />
      </div>
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
};

export default CategoryCircleCard;
