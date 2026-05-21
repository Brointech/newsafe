"use client";

import { useState } from "react";

// ── Content for each category ──────────────────────────────────────────────

const introductionContent = (
  <div className="flex flex-col gap-4">
    <p className="mt-10 text-[15px] lg:text-[20px] text-blue-800 font-bold">
      SAFE HAVEN MICROFINANCE BANK LIMITED — PRIVACY POLICY
    </p>

    <div className="space-y-2">
      <h3 className="text-black text-[18px] font-semibold">INTRODUCTION</h3>
      <p className="text-[15px] leading-6 text-gray-600">
        Safe Haven Microfinance Bank Limited ("we", "our", or "the Bank") is a
        licensed financial institution regulated by the Central Bank of Nigeria
        (CBN), providing a wide range of banking services to diverse customers,
        including:
      </p>
      <ul className="list-disc ml-6 space-y-1 text-[15px] leading-6 text-gray-600">
        <li>Individuals</li>
        <li>Small and Medium Enterprises (SMEs)</li>
        <li>Large Corporates and Multinationals</li>
        <li>
          Governmental Agencies/Ministries, Departments, and Agencies (MDAs)
        </li>
        <li>Non-Governmental Organizations (NGOs) and Institutions</li>
      </ul>
      <p className="text-[15px] leading-6 text-gray-600 font-semibold">
        Our banking services are accessible through multiple channels,
        including:
      </p>
      <ul className="list-disc ml-6 space-y-1 text-[15px] leading-6 text-gray-600">
        <li>Branch offices across Nigeria</li>
        <li>Internet banking platform</li>
        <li>Mobile banking application</li>
        <li>USSD code</li>
        <li>Agent banking network</li>
      </ul>
      <p className="text-[15px] leading-6 text-gray-600">
        This Privacy Policy explains how we collect, use, store, share, and
        protect your personal data when you use our services. It also explains
        your rights regarding your personal data and how you can exercise those
        rights.
      </p>
      <p className="text-[15px] leading-6 text-gray-600">
        By using any of our services, you acknowledge that you have read and
        understood this Privacy Policy. We encourage you to read it carefully.
      </p>
    </div>
  </div>
);

const commitmentContent = (
  <div className="flex flex-col gap-4">
    <p className="mt-10 text-[15px] lg:text-[20px] text-blue-800 font-bold">
      OUR COMMITMENT TO DATA PROCESSING PRINCIPLES
    </p>

    <div className="space-y-2">
      <h3 className="text-black text-[18px] font-semibold">
        OUR COMMITMENT TO DATA PROCESSING PRINCIPLES
      </h3>
      <p className="text-[15px] leading-6 text-gray-600">
        We are committed to processing your personal data in accordance with
        applicable data protection laws, including the Nigeria Data Protection
        Act (NDPA) 2023 and the Nigeria Data Protection Regulation (NDPR). Our
        data processing is guided by the following principles:
      </p>
    </div>

    <div className="space-y-6">
      <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
        <p>
          <span className="font-semibold text-black mr-3">1.</span>
          <span className="font-semibold text-black">
            Lawfulness, Fairness, and Transparency —
          </span>{" "}
          We process your personal data only where we have a lawful basis to do
          so, and we are transparent about how we use your data.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">2.</span>
          <span className="font-semibold text-black">
            Purpose Limitation —
          </span>{" "}
          We collect your personal data for specified, explicit, and legitimate
          purposes and do not process it in a manner incompatible with those
          purposes.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">3.</span>
          <span className="font-semibold text-black">
            Data Minimisation —
          </span>{" "}
          We only collect personal data that is adequate, relevant, and limited
          to what is necessary in relation to the purposes for which it is
          processed.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">4.</span>
          <span className="font-semibold text-black">Accuracy —</span> We take
          reasonable steps to ensure that personal data is accurate and, where
          necessary, kept up to date. We encourage you to notify us of any
          changes to your information.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">5.</span>
          <span className="font-semibold text-black">
            Storage Limitation —
          </span>{" "}
          We retain personal data only for as long as is necessary for the
          purposes for which it was collected, or as required by applicable law.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">6.</span>
          <span className="font-semibold text-black">
            Integrity and Confidentiality —
          </span>{" "}
          We process personal data in a manner that ensures appropriate
          security, including protection against unauthorised or unlawful
          processing and against accidental loss, destruction, or damage, using
          appropriate technical and organisational measures.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">7.</span>
          <span className="font-semibold text-black">Accountability —</span> We
          take responsibility for complying with these principles and can
          demonstrate our compliance to relevant regulatory authorities.
        </p>
      </div>
    </div>
  </div>
);

