import React from "react";

const BrandAssetsForm = () => {
  return (
    <div className="bg-white p-8 shadow-md w-[964px] h-auto ml-[169px] mt-[1122px] rounded-md">
      <h2 className="text-2xl font-bold mb-6">Brand Assets</h2>
      <p className="mb-6 text-gray-700">
        Use this area to provide our team content assets for your marketing. You
        can provide a logo, images, videos, text, and links to content. Feel
        free to upload files directly. More material helps us perform better
        work, and deliver better results.
      </p>
      <form>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Media Library</label>
          <div className="w-full p-2 border border-gray-300 rounded h-32 flex justify-center items-center">
            <button className="text-2xl text-gray-400">+</button>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Resource Links</label>
          <input
            type="text"
            placeholder="URL Input Field"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="button"
            className="mt-2 w-full text-left p-2 border border-gray-300 rounded flex justify-center items-center"
          >
            Add Link
          </button>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">
            Additional Information
          </label>
          <textarea
            placeholder="Please provide any additional details or information we should know or have access to."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-between mt-8">
          <button type="button" className="text-gray-700">
            Skip & Finish Later
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

export default BrandAssetsForm;
