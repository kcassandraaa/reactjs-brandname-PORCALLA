import React from "react";

const Cta = () => {
  return (
    <>
      {/* CTA Section */}
      <div className="py-20 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers who trust our services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-600 py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition duration-300">
              Sign Up Free
            </button>
            <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-bold hover:bg-white hover:text-green-600 transition duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
