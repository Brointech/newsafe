"use client";
import { FaArrowRight } from "react-icons/fa";

export const Learnmore = () => {
  return (
    <section className=" py-16 px-4 md:px-10 lg:px-30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Image (Phone) */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/phone 3.svg"
            alt=""
            className="w-65 sm:w-[320px] md:w-95 lg:w-75 object-cover"
          />
        </div>

        {/* Heading */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-800 leading-tight">
            Hey there, Having <br className="hidden sm:block" />
            Difficulty(ies)?
          </h2>

          {/* Paragraph */}
          <p className="mt-6 text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            Any challenge? We get it solved with the snap of a <br />
            finger. Access us via calls, WhatsApp, tweet, our <br />
            email is also wide open. If we don't serve you, who <br />
            will?
          </p>
          <div className="flex items-center gap-2 mt-6 justify-center lg:justify-start cursor-pointer">
            <p className="text-[#034EA2] ">Learn more </p>
            <FaArrowRight className="text-[#034EA2]" />
          </div>
        </div>
      </div>
    </section>
  );
};
