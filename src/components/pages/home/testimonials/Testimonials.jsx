import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://placehold.co/50"
                  alt="Client"
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">John Doe</h4>
                  <p className="text-gray-600">CEO, Company Inc.</p>
                </div>
              </div>
              <p className="text-gray-700">
                "This service transformed our business operations. The team is
                professional and responsive. Highly recommended!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://placehold.co/50"
                  alt="Client"
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                  <p className="text-gray-600">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We've seen a 40% increase in productivity since implementing
                their solutions. The support is exceptional."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
