"use client";

import React from "react";
import { Tabs, Tab } from "@heroui/react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

const Individual = () => {
  return (
    <section className="relative overflow-hidden min-h-screen py-16 px-4 md:px-10 lg:px-32 mt-32">
      <div className="max-w-7xl mx-auto">
        {/* Top: Left + Right */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-16">
          {/* Left Content */}
          <div className="text-center lg:text-left gap-10 flex flex-col">
            <h1 className="text-[42px] font-extrabold text-black leading-tight">
              Individual Accounts
            </h1>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              For all types of account, we have the account that will suite your
              needs. Ranging from individual savings, pockets and kiddies.
              Flexibility is the core.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#034EA2] w-32 h-14 rounded-[7px] text-white font-semibold text-[12px] lg:text-[16px] transform hover:scale-105 transition-all duration-100 cursor-pointer">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center lg:justify-start lg:ml-40">
            <img
              src="/individual.svg"
              alt="Individual accounts illustration"
              className="w-65 sm:w-[320px] md:w-95 lg:w-75 object-cover"
            />
          </div>
        </div>

        {/* Tabs */}

        <div className="w-full px-4 lg:px-0 py-10 ">
          <Tabs className="w-fit" variant="secondary">
            {/* TOP NAVIGATION */}

            <Tabs.ListContainer className="bg-slate-100 p-2x">
              <Tabs.List
                aria-label="Account Types"
                className="flex gap-6 w-fit px-10 items-end"
              >
                <Tabs.Tab id="savings" className="pb-0">
                  Savings
                  <Tabs.Indicator className="h-1 bg-blue-600 rounded-t-md" />
                </Tabs.Tab>
                <Tabs.Tab id="current" className="pb-0">
                  Current
                  <Tabs.Indicator className="h-1 bg-blue-600 rounded-t-md" />
                </Tabs.Tab>
                <Tabs.Tab id="pocket" className="pb-0">
                  Pocket
                  <Tabs.Indicator className="h-1 bg-blue-600 rounded-t-md" />
                </Tabs.Tab>
                <Tabs.Tab id="kiddies" className="pb-0">
                  Kiddies
                  <Tabs.Indicator className="h-1 bg-blue-600 rounded-t-md" />
                </Tabs.Tab>
              </Tabs.List>
            </Tabs.ListContainer>

            {/* SAVINGS CONTENT */}
            <Tabs.Panel id="savings" className="pt-10">
              {/* Left Side */}

              <div className="bg-white p-8 border-l border-blue-600 shadow-sm">
                <h2 className="text-4xl font-bold text-slate-900">
                  Savings Account
                </h2>
                <p className="mt-6 text-xl text-slate-500 max-w-4xl leading-relaxed">
                  That cash is not too little to save with no maintenance cost
                  and zero balance. It gets better because you also make some
                  money for yourself.
                </p>
                <div className="grid md:grid-cols-2 gap-16 mt-16">
                  <div>
                    <h3 className="text-blue-700 font-bold text-[14px] mb-8">
                      Account Requirements
                    </h3>
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Passport photograph
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Bank Verification Number (BVN)
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Proof of Address Verification such as Utility Bill
                          (PHCN, Water bill etc.)
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Valid means of identification (Drivers License,
                          International Passport, Voters Card or National ID
                          Card)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div>
                    <h3 className="text-blue-700 font-bold text-[14px] mb-8">
                      Account Benefits
                    </h3>
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          No maintenance charge
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          No minimum balance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-16">
                  <div className="border border-blue-800 p-8 w-70 h-8 rounded-lg hover:scale-105 transition-all duration-400 mt-10 cursor-pointer flex items-center justify-center">
                    <p>Open an Individual Account</p>
                  </div>
                </div>
              </div>
            </Tabs.Panel>

            {/* Current Account */}
            <Tabs.Panel id="current" className="pt-10">
              {/* Left Side */}
              <div className="bg-white p-8 border-l border-blue-600 shadow-sm">
                <h2 className="text-4xl font-bold text-slate-900">
                  Current Account
                </h2>
                <p className="mt-6 text-xl text-slate-500 max-w-4xl leading-relaxed">
                  Seamless banking fashioned to suit your business.
                </p>
                <div className="grid md:grid-cols-2 gap-16 mt-16">
                  <div>
                    <h3 className="text-blue-700 font-bold text-[14px] mb-8">
                      Account Requirements
                    </h3>
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Passport photograph
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Bank Verification Number (BVN)
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Proof of Address Verification such as Utility Bill
                          (PHCN, Water bill etc.)
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Valid means of identification (Drivers License,
                          International Passport, Voters Card or National ID
                          Card)
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Two corporate account references
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div>
                    <h3 className="text-blue-700 font-bold text-[14px] mb-8">
                      Account Benefits
                    </h3>
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Zero minimum balance
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Loan/Overdraft facilities
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Must operate for 3 months to qualify for loan
                          (LPO/Project financing)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-16">
                  <div className="border border-blue-800 p-8 w-70 h-8 rounded-lg hover:scale-105 transition-all duration-400 mt-10 cursor-pointer flex items-center justify-center">
                    <p>Open an Individual Account</p>
                  </div>
                </div>
              </div>
            </Tabs.Panel>

            {/* POCKET */}
            <Tabs.Panel id="pocket" className="pt-10">
              {/* Left Side */}
              <div className="bg-white p-8 border-l border-blue-600 shadow-sm">
                <h2 className="text-4xl font-bold text-slate-900">
                  Pocket Account
                </h2>
                <p className="mt-6 text-xl text-slate-500 max-w-4xl leading-relaxed">
                  Rainy days are inevitable, let's grow your money while you
                  relax and smile at the face of adversity
                </p>
                <div className="grid md:grid-cols-2 gap-16 mt-16">
                  <div>
                    <h3 className="text-blue-700 font-bold text-[14px] mb-8">
                      Account Requirements
                    </h3>
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-100 rounded-full p-1.5">
                          <FaCheck className="text-blue-800 shrink-0" />
                        </span>
                        {/* <FaCircleCheck className="text-blue-600 shrink-0" /> */}
                        <p className="text-[14px] text-slate-600">
                          Passport photograph
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-100 rounded-full p-1.5">
                          <FaCheck className="text-blue-800 shrink-0" />
                        </span>
                        {/* <FaCircleCheck className="text-blue-600 shrink-0" /> */}
                        <p className="text-[14px] text-slate-600">
                          Bank Verification Number (BVN)
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-100 rounded-full p-1.5">
                          <FaCheck className="text-blue-800 shrink-0" />
                        </span>
                        {/* <FaCircleCheck className="text-blue-600 shrink-0" /> */}
                        <p className="text-[14px] text-slate-600">
                          Proof of Address Verification such as Utility Bill
                          (PHCN, Water bill etc.)
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-100 rounded-full p-1.5">
                          <FaCheck className="text-blue-800 shrink-0" />
                        </span>
                        {/* <FaCircleCheck className="text-blue-600 shrink-0" /> */}
                        <p className="text-[14px] text-slate-600">
                          Customer to enter undertaking with bank on regular
                          weekly deposit amount and the tenor of deposit target
                          (the funds will be blocked for proper control)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right side */}
                  <div>
                    <h3 className="text-blue-700 font-bold text-[14px] mb-8">
                      Account Benefits
                    </h3>
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-100 rounded-full p-1.5">
                          <FaCheck className="text-blue-800 shrink-0" />
                        </span>
                        {/* <FaCircleCheck className="text-blue-600 shrink-0" /> */}
                        <p className="text-[14px] text-slate-600">
                          Interest Rate: 8-10% pa
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-100 rounded-full p-1.5">
                          <FaCheck className="text-blue-800 shrink-0" />
                        </span>
                        {/* <FaCircleCheck className="text-blue-600 shrink-0" /> */}
                        <p className="text-[14px] text-slate-600">
                          Minimum of 30 days circle
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-100 rounded-full p-1.5">
                          <FaCheck className="text-blue-800 shrink-0" />
                        </span>
                        {/* <FaCircleCheck className="text-blue-600 shrink-0" /> */}
                        <p className="text-[14px] text-slate-600">
                          No withdrawal till target date
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-100 rounded-full p-1.5">
                          <FaCheck className="text-blue-800 shrink-0" />
                        </span>
                        {/* <FaCircleCheck className="text-blue-600 shrink-0" /> */}
                        <p className="text-[14px] text-slate-600">
                          Minimum of N100,000 targetMinimum of 30 days circle
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-16">
                  <div className="border border-blue-800 p-8 w-70 h-8 rounded-lg hover:scale-105 transition-all duration-400 mt-10 cursor-pointer flex items-center justify-center">
                    <p>Open an Individual Account</p>
                  </div>
                </div>
              </div>
            </Tabs.Panel>

            {/* KIDDIES */}

            <Tabs.Panel id="kiddies" className="pt-10">
              {/* Left Side */}
              <div className="bg-white p-8 border-l border-blue-600 shadow-sm">
                <h2 className="text-4xl font-bold text-slate-900">
                  Kiddies Account
                </h2>
                <p className="mt-6 text-xl text-slate-500 max-w-4xl leading-relaxed">
                  There's no such thing as 'too small to have your own money'.
                  secure their future, save on their behalf.
                </p>
                <div className="grid md:grid-cols-2 gap-16 mt-16">
                  <div>
                    <h3 className="text-blue-700 font-bold text-[14px] mb-8">
                      Account Requirements
                    </h3>
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Passport photograph
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Bank Verification Number (BVN)
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Birth certificate
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Parent's Signature (Til the child turns 18)
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          Bank Verification Number of Parents (Till the child
                          turns 18)
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Right Side */}
                  <div>
                    <h3 className="text-blue-700 font-bold text-[14px] mb-8">
                      Account Benefits
                    </h3>
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          No maintenance charge
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaCircleCheck className="text-blue-600 shrink-0" />
                        <p className="text-[14px] text-slate-600">
                          No minimum balance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Button */}
                <div className="flex justify-center mt-16">
                  <div className="border border-blue-800 p-8 w-70 h-8 rounded-lg hover:scale-105 transition-all duration-400 mt-10 cursor-pointer flex items-center justify-center">
                    <p>Open an Individual Account</p>
                  </div>
                </div>
              </div>
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Individual;

