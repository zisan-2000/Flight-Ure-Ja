import React from "react";
import FlightSearch from "../components/FlightSearch";

const Flights = ({ language }) => (
  <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-4">
      {language === "en" ? "Flight Booking" : "ফ্লাইট বুকিং"}
    </h1>
    <FlightSearch />
  </div>
);

export default Flights;
