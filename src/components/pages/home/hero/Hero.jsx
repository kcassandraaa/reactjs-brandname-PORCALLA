import React from 'react'

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Our Website
            </h1>
            <p className="text-xl mb-8">
              We provide the best services in town with exceptional quality and
              customer satisfaction.
            </p>
            <button className="bg-white text-green-600 py-3 px-6 rounded-lg font-bold hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://placehold.co/500x300"
              alt="Hero"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero
