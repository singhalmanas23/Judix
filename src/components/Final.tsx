import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Final = () => {
  return (
    <div className="h-[2470px] bg-blue-50 flex flex-col">
      <div className="flex flex-row gap-28 items-center justify-center">
        <button className="bg-blue-800 w-56 h-12 text-white mt-12 rounded-md">
          EXPLORE ALL PRODUCTS
        </button>
        <button className="bg-gray-500 w-48 h-12 text-white mt-12 rounded-md">
          TALK TO EXPERTS
        </button>
      </div>
      <div className="text-4xl mt-24 text-center font-bold text-bold text-blue-950">
        All you need is <span className="text-orange-400">Judix</span>
      </div>
      <div>
        <div className="flex flex-row mt-14">
          <div className="flex flex-col ml-14 w-1/2">
            <div className="text-2xl text-black font-sans font-bold mt-14">
              Designed to give you peace of mind.
            </div>
            <div className="mt-8 text-xl font-normal text-gray-500">
              Customers experience peace of mind knowing that we handle their
              legal complexities,allowing them to avoid the stress and burden of
              managing these issues themselves.
            </div>
          </div>
          <div className="w-[500px] h-60 shadow-xl bg-blue-200 ml-32 rounded-lg mr-12"></div>
        </div>
        <div className="flex flex-row mt-14">
          <div className="w-[500px] h-60 shadow-xl bg-blue-200 ml-12 rounded-lg"></div>
          <div className="flex flex-col ml-56 w-1/2">
            <div className="text-2xl text-black font-sans font-bold mt-14">
              Save time and reduce cost.
            </div>
            <div className="mt-8 text-xl font-normal text-gray-500 text-wrap">
              We reduce the burdens on the founders by freeing up their time,
              resources,and mental bandwidth,allowing them to concentrate on{" "}
              <br /> their core operations and business growth.
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-14">
          <div className="flex flex-col ml-14 w-1/2">
            <div className="text-2xl text-black font-sans font-bold mt-14">
              Unparalleled legal,guidance and support
            </div>
            <div className="mt-8 text-xl font-normal text-gray-500">
              Connects with experienced lawyers and charted accountants for
              personalized consultation ,offering exceptional legal guidance and
              support.Navigate complex legal matters with our top-notch
              expertise and dedicated assistance.
            </div>
          </div>
          <div className="w-[500px] h-60 shadow-xl bg-blue-200 ml-48 rounded-lg mr-12"></div>
        </div>
      </div>
      <div className="w-full  max-w-[950px] mt-20 ml-64">
        <img src="./main.png" alt="" className="rounded-lg shadow-md" />
      </div>
      <div className="mt-12 text-4xl ml-[470px] font-bold ">
        What our <span className="text-4xl text-orange-500">users</span> say
        about us
      </div>
      <div className="bg-slate-300 w-[950px] h-[220px] ml-64 mt-12 rounded-md p-6">
        <div className="flex  space-x-4">
          <FaQuoteLeft className="text-7xl" />
          <div className=" text-gray-700 ml-12 mt-12">
            <p>
              This is one of the best legal tech platform i have ever used.This
              platform is one stop solution that most startup should use for
              their legal and consultation process. Kudos to the brains behind
              the platform.
            </p>
          </div>
          <div className="flex flex-col justify-end items-end">
            <img
              src="/mic.jpeg"
              alt="User"
              className="w-16 h-16 rounded-full border-2 border-gray-400 mr-10"
            />
            <span className="text-lg font-semibold ml-36 mt-3">
              Michael Siebel
            </span>
            <span className="text-sm text-gray-600 ml-36">CEO,YCOMBINATOR</span>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 justify-center mt-8">
        <div className="w-2 h-2 bg-[#003366] rounded-full"></div>

        <div className="w-2 h-2 bg-[#87CEEB] rounded-full"></div>

        <div className="w-2 h-2 bg-[#ADD8E6] rounded-full"></div>

        <div className="w-2 h-2 bg-[#3f576e] rounded-full"></div>

        <div className="w-2 h-2 bg-[#87CEEB] rounded-full"></div>
      </div>
      <div className="bg-white w-[1150px] h-[250px] ml-40 mt-14 rounded-lg shadow-lg">
        <div className="flex flex-col mt-12">
          <div className="text-3xl text-center font-bold">
            {" "}
            Your Startup's Legal Partner :{" "}
            <span className="text-orange-500">Transparent</span>
          </div>
          <div className="text-center mt-6">
            Want to know more or have a chat?
          </div>
          <button className="bg-orange-500 w-48 p-4 rounded-full text-white mt-7 ml-[500px]">
            Request a callback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Final;
