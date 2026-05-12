"use client";

export const Download = () => {
  return (
    <section className="bg-[#034EA2] w-full sm:px-6 lg:px-30 lg:py-0 6px-4 md:px-10 ">
      <div className="max-w-7xl mx-auto">
        {/*  */}
        <div className="flex flex-col mt-10 lg:flex-row lg:items-center lg:justify-between gap-8">
          {/*Text  */}
          <div className="flex flex-col gap-6 max-w-2xl mt-14">
            <h1 className="text-gray-300 text-center lg:text-left text-[22px] md:text-[10px] lg:text-[32px] font-extrabold tracking-wide">
              Download the Mobile App
            </h1>
            <p className="text-gray-200 text-[14px] text-center lg:px-0 sm:leading-relaxed sm:text-[14px] md:text-[16px] lg:text-[22px] lg:text-justify leading-normal">
              Download Our Mobile Applications android and IOS for easy and
              quick banking
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <img src="/store2.svg" alt="" />
              <img src="/store1.svg" alt="" />
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center lg:justify-start lg:mt-10 lg:ml-10">
            <img
              src="/phone 5.svg"
              alt=""
              className="w-60 sm:w-[320px] md:w-95 lg:w-95 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
