import axios from "axios";
import { useState } from "react";
import {
  FaClock,
  FaDollarSign,
  FaPlaneArrival,
  FaPlaneDeparture,
} from "react-icons/fa";

const FlightSearch = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/search_flights/",
        {
          params: {
            origin,
            destination,
            departure_date: departureDate,
          },
        }
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error searching for flights:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 p-10">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-800">
          উড়ে যা ডট কম
        </h1>
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/3 md:pr-2 mb-4 md:mb-0">
            <label className="block text-gray-700 font-semibold mb-2">
              Origin
            </label>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter origin"
            />
          </div>
          <div className="w-full md:w-1/3 md:px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 font-semibold mb-2">
              Destination
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter destination"
            />
          </div>
          <div className="w-full md:w-1/3 md:pl-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Departure Date
            </label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        <button
          onClick={handleSearch}
          className="w-full py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300 font-semibold mb-4"
          disabled={loading}
        >
          {loading ? "Loading..." : "Search Flights"}
        </button>
        {loading && (
          <div className="text-center">
            <svg
              className="animate-spin h-5 w-5 text-purple-500 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
            <p className="mt-2 text-gray-600">Searching for flights...</p>
          </div>
        )}
        {!loading && results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {results.map((flight) => (
              <div
                key={flight.id}
                className="p-6 border border-gray-200 rounded-lg bg-white shadow-lg transform transition duration-300 hover:scale-105"
              >
                <img
                  src={flight.image} // Assuming the image URL is provided in the response
                  alt={flight.name} // Assuming the name of the flight is available
                  className="w-full h-auto rounded-md mb-4"
                />

                <p className="font-semibold text-gray-800 flex items-center">
                  <FaDollarSign className="mr-2 text-green-500" />€
                  {flight.price}
                </p>
                {flight.itineraries && flight.itineraries[0] && (
                  <>
                    <p className="mt-2 text-gray-600 flex items-center">
                      <FaPlaneDeparture className="mr-2 text-blue-500" />
                      <span className="font-semibold">Departure:</span>{" "}
                      {flight.itineraries[0].segments[0].departure_iata}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <FaPlaneArrival className="mr-2 text-red-500" />
                      <span className="font-semibold">Arrival:</span>{" "}
                      {
                        flight.itineraries[0].segments[
                          flight.itineraries[0].segments.length - 1
                        ].arrival_iata
                      }
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <FaClock className="mr-2 text-yellow-500" />
                      <span className="font-semibold">Duration:</span>{" "}
                      {flight.itineraries[0].duration}
                    </p>
                    {flight.itineraries[0].segments.map((segment, index) => (
                      <div
                        key={index}
                        className="mt-4 border-t pt-4 border-gray-200"
                      >
                        <p className="text-gray-600">
                          <span className="font-semibold">
                            Segment {index + 1}:
                          </span>
                        </p>
                        <p className="text-gray-600">
                          Carrier: {segment.carrier_code}
                        </p>
                        <p className="text-gray-600">
                          Flight Number: {segment.flight_number}
                        </p>
                        <p className="text-gray-600">
                          Departure Time:{" "}
                          {new Date(segment.departure_at).toLocaleString()}
                        </p>
                        <p className="text-gray-600">
                          Arrival Time:{" "}
                          {new Date(segment.arrival_at).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightSearch;
