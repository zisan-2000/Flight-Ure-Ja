import React, { useState } from "react";
import AccountForm from "../components/AccountForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ContactsPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const alertMessage = {
    title: "Let's Create Your Account!",
    message: "Please follow the prompts below to complete account setup.",
  };

  // Show alert when the component is mounted
  React.useEffect(() => {
    setShowAlert(true);
  }, []);

  return (
    <div className="flex">
      <Navbar
        showAlert={showAlert}
        alertMessage={alertMessage}
        alertStyle="bg-pink-100 border border-pink-300 text-pink-600"
      />
      <Sidebar />
      <div className="ml-[226px] mt-[100px] flex justify-center items-center w-[1052px] h-[980px]">
        <AccountForm />
      </div>
    </div>
  );
};

export default ContactsPage;