// "use client";
// import { Tabs, Tab } from "@heroui/react";
// import { FaCircleCheck } from "react-icons/fa6";
// export const Individual = () => {
//   return (
//     <section className="py-16 px-4 md:px-10 lg:px-30">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
//         {/* Left Content */}
//         <div className="text-center lg:text-left gap-10 flex flex-col">
//           <h1 className="text-[40px] font-extrabold text-black leading-tight">
//             Individual Accounts
//           </h1>
//           <p className=" text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
//             For all types of account, we have the account that will suite your
//             needs. Ranging from individual savings, pockets and kiddies.
//             Flexibility is the core.
//           </p>
//           {/* Button */}
//           <div className="flex justify-center lg:justify-start">
//             <button className="bg-[#034EA2] w-30 h-14 ml-5 md:ml-0 sm:mr-40 rounded-[7px] text-white font-semibold text-[12px] lg:text-[16px] transform hover:scale-105 transition-all duration-100 hover:bg-[#034EA2] cursor-pointer">
//               Get Started
//             </button>
//           </div>
//         </div>
//         {/* Right Content */}
//         <div className="flex justify-center lg:justify-start lg:ml-40">
//           <img
//             src="/individual.svg"
//             alt=""
//             className="w-65 sm:w-[320px] md:w-95 lg:w-75 object-cover"
//           />
//         </div>