const consentContent = (
  <div className="flex flex-col gap-4">
    <p className="mt-10 text-[15px] lg:text-[20px] text-blue-800 font-bold">
      CONSENT OF DATA SUBJECT
    </p>

    <div className="space-y-2">
      <h3 className="text-black text-[18px] font-semibold">
        CONSENT OF DATA SUBJECT
      </h3>
      <p className="text-[15px] leading-6 text-gray-600">
        By using our services, you consent to the collection, processing, and
        storage of your personal data as described in this Privacy Policy.
      </p>
    </div>

    <div className="space-y-6">
      <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
        <p>
          <span className="font-semibold text-black mr-3">1.1</span>
          Where we rely on your consent as the lawful basis for processing your
          personal data, you have the right to withdraw that consent at any
          time. Withdrawal of consent does not affect the lawfulness of
          processing that was carried out before the withdrawal.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">1.2</span>
          To withdraw your consent, you may contact us through any of our
          official channels. Please note that withdrawing consent may affect
          your ability to access or use certain services we provide.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">1.3</span>
          In some cases, we may process your personal data without your consent
          where permitted or required by law — for example, to comply with legal
          or regulatory obligations, to prevent fraud, or to protect the vital
          interests of any person.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">1.4</span>
          Where we collect personal data from minors or individuals who may lack
          legal capacity, we will seek consent from a parent, guardian, or other
          authorised representative as required by applicable law.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">1.5</span>
          We will not make the provision of a service conditional on your
          consent to processing that is not necessary for the performance of
          that service, except where required by law.
        </p>
      </div>
    </div>
  </div>
);

const scopeContent = (
  <div className="flex flex-col gap-4 pb-20">
    <p className="mt-10 text-[15px] lg:text-[20px] text-blue-800 font-bold">
      OUR SCOPE OF DATA PROCESSING
    </p>

    <div className="space-y-2">
      <h3 className="text-black text-[18px] font-semibold">
        OUR SCOPE OF DATA PROCESSING
      </h3>
      <p className="text-[15px] leading-6 text-gray-600">
        We collect and process personal data across the full lifecycle of our
        customer relationship, including during account opening, transaction
        processing, customer support interactions, and regulatory reporting.
      </p>
    </div>

    <div className="space-y-6">
      <h3 className="text-black text-[18px] font-semibold">
        Categories of Personal Data We Collect
      </h3>
      <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
        <p>
          <span className="font-semibold text-black mr-3">1.</span>
          <span className="font-semibold text-black">
            Identification Data —
          </span>{" "}
          Full name, date of birth, gender, nationality, government-issued ID
          numbers (e.g. NIN, BVN, passport number, driver's licence).
        </p>
        <p>
          <span className="font-semibold text-black mr-3">2.</span>
          <span className="font-semibold text-black">
            Contact Information —
          </span>{" "}
          Residential address, email address, phone number, and next-of-kin
          details.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">3.</span>
          <span className="font-semibold text-black">
            Financial Information —
          </span>{" "}
          Bank account details, transaction history, credit history, income
          information, and other financial records necessary to provide banking
          services.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">4.</span>
          <span className="font-semibold text-black">
            Transaction Data —
          </span>{" "}
          Details of payments made to and from your account, including amounts,
          dates, and counterparty information.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">5.</span>
          <span className="font-semibold text-black">
            Device and Usage Data —
          </span>{" "}
          IP address, browser type, operating system, device identifiers, and
          information about how you use our digital platforms.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">6.</span>
          <span className="font-semibold text-black">
            Communications Data —
          </span>{" "}
          Records of your interactions with us, including emails, chat messages,
          call recordings, and correspondence.
        </p>
      </div>
    </div>

    <div className="space-y-6">
      <h3 className="text-black text-[18px] font-semibold">
        How We Use Your Personal Data
      </h3>
      <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
        <p>
          <span className="font-semibold text-black mr-3">2.1</span>
          To open and manage your account and provide the banking services you
          have requested.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">2.2</span>
          To verify your identity and carry out Know Your Customer (KYC) checks
          as required by the CBN and other regulators.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">2.3</span>
          To process transactions and send you notifications about your account
          activity.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">2.4</span>
          To comply with legal and regulatory obligations, including Anti-Money
          Laundering (AML) and Counter-Terrorism Financing (CTF) requirements.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">2.5</span>
          To detect, investigate, and prevent fraud, financial crime, and other
          unlawful activities.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">2.6</span>
          To improve our products, services, and customer experience through
          analysis and research.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">2.7</span>
          To send you marketing communications about our products and services,
          where you have consented to receive such communications.
        </p>
      </div>
    </div>

    <div className="space-y-6">
      <h3 className="text-black text-[18px] font-semibold">Data Sharing</h3>
      <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
        <p>
          <span className="font-semibold text-black mr-3">3.1</span>
          We do not sell your personal data to third parties under any
          circumstances.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">3.2</span>
          We may share your personal data with regulatory authorities, law
          enforcement agencies, and other government bodies where required by
          law.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">3.3</span>
          We may share your data with trusted third-party service providers who
          assist us in operating our business, subject to strict data processing
          agreements that require them to protect your data.
        </p>
        <p>
          <span className="font-semibold text-black mr-3">3.4</span>
          Any transfer of your personal data outside Nigeria will be done in
          accordance with applicable data protection laws and with appropriate
          safeguards in place.
        </p>
      </div>
    </div>
  </div>
);

// ── Categories list ────────────────────────────────────────────────────────

const categories = [
  {
    id: "introduction",
    label: "Introduction",
    content: introductionContent,
  },
  {
    id: "commitment",
    label: "Our Commitment to Data Processing Principles",
    content: commitmentContent,
  },
  {
    id: "consent",
    label: "Consent of Data Subject",
    content: consentContent,
  },
  {
    id: "scope",
    label: "Our Scope of Data Processing",
    content: scopeContent,
  },
];

// ── Component ──────────────────────────────────────────────────────────────

const PrivacyPolicy = () => {
  const [activeId, setActiveId] = useState("introduction");
  const [isOpen, setIsOpen] = useState(true);

  const activeCategory = categories.find((c) => c.id === activeId);

  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-32">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* ── Left: Dynamic Content ── */}
          <div className="flex-1 mt-30 flex flex-col gap-4">
            <h1 className="text-[20px] lg:text-[30px] font-bold text-black">
              Privacy Policy
            </h1>
            {activeCategory?.content}
          </div>

          {/* ── Right: Sticky Sidebar ── */}
          <div className="lg:w-72 shrink-0 mt-30 sticky top-24 self-start">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {/* Header + collapse toggle */}
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen((v) => !v)}
              >
                <h2 className="text-[22px] font-bold">Content</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    isOpen ? "rotate-0" : "rotate-180"
                  }`}
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
              </div>

              {/* Category Links */}
              {isOpen && (
                <nav className="mt-6 flex flex-col gap-1">
                  {categories.map((cat, i) => {
                    const isActive = activeId === cat.id;
                    return (
                      <div key={cat.id}>
                        <button
                          onClick={() => setActiveId(cat.id)}
                          className={`w-full text-left flex items-start gap-3 py-2 px-1 rounded-lg transition-colors duration-150 ${
                            isActive
                              ? "text-blue-800"
                              : "text-gray-500 hover:text-blue-700"
                          }`}
                        >
                          {/* Blue dot — visible only when active */}
                          <span
                            className={`mt-1.5 w-3 h-3 rounded-full shrink-0 transition-all duration-150 ${
                              isActive ? "bg-blue-800" : "opacity-0"
                            }`}
                          />
                          <span
                            className={`text-[13px] leading-5 ${
                              isActive ? "font-bold" : "font-normal"
                            }`}
                          >
                            {cat.label}
                          </span>
                        </button>

                        {/* Divider between items */}
                        {i < categories.length - 1 && (
                          <hr className="my-1 border-gray-100" />
                        )}
                      </div>
                    );
                  })}
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

// "use client";

// import { useState, useEffect } from "react";

// const sections = [
//   {
//     id: "section-1",
//     label:
//       "Safe haven MFB Personal Banking General Terms and Conditions and Services",
//   },
//   {
//     id: "section-2",
//     label:
//       "Safe Haven MFB Corporate Banking General  Terms and Conditions and Services",
//   },
//   {
//     id: "section-3",
//     label: "Safe Haven MFB Virtual Banking General Terms and Services",
//   },
//   {
//     id: "section-4",
//     label: "Customer API Usage Terms of Use",
//   },
// ];

// const Privacy = () => {
//   const [activeId, setActiveId] = useState("introduction");
//   const [isOpen, setIsOpen] = useState(true);

//   // Highlight active section on scroll
//   useEffect(() => {
//     const observers: IntersectionObserver[] = [];

//     // Small delay so the default activeId shows first on load
//     const timer = setTimeout(() => {
//       sections.forEach(({ id }) => {
//         const el = document.getElementById(id);
//         if (!el) return;

//         const observer = new IntersectionObserver(
//           ([entry]) => {
//             if (entry.isIntersecting) setActiveId(id);
//           },
//           { rootMargin: "0px 0px -60% 0px", threshold: 0 },
//         );

//         observer.observe(el);
//         observers.push(observer);
//       });
//     }, 50); // 50ms delay

//     return () => {
//       clearTimeout(timer);
//       observers.forEach((o) => o.disconnect());
//     };
//   }, []);

//   const scrollTo = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <section className="bg-gray-100 min-h-screen">
//       <div className="max-w-7xl mx-auto px-6 lg:px-32">
//         {/* Main Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start relative">
//           {/* ── Left Side: Terms & Conditions ── */}
//           <div className="lg:col-span-2 mt-30 flex flex-col gap-4">
//             <h1 className="text-[20px] lg:text-[30px] font-bold text-black">
//               Privacy Policy
//             </h1>

//             {/* Introduction */}
//             <div className="space-y-2 scroll-mt-28">
//               <h3 className="mt-13 text-black text-[18px] font-semibold">
//                 INTRODUCTION
//               </h3>
//               <p className="text-[15px] leading-6 text-gray-600">
//                 Safe Haven Microfinance Bank Limited ("we", "our", or "the
//                 Bank") is a licensed financial institution regulated by the
//                 Central Bank of Nigeria (CBN), providing a wide range of banking
//                 services to diverse customers, including:
//               </p>
//               <div className="text-[15px] ml-10 list-item leading-6 text-gray-600">
//                 <li> Individuals</li>
//                 <li> Small and Medium Enterprises (SMEs)</li>
//                 <li> Large Corporates and Multinationals</li>
//                 <li>
//                   {" "}
//                   Governmental Agencies/Ministries, Departments, and Agencies
//                   (MDAs)
//                 </li>
//                 <li> Non-Governmental Organizations (NGOs) and Institutions</li>
//               </div>
//               <p className="text-[15px] leading-6 text-gray-600">
//                 You are encouraged to read these Terms carefully and to pay
//                 attention to the clauses contained here.
//               </p>
//             </div>

//             {/* Section 1 */}
//             <div id="section-1" className="space-y-6 scroll-mt-28">
//               <h3 className="text-black text-[18px] font-semibold">
//                 1. YOUR ACCOUNT - OPENING, ACCESS, USAGE
//               </h3>
//               <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
//                 <p>
//                   <span className="font-semibold text-black mr-3">1.1</span>
//                   We have no obligation to open or maintain an already opened
//                   account except you provide all required documents and complete
//                   the KYC procedure as may be set out by the Central Bank of
//                   Nigeria ('CBN') and other relevant regulators from time to
//                   time.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">1.2</span>
//                   We reserve the right to refuse to open or to close an account
//                   if we discover that information supplied for the creation of
//                   the account is false, incorrect or misleading.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">1.3</span>
//                   You agree to immediately inform us of any change to the
//                   information you have supplied to enable us update our records
//                   correctly.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">1.4</span>
//                   You must comply with the minimum balance requirement if any
//                   exists and any other conditions applicable to your accounts
//                   including Savings and Current account. Non-compliance shall be
//                   grounds for us to suspend or close your accounts.
//                 </p>
//               </div>
//             </div>

//             {/* Section 2 */}
//             <div className="space-y-6 scroll-mt-28">
//               <h3 className="text-black text-[18px] font-semibold">
//                 2. YOUR ACCOUNT - CONFIRMING IT IS YOU
//               </h3>
//               <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
//                 <p>
//                   <span className="font-semibold text-black mr-3">2.1</span>
//                   Each time you access your account or send instructions we
//                   shall have to confirm that we are dealing with you.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">2.2</span>
//                   If you are in our branch, we may request to see a valid means
//                   of ID (e.g national ID card, Voter's card) and that your
//                   signature matches that on our systems.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">2.3</span>
//                   For other off-branch platforms comprising our Virtual Banking
//                   Services, then your security details confirm that it is you.
//                   If correctly entered, we assume that you are the one issuing
//                   instructions.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">2.4</span>
//                   You must comply with the minimum balance requirement if any
//                   exists and any other conditions applicable to your accounts
//                   including Savings and Current account. Non-compliance shall be
//                   grounds for us to suspend or close your accounts.
//                 </p>
//               </div>
//             </div>

//             {/* Section 3 */}
//             <div className="space-y-6 scroll-mt-28">
//               <h3 className="text-black text-[18px] font-semibold">
//                 3. YOUR ACCOUNT - PROXIES
//               </h3>
//               <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
//                 <p>
//                   <span className="font-semibold text-black mr-3">3.1</span>
//                   It may happen that you are unable to use your account
//                   yourself. In such cases, you can appoint a proxy to act for
//                   you.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">3.2</span>
//                   You are permitted to issue a Power of Attorney, or a Proxy
//                   Mandate or any valid legal instrument required in the specific
//                   instance. Once we have your instruction and the valid
//                   document, the appointed proxy would be allowed to operate your
//                   account on your behalf.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">3.3</span>
//                   We will revoke any such appointment of a proxy if:
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">3.4</span>
//                   You must immediately contact us if your security details are
//                   compromised or you feel they may be compromised.
//                   <br />
//                   a. You revoke the authority of the proxy and communicate this
//                   fact to us.
//                   <br />
//                   b. We believe it is in your best interest to restrict the
//                   proxy.
//                   <br />
//                   c. The proxy breaches the terms or the law
//                 </p>
//               </div>
//             </div>

//             {/* Section 4 */}
//             <div className="space-y-6 scroll-mt-28">
//               <h3 className="text-black text-[18px] font-semibold">
//                 4. YOUR ACCOUNT - ACCOUNT CATEGORIES, INTEREST, ACCOUNT-SPECIFIC
//                 TERMS
//               </h3>
//               <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
//                 <p>
//                   <span className="font-semibold text-black mr-3">4.1</span>
//                   We offer two categories of accounts for personal banking:
//                   Savings Account Current Account
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">4.2</span>
//                   The requirements for opening either category of account are
//                   always accessible from our website.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">4.3</span>
//                   Conditions, features and interest rates shall also be as
//                   contained on our website and as updated from time to time.
//                 </p>
//               </div>
//             </div>

//             {/* Section 5 */}
//             <div className="space-y-6 scroll-mt-28">
//               <h3 className="text-black text-[18px] font-semibold">
//                 5. YOUR ACCOUNT - RESTRICTING ACCESS
//               </h3>
//               <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
//                 <p>
//                   <span className="font-semibold text-black mr-3">5.1</span>
//                   We may at any time suspend your access to any or all parts of
//                   your accounts or any or all services available to you for any
//                   reason including but not limited to the following: Suspicion
//                   of fraud or crime Compliance with the law Suspicion that the
//                   security of your account has been compromised We are of the
//                   opinion that you may be unable to meet your obligations to
//                   repay a loan you owe to us.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">5.2</span>
//                   In any case, we shall inform you prior to or immediately after
//                   restricting your account and provide you with the reason we
//                   took the decision.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">5.3</span>
//                   Where your account has not been used for a period of time we
//                   may restrict your account but only to protect your account and
//                   always with notice. Restriction for non-usage would happen if
//                   your account is inactive: 12-months if a current account 2
//                   years if a savings account
//                 </p>
//               </div>
//             </div>

//             {/* Section 6 */}
//             <div className="space-y-6 scroll-mt-28">
//               <h3 className="text-black text-[18px] font-semibold">
//                 6. ACCOUNT INFORMATION - UPDATES, STATEMENTS AND TRANSACTION
//                 INFORMATION
//               </h3>
//               <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
//                 <p>
//                   <span className="font-semibold text-black mr-3">6.1</span>
//                   You have the right to know what is happening with your account
//                   and we would always keep you updated. You shall always receive
//                   updates on transactions by text message and by email by
//                   default. Should you choose to opt out of text message updates,
//                   then you must sign the SMS Deactivation Indemnity Form.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">6.2</span>
//                   We shall also send you a monthly Statement of Account at the
//                   end of every month via email. You shall let us know if you
//                   notice a discrepancy in the statement and the actual
//                   transactions that occurred in the month, or if there is any
//                   unusual or incorrect payments on your account.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">6.3</span>
//                   You can also generate a Statement of Account for yourself
//                   through our online and mobile applications. If you ask for
//                   your statement on paper, we shall make provisions for you,
//                   however, this might come with a service charge.
//                 </p>
//               </div>
//             </div>

//             {/* Section 7 */}
//             <div className="space-y-6 scroll-mt-28">
//               <h3 className="text-black text-[18px] font-semibold">
//                 7. ACCOUNT INFORMATION - PRIVACY
//               </h3>
//               <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
//                 <p>
//                   <span className="font-semibold text-black mr-3">7.1</span>
//                   We may request information relating to your transactions and
//                   your account with us to help us meet out requirements under
//                   the Anti-Money Laundering/Combating the Financing of Terrorism
//                   Regulations.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">7.2</span>
//                   If we suspect fraudulent or criminal activity, and you refuse
//                   to provide information, we may try to get it from another
//                   source but within the limits of the law. We may also suspend
//                   your account if we believe you are withholding information.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">7.3</span>
//                   We will keep your information with us in line with our privacy
//                   policy which can be accessed here.
//                 </p>
//               </div>
//             </div>

//             {/* Section 8 */}
//             <div className="space-y-6 scroll-mt-28 pb-20">
//               <h3 className="text-black text-[18px] font-semibold">
//                 8. PAYMENTS - INTO ACCOUNT
//               </h3>
//               <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
//                 <p>
//                   <span className="font-semibold text-black mr-3">8.1</span>
//                   All payments must be denominated in Naira.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-black mr-3">8.2</span>
//                   All monies paid into your account shall become useable for you
//                   and shall begin to accrue interest: Immediately, if the
//                   payment is made by cash at a branch as soon as we receive it,
//                   if the payment is made via other means.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* ── Right Side: Sticky TOC Sidebar ── */}
//           <div className="lg:mt-30 shrink-0 sticky top-34 self-start">
//             <div className="">
//               <div className="bg-white rounded-xl shadow-sm p-6 w-full ">
//                 {/* Header + collapse toggle */}
//                 <div
//                   className="flex items-center justify-between cursor-pointer"
//                   onClick={() => setIsOpen((v) => !v)}
//                 >
//                   <h2 className="text-[22px] font-bold">Categories</h2>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
//                       isOpen ? "rotate-0" : "rotate-180"
//                     }`}
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 15l7-7 7 7"
//                     />
//                   </svg>
//                 </div>

//                 {/* TOC Links */}
//                 {isOpen && (
//                   <nav className="mt-6 flex flex-col gap-1">
//                     {sections.map(({ id, label }, i) => {
//                       const isActive = activeId === id;
//                       return (
//                         <div key={id}>
//                           <button
//                             onClick={() => scrollTo(id)}
//                             className={`w-full text-left flex items-start gap-3 py-2 px-1 rounded-lg transition-colors duration-150 group ${
//                               isActive
//                                 ? "text-blue-800"
//                                 : "text-gray-500 hover:text-blue-700"
//                             }`}
//                           >
//                             {/* Blue dot — only visible when active */}
//                             <span
//                               className={`mt-1.5 w-3 h-3 rounded-full shrink-0 transition-all duration-150 ${
//                                 isActive
//                                   ? "bg-blue-800 opacity-100"
//                                   : "opacity-0"
//                               }`}
//                             />
//                             <span
//                               className={`text-[13px] uppercase tracking-wide leading-5 ${
//                                 isActive ? "font-bold" : "font-normal"
//                               }`}
//                             >
//                               {label}
//                             </span>
//                           </button>

//                           {/* Divider after first item */}
//                           {i === 0 && <hr className="my-1 border-gray-100" />}
//                         </div>
//                       );
//                     })}
//                   </nav>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* 2nd Category */}
//           <div className="lg:col-span-2 mt-30 flex min-w-0 flex-col gap-4">
//             <p className="mt-20 text-[15px] lg:text-[20px] text-blue-800 font-bold">
//               SAFE HAVEN MFB CORPORATE BANKING GENERAL TERMS AND CONDITIONS AND
//               SERVICES
//             </p>

//             {/* Introduction */}
//             <div className="space-y-2 scroll-mt-28">
//               <h3 className="text-black text-[18px] font-semibold">
//                 INTRODUCTION
//               </h3>
//               <p className="text-[15px] leading-6 text-gray-600">
//                 These terms guide the general relationship between the Bank
//                 ("we", "us", "our") and the Customer ("you", "your", "yours")
//                 and are binding immediately you open an account with us.
//               </p>
//               <p className="text-[15px] leading-6 text-gray-600">
//                 Some other products and services may be offered by Safe Haven
//                 MFB as a part of the <br /> Virtual Banking Service and each of
//                 them has its Terms and/or conditions and you are bound <br /> by
//                 these specific Terms and conditions as well.
//               </p>
//               <p className="text-[15px] leading-6 text-gray-600">
//                 You are encouraged to read these Terms carefully and to pay
//                 attention to the clauses contained here.
//               </p>
//             </div>
//           </div>

//           {/* Section 1 */}
//           <div id="section-1" className="space-y-6 scroll-mt-28">
//             <h3 className="text-black text-[18px] font-semibold">
//               1. YOUR ACCOUNT - OPENING, ACCESS, USAGE
//             </h3>
//             <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
//               <p>
//                 <span className="font-semibold text-black mr-3">1.1</span>
//                 We have no obligation to open or maintain an already opened
//                 account except you provide all required documents and complete
//                 the KYC procedure as may be set out by the Central Bank of
//                 Nigeria ('CBN') and other relevant regulators from time to time.
//               </p>
//               <p>
//                 <span className="font-semibold text-black mr-3">1.2</span>
//                 We reserve the right to refuse to open or to close an account if
//                 we discover that information supplied for the creation of the
//                 account is false, incorrect or misleading.
//               </p>
//               <p>
//                 <span className="font-semibold text-black mr-3">1.3</span>
//                 You agree to immediately inform us of any change to the
//                 information you have supplied to enable us update our records
//                 correctly.
//               </p>
//               <p>
//                 <span className="font-semibold text-black mr-3">1.4</span>
//                 You must comply with the minimum balance requirement if any
//                 exists and any other conditions applicable to your accounts
//                 including Savings and Current account. Non-compliance shall be
//                 grounds for us to suspend or close your accounts.
//               </p>
//             </div>
//           </div>

