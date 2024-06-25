import React from "react";

const BusinessDetailsForm = () => {
  return (
    <div className="bg-white p-8 shadow-md w-[968px] h-auto ml-[261px] mt-[139px] rounded-md">
      <h2 className="text-2xl font-bold mb-6">Business Details</h2>
      <p className="mb-6 text-gray-700">
        Add your business details so our team has the correct information for
        creating local business listings through directory submissions. Use the
        search function by typing and selecting your business location. Search
        is powered by Google Places API and only returns profiles with a visible
        street address. You can also add your details manually.
      </p>
      <form>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">
            Search For Your Business on Google Maps (Recommended)
          </label>
          <input
            type="text"
            placeholder="ABC Company Inc Newport Beach"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <h3 className="text-lg font-bold mb-4">Add Your Business Manually</h3>
        <p className="mb-6 text-gray-700">
          Use the fields below to enter as many details as possible about your
          business. These should match your Google profile and what you want to
          display to the general public.
        </p>
        <div className="mb-4">
          <button
            type="button"
            className="w-full text-left p-4 border border-gray-300 rounded flex justify-between items-center"
          >
            General Information <span className="text-gray-500">▼</span>
          </button>
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="w-full text-left p-4 border border-gray-300 rounded flex justify-between items-center"
          >
            Hours of Operation <span className="text-gray-500">▼</span>
          </button>
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="w-full text-left p-4 border border-gray-300 rounded flex justify-between items-center"
          >
            More About the Business <span className="text-gray-500">▼</span>
          </button>
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="w-full text-left p-4 border border-gray-300 rounded flex justify-between items-center"
          >
            Social Profile Links <span className="text-gray-500">▼</span>
          </button>
        </div>
        <div className="flex justify-between mt-8">
          <button type="button" className="text-gray-700">
            Save & Finish Later
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-6 rounded"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessDetailsForm;
