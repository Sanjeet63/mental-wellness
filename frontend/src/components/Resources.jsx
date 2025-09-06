import React from "react";

const Resources = () => {
  return (
    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 overflow-y-auto">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Resources
        </h1>

        {/* YouTube Videos Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-purple-600">
            Helpful YouTube Videos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              <iframe
                width="100%"
                height="180"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Sample Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
              <p className="mt-2 text-sm text-gray-600">Mental Health Tips</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <iframe
                width="100%"
                height="180"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Sample Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
              <p className="mt-2 text-sm text-gray-600">Stress Management</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <iframe
                width="100%"
                height="180"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Sample Video 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
              <p className="mt-2 text-sm text-gray-600">Wellness Routines</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;