//           {/* Section 2 */}
//           <div className="space-y-6 scroll-mt-28">
//             <h3 className="text-black text-[18px] font-semibold">
//               2. YOUR ACCOUNT - CONFIRMING IT IS YOU
//             </h3>
//             <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
//               <p>
//                 <span className="font-semibold text-black mr-3">2.1</span>
//                 Each time you access your account or send instructions we shall
//                 have to confirm that we are dealing with you.
//               </p>
//               <p>
//                 <span className="font-semibold text-black mr-3">2.2</span>
//                 If you are in our branch, we may request to see a valid means of
//                 ID (e.g national ID card, Voter's card) and that your signature
//                 matches that on our systems.
//               </p>
//               <p>
//                 <span className="font-semibold text-black mr-3">2.3</span>
//                 For other off-branch platforms comprising our Virtual Banking
//                 Services, then your security details confirm that it is you. If
//                 correctly entered, we assume that you are the one issuing
//                 instructions.
//               </p>
//               <p>
//                 <span className="font-semibold text-black mr-3">2.4</span>
//                 You must comply with the minimum balance requirement if any
//                 exists and any other conditions applicable to your accounts
//                 including Savings and Current account. Non-compliance shall be
//                 grounds for us to suspend or close your accounts.
//               </p>
//             </div>
//           </div>

