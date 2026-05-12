"use cleint";

export const Herosection = () => {
  return (
    <section className=" relative overflow-hidden min-h-screen ">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/hero-background.svg')] bg-cover bg-center"></div>
      {/* Hero Content */}
      <div className="relative flex flex-col lg:flex-row items-center gap-0 min-h-screen">
        {/* Left Content */}
        <div className="lg:ml-32 mt-26 flex flex-col gap-8">
          <h1 className="text-black text-[32px] mt-4 sm:text-[34px] md:text-[46px] lg:text-[50px] text-center lg:text-left font-extrabold leading-[1.6]">
            Simple, Quick and <br className="hidden md:block" />
            Safe Banking
          </h1>
          <p className="text-gray-500 text-[18px] text-center lg:text-left sm:text-[18px] md:text-[24px] font-medium tracking-wide">
            We are here for everyone, bringing banking{" "}
            <br className="hidden md:block" />
            to your comfort.
          </p>
          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#034EA2] w-30 h-14 ml-5 md:ml-0 sm:mr-40 rounded-[7px] text-white font-semibold text-[12px] lg:text-[16px] transform hover:scale-105 transition-all duration-100 hover:bg-[#034EA2] cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Licence */}
          <div className="flex items-center md:justify-center px-30 lg:px-0 gap-10">
            <div className="flex flex-col sm:justify-center sm:flex-col">
              <p className="text-gray-400 ml-2 text-[12px] sm:text-[16px] md:text-[16px]">
                Licenced by
              </p>
              <img
                src="/cbn.png"
                alt=""
                className="w-22 h-8 mr-2 object-contain"
              />
            </div>
            <div className="flex flex-col sm:justify-center sm:flex-col">
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
        <div className="w-full lg:w-1/2 flex lg:justify-end ">
          <img
            src="laptop2.png"
            alt=""
            className="max-w-none lg:w-160 w-100 lg:mt-38 mt-10 scale-110 translate-x-12 object-cover"
          />
        </div>
      </div>
    </section>
  );
};
