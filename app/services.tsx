"use client";

import {
  Code,
  CreditCard,
  Landmark,
  Wallet,
  Receipt,
  Headphones,
  ShieldCheck,
} from "lucide-react";

export const Services = () => {
  return (
    <section className="px-2 sm:px-6 lg:px-30 py-10 lg:py-18">
      <div className=" max-w-7xl mx-auto">
        {/* Header  */}
        <div className="max-w-xl">
          <h2 className="text-3xl text-center md:text-left md:text-4x1 font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 text-[16px] text-center md:text-left  lg:text-[20px] mb-4">
            We have quality solutions in place to
            <br className="hidden md:block" /> make banking smooth.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition lg:mt-10">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <Code className="w-6 h-6 text-[#034EA2]" />
              </div>
              <h3 className="text-[#034EA2] font-semibold mb-2">
                Open API Banking
              </h3>
            </div>
            <p className="text-gray-500 text-[16px]">
              We provide developers access to core banking infrastructures.
            </p>
          </div>

          {/* Card 2 (Stagger) */}

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition lg:mt-10">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <Landmark className="w-6 h-6 text-[#034EA2] mb-1" />
              </div>
              <h3 className="text-[#034EA2] font-semibold mb-2">
                Inter Bank Transfer
              </h3>
            </div>
            <p className="text-gray-500 text-[16px]">
              With our app, you have every <br />
              bank at your finger tips, swift <br />
              and reliable.
            </p>
          </div>

          {/* Card 3 (more stagger) */}

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition lg:mt-10">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <Wallet className="w-6 h-6 text-[#034EA2] mb-1" />
              </div>
              <h3 className="text-[#034EA2] font-semibold mb-2">Loans</h3>
            </div>
            <p className="text-gray-500  text-[16px]">
              Your sector doesn't matter, we have the exact package you need.
              Flexible and easy to access.
            </p>
          </div>

          {/* Card 4 (even more stagger) */}

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition lg:mt-10 lg:mb-20">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <ShieldCheck className="w-6 h-6 text-[#034EA2] mb-1" />
              </div>
              <h3 className="text-[#034EA2] font-semibold mb-2">
                Digital Banking
              </h3>
            </div>
            <p className="text-gray-500  text-[16px]">
              We offer both personal and business accounts. Everything is
              digitized, no need for physical contact.
            </p>
          </div>

          {/* Card 5 */}

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition lg:mt-10 mb-30">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <CreditCard className="w-6 h-6 text-[#034EA2] mb-1" />
              </div>

              <h3 className="text-[#034EA2] font-semibold mb-2">
                Payment Cards
              </h3>
            </div>
            <p className="text-gray-500  text-[16px]">
              Safe Haven provides programmable cards that help you manage all
              your accounts with one card.
            </p>
          </div>

          {/* Card 7 */}

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition lg:mt-20">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <Headphones className="w-6 h-6 text-[#034EA2] mb-1" />
              </div>
              <h3 className="text-[#034EA2] font-semibold mb-2">
                24 Hour Customer <br /> Service
              </h3>
            </div>
            <p className="text-gray-500  text-[16px]">
              We are always on standby to proffer solutions to all your
              challenges.
            </p>
          </div>

          {/* Card 6 */}

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <Receipt className="w-6 h-6 text-[#034EA2] mb-1" />
              </div>
              <h3 className="text-[#034EA2] font-semibold mb-2">
                Bill Payments
              </h3>
            </div>
            <p className="text-gray-500  text-[16px]">
              No need to get stranded. Pay your bills online hitch free using
              our banking app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
