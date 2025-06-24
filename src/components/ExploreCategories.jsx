import eau from '../images/0001.jpg';
import con from '../images/0002.png';
import dec from '../images/0003.png';
import body from '../images/0004.png';
import compo from '../images/0005.png';
import CategoryCircleCard from './CategoryCircleCard';

const categories = [
  { name: 'Eau De Parfum', image: eau },
  { name: 'Concentrated', image: con },
  { name: 'Deodorants', image: dec },
  { name: 'Body Mist', image: body },
  { name: 'Combo', image: compo },
];

const ExploreCategories = () => {
  return (
    <div className="w-full px-4 md:px-10 py-10 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          Explore <span className="text-blue-900">Categories</span>
        </h2>
        <a href="#" className="text-sm text-blue-900 underline hover:text-blue-700">
          See All
        </a>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between gap-6">
        {categories.map((cat, idx) => (
          <CategoryCircleCard key={idx} name={cat.name} image={cat.image} />
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
