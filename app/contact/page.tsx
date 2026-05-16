"use client";

import { Questions } from "@/components/questions";

const Contact = () => {
  return (
    <section className="flex flex-col items-center gap-10 py-16 mt-10">
      <div className="px-18 flex flex-col gap-4 mt-18">
        <h1 className="font-extrabold text-center text-[30px] lg:text-[50px]">
          Contact Us
        </h1>
        <p className="text-center text-gray-500 text-[17px] lg:[22px]">
          Talk to us today, We'd love to hear from you.
        </p>
        <img src="/contact.svg" alt="" />
        <div className="flex justify-center lg:items-center mt-10">
          <button className="bg-[#034EA2] w-32 h-14 rounded-[7px] text-white font-semibold text-[12px] lg:text-[16px] transform hover:scale-105 transition-all duration-100 cursor-pointer">
            Send a Mail
          </button>
        </div>
      </div>
    </section>
  );
};

<Questions />;

export default Contact;
