import React from "react";
import BrandAssetsForm from "../components/BrandAssetsForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const BrandAssetsPage = () => {
  return (
    <div className="flex">
      <Navbar />
      <Sidebar />
      <div className="ml-[206px] mt-[86px] flex justify-center items-center w-[1052px] h-[980px]">
        <BrandAssetsForm />
      </div>
    </div>
  );
};

export default BrandAssetsPage;