//           {/* Section 3 */}
//           <div className="space-y-6 scroll-mt-28">
//             <h3 className="text-black text-[18px] font-semibold">
//               3. YOUR ACCOUNT - ACCOUNT CATEGORIES, INTEREST, ACCOUNT-SPECIFIC
//               TERMS
//             </h3>
//             <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
//               <p>
//                 <span className="font-semibold text-black mr-3">3.1</span>
//                 We offer two categories of accounts for personal banking: <br />
//                 Savings Account <br /> Current Account
//               </p>
//               <p>
//                 <span className="font-semibold text-black mr-3">3.2</span>
//                 The requirements for opening either category of account are
//                 always <br /> accessible from our website.
//               </p>
//               <p>
//                 <span className="font-semibold text-black mr-3">3.3</span>
//                 Conditions, features and interest rates shall also be as
//                 contained on our <br /> website and as updated from time to
//                 time.
//               </p>
//             </div>
//           </div>

//           {/* Section 4 */}
//           <div className="space-y-6 scroll-mt-28">
//             <h3 className="text-black text-[18px] font-semibold">
//               4. YOUR ACCOUNT - RESTRICTING ACCESS
//             </h3>
//             <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
//               <p>
//                 <span className="font-semibold text-black mr-3">4.1</span>
//                 We may at any time suspend your access to any or all parts of
//                 your accounts <br /> or any or all services available to you for
//                 any reason including but not limited <br /> to the following:{" "}
//                 <br />
//                 a. Suspicion of fraud or crime <br />
//                 b. Compliance with the law <br />
//                 c. Suspicion that the security of your account has been
//                 compromised <br />
//                 d. We are of the opinion that you may be unable to meet your
//                 obligations to <br />
//                 repay a loan you owe to us.
//               </p>
//               <p>
//                 <span className="font-semibold text-black mr-3">4.2</span>
//                 In any case, we shall inform you prior to or immediately after
//                 restricting your account and provide you with the reason we took
//                 the decision..
//               </p>
//               <p>
//                 <span className="font-semibold text-black mr-3">4.3</span>
//                 Where your account has not been used for a period of time we may
//                 restrict <br />
//                 your account but only to protect your account and always with
//                 notice. <br /> Restriction for non-usage would happen if your
//                 account is inactive: <br />
//                 a. 12-months if a current account <br />
//                 b. 2 years if a savings account
//               </p>
//             </div>
//           </div>

