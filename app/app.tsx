"use client";

import { Accordion, AccordionItem } from "@heroui/react";

export const App = () => {
  return (
    <div className="p-10">
      <Accordion>
        <AccordionItem key="1" title="Click me">
          It works 🎉
        </AccordionItem>
      </Accordion>
    </div>
  );
};
