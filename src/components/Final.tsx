import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

const Final = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-20 items-center justify-center mt-12 w-[744px] h-[78px] ml-[348px]">
        <button className="bg-exp-col w-[332px] h-[78px] text-[20px] font-medium text-white mt-12 rounded-lg font-poppins">
          EXPLORE ALL PRODUCTS
        </button>
        <button className="bg-chat-gray w-[332px] h-[78px] text-[20px] font-medium text-white mt-12 rounded-lg font-poppins">
          TALK TO EXPERTS
        </button>
      </div>
      <div className="text-5xl mt-32 text-center font-bold text-bold text-blue-950 font-poppins ">
        All you need is <span className="text-orange-400">Judix</span>
      </div>
      <div>
        <div className="flex flex-row mt-14">
          <div className="flex ml-[200px] h-[267.57px] w-[1040px] mt-14">
            <div>
              <div className="text-[28px] h-[60px] w-[535px] text-man-legal font-semibold font-poppins  leading-[60px]">
                Designed to give you peace of mind.
              </div>
              <div className="mt-4 leading-[30px] text-[16px] font-light w-[600px] h-[90px] text-black font-poppins text-base">
                Customers experience peace of mind knowing that we handle their
                legal complexities,allowing them to avoid the stress and burden
                of managing these issues themselves.
              </div>
            </div>

            <div className="w-[500px] h-58  ml-12 rounded-lg">
              <Image
                src="/final/Peace.svg"
                alt="final"
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-20 w-[1080px] h-[267.57px] ml-[200px]">
          <div className="w-[500px] h-60 rounded-lg">
            <Image
              src="/final/Peace.svg"
              alt="final"
              height={1000}
              width={1000}
            />
          </div>
          <div className="flex flex-col">
            <div>
              <div className="text-[28px] h-[60px] w-[395px] text-man-legal font-semibold font-poppins  leading-[60px] mt-4 ml-20">
                Save time and reduce costs
              </div>
              <div className="mt-4 leading-[30px] text-[16px] font-extralight w-[600px] h-[90px] text-black font-poppins text-base ml-20">
                We reduce the burden on founders by freeing up their time,
                resources, and mental bandwidth, allowing them to concentrate on
                their core operations and business growth.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-10">
          <div className="flex ml-[200px] h-[267.57px] w-[1040px] mt-12">
            <div>
              <div className="text-[28px] h-[60px] w-[606px] text-man-legal font-semibold font-poppins  leading-[60px] mt-4 ">
                Unparalleled legal , guidance, and support
              </div>
              <div className="mt-4 leading-[30px] text-[16px] font-light w-[600px] h-[90px] text-black font-poppins text-base">
                Connects with experienced lawyers and chartered accountants for
                personalized consultations, offering exceptional legal guidance
                and support. Navigate complex legal matters confidently with our
                top-notch expertise and dedicated assistance.
              </div>
            </div>

            <div className="w-[500px] h-60  ml-12 rounded-lg">
              <Image
                src="/final/Peace.svg"
                alt="final"
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[959px] h-[500px] mt-32 ml-[241px]">
        <img src="/final/compare.svg" alt="main" className="rounded-lg " />
      </div>
      <div className="mt-36 text-4xl font-bold font-poppins text-cust-blue text-center">
        What our <span className="text-4xl text-sp-orange">users</span> say
        about us
      </div>
      <div className="bg-rev-col w-[982px] h-[250px] ml-64 mt-28 rounded-md p-6">
        <div className="flex h-full w-full">
          <ImQuotesLeft className="text-[42px] font-plusJakartaSans" />
          <div className="text-rev2-col font-plusJakartaSans font-medium text-[18px] ml-4 mt-8 w-[587px]">
            <p>
              This is one of the best legal tech platforms I have ever used.
              This platform is a one-stop solution that most startups should use
              for their legal and consultation process. Kudos to the brains
              behind the platform.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center ml-12 mb-12">
            <img
              src="/mic.jpeg"
              alt="User"
              className="w-16 h-16 rounded-full border-2 border-gray-400"
            />
            <span className="text-lg font-semibold mt-3">Michael Siebel</span>
            <span className="text-sm text-gray-600">CEO, YCOMBINATOR</span>
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
      <div className="bg-white w-[1134px] h-[300px] ml-[153px] mt-14 rounded-2xl border shadow-lg">
        <div className="flex flex-col mt-12">
          <div className="text-[42px] text-center font-extrabold font-plusJakartaSans-500 text-cust-blue">
            Your Startup's Legal Partner :
            <span className="text-sp-orange">Transparent</span>
          </div>
          <div className="text-center mt-8 font-medium font-poppins-200 text-[20px] text-cust-blue leading-[30px] ">
            Want to know more or have a chat?
          </div>
          <button className="bg-sp-orange w-[218px] h-[52px] p-2 rounded-full text-white mt-8 font-poppins font-medium text-[18px] leading-[30px] ml-[500px]">
            Request a callback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Final;
