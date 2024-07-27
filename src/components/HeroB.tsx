import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Content3 = () => {
  return (
    <div className="h-[500px] flex flex-row ml-4">
      <div className="h-80 w-80 bg-gray-200 p-4 mt-12 ml-12 rounded-md"></div>
      <div className="flex flex-col ml-8 mt-12">
        <div className=" text-3xl text-blue-950 font-bold ml-8">
          Expert Consultation
        </div>
        <div className="mt-4  special-heading">
          Get personalized legal and financial guidance from anywhere with our
          online platform connecting <br />
          you to certified experts.
        </div>
        <div className="mt-8 flex flex-col ml-8">
          <div className="flex items-center mb-4">
            <RiVerifiedBadgeFill className="text-green-500 w-6 h-6 mr-2" />
            <span>Expert guidance 24*7.</span>
          </div>
          <div className="flex items-center mb-4">
            <RiVerifiedBadgeFill className="text-green-500 w-6 h-6 mr-2" />
            <span>
              Experience lawyers and charted accountants from all over India.
            </span>
          </div>
          <div className="flex items-center mb-4">
            <RiVerifiedBadgeFill className="text-green-500 w-6 h-6 mr-2" />
            <span>
              Get transcription and recordings of consultation for future
              references.
            </span>
          </div>
          <button className="bg-blue-600 text-white w-28 p-2 rounded-md mt-4">
            Learn More
          </button>
        </div>
        <div className="flex items-center mt-12 ml-12">
          <div className="h-2 w-2 rounded-full bg-gray-400 mb-4"></div>
          <div className="h-1 w-8 bg-blue-500 ml-4 rounded-md mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Content3;
