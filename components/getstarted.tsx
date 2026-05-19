"use client";

import { FaArrowRight } from "react-icons/fa";

export const Getstarted = () => {
  return (
    <section className="bg-[#034EA2] w-full lg:h-70 h-90 sm:px-6 lg:px-30 py-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/*  */}
        <div className="flex flex-col mt-10 lg:flex-row lg:items-center lg:justify-between gap-8">
          {/*Text  */}
          <div className="max-w-2xl ">
            <p className="text-white text-[18px] p-4 sm:leading-relaxed sm:text-xl text-center md:text-xl lg:text-[24px] lg:text-justify leading-normal">
              We are here for everyone. We have every kind of <br />
              account that you desire. Open an account today and <br />
              enjoy good banking
            </p>
          </div>
          {/* Button */}
          <div className=" flex items-center justify-center gap-4 w-45 h-12 ml-38 sm:w-30 lg:w-50 sm:h-10 lg:h-14 border border-white rounded-[5px]  cursor-pointer">
            <p className="text-white text-[14px] sm:text-[18px] font-semibold">
              Get Started
            </p>
            <FaArrowRight className="text-white animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
