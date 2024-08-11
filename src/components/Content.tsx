import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import Image from "next/image";
const Content = () => {
  return (
    <div className="h-[520px] w-[1440px] flex flex-col items-center bg-white">
      <div className="text-center mt-16 text-[28px] font-semibold font-plusJakartaSans text-man-legal leading-[35.28px] tracking-[0.02em]">
        Managing legal affairs is complicated!
      </div>

      <div className="flex flex-col items-center mt-8">
        <div className="flex space-x-8 mt-12">
          <div className="bg-white border shadow-md rounded-3xl p-8 flex flex-col items-center w-96">
            <Image
              src="/hero/vector.svg"
              alt="Illustration"
              width={45}
              height={30}
              className="mb-4"
            />
            <p className="text-center text-gray-700 text-[18px] font-normal font-plusJakartaSans mt-5 leading-[30px]">
              Current processes are inefficient, resulting in wasted time and
              resources, as well as a lack of accountability.
            </p>
          </div>

          <div className="bg-white shadow-md border rounded-3xl p-8 flex flex-col items-center w-96">
            <Image
              src="/hero/Comp.svg"
              alt="Illustration"
              width={36}
              height={32}
              className="mb-4"
            />
            <p className="text-center text-gray-700 text-[18px] font-normal font-plusJakartaSans mt-5 leading-[30px]">
              Lack of digitization and excessive reliance on outdated tools such
              as MS Excel, Word, and emails.
            </p>
          </div>
        </div>
        <div className="flex items-center mt-12">
          <div className="h-2 w-2 rounded-full bg-gray-400 mb-4"></div>
          <div className="h-1 w-8 bg-blue-500 ml-4 rounded-md mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
