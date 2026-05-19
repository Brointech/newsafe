"use client";

import { useState } from "react";
import { Tabs, Tab } from "@heroui/react";

const Terms = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-32">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Side: Terms & Conditions */}
          <div className="lg:col-span-2 mt-30 flex flex-col gap-4">
            <h1 className="text-[20px] lg:text-[30px] font-bold text-black">
              Terms and Conditions
            </h1>
            <p className="mt-20 text-[15px] lg:text-[20px] text-blue-800 font-bold">
              SAFE HAVEN MFB PERSONAL BANKING GENERAL TERMS AND CONDITIONS AND
              SERVICES
            </p>
            <div className="space-y-2">
              <h3 className="text-black text-[18px] font-semibold">
                INTRODUCTION
              </h3>
              <p className="text-[15px] leading-6 text-gray-600">
                These terms guide the general relationship between the Bank
                (“we”, “us”, “our”) and <br />
                the Customer (“you”, “your”, “yours”) and are binding
                immediately you open an account <br />
                with us.
              </p>

              <p className="text-[15px] leading-6 text-gray-600">
                Some other products and services may be offered by Safe Haven
                MFB as a part of the <br /> VB Service and each of them has its
                Terms and/or conditions and you are bound by <br />
                these specific Terms and conditions as well.
              </p>

              <p className="text-[15px] leading-6 text-gray-600">
                You are encouraged to read these Terms carefully and to pay
                attention to the clauses <br /> contained here.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-6">
              <h3 className="text-black text-[18px] font-semibold">
                1. YOUR ACCOUNT - OPENING, ACCESS, USAGE
              </h3>

              <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
                <p className="">
                  <span className="font-semibold text-black mr-3">1.1</span>
                  We have no obligation to open or maintain an already opened
                  account <br /> except you provide all required documents and
                  complete the KYC <br /> procedure as may be set out by the
                  Central Bank of Nigeria ('CBN') and <br /> other relevant
                  regulators from time to time.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">1.2</span>
                  We reserve the right to refuse to open or to close an account
                  if we <br />
                  discover that information supplied for the creation of the
                  account is false, <br /> incorrect or misleading.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">1.3</span>
                  You agree to immediately inform us of any change to the
                  information you <br />
                  have supplied to enable us update our records correctly.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">1.4</span>
                  You must comply with the minimum balance requirement if any
                  exists and <br /> any other conditions applicable to your
                  accounts including Savings and <br /> Current account.
                  Non-compliance shall be grounds for us to suspend or <br />
                  close your accounts.
                </p>
              </div>
            </div>
            {/* Section 2 */}
            <div className="space-y-6">
              <h3 className="text-black text-[18px] font-semibold">
                2. YOUR ACCOUNT - CONFIRMING IT IS YOU
              </h3>

              <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
                <p className="">
                  <span className="font-semibold text-black mr-3">2.1</span>
                  Each time you access your account or send instructions we
                  shall have to <br /> confirm that we are dealing with you.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">2.2</span>
                  If you are in our branch, we may request to see a valid means
                  of ID (e.g <br /> national ID card, Voter's card) and that
                  your signature matches that on <br />
                  our systems.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">2.3</span>
                  For other off-branch platforms comprising our Virtual Banking
                  Services, <br />
                  then your security details confirm that it is you. If
                  correctly entered, we <br /> assume that you are the one
                  issuing instructions.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">2.4</span>
                  You must comply with the minimum balance requirement if any
                  exists and <br /> any other conditions applicable to your
                  accounts including Savings and <br /> Current account.
                  Non-compliance shall be grounds for us to suspend or <br />
                  close your accounts.
                </p>
              </div>
            </div>
            {/* Section 3 */}
            <div className="space-y-6">
              <h3 className="text-black text-[18px] font-semibold">
                {" "}
                3. YOUR ACCOUNT - PROXIES
              </h3>

              <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
                <p className="">
                  <span className="font-semibold text-black mr-3">3.1</span>
                  It may happen that you are unable to use your account
                  yourself. In such <br /> cases, you can appoint a proxy to act
                  for you.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">3.2</span>
                  You are permitted to issue a Power of Attorney, or a Proxy
                  Mandate or <br />
                  any valid legal instrument required in the specific instance.
                  Once we <br />
                  have your instruction and the valid document, the appointed
                  proxy would <br />
                  be allowed to operate your account on your behalf.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">3.3</span>
                  We will revoke any such appointment of a proxy if:
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">3.4</span>
                  You must immediately contact us if your security details are
                  compromised or you feel they may be compromised. <br />
                  a. You revoke the authority of the proxy and communicate this
                  fact to us. <br />
                  b. We believe it is in your best interest to restrict the
                  proxy. <br />
                  c. The proxy breaches the terms or the law
                </p>
              </div>
            </div>
            {/* Section 4 */}
            <div className="space-y-6">
              <h3 className="text-black text-[18px] font-semibold">
                4. YOUR ACCOUNT - ACCOUNT CATEGORIES, INTEREST, ACCOUNT-SPECIFIC
                TERMS
              </h3>

              <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
                <p className="">
                  <span className="font-semibold text-black mr-3">4.1</span>
                  We offer two categories of accounts for personal banking:
                  Savings Account Current Account
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">4.2</span>
                  The requirements for opening either category of account are
                  always accessible from our website.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">4.3</span>
                  Conditions, features and interest rates shall also be as
                  contained on our website and as updated from time to time.
                </p>
              </div>
            </div>
            {/* Section 5 */}
            <div className="space-y-6">
              <h3 className="text-black text-[18px] font-semibold">
                5. YOUR ACCOUNT - RESTRICTING ACCESS
              </h3>

              <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
                <p className="">
                  <span className="font-semibold text-black mr-3">5.1</span>
                  We may at any time suspend your access to any or all parts of
                  your accounts or any or all services available to you for any
                  reason including but not limited to the following: Suspicion
                  of fraud or crime Compliance with the law Suspicion that the
                  security of your account has been compromised We are of the
                  opinion that you may be unable to meet your obligations to
                  repay a loan you owe to us.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">.2</span>
                  In any case, we shall inform you prior to or immediately after
                  restricting your account and provide you with the reason we
                  took the decision.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">4.3</span>
                  Where your account has not been used for a period of time we
                  may restrict your account but only to protect your account and
                  always with notice. Restriction for non-usage would happen if
                  your account is inactive: 12-months if a current account 2
                  years if a savings accounts
                </p>
              </div>
            </div>
            {/* Section 4 */}
            <div className="space-y-6">
              <h3 className="text-black text-[18px] font-semibold">
                4. YOUR ACCOUNT - ACCOUNT CATEGORIES, INTEREST, ACCOUNT-SPECIFIC
                TERMS
              </h3>

              <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
                <p className="">
                  <span className="font-semibold text-black mr-3">4.1</span>
                  We offer two categories of accounts for personal banking:{" "}
                  <br />
                  Savings Account Current Account
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">4.2</span>
                  The requirements for opening either category of account are
                  always <br /> accessible from our website.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">4.3</span>
                  Conditions, features and interest rates shall also be as
                  contained on our <br />
                  website and as updated from time to time.
                </p>
              </div>
            </div>
            {/* Section 5 */}
            <div className="space-y-6">
              <h3 className="text-black text-[18px] font-semibold">
                5. YOUR ACCOUNT - RESTRICTING ACCESS
              </h3>

              <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
                <p className="">
                  <span className="font-semibold text-black mr-3">5.1</span>
                  We may at any time suspend your access to any or all parts of
                  your accounts <br />
                  or any or all services available to you for any reason
                  including but not limited to the following: Suspicion of fraud
                  or crime Compliance with the <br />
                  law Suspicion that the security of your account has been
                  compromised We are of the opinion that you may be unable to
                  meet your obligations to <br /> repay a loan you owe to us.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">5.2</span>
                  In any case, we shall inform you prior to or immediately after
                  restricting your <br />
                  account and provide you with the reason we took the decision.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">5.3</span>
                  Where your account has not been used for a period of time we
                  may restrict <br /> your account but only to protect your
                  account and always with notice. <br /> Restriction for
                  non-usage would happen if your account is inactive: <br />
                  12-months if a current account 2 years if a savings account
                </p>
              </div>
            </div>
            {/* Section 6 */}
            <div className="space-y-6">
              <h3 className="text-black text-[18px] font-semibold">
                6. ACCOUNT INFORMATION - UPDATES, STATEMENTS AND TRANSACTION
                INFORMATION
              </h3>

              <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
                <p className="">
                  <span className="font-semibold text-black mr-3">6.1</span>
                  You have the right to know what is happening with your account
                  and we <br /> would always keep you updated. You shall always
                  receive updates on <br /> transactions by text message and by
                  email by default. Should you choose to <br /> opt out of text
                  message updates, then you must sign the SMS Deactivation
                  <br /> Indemnity Form.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">6.2</span>
                  We shall also send you a monthly Statement of Account at the
                  end of every month via email. You shall let us know if you
                  notice a discrepancy in the statement and the actual
                  transactions that occurred in the month, or if there is any
                  unusual or incorrect payments on your account.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">6.3</span>
                  You can also generate a Statement of Account for yourself
                  through our online and mobile applications. If you ask for
                  your statement on paper, we shall make provisions for you,
                  however, this might come with a service charge.
                </p>
              </div>
            </div>
            {/* Section 7 */}
            <div className="space-y-6">
              <h3 className="text-black text-[18px] font-semibold">
                7. ACCOUNT INFORMATION - PRIVACY
              </h3>

              <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
                <p className="">
                  <span className="font-semibold text-black mr-3">7.1</span>
                  We may request information relating to your transactions and
                  your account <br /> with us to help us meet out requirements
                  under the Anti-Money <br />
                  Laundering/Combating the Financing of Terrorism Regulations.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">7.2</span>
                  If we suspect fraudulent or criminal activity, and you refuse
                  to provide <br /> information, we may try to get it from
                  another source but within the limits of <br /> the law. We may
                  also suspend your account if we believe you are withholding
                  <br />
                  information.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">7.3</span>
                  We will keep your information with us in line with our privacy
                  policy which can <br />
                  be accessed here
                </p>
              </div>
            </div>
            {/* Section 7 */}
            <div className="space-y-6">
              <h3 className="text-black text-[18px] font-semibold">
                8. PAYMENTS - INTO ACCOUNT
              </h3>

              <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
                <p className="">
                  <span className="font-semibold text-black mr-3">8.1</span>
                  All payments must be denominated in Naira.
                </p>

                <p>
                  <span className="font-semibold text-black mr-3">8.2</span>
                  All monies paid into your account shall <br /> become useable
                  for you and shall begin to accrue interest: <br />
                  Immediately, if the payment is made by cash at a branch <br />
                  as soon as we receive it, if the payment is made via other
                  means
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Categories */}

          <div className="reletive lg:mt-30">
            {/* Sticky Bar */}
            <div className="sticky right-10 top-24">
              <div className="bg-white rounded-5 shadow-sm p-8 h-115 w-77">
                <div className="flex items-center justify-between">
                  <h2 className="text-[22px] font-bold">Categories</h2>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mt-10 space-y-8">
                  {/* ITEM */}
                  <div className="flex items-start gap-4 cursor-pointer">
                    <div className="w-2 h-2x rounded-full bg-[#0047ab] p-1.5 mt-"></div>

                    <p className="text-[16px] leading-6 font-bold text-blue-800">
                      Safe Haven MFB Personal <br />
                      Banking General Terms and <br />
                      Conditions and Services
                    </p>
                  </div>

                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
