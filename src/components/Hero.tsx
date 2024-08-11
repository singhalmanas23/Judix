import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-[392px] w-[1133px]  mt-[30px] ml-[153.5px] flex flex-col items-center">
        <div className="text-center font-bold text-[42px] text-cust-blue mt-12 w-[1133px] h-[120px] leading-[60px] font-poppins">
          Your Startup's legal partner. Simplified, transparent,
          <br />
          automated. <span className="text-sp-orange">From Start to Scale</span>
        </div>
        <div className="text-center font-normal  text-cust-blue text-lg  mt-[30px] racking-[0.02em] leading-[30px] font-poppins">
          The only end-to-end platform offering integrated legal solution that
          combines human
          <br />
          intelligence and technology to automate all your legal and taxation
          complexities and provides
          <br />
          you with a peace of mind and focus on your startup.
        </div>
        <button className="bg-custom-blue text-white mt-14  h-[52px] w-[166px] p-2 rounded-md text-[18px] font-poppins leading-[30px] tracking-tight">
          Book a demo
        </button>
      </div>
      <div className="h-[205px] w-[1440px] mb-28 mt-16">
        <h3 className="text-center mt-14 text-2xl font-black font-plusJakartaSans-100 leading-[25px] tracking-[0.08em]">
          <span className="px-4 text-gray-600">
            TRUSTED BY STARTUPS{" "}
            <span className="text-sp-orange"> LIKE YOURS</span>
          </span>
        </h3>
        <div className="flex mt-12 justify-center w-full gap-[98.25px]">
          <img className="w-[75px] h-[75px]" src="/hero/pwc.svg" alt="PWC" />
          <img
            className="w-[47.37px] h-[45px]"
            src="/hero/Zerodha 1.svg"
            alt="Zerodha"
          />
          <img
            className="w-[69.23px] h-[60px]"
            src="/hero/boat.svg"
            alt="Boat"
          />
          <img
            className="w-[95.48px] h-[52.50px]"
            src="/hero/phonepe.svg"
            alt="PhonePe"
          />
          <img
            className="w-[81.45px] h-[60px]"
            src="/hero/Rapido.svg"
            alt="Rapido"
          />
          <img
            className="w-[90.73px] h-[37.50px]"
            src="/hero/Lenskart.svg"
            alt="Lenskart"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
