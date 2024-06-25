import React from "react";

const AccountForm = () => {
  return (
    <div className="bg-white p-8 shadow-md w-[968px] h-auto ml-[261px] mt-[139px] rounded-md">
      <h2 className="text-2xl font-bold mb-6">Account Contacts</h2>
      <p className="mb-6 text-gray-700">
        Add contacts you want us to communicate with, or anyone you want to have
        access to your account and reports. You can add additional contacts
        later from your business profile.
      </p>
      <form>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Primary User</label>
          <input
            type="text"
            placeholder="John Smith"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex gap-4 mb-6">
          <input
            type="email"
            placeholder="johnsmith@abcompany.com"
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <input
            type="phone"
            placeholder="(562) 555-8080"
            className="flex-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <h3 className="text-lg font-bold mb-4">Additional Contact</h3>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="phone"
            placeholder="Phone"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-gray-100 text-gray-700 py-2 px-4 rounded border border-gray-300"
          >
            + Add Contact
          </button>
          <div className="flex items-center">
            <input type="checkbox" id="sendAccess" className="mr-2" />
            <label htmlFor="sendAccess" className="text-gray-700">
              Send access
            </label>
          </div>
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

export default AccountForm;