//           {/* Section 5 */}
//           <div className="space-y-6 scroll-mt-28">
//             <h3 className="text-black text-[18px] font-semibold">
//               ACCOUNT INFORMATION - UPDATES, STATEMENTS AND TRANSACTION
//               INFORMATION
//             </h3>
//             <div className="space-y-5 text-[15px] leading-6 text-gray-600 ml-12">
//               <p>
//                 <span className="font-semibold text-black mr-3">5.1</span>
//                 You have the right to know what is happening with your account
//                 and we <br /> would always keep you updated. You shall always
//                 receive updates on <br /> transactions by text message and by
//                 email by default. Should you choose to <br /> opt out of text
//                 message updates, then you must sign the SMS Deactivation <br />{" "}
//                 Indemnity Form.
//               </p>
//               <p>
//                 <span className="font-semibold text-black mr-3">5.2</span>
//                 We shall also send you a monthly Statement of Account at the end
//                 of every month via email. You shall let us know if you notice a
//                 discrepancy in the statement and the actual transactions that
//                 occurred in the month, or if there is any unusual or incorrect
//                 payments on your account.
//               </p>
//               <p>
//                 <span className="font-semibold text-black mr-3">5.3</span>
//                 You can also generate a Statement of Account for yourself
//                 through our online and mobile applications. If you ask for your
//                 statement on paper, we shall make provisions for you, however,
//                 this might come with a service charge.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Privacy;
