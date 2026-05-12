"use client";

export const Partners = () => {
  return (
    <section className="max-w-7xl mx-auto py-10 px-6 ">
      <div className="flex flex-col gap-10 px-2 sm:px-6 lg:px-18  py-12 lg:py-20">
        <div className="flex items-center gap-4 px-10 lg:px-4">
          <span className="w-18 h-0 border border-b-gray-300"></span>
          <h2>Our Partner Institutions</h2>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap items-center justify-start gap-22 px-10 lg:px-3 gap-x-10 gap-y-6 sm:gap-x-14 lg:gap-x-24">
          <div className="flex items-center opacity-100 grayscale">
            <img src="/sudo.svg" alt="" className="w-20 h-10 object-contain" />
          </div>
          <div className="flex items-center opacity-100 grayscale">
            <img
              src="/fidelity.svg"
              alt=""
              className="w-20 h-10 object-contain"
            />
          </div>
          <div className="flex items-center opacity-100 grayscale">
            <img
              src="/zenith.svg"
              alt=""
              className="w-20 h-10 object-contain"
            />
          </div>
          <div className="flex items-center opacity-100 grayscale">
            <img src="/verve.svg" alt="" className="w-20 h-10 object-contain" />
          </div>
          <div className="flex items-center opacity-100 grayscale">
            <img src="/nibss.svg" alt="" className="w-20 h-10 object-contain" />
          </div>
          <div className="flex items-center opacity-100 grayscale">
            <img
              src="/interswitch.svg"
              alt=""
              className="w-20 h-10 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
