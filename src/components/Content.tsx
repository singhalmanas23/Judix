import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

const Content = () => {
  return (
    <div className="min-h-[400px] flex flex-col items-center">
      <div className="text-center mt-12 text-3xl font-sans text-blue-950">
        Managing legal affairs is complicated!
      </div>

      <div className="flex flex-col items-center mt-8">
        <div className="flex space-x-8 mt-12">
          <div className="bg-gray-100 shadow-lg rounded-3xl p-8 flex flex-col items-center w-96">
            <FaRegLightbulb className="text-blue-500 text-4xl mb-4" />
            <p className="text-center text-gray-700">
              Current processes are inefficient, resulting in wasted time and
              resources, as well as a lack of accountability.
            </p>
          </div>
          <div className="bg-gray-100 shadow-lg rounded-3xl p-8 flex flex-col items-center w-96">
            <RiComputerLine className="text-blue-500 text-4xl mb-4" />
            <p className="text-center text-gray-700">
              Lack of digitization and excessive reliance on outdated tools such
              as MS Excel, Word, emails.
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
