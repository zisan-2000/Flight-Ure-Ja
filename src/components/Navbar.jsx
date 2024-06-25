import React from "react";

const Navbar = ({ showAlert, alertMessage, alertStyle }) => {
  return (
    <nav className="bg-white h-[100px] w-full flex items-center shadow-md fixed top-0 left-0 px-8">
      <div className="flex items-center">
        <img src="logo.png" alt="OCSEO Logo" className="h-10" />
      </div>
      <div className="flex-grow"></div>{" "}
      {/* Spacer to push the next div to the right */}
      {showAlert && (
        <div className={`px-4 py-2 rounded-lg flex items-center ${alertStyle}`}>
          <div className="flex flex-col text-center">
            <span className="font-bold text-blue-600">
              {alertMessage.title}
            </span>
            <span className="text-pink-500 text-sm">
              {alertMessage.message}
            </span>
          </div>
          <button className="ml-4 text-pink-600">✖</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
