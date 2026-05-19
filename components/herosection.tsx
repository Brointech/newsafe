"use cleint";

export const Herosection = () => {
  return (
    <section className=" relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/hero-background.svg')] bg-cover bg-center"></div>
      {/* Hero Content */}
      <div className="relative flex flex-col lg:flex-row items-center gap-0 min-h-screen">
        {/* Left Content */}
        <div className="lg:ml-32 mt-38 flex flex-col gap-6">
          <h1 className="text-black text-[32px] mt-4 sm:text-[34px] md:text-[44px] lg:text-[54px] text-center lg:text-left font-extrabold leading-[1.6]">
            Simple, Quick and <br className="hidden md:block" />
            Safe Banking
          </h1>
          <p className="text-gray-500 text-[18px] text-center lg:text-left sm:text-[18px] md:text-[22px] lg:text-[24px] font-medium tracking-wide">
            We are here for everyone, bringing banking
            <br className="hidden md:block" />
            to your comfort.
          </p>
          {/* Button */}
          <div className="flex justify-center sm:justify-center lg:justify-start">
            <button className="bg-[#034EA2] w-32 h-14 ml-0 md:ml-40 sm:mr-40 lg:ml-0 rounded-[7px] text-white font-semibold text-[12px] lg:text-[16px] transform hover:scale-105 transition-all duration-100 hover:bg-[#034EA2] cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Licence */}
          <div className="flex items-center md:justify-center lg:justify-start px-30 lg:px-0 gap-10">
            <div className="flex gap-2 sm:flex-col lg:items-center lg:justify-center">
              <p className="text-gray-400 ml-2 text-[12px] sm:text-[16px] md:text-[16px]">
                Licenced by
              </p>
              <img
                src="/cbn.png"
                alt=""
                className="w-22 h-8 mr-2 object-contain"
              />
            </div>
            <div className="flex lg:items-center gap-2 flex-col">
              <p className="text-gray-400 text-[12px] sm:text-[14px] md:text-[16px]">
                Deposit Insured By
              </p>
              <img
                src="/ndic.png"
                alt=""
                className="w-18 h-8 ml-2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="w-full sm:w-1/2 flex lg:justify-end ">
          <img
            src="laptop2.png"
            alt=""
            className="max-w-none lg:w-160 w-100 lg:mt-36 mt-10 scale-110 translate-x-12 object-cover shadow-none"
          />
        </div>
      </div>
    </section>
  );
};