//         {/* Tabs */}
//         <div className="w-full px-4 lg:px-8 py-10">
//           <Tabs className="w-full" variant="secondary">
//             {/* TOP NAVIGATION */}
//             <Tabs.ListContainer>
//               <Tabs.List aria-label="Account Types">
//                 <Tabs.Tab id="savings">
//                   Savings
//                   <Tabs.Indicator />
//                 </Tabs.Tab>

//                 <Tabs.Tab id="current">
//                   Current
//                   <Tabs.Indicator />
//                 </Tabs.Tab>

//                 <Tabs.Tab id="pocket">
//                   Pocket
//                   <Tabs.Indicator />
//                 </Tabs.Tab>

//                 <Tabs.Tab id="kiddies">
//                   Kiddies
//                   <Tabs.Indicator />
//                 </Tabs.Tab>
//               </Tabs.List>
//             </Tabs.ListContainer>

//             {/* SAVINGS CONTENT */}
//             <Tabs.Panel id="savings" className="pt-10">
//               <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-sm">
//                 <h1 className="text-4xl font-bold text-slate-900">
//                   Savings Accounts
//                 </h1>

//                 <p className="mt-6 text-2xl text-slate-500 max-w-4xl leading-relaxed">
//                   That cash is not too little to save with no maintenance cost
//                   and zero balance. It gets better because you also make some
//                   money for yourself.
//                 </p>

//                 {/* TWO COLUMN SECTION */}
//                 <div className="grid md:grid-cols-2 gap-16 mt-16">
//                   {/* LEFT */}
//                   <div>
//                     <h2 className="text-blue-700 font-bold text-2xl mb-8">
//                       Account Requirements
//                     </h2>

