import Image from "next/image";
import { Navbar } from "./navbar";

import { Herosection } from "./herosection";
// import Ourservices from "./ourservices";
import { Services } from "./services";
import { Getstarted } from "./getstarted";
import { Savings } from "./savings";
import { Banking } from "./banking";
import { Learnmore } from "./learnmore";
import { Partners } from "./partners";
import { Download } from "./download";
import { Questions } from "./questions";
import { Noneed } from "./noneed";
import { Footer } from "./footer";

import { Box, ChevronDown } from "lucide-react";
// import { Accordion } from "@heroui/react/accordion";
import { Accordion, AccordionItem } from "@heroui/react";
import {
  FaShoppingBag,
  FaReceipt,
  FaCreditCard,
  FaBox,
  FaGlobe,
  FaRedoAlt,
  FaChevronDown,
} from "react-icons/fa";
import { Button } from "@heroui/react";
// import Nnavbar from "./nnavbar";

export default function Home() {
  const items = [
    {
      content:
        "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
      icon: <FaShoppingBag />,
      title: "How do I place an order?",
    },
    {
      content:
        "Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",
      icon: <FaReceipt />,
      title: "Can I modify or cancel my order?",
    },
    {
      content:
        "We accept all major credit cards, including Visa, Mastercard, and American Express.",
      icon: <FaCreditCard />,
      title: "What payment methods do you accept?",
    },
    {
      content:
        "Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.",
      icon: <FaBox />,
      title: "How much does shipping cost?",
    },
    {
      content:
        "Yes, we ship to most countries. Please check our shipping rates and policies for more information.",
      icon: <FaGlobe />,
      title: "Do you ship internationally?",
    },
    {
      content:
        "If you're not satisfied with your purchase, you can request a refund within 30 days of purchase. Please contact our customer support team for assistance.",
      icon: <FaRedoAlt />,
      title: "How do I request ssa refund?",
    },
  ];
  return (
    <section>
      <Navbar />
      {/* <Nnavbar /> */}
      <Herosection />
      {/* <Ourservices /> */}
      <Services />
      <Getstarted />
      <Savings />
      <Banking />
      <Learnmore />
      <Partners />
      <Download />
      {/* <div>
        <Accordion className="w-full">
          {items.map((item, index) => (
            <Accordion.Item key={index}>
              <Accordion.Heading>
                <Accordion.Trigger>
                  {item.icon ? (
                    <span className="mr-3 size-4 shrink-0 text-muted">
                      {item.icon}
                    </span>
                  ) : null}
                  {item.title}
                  <Accordion.Indicator>
                    <ChevronDown />
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>{item.content}</Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div> */}
      <Questions />
      <Noneed />
      <Footer />
    </section>
  );
}
