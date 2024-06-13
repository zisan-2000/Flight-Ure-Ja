import React from "react";

const Reviews = ({ language }) => (
  <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-4">
      {language === "en" ? "Reviews" : "রিভিউ"}
    </h1>
    {/* Add reviews content here */}
  </div>
);

export default Reviews;
