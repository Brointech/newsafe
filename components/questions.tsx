"use client";

import { Accordion } from "@heroui/react";
import { useState } from "react";

const items = [
  {
    content:
      "Yes, we have a microfinance banking license from the Central Bank of Nigeria. Our registration number is RC 1157596.",

    title: "Is Safe Haven a registered bank?",
  },
  {
    content:
      "Ease of banking. Everything is done from the comfort of your home. Safe Haven runs entirely on your phone or browser (with an internet connection) and we'll deliver your debit card to any address in Nigeria.",

    title: "What make Safe Haven unique?",
  },
  {
    content: "We charge N1,000 for debit cards and N4 per SMS.",

    title: "What fees does Safe Haven charge?",
  },
  {
    content:
      "Shipping costs vary based on your locWe make money by using collective deposits to make investments and issue credit. We also make money from commission on airtime purchases and from service fees sellers pay us when people like you shop with your Safe Haven Card.ation and the size of your order. We offer free shipping for orders over $50.",

    title: "How does Safe Haven make money?",
  },
  {
    content:
      "We'll deliver your Safe Haven Card to you anywhere in Nigeria. Learn more about cards here.",

    title: "Since you don't have branches, how will i get my card?",
  },
  {
    content:
      "The easiest way to reach us is to tap More on the Safe Haven app then tap Chat With Us. We are available 24/7. You can also send an email to hello@safehavenmfb.com or call 08145064478.",

    title: "What should i do if i need help?",
  },
];

export const Questions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Accordion className="w-full lg:px-32 px-6 sm:px-16">
      <h1 className="mt-20 font-bold text-[34px]">
        Frequently Asked Questions
      </h1>
      {items.map((item, index) => (
        <Accordion.Item key={index}>
          <Accordion.Heading className="">
            <Accordion.Trigger
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex items-center justify-between py-5"
            >
              {/* {item.icon ? (
                <span className="mr-3 size-4 shrink-0 text-muted">
                  {item.icon}
                </span>
              ) : null} */}
              <span
                className={`text-[16px] ${
                  openIndex === index ? "font-bold" : "font-normal"
                }`}
              >
                {item.title}
              </span>
              <Accordion.Indicator></Accordion.Indicator>
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body className="text-[16px]">
              <div className="flex items-center justify-center gap-2">
                {/* Blue line */}
                <div className="w-14 h-px bg-blue-600 shrink-0"></div>
                {/* Content */}
                <div>
                  <p className="text-blue-600 text-[16px]">Answer</p>
                  <p className="text-[16px] leading-8 text-gray-700">
                    {item.content}
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>

    // <Accordion className="w-full mt-10 max-w-lg">
    //   {items.map((item, index) => (
    //     <Accordion.Item key={index}>
    //       <Accordion.Heading>
    //         <Accordion.Trigger>
    //           {item.icon ? (
    //             <span className="mr-3 size-4 shrink-0 text-muted">
    //               {item.icon}
    //             </span>
    //           ) : null}
    //           {item.title}
    //           <Accordion.Indicator>
    //             <FaChevronDown />
    //           </Accordion.Indicator>
    //         </Accordion.Trigger>
    //       </Accordion.Heading>
    //       <Accordion.Panel>
    //         <Accordion.Body>{item.content}</Accordion.Body>
    //       </Accordion.Panel>
    //     </Accordion.Item>
    //   ))}
    // </Accordion>
  );
};
