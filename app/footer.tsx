"use client";

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-500 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 ">
          {/* Left: Brand */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 max-w-sm">
            <img
              src="/safelogo.png"
              alt=""
              className="w-36 h-10 flex justify-center object-contain"
            />
            <p className="mb-4 text-center text-sm leading-relaxed">
              Download Our Mobile Applications android and
              <br className=" hidden md:block" />
              IOS for easy and quick banking
            </p>

            {/* Social apps */}
            <div className="flex flex-wrap gap-2">
              <img src="/store2.svg" alt="" />
              <img src="/store1.svg" alt="" />
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex sm:flex-row flex-wrap justify-between gap-0 lg:w-3/5">
            <div className="mb-10">
              <h3 className="text-gray-500 text-sm font-semibold tracking-widest">
                Useful
              </h3>
              <div className="flex flex-col gap-2 text-gray-500 mt-6 text-sm">
                <p>Sandbox Environment</p>
                <p>Terms & Conditions</p>
                <p>API Documentation</p>
                <p>Privacy Policy</p>
                <p>Contact Us</p>
                <p>About Us</p>
                <p>Contact</p>
                <p>Blog</p>
              </div>
            </div>

            {/* Company section */}
            <div className="mb-53.5">
              <h3 className="text-gray-500 text-sm font-semibold mb-4 tracking-widest">
                Account
              </h3>
              <div className="flex flex-col gap-2 text-gray-500 text-sm">
                <p>Individual</p>
                <p>Corperate</p>
              </div>
            </div>

            {/* Resources Section */}
            <div className="mb-53.5">
              <h3 className="text-gray-500 text-sm font-semibold mb-4 tracking-widest">
                Fintech
              </h3>
              <div className="flex flex-col gap-2 text-gray-500 text-sm">
                <p>Verification</p>
                <p>Collections</p>
                <p>Wallet Solutions</p>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>

        {/*  Divider Section*/}
        <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row justify-center items-center text-xs text-gray-500 gap-4">
          {/* Left */}
          <p>© 2026 SAFEHAVEN MICROFINANCE BANK.</p>
        </div>
      </div>
    </footer>
  );
};
