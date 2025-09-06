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

            {/* Video 1 */}
            <div className="bg-gray-100 p-3 rounded-lg">
              <iframe
                width="100%"
                height="180"
                src="https://www.youtube.com/embed/QgmmTEC3BgA"
                title="Mental Health Awareness"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
              <p className="mt-2 text-sm text-gray-600">Mental Health Awareness</p>
            </div>

            {/* Video 2 */}
            <div className="bg-gray-100 p-3 rounded-lg">
              <iframe
                width="100%"
                height="180"
                src="https://www.youtube.com/embed/8ln4XfRi6uw"
                title="Stress Management"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
              <p className="mt-2 text-sm text-gray-600">Stress Management Techniques</p>
            </div>

            {/* Video 3 - Medical/Wellness */}
            <div className="bg-gray-100 p-3 rounded-lg">
              <iframe
                width="100%"
                height="180"
                src="https://www.youtube.com/embed/d0ZKqj7a3h8" // Example: Mental Health Exercises
                title="Medical Wellness Tips"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
              <p className="mt-2 text-sm text-gray-600">Daily Mental Wellness Exercises</p>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;
