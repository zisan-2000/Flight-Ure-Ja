import React from "react";
import Sidebar from "../components/Sidebar";

const FinishPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-xl font-bold mb-4">Finish</h2>
        <p>Finish setup instructions go here.</p>
      </div>
    </div>
  );
};

export default FinishPage;
