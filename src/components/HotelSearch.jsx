import axios from "axios";
import { useState } from "react";

const HotelSearch = () => {
  const [cityCode, setCityCode] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8000/search_hotels/", {
        params: {
          city_code: cityCode,
          check_in_date: checkInDate,
          check_out_date: checkOutDate,
        },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error searching for hotels:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          উড়ে যা ডট কম - Hotel Search
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            City Code
          </label>
          <input
            type="text"
            value={cityCode}
            onChange={(e) => setCityCode(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter city code"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Check-in Date
          </label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Check-out Date
          </label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 font-semibold"
          disabled={loading}
        >
          {loading ? "Loading..." : "Search Hotels"}
        </button>
        {loading && (
          <div className="mt-4 text-center">
            <svg
              className="animate-spin h-5 w-5 text-blue-500 mx-auto"
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
            <p className="mt-2 text-gray-600">Searching for hotels...</p>
          </div>
        )}
        {!loading && (
          <div className="mt-6 space-y-4">
            {results.map((hotel) => (
              <div
                key={hotel.id}
                className="p-4 border border-gray-300 rounded bg-gray-50 shadow"
              >
                <p className="font-semibold text-gray-700">
                  Name: {hotel.name}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Address:</span>{" "}
                  {hotel.address.lines.join(", ")}, {hotel.address.cityName},{" "}
                  {hotel.address.countryCode}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Rating:</span> {hotel.rating}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Price:</span> €{hotel.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelSearch;
