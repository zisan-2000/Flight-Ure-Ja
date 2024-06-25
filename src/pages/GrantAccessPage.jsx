import React from "react";
import Sidebar from "../components/Sidebar";

const GrantAccessPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-xl font-bold mb-4">Grant Access</h2>
        <p>Grant access form goes here.</p>
      </div>
    </div>
  );
};

export default GrantAccessPage;
