import React from "react";

const content = {
  en: {
    welcome: "Welcome to উড়ে যা ডট কম",
    description: "Your travel guide for exotic destinations.",
    destinations: [
      { title: "Dubai", description: "Explore the futuristic city of Dubai." },
      {
        title: "Karachi",
        description: "Discover the cultural heritage of Karachi.",
      },
      { title: "Sydney", description: "Visit the beautiful city of Sydney." },
    ],
  },
  bn: {
    welcome: "উড়ে যা ডট কম স্বাগতম",
    description: "বিভিন্ন বিদেশি গন্তব্যস্থলের জন্য আপনার ভ্রমণ গাইড।",
    destinations: [
      { title: "দুবাই", description: "দুবাই শহরের ভবিষ্যতকে আবিষ্কার করুন।" },
      {
        title: "করাচি",
        description: "করাচির সাংস্কৃতিক ঐতিহ্য আবিষ্কার করুন।",
      },
      { title: "সিডনি", description: "সুন্দর শহর সিডনি পরিদর্শন করুন।" },
    ],
  },
};

const Home = ({ language }) => {
  const langContent = content[language];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {langContent.welcome}
        </h2>
        <p className="text-lg mb-8 text-center">{langContent.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {langContent.destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              <img
                src={`/src/assets/${dest.title.toLowerCase()}.jpeg`}
                alt={dest.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{dest.title}</h3>
              <p className="mb-4">{dest.description}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
