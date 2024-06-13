import React from "react";

const Contact = ({ language }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        {language === "en" ? "Contact Us" : "যোগাযোগ করুন"}
      </h2>
      <p>
        {language === "en"
          ? "Feel free to reach out to us for any inquiries."
          : "যেকোনো অনুসন্ধানের জন্য আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না।"}
      </p>
    </div>
  );
};

export default Contact;
