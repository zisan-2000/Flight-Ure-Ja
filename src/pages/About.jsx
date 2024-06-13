import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import flyin2 from "./../assets/fly.jpeg";
import flyin1 from "./../assets/flyinn.jpeg";
import flyin3 from "./../assets/flyinn_2.jpeg";

const About = ({ language }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Carousel showThumbs={false} infiniteLoop autoPlay>
              <div>
                <img src={flyin1} alt="Flight Agency" />
              </div>
              <div>
                <img src={flyin2} alt="Flight Agency" />
              </div>
              <div>
                <img src={flyin3} alt="Flight Agency" />
              </div>
            </Carousel>
          </div>
          <div className="md:w-1/2 md:pl-6">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              {language === "en" ? "About Us" : "আমাদের সম্পর্কে"}
            </h2>
            <p className="text-lg mb-6">
              {language === "en"
                ? "We are a premier flight agency dedicated to providing exceptional travel experiences. With our expertise and dedication, we ensure hassle-free travel arrangements and personalized services tailored to meet your needs. From booking flights to arranging accommodations, we strive to make your journey seamless and memorable."
                : "আমরা একটি অগ্রণী ফ্লাইট এজেন্সি যার লক্ষ্য হলো অসাধারণ ভ্রমণ অভিজ্ঞতা সরবরাহ করা। আমাদের দক্ষতা এবং বক্তব্য দেওয়া সতীর্থে আমরা আপনার প্রয়োজনীয়তা পরিমাপন করে নিজের সেবা সংজ্ঞায়িত করে উপযুক্তভাবে ব্যক্তিগতকৃত পরিষেবা সরবরাহ করি। ফ্লাইট বুকিং থেকে বাসস্থান ব্যবস্থাপনা পর্যন্ত, আমরা আপনার ভ্রমণ অসংশোধনীয় এবং স্মরণীয় করার চেষ্টা করি।"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
