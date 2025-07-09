import React from "react";

const Pricing = () => {
  return (
    <>
      {/* Pricing */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Simple Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Basic
              </h3>
              <p className="text-4xl font-bold mb-4 text-green-600">
                $9.99<span className="text-sm text-gray-600">/month</span>
              </p>
              <ul className="mb-8 text-gray-600">
                <li className="py-2 border-b">10 Projects</li>
                <li className="py-2 border-b">5GB Storage</li>
                <li className="py-2 border-b">Basic Support</li>
                <li className="py-2">Email Reports</li>
              </ul>
              <button className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300 w-full">
                Get Started
              </button>
            </div>
            <div className="border-2 border-green-500 rounded-lg p-6 text-center transform scale-105 hover:shadow-lg transition duration-300 bg-gray-50">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Professional
              </h3>
              <p className="text-4xl font-bold mb-4 text-green-600">
                $29.99<span className="text-sm text-gray-600">/month</span>
              </p>
              <ul className="mb-8 text-gray-600">
                <li className="py-2 border-b">Unlimited Projects</li>
                <li className="py-2 border-b">50GB Storage</li>
                <li className="py-2 border-b">Priority Support</li>
                <li className="py-2">Advanced Analytics</li>
              </ul>
              <button className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300 w-full">
                Get Started
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Enterprise
              </h3>
              <p className="text-4xl font-bold mb-4 text-green-600">
                $99.99<span className="text-sm text-gray-600">/month</span>
              </p>
              <ul className="mb-8 text-gray-600">
                <li className="py-2 border-b">Unlimited Projects</li>
                <li className="py-2 border-b">1TB Storage</li>
                <li className="py-2 border-b">24/7 Support</li>
                <li className="py-2">Dedicated Account Manager</li>
              </ul>
              <button className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300 w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
