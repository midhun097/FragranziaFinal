import React from 'react'
import Navbar from '../components/Navbar'
import PerfumeCarousel from '../components/PerfumeCarousel'
import OffersSection from '../components/OffersSection'
import FeatureSection from '../components/FeatureSection'
import FeaturedCarousel from '../components/FeaturedCarousel'
import arival from '../images/023.jpg'
import edition from '../images/022.jpg'
import sellers from '../images/011.jpg'
import ExploreCategories from '../components/ExploreCategories'
import OffersCarousel from '../components/OffersCarousel'
import Footer from '../components/Footer'


function Homepage() {
  return (
    <>
    <Navbar/>
    <PerfumeCarousel/>
    <OffersSection/>
    <FeatureSection/>
    <FeaturedCarousel/>
    <div className="py-10 px-4 text-center max-w-3xl mx-auto">
        <p className="text-lg md:text-xl font-medium text-gray-800">
          "It's an art. A craft. A science. At Fragranza, we're in the business of creating memories that last forever through our fragrances."
        </p>
      </div>
      <div className='p-4 flex gap-5'>
        <div
          className="relative w-[500px] h-[600px] bg-cover bg-center rounded-md overflow-hidden p-5"
          style={{
            backgroundImage: `url(${arival})`,
          }}
        >
          <div className="absolute left-10 bottom-6 -translate-y-1/2 rotate-[-90deg] origin-left text-black text-2xl font-bold tracking-wide">
            New Arrivals
          </div>
        </div>
        <div
          className="relative w-[500px] h-[600px] bg-cover bg-center rounded-md overflow-hidden p-5"
          style={{
            backgroundImage: `url(${edition})`,
          }}
        >
          <div className="absolute left-10 bottom-6 -translate-y-1/2 rotate-[-90deg] origin-left text-white text-2xl font-bold tracking-wide">
            Limited Edition
          </div>
        </div>
        <div
          className="relative w-[500px] h-[600px] bg-cover bg-center rounded-md overflow-hidden p-5"
          style={{
            backgroundImage: `url(${sellers})`,
          }}
        >
          <div className="absolute left-10 bottom-6 -translate-y-1/2 rotate-[-90deg] origin-left text-black text-2xl font-bold tracking-wide">
            Best  Sellers
          </div>
        </div>
      </div>
      <ExploreCategories/>
      <OffersCarousel/>
            <div className='p-20'>
        <div className="bg-gradient-to-r from-[#d6f0fd] to-[#e0f5fc] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between overflow-hidden">
          <div className="mb-4 md:mb-0 md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Elegance in Every Bottle</h2>
            <p className="text-gray-700 mb-4">
              Discover timeless fragrances crafted for every moment
            </p>
            <button className="bg-blue-900 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-800 transition">
              Shop Now
            </button>
          </div>

          <div className="md:w-1/2">
            <img
              src="/images/promo-banner-bottle.png"
              alt="Perfume Bottle in Box"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
      <Footer/>

    </>
  )
}

export default Homepage