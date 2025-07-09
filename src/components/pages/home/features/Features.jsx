import React from 'react'

const Features = () => {
  return (
    <>
      {/* Features Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-green-500 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Fast Service
              </h3>
              <p className="text-gray-600">
                Our team delivers quick and efficient solutions to your problems
                without compromising quality.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-green-500 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Secure
              </h3>
              <p className="text-gray-600">
                We prioritize your security and privacy with our
                state-of-the-art protection measures.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-green-500 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Cloud Based
              </h3>
              <p className="text-gray-600">
                Access your data and services from anywhere in the world with
                our cloud solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features