//                     <div className="space-y-8">
//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           Passport photograph
//                         </p>
//                       </div>

//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           Bank Verification Number (BVN)
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* RIGHT */}
//                   <div>
//                     <h2 className="text-blue-700 font-bold text-2xl mb-8">
//                       Account Benefits
//                     </h2>

//                     <div className="space-y-8">
//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           No maintenance charge
//                         </p>
//                       </div>

//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           No minimum balance
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Tabs.Panel>

//             {/* CURRENT */}
//             <Tabs.Panel id="current">
//               <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-sm">
//                 <h1 className="text-4xl font-bold text-slate-900">
//                   Savings Accounts
//                 </h1>

//                 <p className="mt-6 text-2xl text-slate-500 max-w-4xl leading-relaxed">
//                   That cash is not too little to save with no maintenance cost
//                   and zero balance. It gets better because you also make some
//                   money for yourself.
//                 </p>

//                 {/* TWO COLUMN SECTION */}
//                 <div className="grid md:grid-cols-2 gap-16 mt-16">
//                   {/* LEFT */}
//                   <div>
//                     <h2 className="text-blue-700 font-bold text-2xl mb-8">
//                       Account Requirements
//                     </h2>

//                     <div className="space-y-8">
//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           Passport photograph
//                         </p>
//                       </div>

//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           Bank Verification Number (BVN)
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* RIGHT */}
//                   <div>
//                     <h2 className="text-blue-700 font-bold text-2xl mb-8">
//                       Account Benefits
//                     </h2>

//                     <div className="space-y-8">
//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           No maintenance charge
//                         </p>
//                       </div>

//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           No minimum balance
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Tabs.Panel>

//             {/* POCKET */}
//             <Tabs.Panel id="pocket">
//               <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-sm">
//                 <h1 className="text-4xl font-bold text-slate-900">
//                   Savings Accounts
//                 </h1>

//                 <p className="mt-6 text-2xl text-slate-500 max-w-4xl leading-relaxed">
//                   That cash is not too little to save with no maintenance cost
//                   and zero balance. It gets better because you also make some
//                   money for yourself.
//                 </p>

//                 {/* TWO COLUMN SECTION */}
//                 <div className="grid md:grid-cols-2 gap-16 mt-16">
//                   {/* LEFT */}
//                   <div>
//                     <h2 className="text-blue-700 font-bold text-2xl mb-8">
//                       Account Requirements
//                     </h2>

//                     <div className="space-y-8">
//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           Passport photograph
//                         </p>
//                       </div>

//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           Bank Verification Number (BVN)
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* RIGHT */}
//                   <div>
//                     <h2 className="text-blue-700 font-bold text-2xl mb-8">
//                       Account Benefits
//                     </h2>

//                     <div className="space-y-8">
//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           No maintenance charge
//                         </p>
//                       </div>

//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           No minimum balance
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Tabs.Panel>

//             {/* KIDDIES */}
//             <Tabs.Panel id="kiddies">
//               <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-sm">
//                 <h1 className="text-4xl font-bold text-slate-900">
//                   Kiddies Account
//                 </h1>

//                 <p className="mt-6 text-2xl text-slate-500 max-w-4xl leading-relaxed">
//                   A special account designed for children, offering a safe and
//                   easy way to save money with no maintenance fees or minimum
//                   balance requirements.
//                 </p>

//                 {/* TWO COLUMN SECTION */}
//                 <div className="grid md:grid-cols-2 gap-16 mt-16">
//                   {/* LEFT */}
//                   <div>
//                     <h2 className="text-blue-700 font-bold text-2xl mb-8">
//                       Account Requirements
//                     </h2>

//                     <div className="space-y-8">
//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           Parent's Passport photograph
//                         </p>
//                       </div>

//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           Child's Birth certificate
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* RIGHT */}
//                   <div>
//                     <h2 className="text-blue-700 font-bold text-2xl mb-8">
//                       Account Benefits
//                     </h2>

//                     <div className="space-y-8">
//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           No maintenance charge
//                         </p>
//                       </div>

//                       <div className="flex items-center gap-4">
//                         <FaCircleCheck className="text-blue-600" />
//                         <p className="text-xl text-slate-600">
//                           No minimum balance
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Tabs.Panel>
//           </Tabs>
//         </div>
//       </div>
//     </section>
//   );
// };
