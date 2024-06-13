import React from "react";
import HotelSearch from "../components/HotelSearch";

const Hotels = ({ language }) => (
  <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-4">
      {language === "en" ? "Hotel Booking" : "হোটেল বুকিং"}
    </h1>
    <HotelSearch />
    {/* Add hotel booking form or content here */}
  </div>
);

export default Hotels;
