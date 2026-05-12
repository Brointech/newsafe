"use client";
import { FaArrowRight } from "react-icons/fa";

export const Savings = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Image (Phone) */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/phone 1.svg"
            alt=""
            className="w-60 sm:w-[320px] md:w-95 lg:w-75 object-cover"
          />
        </div>

        {/* Heading */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-800 leading-tight">
            We make Savings <br className="hidden sm:block" />
            Convenient and Flexible
          </h2>

          {/* Paragraph */}
          <p className="mt-6 text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            Times are changing, Banking is evolving, don't be left behind. Save,
            earn, transfer, pay bills without breaking a sweat.
          </p>
          <div className="flex items-center gap-2 mt-6 text-end justify-center lg:justify-start cursor-pointer">
            <p className="text-[#034EA2] ">Learn more </p>
            <FaArrowRight className="text-[#034EA2]" />
          </div>
        </div>
      </div>
    </section>
  );
};
